import React from 'react';
import Layout from './containers/Layout/Layout';
import { Route, Switch } from 'react-router-dom';
import HotelsSearch from './containers/HotelsSearch/HotelsSearch';
import Hotels from './containers/Hotels/Hotels';
import Info from './containers/Info/Info';
import AddHotel from './containers/AddHotels/AddHotels'
import './App.css';

function App() {
  return (

      <Layout>
            <Switch>
              <Route path="/addhotel" component={AddHotel}/>
              <Route path="/hotels" component={Hotels}/>
              <Route path="/hotelssearch" component={HotelsSearch}/>
              <Route path="/" exact component={Info}/>
            </Switch>
      </Layout>

  );
}

export default App;
