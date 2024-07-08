import React from "react";
import ServiceCard from "../cards/ServiceCard";

export default function ServiceSection() {
  const services = [
    {
      titleTop: "Answer General Business",
      titleBottom: "queries",
      bg: "bg-primary",
      titleBg: "bg-white",
      image: "/images/s_2.png",
      darkArrow: true,
      link: "/",
    },
    {
      titleTop: "Provide live Shipping &",
      titleBottom: " Fulfillment info",
      bg: "bg-accent",
      titleBg: "bg-primary",
      image: "/images/s_1.png",
      darkArrow: true,
      link: "/",
    },
    {
      titleTop: "Handle Refunds",
      titleBottom: "Like a PRO",
      bg: "bg-secondary",
      titleBg: "bg-white",
      image: "/images/s_3.png",
      darkArrow: false,
      link: "/",
    },
    
    {
      titleTop: "Answer Order Status",
      titleBottom: "Questions",
      bg: "bg-secondary",
      titleBg: "bg-white",
      image: "/images/s_6.png",
      darkArrow: false,
      link: "/",
    },
    {
      titleTop: "Recieve customer",
      titleBottom: "feedback",
      bg: "bg-primary",
      titleBg: "bg-white",
      image: "/images/s_5.png",
      darkArrow: true,
      link: "/",
    },
    {
      titleTop: "Transfer to human / business contact",
      titleBottom: "number",
      bg: "bg-accent",
      titleBg: "bg-primary",
      image: "/images/s_4.png",
      darkArrow: true,
      link: "/",
    },
  ];
  return (
    <section className="">
      <div className="flex flex-col md:flex-row gap-8 md:gap-[40px] items-center " id="services">
        <div className="px-2 bg-primary inline-block font-medium text-h2 rounded-md">
         Sync your Shopify Data
        </div>
        <div className="flex-col">
        <p className="text-p">
          Setup your Callbot number to save time & money with customer contact requests.
        </p>
        <p className="text-p">
        Using Shopify data, we craft a personal Voice agent to answer queries related to your Shopify store.
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
