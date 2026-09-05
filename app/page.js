import { getAllPosts, getFeaturedPost } from "@/lib/posts";
import PostCard from "@/components/PostCard";
import FeaturedCard from "@/components/FeaturedCard";
import PollWidget from "@/components/PollWidget";
import poll from "@/content/poll.json";

export default function HomePage() {
  const featured = getFeaturedPost();
  const rest = getAllPosts().filter((post) => post.slug !== featured.slug);

  return (
    <div>
      <FeaturedCard post={featured} />
      <PollWidget {...poll} />

      {rest.map((post, i) => (
        <PostCard key={post.slug} post={post} rotate={i % 2 === 0} />
      ))}
    </div>
  );
}
