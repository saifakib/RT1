import { useState, useEffect } from 'react'
import List from '../../component/List'
import axios from '../../utils/axios'

export default function Admin() {

    const [products, setProducts] = useState([]);

    useEffect(async () => {
        try {
            let response = await axios.get('/')
            setProducts(response.data)
            console.log("products", products)
        } catch (e) {
            console.log(e)
        }
    }, [])
    return (
        <div className="px-4 px-lg-0">
            <div className="pb-5">
                <div className="container">
                    <div className="row">
                        <List extraforOrder={false} extraforAdmin={true} listname="All Products" item={products} />
                    </div>
                </div>
            </div>
        </div>
    )
}