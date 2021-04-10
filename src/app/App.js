
import { useState, useEffect, createContext } from 'react'
import axios from '../utils/axios'
import Navbar from '../pages/Navbar'
import Products from '../pages/Products'
import Checkout from '../pages/Checkout'
import Order from '../pages/Order'
import Login from '../pages/Login'
import Admin from '../pages/Admin'
import CreateProduct from '../pages/Form/create'
import EditProduct from '../pages/Form/edit'
import DeleteProduct from '../pages/Delete'
import PrivateRoute from '../component/PrivateRoute'
import {
  Switch,
  Route
} from "react-router-dom";

export const UserContext = createContext();

function App() {

  const [user, setUser] = useState({})

  const createUser = async ({ name, email }) => {
    let newUser = await axios.post('createuser', {
      name: name,
      email: email
    })
    setUser(newUser.data)
    console.log(user)
  }
  return (
    <div>
      <UserContext.Provider value={{ user, setUser, createUser }}>
        <Navbar />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/admin/product">
            <Admin />
          </Route>
          <PrivateRoute exact path="/admin/product/create" component={CreateProduct}></PrivateRoute>
          <Route exact path="/admin/product/:id/edit" component={EditProduct}></Route>
          <PrivateRoute exact path="/admin/product/delete/:id" component={DeleteProduct}></PrivateRoute>
          <PrivateRoute path="/checkout">
            <Checkout />
          </PrivateRoute>
          <PrivateRoute path="/Order">
            <Order />
          </PrivateRoute>
          <Route exact path="/">
            <Products />
          </Route>
        </Switch>
      </UserContext.Provider>
    </div>
  );
}

export default App;
