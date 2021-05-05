import {BrowserRouter, Route, Switch} from 'react-router-dom'

import './App.css';
import Login from './component/Login';
import Register from './component/Register';
import AddProduct from './component/AddProduct';
import UpdateProduct from './component/UpdateProduct';
import Protected from './component/Protected'
import ProductList from './component/ProductList'
import SearchComponent from './component/SearchProduct'




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/login"> <Login/> </Route>
          <Route path="/register"> <Register/> </Route>
          <Route path="/add"> <Protected Cmp={AddProduct} /> </Route>
          <Route path="/update/:id"> <Protected Cmp={UpdateProduct} /> </Route>
          <Route path="/search"> <Protected Cmp={SearchComponent} /> </Route>
          <Route path="/"> <Protected Cmp={ProductList} /> </Route>
        </Switch>  
      </BrowserRouter>  
      
    </div>
  );
}

export default App;
