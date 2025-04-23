import { markdownStyles } from '@/styles/markdown';

interface MarkdownContentProps {
  content: string;
}

export default function MarkdownContent({ content }: MarkdownContentProps) {
  return (
    <div
      className={markdownStyles.content}
      dangerouslySetInnerHTML={{ __html: processMarkdownContent(content) }}
    />
  );
}

function processMarkdownContent(content: string): string {
  // HTML 문자열에서 각 태그에 Tailwind 클래스를 추가
  return content
    .replace(/<h1/g, `<h1 class="${markdownStyles.h1}"`)
    .replace(/<h2/g, `<h2 class="${markdownStyles.h2}"`)
    .replace(/<h3/g, `<h3 class="${markdownStyles.h3}"`)
    .replace(/<h4/g, `<h4 class="${markdownStyles.h4}"`)
    .replace(/<p>/g, `<p class="${markdownStyles.p}">`)
    .replace(/<ul>/g, `<ul class="${markdownStyles.ul}">`)
    .replace(/<ol>/g, `<ol class="${markdownStyles.ol}">`)
    .replace(/<li>/g, `<li class="${markdownStyles.li}">`)
    .replace(/<a /g, `<a class="${markdownStyles.a}" `)
    .replace(/<pre>/g, `<pre class="${markdownStyles.pre}">`)
    .replace(/<code>/g, `<code class="${markdownStyles.code}">`)
    .replace(
      /<blockquote>/g,
      `<blockquote class="${markdownStyles.blockquote}">`
    )
    .replace(/<img /g, `<img class="${markdownStyles.img}" `)
    .replace(/<hr>/g, `<hr class="${markdownStyles.hr}">`)
    .replace(/<table>/g, `<table class="${markdownStyles.table}">`)
    .replace(/<th>/g, `<th class="${markdownStyles.th}">`)
    .replace(/<td>/g, `<td class="${markdownStyles.td}">`);
}
