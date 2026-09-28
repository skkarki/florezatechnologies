import { readFileSync } from "node:fs";
import { join } from "node:path";

type LegalBlock =
  | { kind: "paragraph" | "subheading"; text: string }
  | { kind: "list"; items: string[] };

type LegalSection = { title: string; blocks: LegalBlock[] };

function readLegalDocument(filename: "privacy-policy.txt" | "terms-and-conditions.txt") {
  const source = readFileSync(join(process.cwd(), "content", filename), "utf8");
  const blocks = source.replace(/^\uFEFF/, "").replace(/\r\n?/g, "\n").trim().split(/\n\s*\n/);
  const [title, updated, ...body] = blocks;
  const introduction: LegalBlock[] = [];
  const sections: LegalSection[] = [];

  for (const block of body) {
    const heading = block.match(/^(\d+)\. (.+)$/);
    if (heading) {
      sections.push({ title: block, blocks: [] });
      continue;
    }

    const target = sections.at(-1)?.blocks ?? introduction;
    if (block.startsWith("* ")) {
      target.push({ kind: "list", items: block.split("\n").map(item => item.replace(/^\* /, "")) });
    } else if (block === "Information You Provide" || block === "Information Collected Automatically") {
      target.push({ kind: "subheading", text: block });
    } else {
      target.push({ kind: "paragraph", text: block });
    }
  }

  return { title, updated, introduction, sections };
}

function LegalText({ text }: { text: string }) {
  return <>{text.split(/([\w.+-]+@[\w.-]+\.[A-Za-z]{2,})/g).map((part, index) =>
    /^[\w.+-]+@[\w.-]+\.[A-Za-z]{2,}$/.test(part)
      ? <a key={index} href={`mailto:${part}`}>{part}</a>
      : part
  )}</>;
}

function LegalBlocks({ blocks }: { blocks: LegalBlock[] }) {
  return <>{blocks.map((block, index) => {
    if (block.kind === "list") return <ul key={index}>{block.items.map(item => <li key={item}><LegalText text={item} /></li>)}</ul>;
    if (block.kind === "subheading") return <h3 key={index}>{block.text}</h3>;
    return <p key={index}><LegalText text={block.text} /></p>;
  })}</>;
}

export function LegalDocument({ filename }: { filename: "privacy-policy.txt" | "terms-and-conditions.txt" }) {
  const document = readLegalDocument(filename);
  return <main id="main-content" className="inner-page legal-page">
    <section className="page-hero legal-hero"><div className="hero-grid" /><div className="container"><div className="eyebrow hero-badge"><span />Legal</div><h1>{document.title}</h1><p>{document.updated}</p></div></section>
    <div className="container legal-layout"><nav className="legal-toc" aria-label={`${document.title} sections`}><span className="eyebrow">On this page</span><ol>{document.sections.map((section, index) => <li key={section.title}><a href={`#section-${index + 1}`}>{section.title}</a></li>)}</ol></nav><article className="legal-content"><div className="legal-introduction"><LegalBlocks blocks={document.introduction} /></div>{document.sections.map((section, index) => <section key={section.title} id={`section-${index + 1}`}><h2>{section.title}</h2><LegalBlocks blocks={section.blocks} /></section>)}</article></div>
  </main>;
}
