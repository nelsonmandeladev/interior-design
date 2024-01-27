import { BlogPosts, TestimonialsSection } from '@/components'
import React from 'react'

export default function page() {
    return (
        <div>
            <BlogPosts show_all={true} />
            <TestimonialsSection />
        </div>
    )
}
