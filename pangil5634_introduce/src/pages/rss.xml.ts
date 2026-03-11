import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const posts = (await getCollection("posts"))
    .filter((post) => !post.data.draft)
    .sort((a, b) => new Date(b.data.publishedAt).getTime() - new Date(a.data.publishedAt).getTime());

  return rss({
    title: "김광일 기술 블로그",
    description: "김광일의 포트폴리오 및 기술 포스팅",
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: new Date(post.data.publishedAt),
      description: post.data.description,
      link: `/posts/${post.slug}/`
    }))
  });
}
