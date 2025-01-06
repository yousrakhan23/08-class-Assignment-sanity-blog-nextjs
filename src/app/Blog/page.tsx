import { client } from "@/sanity/lib/client";
import Link from "next/link";
import { EB_Garamond } from "next/font/google";
import { Lora } from "next/font/google";
const ebGaramond = EB_Garamond({ weight: "800", subsets: ["latin"] });
const lora = Lora({ weight: "700", subsets: ["latin"] });

export default async function HomePage() {
  const query = `*[_type == "blog"]{
    _id,
    title,
    description,
    slug,
    "imageUrl": image.asset->url
  }`;

  const blogs = await client.fetch(query);

  return (
    <div className="p-6 md:p-10 lg:p-16">
      <div className="relative inline-block text-center ">
        <h1
          className={`${ebGaramond.className}  -rotate-12 transform scale-y-150 scale-x-125 text-3xl font-bold mb-8 text-rose-900 relative z-10`}
        >
          Brand Logos
        </h1>
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500 rounded-lg -rotate-12 transform -z-10 scale-y-150 scale-x-125 blur-md " />
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {blogs.map((blog: { _id: string; title: string; description: string; slug: { current: string }; imageUrl?: string }) => (
          <li
            key={blog._id}
            className="bg-white border-4 border-yellow-400 shadow-md rounded-lg overflow-hidden"
          >
            <h2 className={`${ebGaramond.className} hover:text-rose-900 cursor-mover hover:scale-105 text-3xl uppercase text-center  text-yellow-600 p-4`}>
              {blog.title}
            </h2>
            <p className={`${lora.className} text-gray-600 p-7 ${ebGaramond.className}`}>{blog.description}</p>
            {blog.imageUrl && (
              <img
                src={blog.imageUrl}
                alt={blog.title}
                
                className="w-full h-auto object-cover"
              />
            )}
            <div className="p-4 text-center">
              <Link href={`/blog/${blog.slug.current}`}>
                <button className={`${ebGaramond.className} bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500 text-black px-4 py-2 rounded hover:bg-gradient-to-r hover:from-pink-500 hover:via-yellow-400 hover:to-red-500 transition`}>
                  Read More
                </button>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
