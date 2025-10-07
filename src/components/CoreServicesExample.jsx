import React from 'react';
import CoreServices from './CoreServices';
import { coreServicesData } from '../data/coreServicesData';

const CoreServicesExample = () => {
    return (
        <div>
            <CoreServices services={coreServicesData} />
        </div>
    );
};

export default CoreServicesExample;
