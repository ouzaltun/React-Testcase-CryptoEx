import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import classNames from "classnames";

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
        {Object.keys(coins).map((coin, index) => (
          <div>
            <div
              key={index}
              className={classNames(
                " w-full md:w-[480px] h-20 border border-gray-100 rounded-lg my-3 ",

                {
                  "bg-gradient-to-r from-[#202022] to-[#dc202025]":
                    0 > coins[coin].usd_24h_change,
                },
                {
                  "bg-gradient-to-r from-[#202022] to-[#19ff042f]":
                    0 < coins[coin].usd_24h_change,
                }
              )}
            >
              <div className="flex justify-between items-center h-full">
                <div classNames="w-20 h-20 rounded-lg justify-center items-center text-center align-middle">
                  <img
                    className="object-cover"
                    src={`../assets/images/${coin}.png`}
                  />
                </div>
                <div className="flex justify-center items-center">
                  <div className="text-white text-2xl uppercase">{coin}</div>
                  <span className="text-[#aaa] text-xs font-light pl-[3px] pt-2">
                    /USD
                  </span>
                </div>
                <div className="flex flex-col gap-y-1">
                  <div
                    className={classNames(
                      "text-2xl font-bold text-right mx-4",
                      {
                        "text-[#ff4040]": 0 > coins[coin].usd_24h_change,
                      },
                      { "text-[#30ff20]": 0 < coins[coin].usd_24h_change }
                    )}
                  >
                    ${coins[coin].usd}
                  </div>
                  <div className="text-[#aaa] text-sm text-right mx-4">
                    {coins[coin].usd_24h_change}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CoinList;
