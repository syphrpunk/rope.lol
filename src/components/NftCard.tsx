import React from 'react';
import {RMU} from "../rope/RMU";

export interface NftCardProps {
  id: number;
  supply: number;
  totalSupply: number;
  balance: number;
}

export function NftCard(props: NftCardProps) {
  const nftData = (RMU as any)[props.id];

  return <div style={{ padding: 5 }}>
    <img
      style={{ maxHeight: 200 }}
      src={nftData['image']}
      alt={`nft-${props.id}`}
    />
    <div>{nftData['name']}</div>
    <div>{`Balance : ${props.balance}`}</div>
    <div>{`Minted : ${props.supply}`}</div>
    <div>{`Max Supply : ${props.totalSupply}`}</div>
  </div>
}