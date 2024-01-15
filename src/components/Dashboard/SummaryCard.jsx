import React, { useState } from 'react';
import arrowIcon from '../../assets/img/arrowright.svg'
const SummaryCard = () => {
    const [active, setActive] = useState('history');

    const handleTabClick = (tab) => {
        setActive(tab);
    };

    return (
        <div className="card summary-card">
            <div className="card-header">
                <div className="tabs">
                    <div
                        className={`tab ${active === 'history' ? 'active-tab' : ''}`}
                        onClick={() => handleTabClick('history')}
                    >
                        History
                    </div>
                    <div
                        className={`tab ${active === 'upcoming' ? 'active-tab' : ''}`}
                        onClick={() => handleTabClick('upcoming')}
                    >
                        Upcoming
                    </div>
                </div>
                <div className="view-more">
                    <div className="text">View More</div>
                    <img src={arrowIcon} alt="" />
                </div>
            </div>
            {active === "history" ? <div className='region history-region'>
                This is history
            </div> : <div className='region upcoming-region'>
                This is upcoming</div>}
        </div>
    );
};

export default SummaryCard;
