import React from "react";
import Image from 'next/image';

interface Card {
  image: string; // Image path as a string
  heading: string;
  description: string;
  color: string; // Background color
  textColor?: string; // Text color (optional)
}

const Card = (props: Card) => {
  return (
    <div
      className={`flex flex-col bg-${props.color} space-y-3 p-3 lg:p-3 xl:p-3 w-[50%] lg:w-[100%]`}
    >
      <div className="flex flex-col">

      <Image
      src={props.image}
      alt="CardImage"
      width={500}  // Replace with the actual width of your image
      height={500} // Replace with the actual height of your image
      className="lg:w-[39%]"  // Tailwind class for responsive width
      style={{ width: "39%" }} // Inline style for non-lg breakpoints
    />

        <h4
          className={`font-bold xl:text-xl`}
          style={{ color: props.textColor || "inherit" }} // Use textColor prop or fallback
        >
          {props.heading}
        </h4>
      </div>
      <p
        className={`text-xs lg:text-sm xl:text-lg xl:w-[89%]`}
        style={{ color: props.textColor || "inherit" }} // Use textColor prop or fallback
      >
        {props.description}
      </p>
    </div>
  );
};

export default Card;
