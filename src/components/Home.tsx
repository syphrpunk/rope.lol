import React from 'react';
import AccountButton from "./TopBar/components/AccountButton";

export function Home() {
  return (
    <div className="flex flex-col w-screen h-screen justify-between">
      <div>
        <header className="visible sm:invisible sm:hidden">
          <div className="flex justify-end">
            <img
              className="object-contain"
              src="/images/NFTz-coming-soon.png"
              alt="soon"
            />
          </div>
          <img
            className="object-contain pl-4 -mt-16"
            src="/images/ROPE.png"
            alt="rope"
          />
        </header>
        <header className="hidden invisible sm:flex sm:visible w-full justify-between">
          <img
            className="object-contain pl-4"
            src="/images/ROPE.png"
            alt="rope"
          />
          <div style={{marginTop:20 }}>
          <AccountButton />
          </div>
          <img
            className="object-contain"
            src="/images/NFTz-coming-soon.png"
            alt="soon"
          />
        </header>
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-between lg:px-8">
        <div className="flex">
          <img
            className="object-contain w-16"
            src="/images/aropearrow.png"
            alt="a rope arrow"
          />
          <img
            className="object-contain"
            style={{ minWidth: "340px" }}
            src="/images/Noose-picture.png"
            alt="noose"
          />
        </div>
        <img
          className="object-contain lg:w-64"
          src="/images/DontBuyIt.png"
          alt="dont buy it"
        />
        <div className="flex">
          <img
            className="object-contain"
            style={{ minWidth: "340px" }}
            src="/images/wojakpicture.png"
            alt="wojak"
          />
          <img
            className="object-contain w-16"
            src="/images/you-arrow.png"
            alt="you arrow"
          />
        </div>
      </div>
      <div className="flex flex-col w-screen items-center lg:flex-row lg:justify-around pb-8">
        <a
          className="zoom py-2 lg:py-0"
          href="https://twitter.com/dontbuyrope"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="object-contain"
            src="/images/Twitter.png"
            alt="you arrow"
          />
        </a>
        <a
          className="zoom py-2 lg:py-0"
          href="https://app.uniswap.org/#/swap?inputCurrency=0x9d47894f8becb68b9cf3428d256311affe8b068b&outputCurrency=ETH"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="object-contain"
            src="/images/Uniswap.png"
            alt="uniswap"
          />
        </a>
        <a
          className="zoom py-2 lg:py-0"
          href="https://t.me/dontbuyrope"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="object-contain"
            src="/images/Telegram.png"
            alt="you arrow"
          />
        </a>
      </div>
    </div>
  )
}