import React, {useEffect, useState} from 'react';
import {getNFTBalance, getRopeMakerContract} from "../rope/utils";
import {useWallet} from "use-wallet";
import useRope from "../hooks/useRope";
import AccountButton from "./TopBar/components/AccountButton";

type CardsBalanceState = {[id: number]: number};

export function CardsPage() {
  const [balances, setBalances] = useState<CardsBalanceState>({})

  const { account } = useWallet()
  const rope = useRope()

  useEffect(() => {
      async function fetchBalances() {
        console.log(rope);
        console.log(getRopeMakerContract(rope))
        const balance = await getNFTBalance(getRopeMakerContract(rope), account, 1);
        setBalances((s) => ({...s, 1: balance.toNumber()}))
      }

      if (rope && account) {
        fetchBalances()
      }
    }, [setBalances, account, rope])


  return (
    <div>
      <AccountButton/>
      <div>
        {`NFT 1 : ${balances[1]}`}
      </div>
    </div>
  )
}