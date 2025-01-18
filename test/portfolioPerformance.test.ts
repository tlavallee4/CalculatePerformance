
import { calculateAssetPercentage, calculatePortfolioPerformance } from "../src/portfolio/portfolioPerformance";
import { identifyLargestHolding } from "../src/portfolio/portfolioPerformance";
import { Asset } from "../src/portfolio/portfolioPerformance";


describe("Basic Route Tests", () => {

    describe("Testing for calculatePortfolioPerformance unit tests", () => {
        it("should return a valid significant gain", async () => {
            // Act
            const result = calculatePortfolioPerformance(10000, 20000);

            // Assert
            expect(result).toEqual({
                initialInvestment: 10000,
                currentValue: 20000,
                profitOrLoss: 10000,
                percentageChange: 100,
                performanceSummary: "The portfolio has gained significantly with a profit of 10000.00",
            });
        });

        it("should return a valid moderate gain", async () => {
            // Act
            const result = calculatePortfolioPerformance(10000, 12000);

            // Assert
            expect(result).toEqual({
                initialInvestment: 10000,
                currentValue: 12000,
                profitOrLoss: 2000,
                percentageChange: 20,
                performanceSummary: "The portfolio has gained moderately with a profit of 2000.00",
            });
        });

        it("should return a valid slightly gain", async () => {
            // Act
            const result = calculatePortfolioPerformance(10000, 10100);

            // Assert 
            expect(result).toEqual({
                initialInvestment: 10000,
                currentValue: 10100,
                profitOrLoss: 100,
                percentageChange: 1,
                performanceSummary: "The portfolio has gained slightly with a profit of 100.00",
           
            });
        });

        it("should return a valid no change", async () => {
            // Act
            const result = calculatePortfolioPerformance(10000, 10000);

            // Assert
            expect(result).toEqual({
                initialInvestment: 10000,
                currentValue: 10000,
                profitOrLoss: 0,
                percentageChange: 0,
                performanceSummary: "The portfolio has no change.",
            });
        });

        it("should return a valid lost slightly", async () => {
            // Act
            const result = calculatePortfolioPerformance(10000, 9000);

            // Assert 
            expect(result).toEqual({
                initialInvestment: 10000,
                currentValue: 9000,
                profitOrLoss: -1000,
                percentageChange: -10,
                performanceSummary: "The portfolio has lost slightly with a loss of -1000.00",
            });

        });

        it("should return a valid lost moderately", async () => {
            // Act
            const result = calculatePortfolioPerformance(10000, 8000);

            // Assert 
            expect(result).toEqual({
                initialInvestment: 10000,
                currentValue: 8000,
                profitOrLoss: -2000,
                percentageChange: -20,
                performanceSummary: "The portfolio has lost moderately with a loss of -2000.00",
            });

        });

        it("should return a valid lost significantly", async () => {
            // Act
            const result = calculatePortfolioPerformance(10000, 1000);

            // Assert 
            expect(result).toEqual({
                initialInvestment: 10000,
                currentValue: 1000,
                profitOrLoss: -9000,
                percentageChange: -90,
                performanceSummary: "The portfolio has lost significantly with a loss of -9000.00",
            });

        });
    });

    describe("Testing for identifyLargestHolding unit tests", () => {
        it("should return largest value", () => {
            // Act
            const assets = [
                {name: "house", value: 500000},
                {name: "stocks", value: 5000},
            ];
            const result = identifyLargestHolding(assets)
            
            // Assert
            expect(result).toEqual({name: "house", value: 500000});
        });
    });

    it("should return uneven asset percentages accurately", () => {
        // Act
        const assets: Asset[] = [
            { name: "stocks", value: 500 },
            { name: "bonds", value: 5000 },
        ];

        const result = calculateAssetPercentage(assets);

        // Assert
        expect(result).toEqual([
            { assetName: "stocks", assetPercentage: 9.09 },
            { assetName: "bonds", assetPercentage: 90.91 },
        ]);
    });
});

