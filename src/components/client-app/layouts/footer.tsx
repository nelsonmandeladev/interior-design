import { Button, EachRenderer, Input } from "@/components";
import { FOOTER_LINK_ITEMS } from "@/constants";
import { FooterLinkType, NavItemsType } from "@/types";
import { Facebook, Linkedin, Mail, Send, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function LandingPageFooter() {
    const today = new Date().getFullYear();
    return (
        <div className="flex flex-col gap-10 bg-white px-20 mt-56">
            <div className="grid grid-cols-12 justify-center items-center h-56">
                <div className="col-span-5 grid grid-cols-9 gap-3">
                    <div className="col-span-9 flex items-center gap-4">
                        <Mail /> <span className="text-[18px] font-semibold">Subscribe to Newsletter</span>
                    </div>
                    <div className="col-span-4 w-full">
                        <Input
                            placeholder='Your full name'
                            className='bg-main-green/5 p-4'
                        />
                    </div>
                    <div className="col-span-4 w-full">
                        <Input
                            placeholder='Your email'
                            className='bg-main-green/5 p-4'
                            type="email"
                        />
                    </div>
                    <div className="w-full">
                        <Button className='flex h-full justify-center items-center gap-5 px-10 hover:bg-main-green outline-none ring-0 focus:outline-none focus:right-0'>
                            <Send />
                        </Button>
                    </div>
                </div>
                <div className="col-span-7 flex justify-end w-full bg-black relative">
                    <div className="aspect-auto -translate-y-60 absolute">
                        <Image
                            className=""
                            src={"/assets/images/sofa.png"}
                            alt=""
                            height={329}
                            width={400}
                        />
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-10">
                <div className="col-span-12 flex justify-start">
                    <h2 className="text-[28px] font-semibold text-main-green m-0">Interio <span className="text-[28px] font-bold text-[#899e96] m-">.D</span></h2>
                </div>
                <div className="col-span-4">
                    <p className="">
                        Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant
                    </p>
                    <div className="flex justify-start items-center gap-2 mt-3">
                        <Button
                            size={"icon"}
                            className="bg-main-green/20 text-main-green rounded-full hover:bg-main-green hover:text-white transition-all duration-300 h-12 w-12"
                        >
                            <Facebook />
                        </Button>
                        <Button
                            size={"icon"}
                            className="bg-main-green/20 text-main-green rounded-full hover:bg-main-green hover:text-white transition-all duration-300 h-12 w-12"
                        >
                            <Mail />
                        </Button>
                        <Button
                            size={"icon"}
                            className="bg-main-green/20 text-main-green rounded-full hover:bg-main-green hover:text-white transition-all duration-300 h-12 w-12"
                        >
                            <Linkedin />
                        </Button>
                        <Button
                            size={"icon"}
                            className="bg-main-green/20 text-main-green rounded-full hover:bg-main-green hover:text-white transition-all duration-300 h-12 w-12"
                        >
                            <Twitter />
                        </Button>
                    </div>
                </div>
                {<EachRenderer<FooterLinkType>
                    of={FOOTER_LINK_ITEMS}
                    render={(items) => (
                        <div className="col-span-2">
                            <ul className="">
                                <EachRenderer<NavItemsType>
                                    of={items.items}
                                    render={(link) => (
                                        <li className="">
                                            <Link
                                                className="hover:text-main-green transition-all duration-300 -translate-x-2"
                                                href={link.href}
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    )}
                                />
                            </ul>
                        </div>
                    )}
                />}
            </div>
            <div className="flex justify-between items-center w-full border-t-2 border-gray-200 py-6">
                <div className="">
                    Copyright ©{today}. All Rights Reserved. — Developed with love by <Link className="text-main-yellow" href={"https://nelsonmandeladev.dev/"} target="_blank">nelsonmandeladev.dev</Link> from <Link className="text-green-500" href={"https://untree.co/demos/furni/services.html"} target="_blank">Untree.co</Link> Design
                </div>
                <ul className="flex justify-end items-center gap-5">
                    <li className="hover:text-main-black hover:transition-all hover:duration-500">
                        <Link href={"#"}>Terms & Conditions</Link>
                    </li>
                    <li className="hover:text-main-black hover:transition-all hover:duration-500">
                        <Link href={"#"}>Terms & Conditions</Link>
                    </li>
                </ul>
            </div>
        </div >
    )
}

export { LandingPageFooter }