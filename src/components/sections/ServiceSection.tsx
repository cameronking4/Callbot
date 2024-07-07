import React from "react";
import ServiceCard from "../cards/ServiceCard";

export default function ServiceSection() {
  const services = [
    {
      titleTop: "Pay-per-click",
      titleBottom: "advertising",
      bg: "bg-primary",
      titleBg: "bg-white",
      image: "/images/s_2.png",
      darkArrow: true,
      link: "/",
    },
    {
      titleTop: "Search engine",
      titleBottom: "optimization",
      bg: "bg-accent",
      titleBg: "bg-primary",
      image: "/images/s_1.png",
      darkArrow: true,
      link: "/",
    },
    {
      titleTop: "Social Media",
      titleBottom: "Marketing",
      bg: "bg-secondary",
      titleBg: "bg-white",
      image: "/images/s_3.png",
      darkArrow: false,
      link: "/",
    },
    
    {
      titleTop: "Analytics and",
      titleBottom: "Tracking",
      bg: "bg-secondary",
      titleBg: "bg-white",
      image: "/images/s_6.png",
      darkArrow: false,
      link: "/",
    },
    {
      titleTop: "Content",
      titleBottom: "Creation",
      bg: "bg-primary",
      titleBg: "bg-white",
      image: "/images/s_5.png",
      darkArrow: true,
      link: "/",
    },
    {
      titleTop: "Email",
      titleBottom: "Marketing",
      bg: "bg-accent",
      titleBg: "bg-primary",
      image: "/images/s_4.png",
      darkArrow: true,
      link: "/",
    },
  ];
  return (
    <section className="">
      <div className="flex flex-col md:flex-row gap-8 md:gap-[40px] items-center ">
        <div className="px-2 bg-primary inline-block font-medium text-h2 rounded-md">
          Put your Shopify Data to use
        </div>
        <div className="flex-col">
        <p className="text-p">
          Setup your Callbot number once and sit back while Callbot answers your customers requests.
        </p>
        <p className="text-p">
        Using Shopify data and any information you provide, we craft a personal Voice agent to answer queries related to your Shopify store.
        </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-[40px] mt-[80px]">
        {services.map((service, index) => (
          <ServiceCard {...service} key={index} />
        ))}
      </div>
    </section>
  );
}
