import { BlogPostType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
    post: BlogPostType
}

function BlogPostCard(props: Props) {
    const { post } = props;
    return (
        <Link
            className="w-full flex flex-col gap-5 no-underline"
            href={"#"}
        >
            <div className="h-[287px] w-full aspect-auto">
                <Image
                    src={post.image}
                    alt={post.title}
                    width={500}
                    height={500}
                    className="rounded-xl hover:opacity-70 transition-all duration-300"
                />
            </div>
            <div className="flex flex-col gap-2.5 text-main-black font-semibold">
                <h4 className="text-[16px]">
                    {post.title}
                </h4>
                <p className="text-sm">
                    <span className="text-gray-500 font-normal">By </span>{post.posted_by} <span className="text-gray-500 font-normal">on </span>{post.posted_at}
                </p>
            </div>
        </Link>
    )
}

export { BlogPostCard }