"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Icon({ name, className = "" }: { name: string; className?: string }) {
  const paths: Record<string, React.ReactNode> = {
    arrow: <><path d="M5 12h14M13 6l6 6-6 6" /></>,
    code: <><path d="m8 7-5 5 5 5m8-10 5 5-5 5m-3-13-2 16" /></>,
    phone: <><rect x="6" y="2" width="12" height="20" rx="2" /><path d="M10 18h4" /></>,
    globe: <><circle cx="12" cy="12" r="9" /><ellipse cx="12" cy="12" rx="4" ry="9" /><path d="M3 12h18M5 7h14M5 17h14" /></>,
    cloud: <path d="M6 18a5 5 0 0 1-1-10 7 7 0 0 1 13-1 5.5 5.5 0 0 1 0 11Z" />,
    chip: <><rect x="6" y="6" width="12" height="12" rx="2" /><rect x="9" y="9" width="6" height="6" rx="1" /><path d="M9 3v3m6-3v3M9 18v3m6-3v3M3 9h3m-3 6h3m12-6h3m-3 6h3" /></>,
    shield: <path d="m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6Z" />,
    check: <><path d="M20 11v1a8 8 0 1 1-5-7" /><path d="m8 11 4 4 9-11" /></>,
    bolt: <path d="m13 2-9 12h7l-1 8 10-13h-7Z" />,
    server: <><rect x="4" y="3" width="16" height="7" rx="1" /><rect x="4" y="14" width="16" height="7" rx="1" /><path d="M8 6h.01M8 17h.01" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 6 9 7 9-7" /></>,
    star: <path d="m12 3 3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1Z" />,
    chart: <><path d="M4 3v17h17M8 15V9m5 6V5m5 10v-4" /></>,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M7 3v4m10-4v4M3 11h18" /></>,
  };
  return <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name] || paths.arrow}</svg>;
}

export function Logo() {
  return <Link className="logo" href="/" aria-label="Floreza Technologies home"><svg width="44" height="48" viewBox="0 0 44 48" fill="none" aria-hidden="true"><path d="m22 3 18 10v22L22 45 4 35V13Z" stroke="#72caff" strokeWidth="3" /><path d="m5 14 17 10 17-10M22 24v20M5 34l17-10 17 10" stroke="#bce7ff" strokeWidth="2.5" /><path d="m29 9-17 10 12 7-12 7" stroke="#72caff" strokeWidth="3" /></svg><span>Floreza<small>TECHNOLOGIES</small></span></Link>;
}

const nav = [["Home", "/"], ["About Us", "/about"], ["Our Businesses", "/businesses"], ["Technology & Solutions", "/technology"], ["Careers", "/careers"], ["News", "/news"], ["Contact Us", "/contact"]];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return <header className="header"><div className="container header-inner"><Logo /><nav id="main-navigation" className={open ? "navigation open" : "navigation"} aria-label="Main navigation">{nav.map(([label, href]) => <Link className={pathname === href || (href === "/news" && pathname.startsWith("/news/")) ? "active" : ""} aria-current={pathname === href ? "page" : undefined} key={label} href={href} onClick={() => setOpen(false)}>{label}</Link>)}</nav><Link className="button button-small header-contact" href="/contact">Get in Touch</Link><button className="menu-toggle" aria-label={open ? "Close navigation" : "Open navigation"} aria-controls="main-navigation" aria-expanded={open} onClick={() => setOpen(!open)} onKeyDown={event => { if (event.key === "Escape") setOpen(false); }}><span /><span /><span /></button></div></header>;
}

export function WorldMap({ compact = false }: { compact?: boolean }) {
  return <svg className={compact ? "world-map compact" : "world-map"} viewBox="0 0 900 440" fill="none" role="img" aria-label="Global network across the Americas, Europe, Asia, Africa, and Australia"><defs><pattern id={compact ? "dots-small" : "dots"} width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#c4a252" opacity=".21" /></pattern><radialGradient id={compact ? "halo-small" : "halo"}><stop stopColor="#cfab59" stopOpacity=".7" /><stop offset="1" stopColor="#cfab59" stopOpacity="0" /></radialGradient></defs><g stroke="#9f8446" strokeOpacity=".17" strokeWidth="1.2" fill={`url(#${compact ? "dots-small" : "dots"})`}><path d="m92 115 27-17 48-7 22 15 45 1 39 24 18 32-16 24-29 9-25-9-23-2-18-23-38-11-27-15Z" /><path d="m231 196 25 11 12 29-10 27-16 17-7 39-17 20-12-20-9-48 8-28-11-20Z" /><path d="m377 109 28-9 39 6 16-12 27 12 2 24-25 15-21-3-13 15-21-7-3-18-27-5Z" /><path d="m424 167 40-5 33 23 10 31-13 31-21 26-15 14-24-19-13-38-18-32Z" /><path d="m484 104 41-18 58 10 49-6 52 19 36-7 46 17 42 6 9 26-26 18-39 2-17 16-37-8-16 17-26-16-22 4-24-31-25-5-18-20-42 2Z" /><path d="m622 186 17 8 13 32 26 12 24 19-12 11-25-20-21-3-9-22Z" /><path d="m745 280 32-14 34 13 9 26-19 23-36-2-29-18Z" /></g><g stroke="#c4a252" strokeOpacity=".12"><path d="M180 155Q370-28 450 137T729 149M450 137Q503 172 455 220M450 137Q627 33 790 298M180 155Q227 174 233 248M455 220Q616 156 729 149" strokeDasharray="4 6" /></g>{[[180,155],[233,248],[450,137],[455,220],[550,155],[660,177],[729,149],[790,298]].map(([x,y], i) => <g key={i}><circle cx={x} cy={y} r="18" fill={`url(#${compact ? "halo-small" : "halo"})`} opacity=".35" /><circle cx={x} cy={y} r="3" fill="#bc9850" opacity=".8" /><circle cx={x} cy={y} r="7" stroke="#bc9850" strokeOpacity=".15" /></g>)}</svg>;
}
