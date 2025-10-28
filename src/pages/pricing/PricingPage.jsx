import React from "react";
import './pricing.css'
import Footer from '../../components/auth/AuthFooter'


export default function PricingPage() {
  const plans = [
    {
      id: 1,
      title: "FREE",
      price: "0$",
      duration: "",
      type: "free-plan",
      featuresLeft: ["Text Holder", "Text Holder", "Text Holder"],
      featuresRight: ["Text Holder", "Text Holder", "Text Holder"],
      buttonText: "Get Started",
      buttonClass: "btn-outline",
    },
    {
      id: 2,
      title: "Starter",
      price: "$4.99",
      duration: "/Month",
      type: "starter-plan",
      featuresLeft: ["Text Holder", "Text Holder", "Text Holder"],
      featuresRight: ["Text Holder", "Text Holder", "Text Holder"],
      buttonText: "Choose Plan",
      buttonClass: "btn-filled",
    },
  ];

  return (
    <>
   

      <div className="pricing-page">
        {/* Header */}
        <div className="pricing-header">
          <h1>Pricing Plans</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla molestie aliquet.<br/>
            Sed mollis nibh ut turpis volutpat laoreet. Aliquam sed tortor felis
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="pricing-cards">
          {plans.map(plan => (
            <div key={plan.id} className={`pricing-card ${plan.type}`}>
              <div className="plan-price">
                <h3>{plan.title}</h3>
                <div className="amount">{plan.price}</div>
                <div className="duration">{plan.duration}</div>
              </div>

              <div className="plan-features">
                {plan.featuresLeft.map((f,i)=> <div key={i}>{f}</div>)}
              </div>
              <div className="plan-features">
                {plan.featuresRight.map((f,i)=> <div key={i}>{f}</div>)}
              </div>

              <button className={plan.buttonClass}>{plan.buttonText}</button>
            </div>
          ))}
        </div>

        
      </div>
      <Footer />
    </>
  );
}
