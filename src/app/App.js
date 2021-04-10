
import { useState, useEffect, createContext } from 'react'
import axios from '../utils/axios'
import Navbar from '../pages/Navbar'
import Products from '../pages/Products'
import Checkout from '../pages/Checkout'
import Order from '../pages/Order'
import {
  Switch,
  Route
} from "react-router-dom";

export const UserContext = createContext();

function App() {

  const [user, setUser] = useState({
    _id: '6070948ba95daa311295c55d',
    name: 'Saif Uddin',
    email: 'kdfjl@gmail.com',
    orders: [
      {
        _id: '56895768457',
        name: 'jnvkjsfd',
        price: 32
      },
      {
        _id: '56895768457',
        name: 'jnvkjsfd',
        price: 32
      },{
        _id: '56895768457',
        name: 'jnvkjsfd',
        price: 32
      },{
        _id: '56895768457',
        name: 'jnvkjsfd',
        price: 32
      },
    ],
    checkouts: [
      {
        _id: '56895768457',
        name: 'jnvkjsfd',
        price: 32
      },{
        _id: '56895768457',
        name: 'jnvkjsfd',
        price: 32
      },{
        _id: '56895768457',
        name: 'jnvkjsfd',
        price: 32
      },{
        _id: '56895768457',
        name: 'jnvkjsfd',
        price: 32
      },
    ]
  })
  return (
    <div>
      <UserContext.Provider value={{ user, setUser }}>
        <Navbar />
        <Switch>
          {/* <Route path="/login">
            <Login />
          </Route> */}
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/Order">
            <Order />
          </Route>
          <Route exact path="/">
            <Products />
          </Route>
        </Switch>
      </UserContext.Provider>
    </div>
  );
}

export default App;
