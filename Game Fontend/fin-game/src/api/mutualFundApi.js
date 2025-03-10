import mutualFundsData from "../dummydata/mutual_funds.json";

export const searchMutualFunds = (searchTerm) => {
    try {
        if (!searchTerm) {
            return [];
        }

        // Convert search term to lowercase for case-insensitive search
        const filteredFunds = mutualFundsData.filter(fund =>
            fund.schemeName.toLowerCase().includes(searchTerm.toLowerCase())
        ).map(fund => ({ schemeCode: fund.schemeCode , schemeName: fund.schemeName }));

        return filteredFunds;
    } catch (error) {
        console.error("❌ Error searching mutual funds:", error);
        return [];
    }
};


export const getMutualFundDetails = async (schemeCode) => {
    try {
      const response = await fetch(`https://api.mfapi.in/mf/${schemeCode}`);
      if (!response.ok) throw new Error("Failed to fetch fund details");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("❌ Error fetching mutual fund details:", error);
      return null;
    }
  };