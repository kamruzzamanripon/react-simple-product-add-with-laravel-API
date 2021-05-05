import Header from './Header';
import {withRouter} from 'react-router-dom'
import {useEffect, useState} from 'react'

function UpdateProduct(props){
    //console.warn(props)
    const [data, setData] = useState([])
    const[name, setName] = useState("");
    const[file, setFile] = useState("");
    const[price, setPrice] = useState("");
    const[description, setDescription] = useState("");

    useEffect( async ()=>{
        let result = await fetch("http://127.0.0.1:8000/api/product/" + props.match.params.id)
        result = await result.json();
        setData(result)
        setName(result.name)
        setPrice(result.price)
        setDescription(result.description)
        setFile(result.file)
    },[])
    //console.log(data)
    async function editProduct(id)
    {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('name', name);
        formData.append('price', price);
        formData.append('description', description);
        //console.warn(formData);

        let result = await fetch("http://127.0.0.1:8000/api/updateproduct/"+id+"?_method=PUT",{
            method: 'POST',
            body: formData
        });
        alert("Data has been Update")
    }
    
    return(
        <div>
            <Header />
            <div className="col-sm-6 offset-sm-3">
                <br />
                <input type="text" className="form-control" placeholder="name" defaultValue={data.name} onChange={ (e)=> setName(e.target.value)}  />
                <input type="text" className="form-control" placeholder="price" defaultValue={data.price} onChange={ (e)=> setPrice(e.target.value)} value={price} />
                <input type="text" className="form-control" placeholder="description" defaultValue={data.description} onChange={ (e)=> setDescription(e.target.value)} />
                <input type="file" className="form-control" placeholder="file" defaultValue={data.file_path} onChange={ (e)=> setFile(e.target.files[0])} />
                <img style={{width:250}} src={"http://127.0.0.1:8000/" + data.file_path}/>
                <br/>
                
                <button onClick={()=>editProduct(data.id)} >Add Product</button>
            </div>
        </div>
    )
}

export default withRouter(UpdateProduct)