"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";
import React, { useState } from "react";

const Hotels = () => {
  const [filterbox, setfilterbox] = useState(false);
  return (
    <div className="min-h-screen">
      <div className="mt-12">
        <div className="flex p-3">
          <Input placeholder="Enter Hotel Name/ Restaurant Name" />
          <Button>Search</Button>
        </div>
        {filterbox ? (
          <Filters filterbox={false} setfilterbox={setfilterbox} />
        ) : (
          ""
        )}
        <div className="text-sm flex gap-3 text-gray-500 mt-0 px-6">
          <Button variant="ghost" onClick={() => setfilterbox(true)}>
            Apply filters
          </Button>
          <Button variant="ghost">Location</Button>
          <Button variant="ghost">Booking Date</Button>
        </div>
      </div>
    </div>
  );
};

export default Hotels;

const Filters = ({ filterbox, setfilterbox }) => {
  return (
    <div className="absolute w-full p-6 bg-white shadow-xl h-screen overflow-y-auto">
      {/* Each of these will have their own subfields with multichoice */}
      <div className="cursor-pointer absolute right-6" onClick={() => setfilterbox(false)}>
        <X />
      </div>
      <div>Ratings</div>
      <div>Interests</div>
      <div>Footfall</div>
      <div>Budget</div>
      <div>Nearby</div>
      <div>Discounts</div>
      <div>NewlyOpened</div>
      <div className="absolute bottom-6 flex justify-between gap-6">
        <Button onClick={() => setfilterbox(false)}>Close</Button>
        <Button variant="outline" onClick={() => setfilterbox(false)}>Apply</Button>
      </div>
    </div>
  );
};
