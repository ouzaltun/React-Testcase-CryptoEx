import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import Coin from "./Coin";

function CoinList() {
  const [coins, setCoins] = useState([]);

  const fetchCoins = async () => {
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Ctether%2Cethereum%2Clitecoin%2Ccardano%2Cdogecoin&vs_currencies=usd&include_24hr_change=true"
    );

    setCoins(response.data);
  };

  useEffect(() => {
    fetchCoins();
  }, []);

  return (
    <div>
      <div className="text-white flex  flex-col gap-3 justify-center items-center font-mono  ">
        <Coin test={coins}></Coin>
      </div>
    </div>
  );
}

export default CoinList;
