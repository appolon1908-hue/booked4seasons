import { chromium } from "playwright";

const browser = await chromium.launch({headless:true});
const sizes = [{name:"desktop",width:1440,height:900},{name:"tablet",width:768,height:1024},{name:"mobile",width:390,height:844}];
for (const size of sizes) {
  const page = await browser.newPage({viewport:size});
  const errors=[];
  page.on("console",msg=>{if(msg.type()==="error")errors.push(msg.text())});
  await page.goto("http://127.0.0.1:3010",{waitUntil:"networkidle"});
  await page.evaluate(async()=>{for(let y=0;y<document.body.scrollHeight;y+=700){window.scrollTo(0,y);await new Promise(resolve=>setTimeout(resolve,40))}window.scrollTo(0,0)});
  await page.waitForTimeout(2500);
  const overflow=await page.evaluate(()=>document.documentElement.scrollWidth>document.documentElement.clientWidth);
  if(overflow||errors.length)throw new Error(`${size.name}: overflow=${overflow} console=${errors.join(" | ")}`);
  if(size.width<900){await page.getByRole("button",{name:/open navigation/i}).click();await page.getByRole("navigation",{name:"Mobile navigation"}).getByRole("link",{name:"Mobile Detailing",exact:true}).waitFor();}
  await page.goto("http://127.0.0.1:3010/services/hvac",{waitUntil:"networkidle"});
  if(await page.evaluate(()=>document.documentElement.scrollWidth>document.documentElement.clientWidth))throw new Error(`${size.name}: service page overflow`);
  await page.goto("http://127.0.0.1:3010/request-service",{waitUntil:"networkidle"});
  if(await page.evaluate(()=>document.documentElement.scrollWidth>document.documentElement.clientWidth))throw new Error(`${size.name}: request page overflow`);
  console.log(`PASS ${size.name} ${size.width}x${size.height}`);
  await page.close();
}
await browser.close();
