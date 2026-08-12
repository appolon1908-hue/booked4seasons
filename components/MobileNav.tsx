"use client";
import Link from "next/link";
import { useState } from "react";
import { categories, servicesByCategory } from "@/lib/services";

export function MobileNav(){const [open,setOpen]=useState(false);return <div className="mobile-nav"><button className="menu-button" type="button" aria-expanded={open} aria-controls="mobile-menu" onClick={()=>setOpen(!open)}><span className="sr-only">{open?"Close":"Open"} navigation</span><span aria-hidden="true">{open?"×":"☰"}</span></button>{open&&<nav id="mobile-menu" aria-label="Mobile navigation"><div className="mobile-menu-main">{[["How it works","/how-it-works"],["Service areas","/service-areas"],["For professionals","/become-a-pro"],["About","/about"],["Contact","/contact"]].map(([label,href])=><Link key={href} href={href} onClick={()=>setOpen(false)}>{label}</Link>)}</div><p className="eyebrow">Services</p>{categories.map(category=><div className="mobile-menu-group" key={category.name}><strong>{category.name}</strong>{servicesByCategory[category.name].map(service=><Link key={service.slug} href={`/services/${service.slug}`} onClick={()=>setOpen(false)}>{service.name}</Link>)}</div>)}</nav>}</div>}
