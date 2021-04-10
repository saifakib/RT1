import React from 'react'
import axios from '../utils/axios'
import { useContext } from 'react'
import { UserContext } from '../app/App'

export default function Product({ item }) {

    const {user} = useContext(UserContext)

    const checkout = async() => {
        await axios.patch('/checkout', {
            product_id: item._id,
            user_id: user._id
        })
    }

    return (
        <div className="col my-3">
            <div className="card h-100 shadow border-0 bdradious">
                <img src={item.img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <div className=" d-flex justify-content-between">
                        <div><h3><span className="dollar-color">${item.price}</span></h3></div>
                        <div><button type="button" onClick={checkout} className="bnt"><img className="shopping-cart-img" src="logo/shopping-cart 1.png" />Buy Now</button></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
