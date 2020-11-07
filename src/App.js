import React, { Suspense } from "react";
import {
  ApolloProvider as ApolloHooksProvider 
} from 'react-apollo-hooks';
import ApolloClient from 'apollo-boost';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import UserName from "./components/graphql/UserName";
import GqlProvider from "./context/GqlProvider";
import CsvProvider from "./context/CsvProvider";
import UserProvider from "./context/UserProvider";
import DataProvider from "./context/DataProvider";
import Nav from "./components/Nav";
import Card from "./components/Card";
import ToDo from "./components/todo/ToDo";
import StepOne from "./components/csv/StepOne";
import StepTwo from "./components/csv/StepTwo";
import CsvTable from "./components/csv/CsvTable";

const client = new ApolloClient({
  uri: 'https://graphqlzero.almansi.me/api',
});

function App() {
  return (
    <ApolloHooksProvider client={client}>
    <Suspense fallback={<div>Loading...</div>}>
      <CsvProvider>
      <UserProvider>
      <DataProvider>
      <GqlProvider>
    <Router>
      <Nav></Nav>
      <Switch>
        <Route exact path="/">
         <Card></Card>
       </Route>
       <Route path="/todo">
         <ToDo></ToDo>
       </Route>
       <Route path="/csv">
         <StepOne></StepOne>
       </Route>
        <Route path="/csvInput">
            <StepTwo></StepTwo>
        </Route>
        <Route path="/csvTable">
            <CsvTable></CsvTable>
        </Route>
        <Route path="/graphQlUsers">
            <UserName></UserName>
        </Route>
      </Switch>
    </Router>
    </GqlProvider>
    </DataProvider>
    </UserProvider>
    </CsvProvider>
    </Suspense>
    </ApolloHooksProvider>
  );
}

export default App;
