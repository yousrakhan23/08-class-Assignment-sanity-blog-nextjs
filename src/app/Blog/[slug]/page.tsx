import React from 'react'
import { client } from '@/sanity/lib/client';

export async function getStaticPaths() {
  const query = `*[_type == "blog"]{ slug }`;
  const blogs = await client.fetch(query);

  const paths = blogs.map((blog: { slug: { current: string } }) => ({
    params: { slug: blog.slug.current },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const query = `*[_type == "blog" && slug.current == $slug][0]{
    title,
    description,
    "imageUrl": image.asset->url
  }`;

  const blog = await client.fetch(query, { slug: params.slug });

  return {
    props: { blog },
  };
}

interface Blog {
  title: string;
  description: string;
  imageUrl?: string;
}

export default function BlogDetail({ blog }: { blog: Blog }) {
  return (
    <div>
      <h1>{blog.title}</h1>
      {blog.imageUrl && <img src={blog.imageUrl} alt={blog.title}/>}
      <p>{blog.description}</p>
    </div>
  );
}
