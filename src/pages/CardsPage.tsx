import React, { useEffect, useState } from 'react';
import {
  getNFTBalance,
  getNFTMaxSupply,
  getNFTSupply,
  getRopeMakerContract,
} from '../rope/utils';
import { useWallet } from 'use-wallet';
import useRope from '../hooks/useRope';
import { RMU } from '../rope/RMU';
import {Header} from "../components/Header/Header";
import {NftCard, NftCardProps} from "../components/NftCard";

type CardsState = { [id: number]: NftCardProps };

export function CardsPage() {
  const [cards, setCards] = useState<CardsState>({});

  const { account } = useWallet();
  const rope = useRope();

  useEffect(() => {
    async function fetchCardsData(id: number) {
      const balance = await getNFTBalance(
        getRopeMakerContract(rope),
        account,
        id,
      );
      const supply = await getNFTSupply(getRopeMakerContract(rope), id);
      const totalSupply = await getNFTMaxSupply(getRopeMakerContract(rope), id);
      setCards((s) => ({
        ...s,
        [id]: {
          id,
          balance: balance.toNumber(),
          supply: supply.toNumber(),
          totalSupply: totalSupply.toNumber(),
        },
      }));
    }

    if (rope && account) {
      Object.keys(RMU).forEach((id) => fetchCardsData(parseInt(id)));
    }
  }, [setCards, account, rope]);

  return (
    <div className='flex flex-col w-screen justify-between'>
      <Header/>
      <div className='flex justify-center'>
        {Object.values(cards).map((c) => (
          <NftCard {...c} key={c.id}/>
        ))}
      </div>
    </div>
  );
}
