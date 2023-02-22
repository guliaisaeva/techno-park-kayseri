import React, { useState } from 'react'
import{products} from '../data/products'

// 20.02
// * Productların bir table da listelenmesi
// https://northwind.vercel.app/api/products
// (Id, Name, Stock, Unit Price, quantity per unit)

// * Eğer unitPrice 20 den büyükse o satır kırmızı olsun!
// * Stok 0 olanlar table da gözükmesin

function Table() {
    const [categoryList,setcategoryList]=useState(products);
  return (
    <div>

  <table className='w3-table w3-striped w3-border'>

            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Stock</th>
                    <th>Unit Price</th>
                    <th>Quantity per unit</th>
                </tr>
            </thead>

            <tbody>
                {
                    categoryList.map(item => {
                        return <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.unitsInStock}</td>
                            <td>{item.unitPrice}</td>
                            <td>{item.quantityPerUnit}</td>
                        </tr>

                    })
                }
            </tbody>

        </table>

    </div>
  )
}

export default Table