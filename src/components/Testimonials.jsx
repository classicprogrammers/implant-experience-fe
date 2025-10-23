import React from 'react';

const Testimonials = ({ testimonials = [] }) => {
    return (
        <section className="bg-white py-[16px] px-[4px] sm:px-[6px] lg:px-[8px]">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-[12px]">
                    <p className="text-[#00BCD4] text-sm font-medium mb-[6px]">
                        Testimonials
                    </p>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#003878] leading-tight mb-[6px]">
                        Patient Stories Of Care And Recovery
                    </h2>
                    <p className="text-gray-600 text-base max-w-3xl mx-auto leading-relaxed">
                        Discover inspiring stories of recovery and healing from those we've had the privilege to serve.
                    </p>
                </div>

                {/* Testimonial Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-[10px]" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-[24px] p-[24px] flex flex-col h-full"
                            style={{ border: '1px solid #55617124' }}
                        >
                            {/* Stars */}
                            <div className="flex mb-[16px]">
                                {[...Array(5)].map((_, i) => (
                                    <svg
                                        key={i}
                                        className="w-5 h-5 text-[#003878] fill-current"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>

                            {/* Role/Title */}
                            <h3 className="text-lg font-bold text-[#003878] mb-[16px]">
                                {testimonial.role}
                            </h3>

                            {/* Testimonial Text */}
                            <p className="text-gray-600 text-base leading-relaxed flex-grow mb-[16px]">
                                {testimonial.text}
                            </p>

                            {/* Separator Line */}
                            <div className="border-t border-gray-200 mb-[16px]"></div>

                            {/* Author Information */}
                            <div className="flex items-center">
                                <div className="w-12 h-12 rounded-full overflow-hidden mr-[12px] flex-shrink-0">
                                    <img
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <p className="font-bold text-[#003878] text-base">
                                        {testimonial.name}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
