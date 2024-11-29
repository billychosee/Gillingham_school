import React from "react";
import Card from "./Card";
import Image from "next/image";

function WhyChooseUs() {
  return (
    <div className="flex flex-wrap px-5 lg:px-20 w-[100%] pt-12 lg:pt-0">
      {/* Left Column */}
      <div className="lg:w-[55%] flex flex-wrap xl:justify-end">
        <div className="flex flex-wrap lg:flex-col lg:w-[45%]">
          <Card
            color="primaryBlue"
            textColor="#ffffff" // White text
            image="/images/education_icon.svg"
            heading="Quality Education"
            description="We offer a rigorous curriculum with highly qualified teachers focused on academic excellence."
          />
          <Card
            color="faintBlue"
            textColor="#333333" // Dark gray text
            image="/images/Hollister.svg"
            heading="Holistic Development"
            description="Our diverse environment fosters respect and collaboration among all students."
          />
        </div>

        {/* Image Section */}
        <div className="relative w-full h-[600px] lg:w-[55%] xl:w-[53%] lg:h-auto">
          <Image
            src="/images/why_choose_boy.png"
            alt="Student"
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      </div>

      {/* Right Column */}
      <div className="lg:w-[45%] flex flex-wrap order-first lg:order-none">
        <div className="bg-faintGray flex flex-row lg:flex-col w-[100%] p-[12%] lg:p-[5%] xl:p-[8%] items-end">
          <p className="text-4xl lg:text-5xl">Why</p>
          <p className="text-4xl lg:text-5xl font-bold">Choose</p>
          <p className="text-4xl lg:text-5xl font-bold">US?</p>
        </div>

        {/* Card Section */}
        <div className="flex">
          <Card
            color="primaryBlue"
            textColor="#ffffff" // White text
            image="/images/User Groups.svg"
            heading="Inclusive Community"
            description="Our diverse environment fosters respect and collaboration among all students."
          />
          <Card
            color="faintBlue"
            textColor="#000000" // Black text
            image="/images/Online_support.svg"
            heading="Strong Support Systems"
            description="We nurture creativity, critical thinking, and leadership for a balanced growth of every student."
          />
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
