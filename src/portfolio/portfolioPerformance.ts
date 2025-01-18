// create an interface for typescript structure
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
    // Start the summary with an empty string
    let performanceSummary = "";
    // Iterate through all outcomes in the performance summary outcomes
    for (const outcomes of performanceSummaryOutcomes) {
        // check the value (of the outcomes condition) if it is true for the specific percentage
        if (outcomes.condition(percentageChange)) {
            // if the value is true, the performance summary is changed to the outcome string
            performanceSummary = outcomes.outcome;
            // and can break the iteration
            break;
        };
    };

	return {
		initialInvestment,
		currentValue,
		profitOrLoss,
		percentageChange,
		performanceSummary,
	};
};

// Define an interface that represents an asset with properties name and value
export interface Asset {
    name: string;
    value: number;
}

// Function to identify the largest holding in a portfolio
// returns a single asset into the array of Assets
export function identifyLargestHolding(assets: Asset[]): Asset {
    // put the first asset as the largest
    let largestHolding = assets[0]

    // Iterate through the assets to find the largest asset after the first
    for (let i = 1; i < assets.length; i++) {
        // if the current asset in the loop is > the largest found,
        if (assets[i].value > largestHolding.value) {
            // make it the new largest holding
            largestHolding = assets[i];
        };
    };

    // return the largest holding
    return largestHolding;
};


// Function to calculate the asset percentages
// reusing assets interface
// returns an array of results for calculated percentage
export function calculateAssetPercentage(assets: Asset[]): { assetName: string; assetPercentage: number }[] {

    // calculate the sum of all the assets
    const calculatedTotal = assets.reduce((total, asset) => total + asset.value, 0);

    // Iterates through each asset
    // return the calculated percentage for each, keeping the name the same
    return assets.map(currentAsset => ({
        assetName: currentAsset.name,
        // change to parseFloat to return back number instead of string
        // for decimal place to be 2
        assetPercentage: parseFloat(((currentAsset.value / calculatedTotal) * 100).toFixed(2)),
    }));
};

// ADDED FOR DEBUGGER testing
console.log(calculatePortfolioPerformance(10000, 20000));
