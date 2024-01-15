import React from 'react';
import Target from './Target';

import { useStore } from '../../store/dashboardStore';

const TargetCard = ({ highilight = false }) => {
    const targets = useStore((state) => state.targets)
    return (
        <div className={`card target-card ${highilight ? 'highilight' : ''}`}>
            <h3 style={{ color: "#000" }}>Target</h3>

            {targets.map((target, index) => (
                <Target
                    key={index}
                    data={target}
                />
            ))}
        </div>
    );
};

export default TargetCard;
