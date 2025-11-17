import React from "react";
import AuthHeader from '../../components/auth/AuthHeader'
import AuthFooter from '../../components/auth/AuthFooter'
import '../../App.css'
import './pricing.css'

export default function PricingPage() {
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
            {/* Premium Plan Card */}
            <div className="premium-card">
              {/* Plan Title and Most Popular Badge - Same Line */}
              <div className="plan-title-row">
                <h3 className="plan-title premium">Premium</h3>
                <div className="plan-badge badge-most-popular">Most Popular</div>
              </div>

              {/* Price */}
              <div className="price-section">
                <span className="price-amount premium">$200</span>
                <span className="price-duration premium">/Monthly</span>
              </div>

              {/* Description */}
              <p className="plan-description premium">
                Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam mauris sed ma
              </p>

              {/* Divider */}
              <div className="plan-divider divider-premium"></div>

              {/* Features */}
              <div className="features-container">
                {[
                  'Lorem ipsum dolor sit amet consectetur',
                  'Lorem ipsum dolor sit amet consectetur',
                  'Lorem ipsum dolor sit amet consectetur',
                  'Lorem ipsum dolor sit amet consectetur'
                ].map((feature, index) => (
                  <div key={index} className="feature-item">
                    <div className="feature-icon premium">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="feature-text premium">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Button */}
              <button
                className="plan-button button-premium"
                onMouseEnter={(e) => {
                  e.target.style.opacity = '0.9'
                }}
                onMouseLeave={(e) => {
                  e.target.style.opacity = '1'
                }}
              >
                Get Started
              </button>
            </div>

            {/* Free Plan Card */}
            <div className="free-card">
              {/* Plan Title and Get Pro Badge - Same Line */}
              <div className="plan-title-row">
                <h3 className="plan-title free">Free</h3>
                <div className="plan-badge badge-get-pro">Get Pro</div>
              </div>

              {/* Price */}
              <div className="price-section">
                <span className="price-amount free">$200</span>
                <span className="price-duration free">/Monthly</span>
              </div>

              {/* Description */}
              <p className="plan-description free">
                Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam mauris sed ma
              </p>

              {/* Divider */}
              <div className="plan-divider divider-free"></div>

              {/* Features */}
              <div className="features-container">
                {[
                  'Lorem ipsum dolor sit amet consectetur',
                  'Lorem ipsum dolor sit amet consectetur',
                  'Lorem ipsum dolor sit amet consectetur',
                  'Lorem ipsum dolor sit amet consectetur',
                  'Lorem ipsum dolor sit amet consectetur'
                ].map((feature, index) => (
                  <div key={index} className="feature-item">
                    <div className="feature-icon free">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 3L4.5 8.5L2 6" stroke="#00325C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="feature-text free">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Button */}
              <button
                className="plan-button button-free"
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#008C9E'
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#00ACB2'
                }}
              >
                Choose Plan
              </button>
            </div>
          </div>
        </div>
      </div>
      <AuthFooter />
    </>
  );
}
