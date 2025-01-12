import React, { useState, useEffect } from "react";
import { fetchPriceChange } from "../../utils/fetchPriceChange";
import style from "./style.module.scss";

type PriceChangeProps = {
  currency?: string;
  balance: number | null;
};

export const EthereumPriceChange: React.FC<PriceChangeProps> = ({
  currency = "usd",
  balance,
}) => {
  const [priceChange, setPriceChange] = useState<number | null>(null);
  const [ethPrice, setEthPrice] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchPriceChange(
      setLoading,
      setPriceChange,
      setError,
      setEthPrice,
      currency
    );
  }, [currency, balance]);

  const convertedBalance =
    balance !== null && ethPrice !== null ? balance * ethPrice : null;

  const balanceChange =
    convertedBalance !== null && priceChange !== null
      ? (convertedBalance * priceChange) / 100
      : null;

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <div className={style["price-in-usd"]}>
        {convertedBalance !== null
          ? `${convertedBalance.toFixed(2)}`
          : "Balance not available."}
        <div className={style["usd"]}>USD</div>
      </div>
      <div
        className={style["price-change"]}
        style={{
          color: priceChange && priceChange > 0 ? "#67BF6B" : "#f71d1d",
        }}
      >
        {priceChange !== null
          ? `${
              balanceChange !== null ? `${balanceChange.toFixed(2)}` : "N/A"
            } (${priceChange.toFixed(2)}%)`
          : "Data not available."}
      </div>
    </div>
  );
};
