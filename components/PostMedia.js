import PillarArt from "./PillarArt";

/**
 * Mostra a foto do post (frontmatter `image`) quando existir;
 * cai pra ilustração padrão do pilar quando não tiver foto.
 */
export default function PostMedia({ post, className }) {
  if (post.image) {
    // eslint-disable-next-line @next/next/no-img-element
    return (
      <img
        src={post.image}
        alt={post.title}
        className={`object-cover ${className}`}
      />
    );
  }

  return <PillarArt pillar={post.pillar} className={className} />;
}
