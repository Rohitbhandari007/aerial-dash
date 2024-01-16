import React from 'react';
import NavComponent from '../components/Dashboard/NavComponent';
import '../assets/css/dashboard.css'
import MainCard from '../components/Dashboard/MainCards';
import AccountCard from '../components/Dashboard/AccountCard';
import TargetCard from '../components/Dashboard/TargetCard';
import Chart from '../components/Dashboard/Chart';
import Dropdown from '../components/Dashboard/Dropdown';
import { useStore } from '../store/dashboardStore';
import SummaryCard from '../components/Dashboard/SummaryCard';

const Dashboard = () => {

    const timeChoices = {
        Monthly: "Monthly",
        Yearly: "Yearly"
    };

    const balanceInfoChoices = {
        Earning: "Earning",
        Spending: "Spending"
    }

    const cardDetails = useStore((state) => state.cardDetails)
    const balanceInsight = useStore((state) => state.balanceInsight)


    return (
        <div className="dashboard-container">
            <NavComponent />

            <div className="content">
                <div className="left-content">
                    <div className="cards">

                        {balanceInsight.map((card, index) => (
                            <MainCard
                                key={index}
                                amount={card.amount}
                                title={card.title}
                                details={card.details}
                                highilight={card.highilight}
                            />
                        ))}
                    </div>
                    <div className="analytics">
                        <h1>Analytics</h1>
                        <div className="card analytics-card">
                            <div className="dropdowns">
                                <Dropdown choice_type="type" data={balanceInfoChoices} />
                                <Dropdown choice_type="time" data={timeChoices} />
                            </div>
                            <Chart />
                        </div>
                    </div>
                    <div className="history">
                        <h1>Activity Summary</h1>
                        <SummaryCard />
                    </div>

                </div>
                <div className="right-content">

                    <AccountCard
                        title={"My Account Bank"}
                        cardDetails={cardDetails}
                    />
                    <TargetCard />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
