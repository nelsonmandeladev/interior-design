import { EachRenderer, FactItem } from "@/components";
import { FACT_ITEMS } from "@/constants/fact-items";
import { FactItemType } from "@/types";
import Image from "next/image";
import React from "react";

function WhyChooseUs() {
    return (
        <div className="p-20 grid grid-cols-12 mt-28">
            <div className="col-span-6">
                <div className="">
                    <h2 className="text-[32px] leading-[38px] font-medium text-main-black">
                        {"Why Choose Us"}
                    </h2>
                    <p className="text-[#6a6a6a]">
                        Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
                    </p>
                </div>
                <div className="grid grid-cols-10 gap-5 mt-2">
                    <EachRenderer<FactItemType>
                        of={FACT_ITEMS.slice(0, 4)}
                        render={(fact) => (
                            <div className="col-span-5">
                                <FactItem
                                    fact={fact}
                                />
                            </div>
                        )}
                    />
                </div>
            </div>
            <div className="col-span-6">
                <div
                    className="aspect-auto flex justify-end relative before:content-[''] before:absolute before:-top-20 before:left-16 before:w-56 before:h-56 before:bg-[url('/assets/decorations/dots-yellow.svg')] before:z-0 before:bg-no-repeat"
                >
                    <Image
                        src={"/assets/images/why-choose-us-img.jpg"}
                        alt="About us image"
                        width={526}
                        height={602}
                        className="rounded-lg z-10"
                    />
                </div>
            </div>
        </div>
    )
}

export { WhyChooseUs }