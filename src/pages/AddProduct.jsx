import axios from 'axios'
import React, { useState } from 'react'

function AddProduct() {

    const [name, setname] = useState("")
    const [unitPrice, setunitPrice] = useState(0)
    const [unitsInStock, setunitsInStock] = useState(0)

    const add = () => {
        axios.post("https://northwind.vercel.app/api/products",
            {
                name: name,
                unitPrice: unitPrice,
                unitsInStock: unitsInStock
            })
            .then(res => {
                alert("Ürün ekleme işlemi başarılı")
            })
    }


    return <>
        <div style={{margin:5}}>
            <label>Name</label>
            <input type='text' onChange={(e) => setname(e.target.value)} />
        </div>
        <div style={{margin:5}}>
            <label>Unit Price</label>
            <input type='text' onChange={(e) => setunitPrice(e.target.value)} />
        </div>
        <div style={{margin:5}}>
            <label>Stock</label>
            <input type='text' onChange={(e) => setunitsInStock(e.target.value)} />
        </div>
        <div style={{margin:5}}>
            <button onClick={add}>Add</button>
        </div>
    </>
}

export default AddProduct