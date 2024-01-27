"use client";

import React from "react";
import { LandingPageHeader } from "..";
import Image from "next/image";
import Link from "next/link";
import { PAGE_HERO_CONTENTS } from "@/constants";
import { usePathname } from "next/navigation";
import { PageHeroType } from "@/types";
import { cn } from "@/lib";


function PageHero() {

    const pathname = usePathname();

    function pageHero(): PageHeroType {
        return PAGE_HERO_CONTENTS.find(hero => hero.page_link === pathname) as PageHeroType
    }

    return (
        <div className={cn("flex flex-col px-20 bg-main-green", pageHero().height ? `h-[${pageHero().height}vh]` : "")}>
            <LandingPageHeader />
            <div className={cn("grid grid-cols-12 justify-between items-center relative h-full", pageHero().decoration ? "before:content-[''] before:absolute before:top-12 before:-right-10 before:bg-[url('/assets/decorations/dots-light.svg')] before:h-56 before:w-56 before:z-0 before:bg-no-repeat" : "pt-32 pb-28")}>
                <div className="col-span-5 flex flex-col gap-5">
                    <h2 className="text-[54px] leading-[65px] font-bold text-wrap text-white">
                        {pageHero().title}
                    </h2>
                    {pageHero().content ?
                        <p className="text-[14px] font-normal text-gray-300">
                            {pageHero().content}
                        </p> : null
                    }
                    {pageHero().has_btn ?
                        <div className="flex justify-start items-center gap-5">
                            <Link
                                href={pageHero()?.first_btn_link ?? ""}
                                className="bg-yellow-500 py-3 px-10 border-solid border-2 border-yellow-500 rounded-full text-main-black capitalize font-semibold no-underline transition-all duration-300 hover:border-yellow-400 hover:bg-yellow-400"
                            >
                                Shop now
                            </Link>

                            <Link
                                href={pageHero()?.last_btn_link ?? ""}
                                className="bg-transparent py-3 px-10 border-solid border-2 border-gray-300 rounded-full text-gray-300 hover:border-white hover:text-white transition-all duration-300 capitalize font-semibold"
                            >
                                Explore
                            </Link>
                        </div> : null
                    }
                </div>
                {pageHero().image ?
                    <div className="col-span-7 aspect-auto z-10 flex w-full justify-end">
                        <Image
                            className="z-10"
                            src={"/assets/images/couch.png"}
                            alt="Green sofa"
                            height={600}
                            width={700}
                        />
                    </div> : null
                }
            </div>
        </div>
    )
}


export { PageHero }