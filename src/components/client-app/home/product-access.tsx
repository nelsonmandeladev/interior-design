import { EachRenderer, ProductQuickAccessCard } from "@/components";
import { PRODUCT_MOCK } from "@/constants/product";
import { ProductType } from "@/types";
import React from "react";

function ProductSReadMore() {
    return (
        <div className="px-20 mt-40 grid grid-cols-3">
            <EachRenderer<ProductType>
                of={PRODUCT_MOCK.slice(0, 3)}
                render={(product) => (
                    <div className="col-span-1">
                        <ProductQuickAccessCard
                            product={product}
                        />
                    </div>
                )}
            />
        </div>
    )
}

export { ProductSReadMore }