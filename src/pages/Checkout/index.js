import { useContext } from 'react'
import { UserContext } from '../../app/App'
import List from '../../component/List'
import axios from '../../utils/axios'

export default function Checkout() {

    const { user } = useContext(UserContext)
    
    const totalprice = () => {
        let total=0;
        user.checkout.forEach(ck => {
            total += ck.price;
        })
        return total;
    }

    const ordered = async() => {
        await axios.put(`/${user._id}/order`)
    }

    return (
        <div className="px-4 px-lg-0">
            <div className="pb-5">
                <div className="container">
                    <div className="row">
                        <List extraforOrder={true} listname="Checkout" item={user.checkouts} total={totalprice}/>
                        <button className="btn btn-success float-right" onClick={ordered} style={{ width: '200px' }}>Checkout</button>
                    </div>
                </div>
            </div>
        </div>

    )
}
