import { BlogPostCard, EachRenderer } from "@/components";
import { BLOG_POST_ITEMS } from "@/constants";
import { BlogPostType } from "@/types";
import Link from "next/link";
import React from "react";

function BlogPosts({ show_all }: { show_all: boolean }) {
    return (
        <div className="p-20 mt-10 flex flex-col justify-start items-start gap-6">
            {!show_all ?
                <div className="flex justify-between items-center w-full">
                    <h2 className="text-[32px] font-semibold text-main-black">
                        Recent Blog
                    </h2>
                    <Link
                        href={"/posts"}
                        className="text-[16px] hover:text-main-black transition-all duration-300"
                    >
                        View all posts
                    </Link>
                </div> : null
            }
            <div className="grid grid-cols-12 gap-16 w-full mt-16">
                <EachRenderer<BlogPostType>
                    of={show_all ? BLOG_POST_ITEMS : BLOG_POST_ITEMS.slice(0, 3)}
                    render={(post) => (
                        <div className="col-span-4">
                            <BlogPostCard
                                post={post}
                            />
                        </div>
                    )}
                />
            </div>
        </div>
    )
}

export { BlogPosts }