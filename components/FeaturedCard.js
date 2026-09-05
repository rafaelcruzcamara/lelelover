import Link from "next/link";
import PostMedia from "./PostMedia";
import Tag from "./Tag";

function formatDate(iso) {
  const [year, month, day] = iso.split("-");
  return `${day}/${month}/${year}`;
}

export default function FeaturedCard({ post }) {
  return (
    <Link
      href={`/posts/${post.slug}`}
      className="block bg-chalk text-ink border-[3px] border-ink shadow-hard mb-7 -rotate-1 transition-transform hover:rotate-0 hover:shadow-hard-cyan"
    >
      <div className="relative border-b-[3px] border-ink">
        <PostMedia post={post} className="w-full h-40 sm:h-48 block" />
        
      </div>
      <div className="p-5">
        <Tag pillar={post.pillar} label={post.pillarLabel} />
        <h2 className="font-display text-xl leading-snug mt-3 mb-1 break-words">
          {post.title}
        </h2>
        <div className="font-pixel text-[9px] text-ink/60 mb-2">
          {formatDate(post.date)}
        </div>
        <p className="text-sm text-ink/80">{post.excerpt}</p>
      </div>
    </Link>
  );
}
