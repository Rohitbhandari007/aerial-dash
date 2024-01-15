import React, { useRef, useEffect, useState } from 'react';
import '../../assets/css/dropdown.css';
import dropdownIcon from '../../assets/img/dropdown.svg';
import { useStore } from '../../store/dashboardStore';

const Dropdown = ({  data, choice_type }) => {
    const [enabled, setEnabled] = useState(false);
    const dropdownRef = useRef(null);
    const dashboardStore = useStore();

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setEnabled(false);
        }
    };


    const handleFilterClick = (value) => {
        const filterType = (choice_type === "time") ? { time: value } : { type: value };
        dashboardStore.filterChart(filterType.type, filterType.time);
    };
    
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);


    return (
        <div ref={dropdownRef} className={`card dropdown-card ${enabled ? 'open' : ''}`} onClick={() => setEnabled((prevEnabled) => !prevEnabled)}>
            <div className="text" >
                {choice_type === "time" ? dashboardStore.chartFilters.time : `Total ${dashboardStore.chartFilters.type}`}
            </div>
            <img src={dropdownIcon} alt="" />

            {enabled && (
                <div className="card dropdown-content">
                    {Object.keys(data).map((value, index) => (
                        <div
                            className='dropdown-item'
                            key={index}
                            onClick={() => handleFilterClick(data[value])}>
                            {choice_type == "time" ? data[value] : `Total ${data[value]}`}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Dropdown;
