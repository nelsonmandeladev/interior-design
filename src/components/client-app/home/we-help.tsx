import { EachRenderer } from "@/components";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function WeHelpSection() {
    return (
        <div className="p-20 mt-10 grid grid-cols-12 gap-5 relative before:content-[''] before:absolute before:w-56 before:h-56 before:bg-[url('/assets/decorations/dots-green.svg')] before:z-0 before:bg-no-repeat before:left-5">
            <div className="col-span-7 relative grid grid-cols-3">
                <div className="col-span-2 aspect-auto">
                    <Image
                        src={"/assets/images/img-grid-1.jpg"}
                        alt="Untree.co"
                        width={500}
                        height={500}
                        className="rounded-lg"
                    />
                </div>
                <div className="col-span-1 flex flex-col gap-5 relative">
                    <Image
                        src={"/assets/images/img-grid-2.jpg"}
                        alt="Untree.co"
                        width={230}
                        height={230}
                        className="rounded-xl"
                    />
                    <div className="h-auto w-[400px] relative">
                        <Image
                            src={"/assets/images/img-grid-3.jpg"}
                            alt="Untree.co"
                            width={500}
                            height={600}
                            className="rounded-xl absolute -left-40"
                        />
                    </div>
                </div>
            </div>
            <div className="col-span-5 px-5 flex flex-col justify-start items-start gap-4">
                <div className="flex flex-col gap-5 text-wrap justify-start items-start">
                    <h2 className="text-[32px] leading-[38px] font-medium text-main-black">
                        {"We Help You Make Modern Interior Design"}
                    </h2>
                    <p className="text-[#6a6a6a]">
                        Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada
                    </p>
                </div>
                <ul className="grid grid-cols-10 gap-5">
                    <EachRenderer
                        of={[1, 2, 4, 5]}
                        render={() => (
                            <li className="col-span-5 leading-6 relative before:content-[''] before:absolute before:h-2 before:w-2 before:bg-main-green/20 before:border-solid before:border-2 before:border-main-green before:rounded-full before:left-0 before:top-2 pl-5">
                                Donec vitae odio quis nisl dapibus malesuada
                            </li>
                        )}
                    />
                </ul>
                <Link
                    href={"#"}
                    className="bg-main-black py-3 mt-5 px-10 rounded-full text-white capitalize font-semibold no-underline transition-all duration-300 hover:bg-gray-800"
                >
                    Explore
                </Link>
            </div>
        </div>
    )
}

export { WeHelpSection }