import React from 'react'

export default function SingleList({ pc }) {
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
            </tr>
        </>
    )
}
