import { client } from "@/sanity/lib/client";
import { EB_Garamond } from "next/font/google";
import { Lora } from "next/font/google";
const ebGaramond = EB_Garamond({ weight: "800", subsets: ["latin"] });
const lora = Lora({ weight: "700", subsets: ["latin"] });

export default async function AboutPage() {
  const query = `*[_type == "about"]{
    _id,
    title,
    description,
    "imageUrl": image.asset->url,
    slug
  }`;

  const aboutData = await client.fetch(query);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen p-8 bg-gradient-to-b from-red-500 to-rose-700">
      {aboutData.map(
        (item: {
          _id: string;
          title: string;
          description: string;
          imageUrl: string;
          slug: string;
        }) => (
          <div
            key={item._id}
            className="max-w-4xl flex flex-col md:flex-row items-center bg-transparent p-6 space-y-6 md:space-y-0 md:space-x-6"
          >
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-32 h-50 md:w-48 md:h-50 rounded-lg object-cover transform-gpu hover:scale-105 transition duration-300 ease-in-out border-4 border-transparent animate-border-gradient"
              style={{
                background: "linear-gradient(90deg, #ff7eb3, #ff758c, #ff6b6b)",
                backgroundSize: "200% 200%",
                animation: "borderGradient 3s ease infinite",
              }}
            />

            <div className="text-center md:text-left">
              <h1 className={`${ebGaramond.className} text-4xl font-bold text-rose-900 mb-2`}>
                {item.title}
              </h1>
              <h2 className={`${lora.className} text-2xl font-bold`}>
                Frontend Developer
              </h2>
              <p className={`${lora.className} text-yellow-600`}>{item.description}</p>
              <div className="flex justify-center md:justify-start space-x-4 mt-4">
                <a href="#" className="text-white hover:text-blue-400">
                  <i className="fab fa-github"></i>
                </a>
                <a href="#" className="text-white hover:text-blue-600">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="#" className="text-white hover:text-pink-400">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
}
