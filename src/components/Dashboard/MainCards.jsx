import React from 'react';
import arrowIcon from '../../assets/img/arrow.svg'


const MainCard = ({ title, amount, details, highilight=false }) => {
    return (
        <div className={`card${highilight?' highilight':''}`}>
            <div className="title">{title}</div>
            <div className="amount">{amount}</div>
            <div className="details-and-icon">
                <div className="details">{details}</div>
                <img src={arrowIcon} alt="" />
            </div>

        </div>
    );
};

export default MainCard;
