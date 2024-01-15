import React from 'react';
import arrowIcon from '../../assets/img/rightarrow.svg'
import roundTop from '../../assets/img/roundtop.svg'
import roundBottom from '../../assets/img/roundbottom.svg'
import AnimatedCircle from './PercentIcon';

const Target = ({ highilight = false, data }) => {
    return (
        <div className={`card target-card target${highilight ? 'highilight' : ''}`}>
            <div className="left-area-target">
            <div className="icon-and-percent">
                <div className="percent-icon">
                    <AnimatedCircle percentage={data.percent} color={data.color} remainingColor={data.remainingColor}/>
                </div>
                <div className="percent">{data.percent}%</div>
            </div>
            <div className="title-and-detail">
                <div className="title">{data.title}</div>
                <div className="detail">{data.detail}</div>
            </div>
            </div>
           
            <img src={arrowIcon} alt="" id='right-arrow'/>

        </div>
    );
};

export default Target;
