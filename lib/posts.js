import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "content/posts");

export function getAllPosts() {
  const fileNames = fs.readdirSync(postsDirectory).filter((f) => f.endsWith(".md"));

  const posts = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);

    return {
      slug,
      title: data.title,
      date: data.date,
      pillar: data.pillar,
      pillarLabel: data.pillarLabel,
      excerpt: data.excerpt,
      featured: data.featured ?? false,
      image: data.image ?? null,
    };
  });

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostsByPillar(pillar) {
  return getAllPosts().filter((post) => post.pillar === pillar);
}

export function getFeaturedPost() {
  const posts = getAllPosts();
  return posts.find((post) => post.featured) ?? posts[0];
}

export function getAllSlugs() {
  return fs
    .readdirSync(postsDirectory)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export async function getPostBySlug(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    title: data.title,
    date: data.date,
    pillar: data.pillar,
    pillarLabel: data.pillarLabel,
    excerpt: data.excerpt,
    image: data.image ?? null,
    contentHtml,
  };
}
