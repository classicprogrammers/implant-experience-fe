import React from 'react';
import Episodes from './Episodes';
import { episodesData } from '../data/episodesData';

const EpisodesExample = () => {
    return (
        <div>
            <Episodes episodes={episodesData} />
        </div>
    );
};

export default EpisodesExample;

