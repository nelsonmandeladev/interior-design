import { FeaturedProducts, ServiceList, TestimonialsSection } from '@/components'
import React from 'react'

export default function page() {
    return (
        <div>
            <ServiceList />
            <FeaturedProducts />
            <TestimonialsSection />
        </div>
    )
}
