import { getPostsByPillar } from "@/lib/posts";
import PostCard from "@/components/PostCard";

export const metadata = { title: "Dicas · Fã Clube do Lelê" };

export default function DicasPage() {
  const posts = getPostsByPillar("dicas");

  return (
    <div>
      <h2 className="font-display text-lg text-sun mb-5">
        Dicas de matemática
      </h2>
      {posts.map((post, i) => (
        <PostCard key={post.slug} post={post} rotate={i % 2 === 0} />
      ))}
    </div>
  );
}
