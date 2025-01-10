import { client } from "@/sanity/lib/client";
import { EB_Garamond } from "next/font/google";
import { Lora } from "next/font/google";
const ebGaramond = EB_Garamond({ weight: "800", subsets: ["latin"] });
const lora = Lora({ weight: "700", subsets: ["latin"] });

export const revalidate = 60; // ISR: Revalidate data every 60 seconds

// 1. Generate static paths for your blog posts
export async function generateStaticParams() {
  const query = `*[_type == "blog"]{ "slug": slug.current }`;
  const slugs = await client.fetch(query);


  if (!slugs || slugs.length === 0) {
    return []; // Return an empty array if no blogs exist
  }

  return slugs.map((slug: { slug: string }) => ({
    slug: slug.slug,
  }));
}

// 2. Fetch data for the individual blog post
export default async function BlogPage({ params }: { params: { slug: string } }) {
  const query = `*[_type == "blog" && slug.current == $slug][0]{
    title,
    description,
    "imageUrl": image.asset->url
  }`;

  const blogData = await client.fetch(query, { slug: params.slug });

  if (!blogData) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className={`${ebGaramond.className} text-3xl font-bold mb-4 text-yellow-600 hover:text-rose-900`}>{blogData.title}</h1>
      <img
        src={blogData.imageUrl}
        alt={blogData.title}
        width={800}
        height={400}
        className="rounded mb-4"
      />
      <p className={`${lora.className} text-lg text-gray-200`}>{blogData.description}</p>
    </div>
  );
}
