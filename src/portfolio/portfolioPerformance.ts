// create an interface for typescript
interface PortfolioPerformance {
    initialInvestment : number;
    currentValue: number;
    profitOrLoss: number;
    percentageChange: number; 
    performanceSummary: string;
}


export function calculatePortfolioPerformance(initialInvestment: number, currentValue: number): PortfolioPerformance {
// change initial investment and current value to be inputs instead of set numbers
// call the typescript interface

    // you need to subtract the current value from what was initially invested
    // to find if there is an actual gain or loss
    const profitOrLoss = currentValue - initialInvestment;

    // change to current value subtract initial investment
    // this is the amount of profit or loss
    // divide that by initial investment and * 100 to get the percentage
    const percentageChange = (profitOrLoss / initialInvestment) * 100;

    // removing if statements 
    // using condition & outcome instead
    // using boolean (condition is met or not changing the outcome)
    const performanceSummaryOutcomes = [
        {
            condition: function (percentageChange: number): boolean {
                return percentageChange > 20;
            },
            // outcome is based on percentage and shows profit to the 2nd decimal place
            outcome: `The portfolio has gained significantly with a profit of ${profitOrLoss.toFixed(2)}`
        },
        {
            condition: function (percentageChange: number): boolean {
                return percentageChange > 10 && percentageChange <= 20;
            },
            outcome: `The portfolio has gained moderately with a profit of ${profitOrLoss.toFixed(2)}`,
        },
        {
            condition: function (percentageChange: number): boolean {
                return percentageChange > 0 && percentageChange <= 10;
            },
            outcome: `The portfolio has gained slightly with a profit of ${profitOrLoss.toFixed(2)}`,
        },
        {
            condition: function (percentageChange: number): boolean {
                return percentageChange === 0;
            },
            outcome: "The portfolio has no change.",
        },
        {
            condition: function (percentageChange: number): boolean {
                return percentageChange < 0 && percentageChange >= -10;
            },
            outcome: `The portfolio has lost slightly with a loss of ${profitOrLoss.toFixed(2)}`,
        },
        {
            condition:function (percentageChange: number): boolean {
                return percentageChange < -10 && percentageChange >= -20;
            },
            outcome: `The portfolio has lost moderately with a loss of ${profitOrLoss.toFixed(2)}`,
        },
        {
            condition: function (percentageChange: number): boolean {
                return percentageChange < -20;
            },
            outcome: `The portfolio has lost significantly with a loss of ${profitOrLoss.toFixed(2)}`,
        },
    ];

    // need to choose the actual performance summary 
    



	return {
		initialInvestment,
		currentValue,
		profitOrLoss,
		percentageChange,
		performanceSummary,
	};
}