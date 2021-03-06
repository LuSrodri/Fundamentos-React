
import React from "react";

import products from '../../data/product'

export default props => {

    const productsLi = products.map(product => {
        return (
            <tr key={product.id}>
                <td >
                    {product.id}
                </td>
                <td >
                    {product.name}
                </td>
                <td>
                    R$ {product.price}
                </td>
            </tr>
        )
    })

    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Produto</th>
                    <th>Preço</th>
                </tr>
            </thead>
            <tbody>
                {productsLi}
            </tbody>

        </table>
    )
}