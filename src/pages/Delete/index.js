import { useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import axios from '../../utils/axios'

const DeleteProduct = ({ match }) => {

    useEffect(() => {
        axios.delete(`/admin/product/delete/${match.params.id}`)
    })

    return (
        <Redirect to="/admin/product"></Redirect>
    )
}

export default DeleteProduct;