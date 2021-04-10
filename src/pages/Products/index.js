import { useState, useEffect } from 'react'
import Product from '../../component/Product'
import axios from '../../utils/axios'

export default function Products() {

    const [products, setProducts] = useState([]);

    useEffect(async () => {
        try {
            let response = await axios.get('/')
            setProducts(response.data)
        } catch (e) {
            console.log(e)
        }
    }, [])
    return (
        <div>
            <main className="container">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {products.map(item => <Product key={item._id} item={item} />)}
                </div>
            </main>
        </div>
    )
}
