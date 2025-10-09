import React from "react";
import coremonitoring from "../assets/images/coremonitoring.png";
import corenotification from "../assets/images/corenotification.png";
import coresecure from "../assets/images/coresecure.png";

const CoreServices = ({ services = [] }) => {
    const icons = [coremonitoring, corenotification, coresecure];

    return (
        <section className="bg-[#00ACB2] py-16 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <p className="text-white text-sm font-medium mb-4 uppercase">
                        Trusted By Many
                    </p>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white uppercase">
                        Core Services
                    </h2>
                </div>

                {/* Services Cards */}
                <div className="flex flex-wrap justify-around lg:flex-row sm:flex-col gap-3  mb-[20px]">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-[#FFFFFF26] rounded-xl p-[30px] relative flex-1"
                            style={{
                                boxShadow: '0 4px 20px rgba(26, 156, 149, 0.3), 0 2px 10px rgba(26, 156, 149, 0.2)'
                            }}
                        >
                            {/* Arrow Icon */}
                            <div className="absolute top-4 right-4">
                                <svg
                                    className="w-5 h-5 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M7 17L17 7M17 7H7M17 7V17"
                                    />
                                </svg>
                            </div>

                            {/* Service Icon and Title */}
                            <div className="flex items-start gap-3 mb-4">
                                <img
                                    src={icons[index]}
                                    alt={service.title}
                                    className="w-12 h-12 object-contain flex-shrink-0"
                                />
                                <h3 className="text-lg font-bold text-white leading-tight">
                                    {service.title}
                                </h3>
                            </div>

                            {/* Service Subtitle */}
                            {service.subtitle && (
                                <h4 className="text-base font-bold text-white mb-3">
                                    {service.subtitle}
                                </h4>
                            )}

                            {/* Service Description */}
                            <p className="text-sm text-white leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Call to Action Button */}
                <div className="text-center">
                    <button className="bg-[#003878] text-white text-base font-bold px-8 py-3 rounded-lg uppercase hover:bg-[#002850] transition-colors duration-200">
                        Become a Member
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CoreServices;
