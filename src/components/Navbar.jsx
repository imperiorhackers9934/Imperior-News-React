import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import {LinkContainer} from 'react-router-bootstrap'
import {useState} from 'react'
function Mynavbar(props) {
	//Getting SetCountry function as a prop and setting required country
	const setter = (value)=>{
		props.setCountry(value)
	}//Toggle Navbar Function and State
	const [state,setState] = useState(false)
	const handleclick = ()=>{
		const navbar = document.getElementById("mynav")
		const btn = document.getElementById("mybtn")
		if(state){
			navbar.setAttribute("class","collapse navbar-collapse")
			btn.setAttribute("class","navbar-toggler collapsed")
			setState(false)
		}else{
			navbar.setAttribute("class","collapse navbar-collapse show")
			btn.setAttribute("class","navbar-toggler")
			setState(true)
		}
	}
  return (
    <>
      <Navbar collapseOnSelect expand="lg" fixed="top" style={{backgroundColor:'#150b3b'}} data-bs-theme="dark">
		<button className="navbar-toggler collapsed" id="mybtn" style={{position:'absolute',top:'inherit',margin:'13px',right:'-1px'}} type="button" onClick={handleclick} data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded={state} aria-label="Toggle navigation">
			<span className="navbar-toggler-icon"></span>
		</button>
        <Container>
          <><Navbar.Brand href="/">Imperior News</Navbar.Brand></>
		  <div className="collapse navbar-collapse" id="mynav">
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/business">
              <Nav.Link>Business</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/health">
              <Nav.Link>Health</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/science">
              <Nav.Link>Science</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/sports">
              <Nav.Link>Sports</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/technology">
              <Nav.Link>Technology</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/entertainment">
              <Nav.Link>Entertainment</Nav.Link>
            </LinkContainer>
            <NavDropdown title="Country" id="nav-dropdown">
			<Container style={{maxHeight:'200px',overflow:'scroll'}}>
              <NavDropdown.Item as="button" value="in" eventKey="1" onClick={(event)=>setter(event.target.value)}>India</NavDropdown.Item>
              <NavDropdown.Item as="button" value="us" eventKey="2" onClick={(event)=>setter(event.target.value)}>USA</NavDropdown.Item>
              <NavDropdown.Item as="button" value="eu" eventKey="3" onClick={(event)=>setter(event.target.value)}>Europe</NavDropdown.Item>
              <NavDropdown.Item as="button" value="br" eventKey="4" onClick={(event)=>setter(event.target.value)}>Brazil</NavDropdown.Item>
			  <NavDropdown.Item as="button" value="ca" eventKey="5" onClick={(event)=>setter(event.target.value)}>Canada</NavDropdown.Item>
			  <NavDropdown.Item as="button" value="ar" eventKey="6" onClick={(event)=>setter(event.target.value)}>Argentina</NavDropdown.Item>
			  <NavDropdown.Item as="button" value="gr" eventKey="7" onClick={(event)=>setter(event.target.value)}>Greece</NavDropdown.Item>
			  <NavDropdown.Item as="button" value="gb" eventKey="8" onClick={(event)=>setter(event.target.value)}>United Kingdom</NavDropdown.Item>
			  <NavDropdown.Item as="button" value="jp" eventKey="9" onClick={(event)=>setter(event.target.value)}>Japan</NavDropdown.Item>
			  <NavDropdown.Item as="button" value="cn" eventKey="10" onClick={(event)=>setter(event.target.value)}>China</NavDropdown.Item>
			  <NavDropdown.Item as="button" value="ru" eventKey="11" onClick={(event)=>setter(event.target.value)}>Russia</NavDropdown.Item>
			  </Container>
            </NavDropdown>
          </Nav></div>
        </Container>
      </Navbar>
    </>
  );
}

export default Mynavbar;
