import React from 'react';

const Episodes = ({ episodes = [] }) => {
    return (
        <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#003878] mb-6">
                        Episodes To Learn More
                    </h2>
                    <p className="text-gray-600 text-base sm:text-lg max-w-4xl mx-auto leading-relaxed">
                        Get the latest information on health topics, wellness tips, and advancements in patient care.
                    </p>
                </div>

                {/* Episodes Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {episodes.map((episode, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-lg overflow-hidden"
                        >
                            {/* Episode Image */}
                            <div className="relative">
                                <img
                                    src={episode.image}
                                    alt={episode.title}
                                    className="w-full h-48 object-cover"
                                />
                            </div>

                            {/* Episode Content */}
                            <div className="p-6">
                                {/* Episode Number & Date */}
                                <div className="flex justify-between items-center mb-3">
                                    <span className="text-sm text-gray-500">
                                        Ep: {episode.episodeNumber}
                                    </span>
                                    <span className="text-sm text-gray-500">
                                        {episode.date}
                                    </span>
                                </div>

                                {/* Episode Title */}
                                <h3 className="text-lg sm:text-xl font-bold text-[#003878] mb-3 leading-tight">
                                    {episode.title}
                                </h3>

                                {/* Episode Description */}
                                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 line-clamp-3">
                                    {episode.description}
                                </p>

                                {/* Read More Link */}
                                <a
                                    href={episode.link}
                                    className="text-sm sm:text-base font-medium text-[#00BCD4] hover:text-[#0097A7] transition-colors"
                                >
                                    Read more →
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Episodes;

