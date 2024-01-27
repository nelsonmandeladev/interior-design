import { FactItemType } from "@/types";
import Image from "next/image";
import React from "react";
import { Button } from "..";


interface Props {
    fact: FactItemType
}
function FactItem(props: Props) {
    const { fact } = props
    return (
        <div className="py-3">
            <div className="relative before:content-[''] before:absolute before:bg-main-green/20 before:h-9 before:w-9 before:rounded-full before:top-3 before:left-6 before:z-0 ">
                <Image
                    src={fact.icon}
                    alt={fact.title}
                    width={50}
                    height={50}
                    className="z-10"
                />
            </div>
            <h3 className="text-[14px] leading-[24px] font-medium text-main-black">
                {fact.title}
            </h3>
            <p className="text-[#6a6a6a]">
                {fact.content}
            </p>
        </div>
    )
}

export { FactItem }