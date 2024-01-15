import { create } from 'zustand'
import analyticsData from './analyticsData.json'

export const useStore = create((set) => ({
    balanceInsight: [
        /* Initial balance insight data */
        {
            title: "Total Earning",
            amount: "$ 16,500",
            details: "2% Decrease From Target",
        },
        {
            amount: "$ 16,500",
            title: "Invoices",
            details: "2% Decrease From Target",
        },
        {
            amount: "$ 48,670",
            title: "Total Spending",
            details: "6% Increase From Target",
        },
        {
            amount: "$ 74,330",
            title: "Balance",
            details: "6% Increase From Target",
        },
    ],
    cardDetails: [
        /* Initial card details data */
        {
            title: "Chase",
            transaction: "70",
            totalBalance: "$ 74,330",
            logo: "/"
        },
    ],
    /* Global function to add a credit card */
    addCard: () => set((state) => ({
        cardDetails: [...state.cardDetails, {
            title: "New Card",
            transaction: "0",
            totalBalance: "$ 0",
            logo: "/"
        }]
    })),

    targets: [
        /* Initial targets  data */
        {
            title: "Sales of Goods",
            percent: 70,
            color: "#07D3BF",
            remainingColor: "#CAFDFD",
            detail: "1 month later",
        },
        {
            title: "Property Rental",
            percent: 60,
            color: "#DD0BC0",
            remainingColor: "#F4B6EC",
            detail: "2 month later",
        },
        {
            title: "Designing Services",
            percent: 43,
            color: "#037BCB",
            remainingColor: "#B5D9F2",
            detail: "6 month later",
        },
        {
            title: "Service",
            percent: 43,
            color: "#037BCB",
            remainingColor: "#B5D9F2",
            detail: "1 month later",
        },
        {
            title: "Sales of Goods",
            percent: 10,
            color: "#037BCB",
            remainingColor: "#B5D9F2",
            detail: "1 month later",
        },
        {
            title: "Sales of Goods",
            percent: 10,
            color: "#037BCB",
            remainingColor: "#B5D9F2",
            detail: "1 month later",
        },
    ],
   
    allChartData: analyticsData,
    chartFilters: {
        time: "Yearly",
        type: "Spending"
    },
    chartData: analyticsData.Spending.Yearly,

     /* This function gets the filter types from the compnent and filters the data as per analyticsD*/
     filterChart: (type, time) => set((state) => {
        // Use provided filter types or fallback to current state's filters
        const updatedType = type || state.chartFilters.type;
        const updatedTime = time || state.chartFilters.time;
      
        // Get updated chart data based on the selected filters
        const updatedChartData = state.allChartData[updatedType]?.[updatedTime];
      
        // If valid data is retrieved, update chart filters and data; otherwise, keep the current state
        return updatedChartData
          ? { chartFilters: { type: updatedType, time: updatedTime }, chartData: updatedChartData }
          : state;
      }),
      





}))