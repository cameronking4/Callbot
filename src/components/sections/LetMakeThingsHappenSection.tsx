import React from "react";
import MainButton from "../common/MainButton";

function LetMakeThingsHappenSection() {
  return (
    <section className="bg-accent rounded-[45px] p-[50px] md:p-[60px] relative my-16">
      <div className="md:pr-[22rem]">
        <p className="text-h3Mobile md:text-h3 font-medium">
         Your AI call center for less than minimum wage.
        </p>

        <p className="my-[26px]">
          Sync with realtime Shopify data and business information.
          <br/> Get your Shopify number today & promote within your Shopify site.
        </p>

        <MainButton
          text="Get your Shopify number"
          classes="bg-secondary text-white text-[18px] w-full md:w-[231px] hover:text-black"
        />
      </div>
      <div className="absolute -top-8 right-8 hidden md:block">
        <img
          src="/images/proposal_illustration.png"
          alt="proposal illustration"
        />
      </div>
    </section>
  );
}

export default LetMakeThingsHappenSection;
