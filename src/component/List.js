import React from 'react'
import SingleList from './singleList'

export default function List({ listname, extraforOrder, extraforAdmin, item,total }) {
    return (
        <div className="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">
            <h1>{listname}</h1>
            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col" className="border-0 bg-light">
                                <div className="p-2 px-3 text-uppercase">Name</div>
                            </th>
                            <th scope="col" className="border-0 bg-light">
                                <div className="py-2 text-uppercase">Quantity</div>
                            </th>
                            <th scope="col" className="border-0 bg-light">
                                <div className="py-2 text-uppercase">Price</div>
                            </th>
                            {extraforAdmin && (
                                <th scope="col" className="border-0 bg-light">
                                    <input className="btn btn-primary" type="button" value="Edit" />
                                </th> ,
                                <th scope="col" className="border-0 bg-light">
                                    <input className="btn btn-danger" type="button" value="Delete" />
                                </th>
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        {item.map(product => <SingleList key={product._id} pc={product}/>)}
                        
                        {extraforOrder && (
                            <tr>
                                <th scope="row" className="border-0">
                                    <div className="p-2">
                                        <div className="ml-3 d-inline-block align-middle">
                                            <h5 className="mb-0 fx-bold">Total{total}</h5>
                                        </div>
                                    </div>
                                </th>
                                <td className="border-0 align-middle"><a href="#" className="text-dark"><i className="fa fa-trash"></i></a></td>
                            </tr>
                        )}
                    </tbody>
                </table>

            </div>
        </div>
    )
}
