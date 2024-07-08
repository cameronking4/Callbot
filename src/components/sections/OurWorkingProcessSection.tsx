"use client";

import React, { useState } from "react";
import WorkingProcessCard from "../cards/WorkingProcessCard";
import { Accordion } from "../ui/accordion";

function OurWorkingProcessSection() {
  const processes = [
    {
      label: "01",
      title: "Install Callbot from Shopify App Store",
      description:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      label: "02",
      title: "Allow permissions & Generate Phone Number",
      description:
        "02 - During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      label: "03",
      title: "Test & Configure",
      description:
        "03 - During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      label: "04",
      title: "Add Callbot number to your Shopify site",
      description:
        "04 - During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
  ];

  const [value, setValue] = useState("");

  const handleAccordionChange = (value: string) => {
    setValue(value);
  };
  return (
    <section id="howitworks">
      <div className="flex flex-col md:flex-row gap-8 md:gap-[40px] items-center ">
        <div className="px-2 bg-primary inline-block font-medium text-h2 rounded-md">
          How it works
        </div>
        <p className="text-p">
          No Coding necessary. No Prompting necessary. Just Works.
        </p>
      </div>

      <div className="mt-[80px]">
        <Accordion
          type="single"
          collapsible
          className="w-full"
          onValueChange={handleAccordionChange}
        >
          {processes.map((process, index) => (
            <WorkingProcessCard {...process} currentValue={value} key={index} />
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export default OurWorkingProcessSection;
