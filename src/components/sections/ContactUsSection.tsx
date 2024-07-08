import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "../ui/input";
import { Textarea } from "@/components/ui/textarea";
import MainButton from "../common/MainButton";

function ContactUsSection() {
  return (
    <section className="bg-accent flex justify-between w-full rounded-[45px] relative overflow-hidden">
      <div className="py-[60px] px-8 md:px-[100px] xl:pr-[500px]">
        <div className="flex flex-col md:flex-row gap-8 md:gap-[40px] items-center ">
          <div className="px-2 bg-primary inline-block font-medium text-h2 rounded-md">
            Contact Us
          </div>
          <p className="text-p">
            We use our own tech, give us a call to demo the Voice agent & learn more.
            <br /> Get yours today!
          </p>
        </div>

        <div className="mt-[40px]">
          <h1 className="text-7xl">+1 244 595 6744</h1>
        </div>
        <p className="mt-12">Copyright 2024 Shopify Number | All Rights Reserved</p>
      </div>
      <div className="hidden xl:block absolute top-0 right-[-20rem]">
        <img src="/images/contact_illustration.png" alt="illustration" />
      </div>
    </section>
  );
}

export default ContactUsSection;
