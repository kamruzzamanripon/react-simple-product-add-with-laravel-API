import {Link, useHistory} from 'react-router-dom'

import {Navbar, Nav, NavDropdown} from 'react-bootstrap'

function Header(){

    const user = JSON.parse(localStorage.getItem('user-info'))
    const history = useHistory();

    function logOut(){
        localStorage.clear();
        history.push('/login')
    }

    return(
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="mr-auto nav_bar_wrapper">
                    {
                        localStorage.getItem('user-info') ?
                        <>
                            <Link to="/">Product List</Link>
                            <Link to="/add">Add Product</Link>
                            {/* <Link to="/update">Update Product</Link> */}
                            <Link to="/search">Search Product</Link>
                        </> 
                        :
                        <>
                            <Link to="/login">Login</Link>
                            <Link to="/register">Register</Link>
                        </>
                    }
                </Nav>
                {
                    localStorage.getItem('user-info') ?
                    <Nav>
                    <NavDropdown title={user && user.name}>
                        <NavDropdown.Item onClick={logOut}>Logout</NavDropdown.Item>
                        <NavDropdown.Item>Profile</NavDropdown.Item>
                    </NavDropdown>
                    </Nav> 
                :
                    null
                }
                
               
            </Navbar>
        </div>
    )
}

export default Header