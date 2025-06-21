import React, { useState } from 'react';
import './PricingCards.css';

const PricingCards = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: "Starter",
      price: isAnnual ? 29 : 39,
      period: isAnnual ? "year" : "month",
      description: "Perfect for small teams getting started",
      features: [
        "Up to 5 team members",
        "Basic analytics",
        "Email support",
        "10GB storage",
        "Basic integrations"
      ],
      popular: false,
      color: "var(--light-blue)"
    },
    {
      name: "Professional",
      price: isAnnual ? 99 : 129,
      period: isAnnual ? "year" : "month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 25 team members",
        "Advanced analytics",
        "Priority support",
        "100GB storage",
        "Advanced integrations",
        "Custom branding",
        "API access"
      ],
      popular: true,
      color: "var(--primary-blue)"
    },
    {
      name: "Enterprise",
      price: isAnnual ? 299 : 399,
      period: isAnnual ? "year" : "month",
      description: "For large organizations",
      features: [
        "Unlimited team members",
        "Enterprise analytics",
        "24/7 phone support",
        "Unlimited storage",
        "All integrations",
        "Custom branding",
        "API access",
        "Dedicated account manager",
        "SLA guarantee"
      ],
      popular: false,
      color: "var(--dark-blue)"
    }
  ];

  return (
    <section id="pricing" className="section pricing-section">
      <div className="container">
        <h2 className="section-title">Simple, Transparent Pricing</h2>
        <p className="section-subtitle">
          Choose the plan that's right for your business
        </p>
        
        <div className="pricing-toggle">
          <span className={!isAnnual ? 'active' : ''}>Monthly</span>
          <button 
            className={`toggle-switch ${isAnnual ? 'active' : ''}`}
            onClick={() => setIsAnnual(!isAnnual)}
          >
            <span className="toggle-slider"></span>
          </button>
          <span className={isAnnual ? 'active' : ''}>Annual <span className="save-badge">Save 20%</span></span>
        </div>
        
        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`pricing-card ${plan.popular ? 'popular' : ''}`}
              style={{ '--card-color': plan.color }}
            >
              {plan.popular && <div className="popular-badge">Most Popular</div>}
              
              <div className="pricing-header">
                <h3 className="plan-name">{plan.name}</h3>
                <div className="plan-price">
                  <span className="currency">$</span>
                  <span className="amount">{plan.price}</span>
                  <span className="period">/{plan.period}</span>
                </div>
                <p className="plan-description">{plan.description}</p>
              </div>
              
              <div className="pricing-features">
                <ul>
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>
                      <span className="check-icon">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="pricing-action">
                <button className={`btn ${plan.popular ? 'btn-primary' : 'btn-secondary'}`}>
                  {plan.popular ? 'Start Free Trial' : 'Get Started'}
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="pricing-note">
          <p>All plans include a 14-day free trial. No credit card required.</p>
        </div>
      </div>
    </section>
  );
};

export default PricingCards; 