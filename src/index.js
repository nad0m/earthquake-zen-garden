import ReactDOM from 'react-dom'
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
} from '@apollo/client'
import Home from './pages/home'
import Detail from './pages/detail';
import Header from './components/Header';
import Profile from './pages/profile';

const client = new ApolloClient({
  cache: new InMemoryCache({
    addTypename: false
  }),
  uri: 'http://localhost:4000/graphql'
})

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" children={<Home />} />
        <Route path="/detail/:id" children={<Detail />} />
        <Route path="/profile" children={<Profile />} />
      </Switch>
    </Router>
  )
}

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('app')
)