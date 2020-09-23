import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

import { ThemeProvider } from 'styled-components'
import "./other.css";
import {Home} from "./components/Home";
import {UseWalletProvider} from "use-wallet";
import RopeProvider from "./contexts/RopeProvider";
import ModalsProvider from './contexts/Modals'
import TransactionProvider from './contexts/Transactions'
import theme from './theme'

const App = () => {
  return (
    <Providers>
      <Router>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </Providers>
  );
};

const Providers: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <UseWalletProvider
        chainId={1}
        connectors={{
          walletconnect: { rpcUrl: 'https://mainnet.eth.aragon.network/' },
        }}
      >
        <RopeProvider>
          <TransactionProvider>
          {/*  <FarmsProvider>*/}
              <ModalsProvider>{children}</ModalsProvider>
            {/*</FarmsProvider>*/}
          </TransactionProvider>
        </RopeProvider>
      </UseWalletProvider>
    </ThemeProvider>
  )
}

export default App;
