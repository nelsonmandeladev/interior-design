import { EachRenderer, ProductCard } from "@/components";
import { PRODUCT_MOCK } from "@/constants/product";
import { ProductType } from "@/types";
import Link from "next/link";
import React from "react";

function FeaturedProducts() {
    return (
        <div className="grid grid-cols-12 px-20 py-20 mt-10">
            <div className="col-span-3">
                <div className="flex flex-col gap-5 text-wrap justify-start items-start">
                    <h2 className="text-[32px] leading-[38px] font-medium text-main-black">{"Crafted with excellent material."}</h2>
                    <p className="text-[#6a6a6a]">
                        Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
                    </p>
                    <Link
                        href={"#"}
                        className="bg-main-black py-3 px-10 rounded-full text-white capitalize font-semibold no-underline transition-all duration-300 hover:bg-gray-800"
                    >
                        Explore
                    </Link>
                </div>
            </div>
            <div className="col-span-9 grid grid-cols-3 px-10 gap-5">
                <EachRenderer<ProductType>
                    of={PRODUCT_MOCK.slice(0, 3)}
                    render={(product) => (
                        <ProductCard
                            product={product}
                        />
                    )}
                />
            </div>
        </div>
    )
}

export { FeaturedProducts }