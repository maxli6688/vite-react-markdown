import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
// import rehypeKatex from 'rehype-katex';
import remarkGfm from 'remark-gfm';
import rehypeMathjax from 'rehype-mathjax';
import 'katex/dist/katex.min.css';

/*
MathJax = {
  tex: {
    inlineMath: [['$', '$'], ['\\(', '\\)']]
  }
};

configures MathJax’s TeX input component to use $...$ and \(...\)


const options = {
  tex: {
    inlineMath: [
      ['$', '$'],
      ['\\(', '\\)'],
    ],
    tags: 'ams',
  },
  svg: {
    fontCache: 'global',
  },
};

https://ashki23.github.io/markdown-latex.html
https://ashki23.github.io/markdown-latex.html

https://github.com/remarkjs/remark-math

https://github.com/remarkjs
https://github.com/remarkjs/remark-math

remark-math — remark plugin to support a math syntax in markdown
rehype-katex — rehype plugin to render math in HTML with KaTeX
rehype-mathjax — rehype plugin to render math in HTML with MathJax
https://github.com/remarkjs/remark-rehype

react-katex 可以有效地显示被 $ 符号包围的方程式
https://github.com/fast-reflexes/better-react-mathjax



https://github.com/remarkjs/remark-math/issues/55
https://github.com/remarkjs/react-markdown/issues/785
/**
 * Preprocesses LaTeX content by replacing delimiters and escaping certain characters.
 *
 * @param content The input string containing LaTeX expressions.
 * @returns The processed string with replaced delimiters and escaped characters.
 */
export function preprocessLaTeX1(content: string): string {
  // Step 1: Protect code blocks
  const codeBlocks: string[] = [];
  content = content.replace(/(```[\s\S]*?```|`[^`\n]+`)/g, (match, code) => {
    codeBlocks.push(code);
    return `<<CODE_BLOCK_${codeBlocks.length - 1}>>`;
  });

  // Step 2: Protect existing LaTeX expressions
  const latexExpressions: string[] = [];
  content = content.replace(/(\$\$[\s\S]*?\$\$|\\\[[\s\S]*?\\\]|\\\(.*?\\\))/g, (match) => {
    latexExpressions.push(match);
    return `<<LATEX_${latexExpressions.length - 1}>>`;
  });

  // Step 3: Escape dollar signs that are likely currency indicators
  content = content.replace(/\$(?=\d)/g, '\\$');

  // Step 4: Restore LaTeX expressions
  content = content.replace(/<<LATEX_(\d+)>>/g, (_, index) => latexExpressions[parseInt(index)]);

  // Step 5: Restore code blocks
  content = content.replace(/<<CODE_BLOCK_(\d+)>>/g, (_, index) => codeBlocks[parseInt(index)]);

  // Step 6: Apply additional escaping functions
  // content = escapeBrackets(content);
  // content = escapeMhchem(content);

  return content;
}
export const preprocessLaTeX = (content: string) => {
  // Replace block-level LaTeX delimiters \[ \] with $$ $$
  const blockProcessedContent = content.replace(/\\\[(.*?)\\\]/gs, (_, equation) => `$$${equation}$$`);
  // Replace inline LaTeX delimiters \( \) with $ $
  const inlineProcessedContent = blockProcessedContent.replace(/\\\((.*?)\\\)/gs, (_, equation) => `$${equation}$`);
  return inlineProcessedContent;
};

const MarkdownWithMath = ({ content }: { content: string }) => {
  return (
    <ReactMarkdown
      children={preprocessLaTeX(content)}
      // remarkPlugins={[remarkMath]}
      // rehypePlugins={[rehypeKatex]}
      remarkPlugins={[remarkGfm, remarkMath]}
      // rehypePlugins={[rehypeMathjax]}
      remarkRehypeOptions={
        {
          // passThrough: ['link']
          // allowDangerousHtml: true,
        }
      }
    />
  );
};

export default MarkdownWithMath;
