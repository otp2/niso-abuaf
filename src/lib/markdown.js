import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const contentDirectory = path.join(process.cwd(), 'src/content');

export function getMarkdownContent(filename) {
  const fullPath = path.join(contentDirectory, `${filename}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  
  // Use gray-matter to parse the markdown metadata
  const { data, content } = matter(fileContents);
  
  return {
    metadata: data,
    content,
  };
}

export async function markdownToHtml(markdown) {
  const result = await remark()
    .use(html)
    .process(markdown);
  return result.toString();
} 