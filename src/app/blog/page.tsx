import BlogCard from '@/components/Blogcard'
import Bloglist from '@/components/bloglist'
import Header2 from '@/components/Header2'
import React from 'react'

export default function blog() {
  return (
    <div>
      <Header2/>
      <Bloglist/>
      <BlogCard/>
    </div>
  )
} 
