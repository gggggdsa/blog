import { getNonFeaturedPosts } from "@/service/posts";
import MultiCarousel from "./MultiCarousel";
import PostCard from "./PostCard";
import Link from "next/link";

export default async function CarouselPosts() {
  const posts = await getNonFeaturedPosts();

  return (
    <section className="my-4">
      <h2 className="text-2xl font-bold my-2">You May Like</h2>
      <Link href="/">
        <MultiCarousel>
          {posts.map((post) => (
            <PostCard key={post.path} post={post} />
          ))}
        </MultiCarousel>
      </Link>
    </section>
  );
}
