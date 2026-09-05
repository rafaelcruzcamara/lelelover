import Link from "next/link";
import PostMedia from "./PostMedia";
import Tag from "./Tag";

function formatDate(iso) {
  const [year, month, day] = iso.split("-");
  return `${day}/${month}/${year}`;
}

export default function PostCard({ post, rotate }) {
  return (
    <Link
      href={`/posts/${post.slug}`}
      className={`flex gap-3 bg-chalk text-ink border-[3px] border-ink shadow-hard p-3 mb-5 transition-transform hover:-translate-y-0.5 hover:shadow-hard-magenta ${
        rotate ? "-rotate-1" : "rotate-[0.5deg]"
      }`}
    >
      <PostMedia
        post={post}
        className="w-20 h-20 sm:w-24 sm:h-24 shrink-0 border-2 border-ink"
      />
      <div className="min-w-0">
        <Tag pillar={post.pillar} label={post.pillarLabel} />
        <h3 className="font-display text-base leading-snug mt-2 mb-1 break-words">
          {post.title}
        </h3>
        <div className="font-pixel text-[9px] text-ink/60 mb-1.5">
          {formatDate(post.date)}
        </div>
        <p className="text-sm text-ink/80 line-clamp-2">{post.excerpt}</p>
      </div>
    </Link>
  );
}
