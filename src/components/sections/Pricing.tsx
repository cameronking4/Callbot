"use client";

import React, { useState } from "react";
import WorkingProcessCard from "../cards/WorkingProcessCard";
import { Accordion } from "../ui/accordion";

function Pricing() {

  const [value, setValue] = useState("");
  const [numCalls, setNumCalls] = useState<number | string>("");
  const [avgCallLength, setAvgCallLength] = useState<number | string>("");
  const [monthlyCost, setMonthlyCost] = useState<number | null>(null);

  const handleAccordionChange = (value: string) => {
    setValue(value);
  };

  const calculateCost = () => {
    const totalMinutesPerWeek = Number(numCalls) * Number(avgCallLength);
    const totalMinutesPerMonth = totalMinutesPerWeek * 4; // assuming 4 weeks in a month
    const cost = totalMinutesPerMonth * 0.35;
    setMonthlyCost(cost);
    setValue("monthly-cost"); // expand the accordion with the result
  };

  return (
    <section className="">
      <div className="flex flex-col md:flex-row gap-8 md:gap-[40px] items-center ">
        <div className="px-2 bg-primary inline-block font-medium text-h2 rounded-md">
         Simple Usage-Based Pricing
        </div>
      </div>
      <p className="text-p mt-4">
         We charge an invoice at the end of month with flat-rate of $0.35 / minute + initial $5 fee for toll-free phone
    </p>
      <div className="mt-[40px] max-w-5xl">
        <div className="flex flex-col gap-4">
          <input
            type="number"
            value={numCalls}
            onChange={(e) => setNumCalls(e.target.value)}
            placeholder="Number of calls per week"
            className="p-2 border rounded-md"
          />
          <input
            type="number"
            value={avgCallLength}
            onChange={(e) => setAvgCallLength(e.target.value)}
            placeholder="Average length of calls (minutes)"
            className="p-2 border rounded-md"
          />
          <button
            onClick={calculateCost}
            className="p-2 bg-primary rounded-md"
          >
            Calculate Monthly Cost
          </button>
        </div>
      </div>

      <div className="mt-[40px]">
        <Accordion
          type="single"
          collapsible
          className="w-full"
          onValueChange={handleAccordionChange}
        >
          <div className={`accordion-item ${value === "monthly-cost" ? "expanded" : ""}`}>
            <div className="accordion-header" onClick={() => handleAccordionChange("monthly-cost")}>
              <div className="accordion-label text-xl">Monthly Cost Estimate</div>
            </div>
            {value === "monthly-cost" && (
              <div className="accordion-content">
                {monthlyCost !== null && (
                  <div>
                  <p className="text-xl">Your estimated monthly cost is <span className="font-bold">${monthlyCost.toFixed(2)}</span> </p>
                  <p className="mt-2">Calculation:</p>
                  <ul className="text-lg">
                    <li>Number of calls per week: {numCalls}</li>
                    <li>Average length of calls: {avgCallLength} minutes</li>
                    <li>Total minutes per week: {Number(numCalls) * Number(avgCallLength)}</li>
                    <li>Total minutes per month: {Number(numCalls) * Number(avgCallLength) * 4}</li>
                    <li>Cost per minute: $0.35</li>
                  </ul>
                  <p className="mt-2">Math:</p>
                  <p>Total minutes per month * Cost per minute = {Number(numCalls) * Number(avgCallLength) * 4} * 0.35 = ${monthlyCost.toFixed(2)}</p>
                </div>
                )}
              </div>
            )}
          </div>
        </Accordion>
      </div>
    </section>
  );
}

export default Pricing;
