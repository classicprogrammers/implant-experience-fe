import React from 'react';

const Episodes = ({ episodes = [] }) => {
    return (
        <section className="bg-gray-100 pt-[40px] pb-[10px] px-[4px] sm:px-[6px] lg:px-[8px]">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-[48px]">
                    <h2 className="episodes-title">
                        Episodes To Learn More
                    </h2>
                    <p className="episodes-description">
                        Get the latest information on health topics, wellness tips, and advancements in patient care.
                    </p>
                </div>

                {/* Episodes Grid - 3-2 Layout */}
                <div className="relative">
                    <div className="grid grid-cols-12 px-[10px]" style={{ gap: '25px' }}>
                        {episodes.map((episode, index) => (
                            <div
                                key={index}
                                className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-4 rounded-[12px] overflow-hidden max-w-[500px] mx-auto"
                            >
                                {/* Episode Image */}
                                <div className="relative">
                                    <img
                                        src={episode.image}
                                        alt={episode.title}
                                        className="w-full h-[318px] object-cover rounded-[46px]"
                                    />
                                </div>

                                {/* Episode Content */}
                                <div className="py-[24px]">
                                    {/* Episode Number & Date */}
                                    <div className="flex gap-8 items-center justify-between mb-[16px]">
                                        <span className="text-lg text-gray-500 font-medium">
                                            Ep: {episode.episodeNumber}
                                        </span>
                                        <span className="text-lg text-gray-500">
                                            {episode.date}
                                        </span>
                                    </div>

                                    {/* Episode Title */}
                                    <h3 className="font-bold text-[#0B1030] text-[26px] mb-[6px] leading-tight lg:min-h-[55px]" >
                                        {episode.title}
                                    </h3>

                                    {/* Episode Description */}
                                    <p className="text-[18px] font-medium text-[#556171] leading-relaxed mb-[16px]" style={{ lineHeight: '1.2rem' }}>
                                        {episode.description}
                                    </p>

                                    {/* Read More Link */}
                                    <a
                                        href={episode.link}
                                        className="text-[16px] font-medium text-[#4753BF] hover:text-[#0024ff] transition-colors"
                                    >
                                        Read more →
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Episodes;

