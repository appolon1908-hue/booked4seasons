import { chromium } from "playwright";

const browser = await chromium.launch({headless:true});
const sizes = [{name:"mobile-375",width:375,height:812},{name:"mobile-430",width:430,height:932},{name:"tablet-768",width:768,height:1024},{name:"tablet-1024",width:1024,height:900},{name:"desktop-1280",width:1280,height:800},{name:"desktop-1440",width:1440,height:900},{name:"desktop-1920",width:1920,height:1080}];
for (const size of sizes) {
  const page = await browser.newPage({viewport:size});
  const errors=[];
  page.on("console",msg=>{if(msg.type()==="error")errors.push(msg.text())});
  await page.goto("http://127.0.0.1:3010",{waitUntil:"networkidle"});
  await page.evaluate(async()=>{for(let y=0;y<document.body.scrollHeight;y+=700){window.scrollTo(0,y);await new Promise(resolve=>setTimeout(resolve,40))}window.scrollTo(0,0)});
  await page.waitForTimeout(2500);
  const overflow=await page.evaluate(()=>document.documentElement.scrollWidth>document.documentElement.clientWidth);
  if(overflow||errors.length)throw new Error(`${size.name}: overflow=${overflow} console=${errors.join(" | ")}`);
  if(size.width<900){await page.getByRole("button",{name:/open navigation/i}).click();const nav=page.getByRole("navigation",{name:"Mobile navigation"});await nav.getByText("Vehicle",{exact:true}).click();await nav.getByRole("link",{name:"Mobile Detailing",exact:true}).waitFor();}
  else{await page.locator(".mega-nav > summary").click();await page.locator(".mega-menu").getByRole("link",{name:/HVAC/}).first().waitFor();}
  await page.goto("http://127.0.0.1:3010/services/hvac",{waitUntil:"networkidle"});
  if(await page.evaluate(()=>document.documentElement.scrollWidth>document.documentElement.clientWidth))throw new Error(`${size.name}: service page overflow`);
  await page.goto("http://127.0.0.1:3010/request-service",{waitUntil:"networkidle"});
  if(await page.evaluate(()=>document.documentElement.scrollWidth>document.documentElement.clientWidth))throw new Error(`${size.name}: request page overflow`);
  await page.getByLabel("First name").fill("QA");
  await page.locator('select[name="service"]').selectOption("hvac");
  console.log(`PASS ${size.name} ${size.width}x${size.height}`);
  await page.close();
}
await browser.close();
