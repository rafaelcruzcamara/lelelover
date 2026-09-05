import Link from "next/link";
import { getAllSlugs, getPostBySlug } from "@/lib/posts";
import PostMedia from "@/components/PostMedia";
import Tag from "@/components/Tag";
import { IconArrowLeft, IconStar } from "@/components/icons";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const post = await getPostBySlug(params.slug);
  return { title: `${post.title} · Fã Clube do Lelê` };
}

function formatDate(iso) {
  const [year, month, day] = iso.split("-");
  return `${day}/${month}/${year}`;
}

export default async function PostPage({ params }) {
  const post = await getPostBySlug(params.slug);

  return (
    <article>
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 font-pixel text-[9px] uppercase text-chalk/70 hover:text-sun mb-4"
      >
        <IconArrowLeft className="w-3.5 h-3.5" />
        Início
      </Link>

      <div className="bg-chalk text-ink border-[3px] border-ink shadow-hard mb-6">
        <div className="relative border-b-[3px] border-ink">
          <PostMedia post={post} className="w-full h-44 sm:h-56 block" />
        </div>

        <div className="p-5 sm:p-7">
          <Tag pillar={post.pillar} label={post.pillarLabel} />
          <h1 className="font-display text-2xl leading-snug mt-4 mb-2 break-words">
            {post.title}
          </h1>
          <div className="font-pixel text-[9px] text-ink/50 mb-6">
            {formatDate(post.date)}
          </div>

          <div
            className="post-content"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />
        </div>
      </div>

      <div className="flex items-center gap-2 bg-grape-deep border-[3px] border-ink shadow-hard-sm px-4 py-3 rotate-[0.5deg]">
        <IconStar className="w-4 h-4 text-sun shrink-0" />
        <p className="font-pixel text-[8px] uppercase leading-relaxed text-chalk/80">
          Curtiu? Manda esse post pro grupo do fã-clube.
        </p>
      </div>
    </article>
  );
}
