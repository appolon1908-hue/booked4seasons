import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

const root=process.cwd();
const read=(file)=>fs.readFileSync(path.join(root,file),"utf8");
const routes=["terms","privacy","sms-terms","communications-preferences","privacy-choices","cookies","refund-cancellation","service-fulfillment","provider-standards","how-it-works","accessibility","contact"];
for(const route of routes) assert.ok(fs.existsSync(path.join(root,"app",route,"page.tsx")),`missing /${route}`);
const form=read("components/RequestForm.tsx");
for(const field of ["firstName","lastName","email","phone","service","address","city","state","postalCode","preferredDate","preferredTime","message","providerAuthorization","smsConsent","termsAcknowledgement"]) assert.match(form,new RegExp(`name=[\\"']${field}[\\"']`),`missing field ${field}`);
assert.match(form,/type="checkbox" value="yes"/); assert.doesNotMatch(form,/defaultChecked/);
assert.match(form,/not yet a confirmed appointment/i); assert.match(form,/No online payment is required or collected/i);
assert.match(read("components/LeadConnectorChat.tsx"),/data-widget-id="6a7ca95093aa928cd28c82f8"/);
assert.doesNotMatch(read("components/LeadConnectorChat.tsx"),/data-source=/);
const all=fs.readdirSync(path.join(root,"app"),{recursive:true}).filter(x=>String(x).endsWith(".tsx")).map(x=>read(path.join("app",String(x)))).join("\n");
for(const phrase of [/buying leads/i,/selling leads/i,/lead resale/i,/affiliate lead program/i,/payment webhook/i,/credit.card field/i]) assert.doesNotMatch(all,phrase);
console.log(`PASS compliance routes=${routes.length} required_fields=15 widget=6a7ca95093aa928cd28c82f8`);
