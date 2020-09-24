import React, { useEffect, useState } from 'react';
import {
  getNFTBalance,
  getNFTMaxSupply,
  getNFTSupply,
  getRopeMakerContract,
} from '../rope/utils';
import { useWallet } from 'use-wallet';
import useRope from '../hooks/useRope';
import AccountButton from '../components/TopBar/components/AccountButton';
import { RMU } from '../rope/RMU';

interface ICard {
  id: number;
  supply: number;
  totalSupply: number;
  balance: number;
}

type CardsState = { [id: number]: ICard };

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
    <div style={{ padding: 10 }}>
      <AccountButton />
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        {Object.values(cards).map((c) => (
          <div key={c.id} style={{ padding: 5 }}>
            <img
              style={{ maxHeight: 200 }}
              src={(RMU as any)[c.id]['image']}
              alt={`nft-${c.id}`}
            />
            <div>{`NFT ${c.id}`}</div>
            <div>{`Balance : ${c.balance}`}</div>
            <div>{`Minted : ${c.supply}`}</div>
            <div>{`Max Supply : ${c.totalSupply}`}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
