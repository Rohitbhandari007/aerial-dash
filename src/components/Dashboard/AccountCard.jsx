import React from 'react';
import plusIcon from '../../assets/img/plus.svg'
import { useStore } from '../../store/dashboardStore'
import chaseImg from '../../assets/img/chase.png'


const AccountCard = ({ title, highilight = false, cardDetails }) => {

    const addCard = useStore((state) => state.addCard)

    
    return (
        <div className={`card account-card${highilight ? 'highilight' : ''}`}>
            <div className="title">{title}</div>
            {cardDetails.map((card, index) => (
                <div className="account-card-icon" key={index}>
                    <div className="name-and-logo">
                        <div className="card-name">
                            {card.title}
                        </div>
                        <div className="card-logo">
                            <img src={chaseImg} alt="" />
                        </div>
                    </div>
                    <div className="transaction-and-balance">
                        <div className="item">
                            <label className='item-label'>Transaction</label>
                            <p className='item-value'>{card.transaction}</p>
                        </div>
                        <div className="item">
                            <label className='item-label'>Total Balance</label>
                            <p className='item-value'>{card.totalBalance}</p>
                        </div>
                    </div>
                </div>
            ))}

            <div className="add-new-btn" onClick={addCard}>
                <img src={plusIcon} alt="" />
                <p>Add New Card</p>
            </div>

        </div>
    );
};

export default AccountCard;
