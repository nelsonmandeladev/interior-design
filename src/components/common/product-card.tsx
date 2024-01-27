import { ProductType } from "@/types";
import { Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "..";

interface ProductCardProps {
    product: ProductType
}
function ProductCard(props: ProductCardProps) {
    const { product } = props;
    return (
        <Link
            className="w-full flex flex-col relative justify-start items-center gap-5 px-3 before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-[73%] before:w-full before:bg-main-green/15 before:rounded-md before:z-0"
            href={product.id}
        >
            <div className="aspect-auto z-10 -translate-y-8">
                <Image
                    src={product.image}
                    alt={product.name}
                    width={500}
                    height={500}
                />
            </div>
            <div className="flex flex-col justify-center items-center gap-2 z-10">
                <h4 className="text-[16px] leading-[19px] text-main-black font-semibold">
                    {product.name}
                </h4>
                <p className="text-[18px] leading-[28px] text-main-black font-extrabold">
                    ${product.price}
                </p>
            </div>
            <Button
                variant={"black"}
                className="text-white h-8 w-8 rounded-full hover:bg-gray-700 transition-all duration-500 z-10 translate-y-4"
                size={"icon"}
            >
                <Plus />
            </Button>
        </Link>
    )
}

export { ProductCard }