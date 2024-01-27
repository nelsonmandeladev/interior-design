import { ProductType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
    product: ProductType
}

function ProductQuickAccessCard(props: Props) {

    const { product } = props
    return (
        <div className="grid grid-cols-3 gap-4">
            <div className="col-span-1 aspect-auto relative before:content-[''] before:absolute before:h-[80%] before:w-[80%] before:bg-main-green/20 before:rounded-2xl before:bottom-2 before:left-[10%] before:-z-10">
                <Image
                    src={product.image}
                    alt={product.name}
                    width={250}
                    height={250}
                    className="rounded-xl z-30"
                />
            </div>
            <div className="col-span-2 flex flex-col justify-center items-start gap-1">
                <h5 className="text-sm text-main-black font-semibold">
                    {product.name}
                </h5>
                <p className="leading-6">
                    {product.description}
                </p>
                <Link
                    href={"#"}
                    className="text-gray-400 font-medium text-sm hover:text-main-black transition-all duration-500"
                >
                    Read more
                </Link>
            </div>
        </div>
    )
}

export { ProductQuickAccessCard }