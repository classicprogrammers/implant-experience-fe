import React from "react";
import coremonitoring from "../assets/images/coreMonitoring.png";
import corenotification from "../assets/images/coreNotification.png";
import coresecure from "../assets/images/coreSecure.png";

const CoreServices = ({ services = [] }) => {
    const icons = [coremonitoring, corenotification, coresecure];

    return (
        <section className="bg-[#00ACB2] py-[30px] px-[4px] sm:px-[6px] lg:px-[8px]">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-[24px]">
                    <p className="text-white text-sm font-medium mb-4 uppercase">
                        Trusted By Many
                    </p>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white uppercase">
                        Core Services
                    </h2>
                </div>

                {/* Services Cards */}
                <div className="grid grid-cols-12 gap-6 mb-[20px] px-[10px]">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="col-span-12 lg:col-span-4 bg-[#FFFFFF26] rounded-[24px] p-[30px] relative max-w-[500px] mx-auto "
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
                            <div className="flex items-start gap-3 mb-[12px]">
                                <img
                                    src={icons[index]}
                                    alt={service.title}
                                    className="w-12 h-12 object-contain flex-shrink-0"
                                />
                                <h3 className="text-3xl font-bold text-white leading-tight">
                                    {service.title}
                                </h3>
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
                            </div>

                            {/* Service Subtitle */}
                            {service.subtitle && (
                                <h4 className="text-lg font-bold text-white mb-[0px]">
                                    {service.subtitle}
                                </h4>
                            )}

                            {/* Service Description */}
                            <p className="text-md text-white leading-relaxed" style={{ lineHeight: '1.5rem' }}>
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Call to Action Button */}
                <div className="text-center mt-[20px]">
                    <button className="bg-[#003878] text-white font-bold px-[24px] py-[6px] rounded-md uppercase hover:bg-[#002850] transition-colors duration-200">
                        <span className="text-2xl">Become a Member</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CoreServices;
