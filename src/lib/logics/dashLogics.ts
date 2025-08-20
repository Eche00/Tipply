import { useEffect, useState } from "react";

type Prices = {
  [key: string]: {
    usd: number;
    usd_24h_change: number;
  };
};
export const dashboardLogics = () => {
  const [prices, setPrices] = useState<Prices | null>(null);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const res = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=ethereum,bitcoin,binancecoin,solana&vs_currencies=usd&include_24hr_change=true"
        );
        const data = await res.json();
        setPrices(data);
      } catch (err) {
        console.error("Failed to fetch prices:", err);
      }
    };

    fetchPrices();
    const interval = setInterval(fetchPrices, 1000); // refresh every 60s
    return () => clearInterval(interval);
  }, []);

  const coins = [
    {
      id: "bitcoin",
      name: "Bitcoin (BTC)",
      logo: "https://thumbs.dreamstime.com/b/bitcoin-orange-logo-icon-circle-cryptocurrency-btc-payment-symbol-flat-style-illustration-isolated-white-background-226221967.jpg",
    },
    {
      id: "ethereum",
      name: "Ethereum (ETH)",
      logo: "https://www.cdnlogo.com/logos/e/81/ethereum-eth.svg",
    },

    // {
    //   id: "binancecoin",
    //   name: "BNB",
    //   logo: "https://cryptologos.cc/logos/bnb-bnb-logo.png",
    // },
    {
      id: "solana",
      name: "Solana (SOL)",
      logo: "https://www.creativefabrica.com/wp-content/uploads/2021/06/16/Cryptocurrency-Solana-Logo-Graphics-13460284-1.jpg",
    },
  ];

  return { prices, setPrices, coins }
}