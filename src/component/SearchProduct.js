import Header from './Header';
import { useState } from 'react'
import {Table} from 'react-bootstrap'

function SearchComponent(){

    const [data, setData] = useState([])

   async function search(key)
   {
       if(key.length > 0){
        let result = await fetch("http://127.0.0.1:8000/api/search/"+key)
        result = await result.json()
        //console.log(result) 
        setData(result)
       }else{
        setData([])
       }
   }

    return(
        <div>
            <Header />
            <div className="col-sm-6 offset-sm-3">
                   <h1>Search component</h1> 
                   <br/>
                   <input type="text" className="form-control" placeholder="Search" onChange={(e)=>search(e.target.value)} />
                   <br/>
                   <br/>

                   {data.length>0 && (
                       <Table striped bordered hover>
                       <thead>
                           <tr>
                               <th>#</th>
                               <th>Name</th>
                               <th>Image</th>
                               <th>Description</th>
                               <th>Price</th>
                           </tr>
                       </thead>
                       <tbody>
                           {
                               data.map((item)=>
                                   <tr>
                                       <td>{item.id} </td>
                                       <td>{item.name}</td>
                                       <td><img style={{width:150}} src={"http://127.0.0.1:8000/" + item.file_path}/></td>
                                       <td>{item.description}</td>
                                       <td>{item.price}</td>
                                   </tr>   
                               )
                           }
                                       
                       </tbody>
                   </Table>
                   )}
            </div>
        </div>
    )
}

export default SearchComponent