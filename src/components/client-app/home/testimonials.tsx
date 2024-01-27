import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, EachRenderer } from "@/components";
import { TESTIMONIAL_ITEMS } from "@/constants/testimonial-items";
import { TestimonialType } from "@/types";
import Image from "next/image";
import React from "react";

function TestimonialsSection() {
    return (
        <div className="p-20 mt-28 flex flex-col gap-5 justify-center items-center">
            <h2 className="text-[32px] leading-[38px] font-medium text-main-black">
                Testimonials
            </h2>

            <Carousel
                className="w-full max-w-5xl"
                opts={{
                    loop: true,
                    duration: 25
                }}
            >
                <CarouselContent>
                    <EachRenderer<TestimonialType>
                        of={TESTIMONIAL_ITEMS}
                        render={(testimonial) => (
                            <CarouselItem className="flex flex-col justify-center items-center gap-5 py-9">
                                <p className="italic text-[16px] text-center">
                                    {`"${testimonial.content}"`}
                                </p>
                                <div className="aspect-auto h-28 w-28">
                                    <Image
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        width={250}
                                        height={250}
                                        className="rounded-full"
                                    />
                                </div>
                                <div className="flex flex-col items-center justify-between">
                                    <h6 className="m-0 text-main-black font-semibold">{testimonial.name}</h6>
                                    <p className="m-0">{testimonial.position}</p>
                                </div>
                            </CarouselItem>
                        )}
                    />
                </CarouselContent>
                <CarouselPrevious
                    className="h-16 w-16 border-0 bg-main-green/20 hover:bg-main-green text-main-black hover:text-white transition-all duration-300"
                />
                <CarouselNext
                    className="h-16 w-16 border-0 bg-main-green/20 hover:bg-main-green text-main-black hover:text-white transition-all duration-300"
                />
            </Carousel>
        </div>
    )
}

export { TestimonialsSection }