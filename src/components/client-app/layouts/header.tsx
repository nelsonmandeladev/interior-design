"use client";

import { Button, EachRenderer } from "@/components";
import { LANDING_PAGE_NAV_ITEMS } from "@/constants";
import { cn } from "@/lib";
import { NavItemsType } from "@/types";
import { ShoppingBag, UserRound } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function LandingPageHeader() {
    const pathname = usePathname();
    return (
        <div className="bg-transparent py-5 flex justify-between items-center w-full">
            <div className="flex items-end justify-start">
                <h2 className="text-[28px] font-semibold text-white m-0">
                    Interio
                </h2>
                <h4 className="text-[28px] font-bold text-[#899e96] m-0">
                    .D
                </h4>
            </div>
            <div className="flex justify-end gap-10 items-center">
                <div className="">
                    <ul className="flex justify-start items-center gap-10">
                        <EachRenderer<NavItemsType>
                            of={LANDING_PAGE_NAV_ITEMS}
                            render={(items) => (
                                <li>
                                    <Link
                                        className={cn("text-[#899e96] font-medium relative pb-3 hover:before:content-[''] hover:before:absolute hover:before:h-1 hover:before:w-full hover:before:left-0 hover:before:bg-main-yellow hover:before:bottom-0 before:transition-all before:duration-500 before:ease-out hover:text-white transition-all duration-500 ease-out", items.href === pathname ? "before:content-[''] before:absolute before:h-1 before:w-full before:left-0 before:bg-main-yellow before:bottom-0 text-white" : "center-animate")}
                                        href={items.href}
                                    >
                                        {items.label}
                                    </Link>
                                </li>
                            )}
                        />
                    </ul>
                </div>
                <div className="flex gap-2 items-center">
                    <Button
                        className="hover:bg-transparent text-white hover:text-main-yellow"
                        variant={"ghost"}
                        size={"icon"}
                    >
                        <UserRound />
                    </Button>
                    <Button
                        className="hover:bg-transparent text-white hover:text-main-yellow"
                        variant={"ghost"}
                        size={"icon"}
                    >
                        <ShoppingBag />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export { LandingPageHeader }