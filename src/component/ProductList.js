import Header from './Header'

import React,{useState, useEffect} from 'react'
import {Table} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productsActions";

function ProductList()
{
    //const [data, setData] = useState([]);
    const products = useSelector((state) => state.allProducts.data);
    const dispatch = useDispatch();

    useEffect( async ()=>{
        getData()
    },[])
    //console.log(data)

    async function deleteOperation(id)
    {
        let result = await fetch("http://127.0.0.1:8000/api/delete/" + id,{
            method:"DELETE"
        })
        
        getData()
    }

    async function getData()
    {
        const response = await axios
            .get("http://127.0.0.1:8000/api/list")
            .catch((err) => {
                console.log("Err: ", err);
            });
            //console.log("axios", response.data)
            dispatch(setProducts(response.data));
        };
        
       
    
    console.log("state product", products)
    return(
        <div>
            <Header />
                <div className="col-sm-8 offset-sm-2">
                <h1>Product List</h1>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Image</th>
                                <th>Description</th>
                                <th>Price</th>
                                <th>Operations</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map((item )=>
                                    <tr key={item.id}>
                                        <td>{item.id} </td>
                                        <td>{item.name}</td>
                                        <td><img style={{width:150}} src={"http://127.0.0.1:8000/" + item.file_path}/></td>
                                        <td>{item.description}</td>
                                        <td>{item.price}</td>
                                        <td>
                                            <span className="btnProduct" onClick={()=>{deleteOperation(item.id)}}>Delete</span>
                                            <Link to={"update/" + item.id}><span className="btnProduct update ml-2">Update</span></Link>
                                        </td>
                                        
                                    </tr>   
                                )
                            }
                                        
                        </tbody>
                    </Table>
            </div>    
            
        </div>
    )
}

export default ProductList;