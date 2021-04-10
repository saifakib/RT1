import React from 'react'
import { Link } from 'react-router-dom'

export default function SingleList({ pc, isAdmin }) {


    return (
        <>
            <tr>
                <th scope="row" className="border-0">
                    <div className="p-2">
                        <div className="ml-3 d-inline-block align-middle">
                            <h5 className="mb-0">{pc.name}</h5>
                        </div>
                    </div>
                </th>
                <td className="border-0 align-middle"><strong>1</strong></td>
                <td className="border-0 align-middle"><strong>${pc.price}</strong></td>

                {isAdmin && (
                    <th scope="col" className="border-0 bg-light">
                        <Link to={`/admin/product/${pc._id}/edit`} className="mx-4">
                            <button className="btn btn-primary p-3" type="button" value="Edit" />
                        </Link>

                    </th>

                )}
                {isAdmin && (
                    <th scope="col" className="border-0 bg-light">
                        <Link to={`/admin/product/delete/${pc._id}`} className="mx-4">
                            <button className="btn btn-danger p-3" type="button" value="Delete" />
                        </Link>
                    </th>
                )}
            </tr>
        </>
    )
}
