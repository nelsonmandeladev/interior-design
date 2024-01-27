import { EachRenderer } from "@/components";
import { TEAM_MEMBER_ITEMS } from "@/constants";
import { TeamMemberType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function TeamMembers() {
    return (
        <div className="p-20 mt-10 flex flex-col gap-5 justify-center items-center">
            <h2 className="text-[32px] leading-[38px] font-medium text-main-black">
                Team members
            </h2>
            <div className="grid grid-cols-12 gap-5 mt-10">
                <EachRenderer<TeamMemberType>
                    of={TEAM_MEMBER_ITEMS}
                    render={(team) => (
                        <div className="col-span-3 flex flex-col gap-3">
                            <div className="aspect-auto h-[306] w-full">
                                <Image
                                    src={team.image}
                                    alt={team.name}
                                    width={306}
                                    height={306}
                                />
                            </div>
                            <div className="">
                                <Link
                                    href={"#"}
                                    className="font-medium leading-[34px] text-[28px] underline hover:no-underline text-main-black"
                                >
                                    {team.name}
                                </Link>
                                <p className="">
                                    {team.position}
                                </p>
                            </div>
                            <p className="">
                                {team.content}
                            </p>
                            <Link
                                href={"#"}
                                className="font-medium underline hover:no-underline text-main-black"
                            >
                                Read more
                            </Link>
                        </div>
                    )}
                />
            </div>
        </div>
    )
}

export { TeamMembers }