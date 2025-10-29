import React from 'react';

const MarqueeSlider = ({ items = [], logo = null, backgroundColor = "#00ACB2", textColor = "white" }) => {
    return (
        <div className="overflow-hidden py-[20px]" style={{ backgroundColor }}>
            <div className="flex animate-marquee whitespace-nowrap">
                {/* First set of items */}
                {items.map((item, index) => (
                    <div key={`first-${index}`} className="flex items-center gap-[50px] mx-[40px]" style={{ color: textColor }}>
                        <h1 className="text-lg font-bold">{item}</h1>
                        {logo && <img src={logo} alt="" className="w-5 h-5" />}
                    </div>
                ))}

                {/* Duplicate content for seamless loop */}
                {items.map((item, index) => (
                    <div key={`second-${index}`} className="flex items-center gap-[50px] mx-[40px]" style={{ color: textColor }}>
                        <h1 className="text-lg font-semibold">{item}</h1>
                        {logo && <img src={logo} alt="" className="w-5 h-5" />}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MarqueeSlider;

