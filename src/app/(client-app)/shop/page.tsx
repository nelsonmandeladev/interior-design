import { EachRenderer, ProductCard } from '@/components'
import { PRODUCT_MOCK } from '@/constants'
import { ProductType } from '@/types'
import React from 'react'

export default function page() {
    return (
        <div
            className='px-20 mt-16 grid grid-cols-12 gap-y-40 gap-10'
        >
            <EachRenderer<ProductType>
                of={PRODUCT_MOCK}
                render={(product) => (
                    <div className="col-span-3">
                        <ProductCard
                            product={product}
                        />
                    </div>
                )}
            />
        </div>
    )
}
