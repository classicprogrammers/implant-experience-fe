import React, { useState, useEffect } from "react";
import AuthHeader from '../../components/auth/AuthHeader'
import AuthFooter from '../../components/auth/AuthFooter'
import '../../App.css'
import './pricing.css'
import { api } from '../../utils/api'

export default function PricingPage() {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const response = await api.get('/payments/plans');
        setPlans(response.data?.data || response.data || []);
      } catch (error) {
        console.error('Error fetching plans:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPlans();
  }, []);

  if (loading) {
    return (
      <>
        <AuthHeader />
        <div className="auth-page-new pricing-page-container">
          <div className="auth-container-new">
            <div className="pricing-header-section">
              <h1>Pricing Plans</h1>
              <p>Loading...</p>
            </div>
          </div>
        </div>
        <AuthFooter />
      </>
    );
  }

  return (
    <>
      <AuthHeader />
      <div className="auth-page-new pricing-page-container">
        <div className="auth-container-new">
          {/* Header */}
          <div className="pricing-header-section">
            <h1>Pricing Plans</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla molestie aliquet. Sed mollis nibh id turpis volutpat laoreet. Aliquam sed tortor felis
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="pricing-cards-container">
            {plans.map((plan, planIndex) => {
              const isPremium = planIndex === 0 || plan.isPopular || plan.type === 'premium';
              const cardClass = isPremium ? 'premium-card' : 'free-card';
              const titleClass = isPremium ? 'premium' : 'free';
              const badgeClass = isPremium ? 'badge-most-popular' : 'badge-get-pro';
              const badgeText = isPremium ? 'Most Popular' : 'Get Pro';
              const dividerClass = isPremium ? 'divider-premium' : 'divider-free';
              const buttonClass = isPremium ? 'button-premium' : 'button-free';
              const iconStroke = isPremium ? 'white' : '#00325C';

              return (
                <div key={plan.id || planIndex} className={cardClass}>
                  {/* Plan Title and Badge - Same Line */}
                  <div className="plan-title-row">
                    <h3 className={`plan-title ${titleClass}`}>{plan.name || plan.title || 'Plan'}</h3>
                    {plan.badge && (
                      <div className={`plan-badge ${badgeClass}`}>{plan.badge}</div>
                    )}
                    {!plan.badge && (
                      <div className={`plan-badge ${badgeClass}`}>{badgeText}</div>
                    )}
                  </div>

                  {/* Price */}
                  <div className="price-section">
                    <span className={`price-amount ${titleClass}`}>
                      ${plan.price || plan.amount || '0'}
                    </span>
                    <span className={`price-duration ${titleClass}`}>
                      /{plan.duration || plan.billingPeriod || 'Monthly'}
                    </span>
                  </div>

                  {/* Description */}
                  <p className={`plan-description ${titleClass}`}>
                    {plan.description || plan.desc || 'No description available'}
                  </p>

                  {/* Divider */}
                  <div className={`plan-divider ${dividerClass}`}></div>

                  {/* Features */}
                  <div className="features-container">
                    {(plan.features || plan.benefits || []).map((feature, index) => (
                      <div key={index} className="feature-item">
                        <div className={`feature-icon ${titleClass}`}>
                          <svg width="14" height="14" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 3L4.5 8.5L2 6" stroke={iconStroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                        <span className={`feature-text ${titleClass}`}>
                          {typeof feature === 'string' ? feature : feature.name || feature.title || feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Button */}
                  <button
                    className={`plan-button ${buttonClass}`}
                    onMouseEnter={(e) => {
                      if (isPremium) {
                        e.target.style.opacity = '0.9'
                      } else {
                        e.target.style.backgroundColor = '#008C9E'
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (isPremium) {
                        e.target.style.opacity = '1'
                      } else {
                        e.target.style.backgroundColor = '#00ACB2'
                      }
                    }}
                  >
                    {plan.buttonText || (isPremium ? 'Get Started' : 'Choose Plan')}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <AuthFooter />
    </>
  );
}
