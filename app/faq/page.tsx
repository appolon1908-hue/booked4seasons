export const metadata={title:"FAQ",description:"Answers to common questions about requesting service through Booked4Seasons.",alternates:{canonical:"/faq"}};
const faqs=[
  ["What services can I request?","Booked4Seasons currently lists 17 services across Home Comfort, Home & Property, Specialty, and Vehicle categories."],
  ["Do I need an account?","No. The public website is designed around simple guest service requests."],
  ["How do I know whether my area is covered?","Submit your service location and we’ll confirm availability based on the service and local coverage."],
  ["How do scheduling requests work?","Share a preferred date and time when you submit the request. Timing remains a preference until service details are confirmed."],
  ["Does submitting a request guarantee service?","No. Your request helps us review the work, location, and timing. Coverage and next steps must still be confirmed."],
  ["What if I need to cancel or reschedule?","Contact Booked4Seasons as soon as possible. Available changes depend on whether service details have already been confirmed."],
  ["How can I get support?","Use the Contact page and describe the request or question so it can be directed appropriately."],
  ["Can service providers apply to work with Booked4Seasons?","Yes. Use the Become a Pro page to send company, service, and coverage information."],
];
export default function Page(){return <><section className="page-hero"><div className="container narrow"><p className="eyebrow">Frequently asked questions</p><h1>Answers before you book.</h1><p className="lead">Clear information about service requests, coverage, and professional partnerships.</p></div></section><section className="section"><div className="container faq-list">{faqs.map(([q,a])=><details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></section></>}
