import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Testimonials = () => {
  let reviews = [];
  return (
    <div>
      <div className="text-center p-6 font-bold uppercase">Testimonials</div>
      <div className="p-12">
        <Carousel>
          <CarouselContent className="ml-0">
            {reviews.length != 0 ? (
              <CarouselItem className="rounded-xl   h-[300px] bg-red-300  md:basis-1/2 lg:basis-1/2">
                <div className="mt-6 ">
                  <div className="flex px-12 justify-between items-center">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <div>Avatar Name</div>
                    </div>
                    <div>Date</div>
                  </div>
                  <div className="m-6">
                    <p>Review</p>
                  </div>
                </div>
              </CarouselItem>
            ) : (
              <CarouselItem className="h-[300px] bg-gray-300 rounded-xl items-center text-center justify-center flex">
                No Reviews!
              </CarouselItem>
            )}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;
