import React from "react";
import MainButton from "../common/MainButton";

function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row justify-between w-full">
      <div className="md:w-[50%]">
        <p className="text-h1Mobile md:text-h1 text-black font-bold leading-tight">
          Never pick up a<br /> customer support call <br />
          again.
        </p>
        <div className="block md:hidden my-[35px]">
          <img
            src="/images/microphone_illustration.png"
            alt="microphone illustration"
          />
        </div>

        <p className="text-p text-black my-[35px]">
          Sync your merchant Shopify data to answer calls 24/7 with Voice AI
        </p>

        <MainButton
          text="Get your Callbot number"
          classes="bg-secondary text-white text-[18px] w-full md:w-[231px] hover:text-black"
        />
      </div>
      <div className="hidden md:block">
        <img
          src="/images/microphone_illustration.png"
          alt="microphone illustration"
        />
      </div>
    </section>
  );
}

export default HeroSection;
