import React, { createContext, useEffect, useState } from 'react'

import { useWallet } from 'use-wallet'

import { Rope } from '../../rope'

export interface RopeContext {
  rope?: typeof Rope
}

export const Context = createContext<RopeContext>({
  rope: undefined,
})

declare global {
  interface Window {
    ropesauce: any
  }
}

const RopeProvider: React.FC = ({ children }) => {
  const { ethereum }: { ethereum: any } = useWallet()
  const [rope, setRope] = useState<any>()

  const { account, connect } = useWallet()

  // @ts-ignore
  window.rope = rope
  // @ts-ignore
  window.eth = ethereum

  useEffect(() => {
    connect('injected')
  }, [])

  useEffect(() => {
    if (ethereum) {
      const chainId = Number(ethereum.chainId)
      const ropeLib = new Rope(ethereum, chainId, false, {
        defaultAccount: ethereum.selectedAddress,
        defaultConfirmations: 1,
        autoGasMultiplier: 1.5,
        testing: false,
        defaultGas: '6000000',
        defaultGasPrice: '1000000000000',
        accounts: [],
        ethereumNodeTimeout: 10000,
      })
      setRope(ropeLib)
      window.ropesauce = ropeLib
    }
  }, [ethereum])

  return <Context.Provider value={{ rope }}>{children}</Context.Provider>
}

export default RopeProvider
