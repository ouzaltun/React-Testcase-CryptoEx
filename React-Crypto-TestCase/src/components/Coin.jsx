import React from "react";
import classNames from "classnames";

function Coin(prop) {
  return (
    <div>
      {Object.entries(prop.test).map((response, index) => (
        <div>
          <div
            key={index}
            className={classNames(
              " md:w-[480px] h-20 border border-gray-100 rounded-lg my-3 ",

              {
                "bg-gradient-to-r from-[#202022] to-[#dc202025]":
                  0 > response[1].usd_24h_change,
              },
              {
                "bg-gradient-to-r from-[#202022] to-[#19ff042f]":
                  0 < response[1].usd_24h_change,
              }
            )}
          >
            <div className="flex justify-between items-center h-full">
              <div classNames="w-20 h-20 rounded-lg justify-center items-center text-center align-middle ml-4">
                <img
                  className="object-cover  mx-4 w-10 md:w-16"
                  src={`images/${response[0]}.png`}
                />
              </div>
              <div className="flex justify-center items-center">
                <div className="text-white text-2xl uppercase">
                  {response[0]}
                </div>
                <span className="text-[#aaa] text-xs font-light pl-[3px] pt-2">
                  /USD
                </span>
              </div>
              <div className="flex flex-col gap-y-1">
                <div
                  className={classNames(
                    " md:text-2xl font-bold text-right mx-4",
                    {
                      "text-[#ff4040]": 0 > response[1].usd_24h_change,
                    },
                    { "text-[#30ff20]": 0 < response[1].usd_24h_change }
                  )}
                >
                  ${response[1].usd.toFixed(2)}
                </div>
                <div className="text-[#aaa] text-sm text-right mx-4">
                  {response[1].usd_24h_change.toFixed(8)}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Coin;

// {prop.test &&
//     prop.test.map((response, index) => (
//
//     ))}
