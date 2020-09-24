import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import "./other.css";
import { Home } from "./pages/Home";
import { UseWalletProvider } from "use-wallet";
import RopeProvider from "./contexts/RopeProvider";
import ModalsProvider from "./contexts/Modals";
import TransactionProvider from "./contexts/Transactions";
import theme from "./theme";
import { CardsPage } from "./pages/CardsPage";
import { DontBuyPage } from "./pages/DontBuyPage";

const useTestNet = true;

const App = () => {
  return (
    <Providers>
      <Router>
        <Switch>
          <Route path="/cards">
            <CardsPage />
          </Route>
          <Route path="/dontbuy">
            <DontBuyPage />
          </Route>

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
        chainId={useTestNet ? 4 : 1}
        connectors={{
          walletconnect: { rpcUrl: "https://mainnet.eth.aragon.network/" },
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
  );
};

export default App;
