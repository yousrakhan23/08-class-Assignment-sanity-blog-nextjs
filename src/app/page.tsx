import React from 'react'
import Image from 'next/image'
import { client } from '@/sanity/lib/client'
import Link from 'next/link'

export interface Post {
  title: string;
  description: string;
  slug: string;
  imageUrl: string;
}
export default async function HomePage() {
  const query = ``
}
