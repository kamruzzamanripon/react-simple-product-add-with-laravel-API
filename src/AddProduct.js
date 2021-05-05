import Header from './Header';
import { useState } from 'react'

function AddProduct(){
    const[name, setName] = useState("");
    const[file, setFile] = useState("");
    const[price, setPrice] = useState("");
    const[description, setDescription] = useState("");

    async function addProduct()
    {
        //console.warn(name,file, price, description)
        const formData = new FormData();
        formData.append('file', file);
        formData.append('name', name);
        formData.append('price', price);
        formData.append('description', description);
        //console.warn(formData);

        let result = await fetch("http://127.0.0.1:8000/api/addproduct",{
            method: 'POST',
            body: formData
        });
        alert("Data has been save")
    }

    return(
        <div>
            <Header />
            <div className="col-sm-6 offset-sm-3">
                <h1>Add Your Product</h1>
                <br />
                <input type="text" className="form-control" placeholder="name" onChange={ (e)=> setName(e.target.value)} value={name} />
                <input type="file" className="form-control" placeholder="file" onChange={ (e)=> setFile(e.target.files[0])} />
                <input type="text" className="form-control" placeholder="price" onChange={ (e)=> setPrice(e.target.value)} value={price} />
                <input type="text" className="form-control" placeholder="description" onChange={ (e)=> setDescription(e.target.value)} value={description} />
                <button onClick={addProduct}>Add Product</button>
            </div>
        </div>
    )
}

export default AddProduct