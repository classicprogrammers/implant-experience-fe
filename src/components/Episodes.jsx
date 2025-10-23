import React from 'react';

const Episodes = ({ episodes = [] }) => {
    return (
        <section className="bg-gray-100 py-[16px] px-[4px] sm:px-[6px] lg:px-[8px]">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-[48px]">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#003878] mb-[24px]">
                        Episodes To Learn More
                    </h2>
                    <p className="text-gray-600 text-base sm:text-lg max-w-4xl mx-auto leading-relaxed">
                        Get the latest information on health topics, wellness tips, and advancements in patient care.
                    </p>
                </div>

                {/* Episodes Grid - 3-2 Layout */}
                <div className="relative">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-[24px] px-[10px]" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
                        {episodes.map((episode, index) => (
                            <div
                                key={index}
                                className="rounded-[12px] overflow-hidden"
                            >
                                {/* Episode Image */}
                                <div className="relative">
                                    <img
                                        src={episode.image}
                                        alt={episode.title}
                                        className="w-full h-[200px] object-cover rounded-[25px]"
                                    />
                                </div>

                                {/* Episode Content */}
                                <div className="p-[24px]">
                                    {/* Episode Number & Date */}
                                    <div className="flex justify-between items-center mb-[16px]">
                                        <span className="text-sm text-gray-500 font-medium">
                                            Ep: {episode.episodeNumber}
                                        </span>
                                        <span className="text-sm text-gray-500">
                                            {episode.date}
                                        </span>
                                    </div>

                                    {/* Episode Title */}
                                    <h3 className="text-lg font-bold text-[#003878] mb-[12px] leading-tight">
                                        {episode.title}
                                    </h3>

                                    {/* Episode Description */}
                                    <p className="text-sm text-gray-600 leading-relaxed mb-[16px]">
                                        {episode.description}
                                    </p>

                                    {/* Read More Link */}
                                    <a
                                        href={episode.link}
                                        className="text-sm font-medium text-[#00BCD4] hover:text-[#0097A7] transition-colors"
                                    >
                                        Read more →
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Newsletter Prompt - Bottom Right */}
                    <div className="flex justify-end">
                        <p className="text-sm text-gray-500">
                            Want to receive news and updates?
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Episodes;

