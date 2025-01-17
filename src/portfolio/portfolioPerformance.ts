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


	let performanceSummary;
	if (percentageChange > 20) {
		performanceSummary = `The portfolio has gained significantly with a profit of $${profitOrLoss}.`;
	} else {
		performanceSummary = `The portfolio has performed poorly.`;
	}

	return {
		initialInvestment,
		currentValue,
		profitOrLoss,
		percentageChange,
		performanceSummary,
	};
}