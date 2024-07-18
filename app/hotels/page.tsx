"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";
import React, { ChangeEvent, useState } from "react";

const Hotels = () => {
  const [filterbox, setfilterbox] = useState(false);
  const [Location, setLocation] = useState(false);
  return (
    <div className="min-h-screen">
      <div className="mt-12">
        <div className="flex p-3">
          <Input placeholder="Enter Hotel Name/ Restaurant Name" />
          <Button>Search</Button>
        </div>
        {filterbox ? <Filters setfilterbox={setfilterbox} /> : ""}
        {Location ? <Locations setLocation={setLocation} /> : ""}
        <div className="text-sm flex gap-3 text-gray-500 mt-0 px-6">
          <Button variant="ghost" onClick={() => setfilterbox(true)}>
            Apply filters
          </Button>
          <Button variant="ghost" onClick={() => setLocation(true)}>
            Location
          </Button>
          <Button variant="ghost">Booking Date</Button>
        </div>
      </div>
    </div>
  );
};

export default Hotels;

const Locations = ({ setLocation }) => {
  const states_name: string[] = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Lakshadweep",
    "Delhi",
    "Puducherry",
    "Ladakh",
    "Jammu and Kashmir",
  ];
  const [states, setstate] = useState<String[]>([]);

  const handleStateChange = (state: string) => {
    setstate((prev) =>
      prev.includes(state) ? prev.filter((r) => r !== state) : [...prev, state]
    );
  };
  return (
    <div className="absolute bg-white w-full px-6 flex flex-col gap-2">
      <div className="flex gap-10">
        <div>Location</div>
        <div>
          <X
            className="cursor-pointer hover:scale-90"
            onClick={() => setLocation(false)}
          />
        </div>
      </div>
      <div>States</div>
      <div>
        <div className="flex flex-col  gap-2">
          {states_name.map((state, index) => (
            <label key={index} className=" ">
              <input
                type="checkbox"
                value={state}
                checked={states.includes(state)}
                onChange={() => handleStateChange(state)}
                className="mr-1"
              />
              {state}
            </label>
          ))}
        </div>
      </div>
      <div className="gap-6 flex">
        <Button onClick={() => setLocation(false)}>Close</Button>
        <Button
          onClick={() => {
            console.log(states);
            setLocation(false);
          }}
          variant={"outline"}
        >
          Apply
        </Button>
      </div>
    </div>
  );
};

const Filters = ({ setfilterbox }) => {
  const [ratings, setRatings] = useState<number[]>([]);
  const [interests, setInterests] = useState<string[]>([]);
  const [footfall, setFootfall] = useState<string>("");
  const [budget, setBudget] = useState<[number, number]>([0, 100000]);
  const [nearby, setNearby] = useState<string[]>([]);
  const [discounts, setDiscounts] = useState<number>(0);
  const [newlyOpened, setNewlyOpened] = useState<string>("");

  const handleRatingChange = (rating: number) => {
    setRatings((prev) =>
      prev.includes(rating)
        ? prev.filter((r) => r !== rating)
        : [...prev, rating]
    );
  };

  const onApplyClick = async () => {
    const response = await fetch("http://localhost:3000/api/hotels", {
      method: "GET",
    });
    console.log(response);
  };

  const handleInterestChange = (interest: string) => {
    setInterests((prev) =>
      prev.includes(interest)
        ? prev.filter((i) => i !== interest)
        : [...prev, interest]
    );
  };

  const handleFootfallChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFootfall(e.target.value);
  };

  const handleBudgetChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    setBudget([0, value]);
  };

  const handleNearbyChange = (location: string) => {
    setNearby((prev) =>
      prev.includes(location)
        ? prev.filter((l) => l !== location)
        : [...prev, location]
    );
  };

  const handleDiscountChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDiscounts(parseInt(e.target.value, 10));
  };

  const handleNewlyOpenedChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewlyOpened(e.target.value);
  };

  return (
    <div className="absolute w-full p-6 bg-white shadow-xl h-screen overflow-y-auto">
      {/* Each of these will have their own subfields with multichoice */}
      <div
        className="cursor-pointer absolute right-6"
        onClick={() => setfilterbox(false)}
      >
        <X />
      </div>
      <div className="flex flex-col gap-4">
        <div className="">
          <h3 className="text-gray-400 font-semibold">Ratings</h3>
          <div className="flex  gap-2">
            {[1, 2, 3, 4, 5].map((rating) => (
              <label key={rating} className=" ">
                <input
                  type="checkbox"
                  value={rating}
                  checked={ratings.includes(rating)}
                  onChange={() => handleRatingChange(rating)}
                  className="mr-1"
                />
                {rating} Star
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-gray-400">Interests</h3>
          <div className="flex flex-col gap-1">
            {[
              "Romantic",
              "Family-friendly",
              "Luxury",
              "Budget",
              "Eco-friendly",
              "Pet-friendly",
              "Beachside",
              "Mountain view",
              "City center",
            ].map((interest) => (
              <label key={interest} className="flex gap-2">
                <input
                  type="checkbox"
                  value={interest}
                  checked={interests.includes(interest)}
                  onChange={() => handleInterestChange(interest)}
                />
                {interest}
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-gray-400">Footfall</h3>
          <div className="flex gap-2">
            {["Low", "Medium", "High"].map((level) => (
              <label key={level}>
                <input
                  type="radio"
                  name="footfall"
                  value={level}
                  checked={footfall === level}
                  onChange={handleFootfallChange}
                  className="mr-2"
                />
                {level}
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-gray-400">Budget</h3>
          <input
            type="range"
            min="0"
            max="100000"
            value={budget[1]}
            onChange={handleBudgetChange}
          />
          {`$${budget[0]} - $${budget[1]}`}
        </div>

        <div>
          <h3>Nearby</h3>
          <div className="flex flex-col gap-1">
            {[
              "Airport",
              "City center",
              "Beach",
              "Wedding venues",
              "Tourist attractions",
            ].map((location) => (
              <label key={location}>
                <input
                  type="checkbox"
                  value={location}
                  checked={nearby.includes(location)}
                  onChange={() => handleNearbyChange(location)}
                  className="mr-1"
                />
                Near {location}
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3>Discounts</h3>
          <input
            type="range"
            min="0"
            max="100"
            value={discounts}
            onChange={handleDiscountChange}
          />
          {`${discounts}% Discount`}
        </div>

        <div>
          <h3>Newly Opened</h3>
          <div className="flex flex-col gap-1">
            {["1 month", "3 months", "6 months", "1 year"].map((timeframe) => (
              <label key={timeframe}>
                <input
                  type="radio"
                  name="newlyOpened"
                  value={timeframe}
                  checked={newlyOpened === timeframe}
                  onChange={handleNewlyOpenedChange}
                  className="mr-1"
                />
                Last {timeframe}
              </label>
            ))}
          </div>
        </div>
      </div>
      {/* <div>Ratings</div>
      <div>Interests</div>
      <div>Footfall</div>
      <div>Budget</div>
      <div>Nearby</div>
      <div>Discounts</div>
      <div>NewlyOpened</div> */}
      <div className="absolute bottom-6 flex justify-between gap-6">
        <Button onClick={() => setfilterbox(false)}>Close</Button>
        <Button
          onClickCapture={onApplyClick}
          variant="outline"
          onClick={() => setfilterbox(false)}
        >
          Apply
        </Button>
      </div>
    </div>
  );
};
