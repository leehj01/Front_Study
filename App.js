/* eslint-disable */
import logo from './logo.svg';
import { Navbar, Container,Nav,NavDropdown,Jumbotron,Button } from 'react-bootstrap';
import './App.css';
import { useState } from 'react';
import Data from './data.js';
import { Link, Route, Switch } from 'react-router-dom'
import Detail from './Detail.js';
import axios from 'axios';

function App() {

  let [shoes, shoes변경] = useState(Data);
  let [재고, 재고변경] = useState([10,11,12])
  return (
    <div className="App">

      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as ={Link} to ='/'>Home</Nav.Link>
            <Nav.Link as ={Link}  to ='/detail'> Detail</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      </Navbar>
      <Switch>
      <Route exact path="/">     
        <Jumbotron className="background">
          <h1>20% Season Off</h1>
          <p>
            This is a simple hero unit, a simple jumbotron-style component for calling
            extra attention to featured content or information.
          </p>
          <p>
            <Button variant="primary">Learn more</Button>
          </p>
        </Jumbotron>
        <div className='container'>
        <div className='row'>
          {
            shoes.map((a, i)=>{
              return <Card shoes={shoes[i]} i = {i}></Card>
            })
          }
        </div>
        <button className='btn btn-primary' onClick={() => {

          axios.post('서버url', {id :'coding', pw : 1235 })
          axios.get('https://codingapple1.github.io/shop/data2.json')
          .then((result) =>{
            console.log(result.data);
            shoes변경([...shoes, ...result.data])
          })
          .catch(() =>{})
        }}>더보기</button>
      </div>
      </Route>
      <Route path='/detail/:id'>
          <Detail shoes={shoes} 재고 ={재고} 재고변경={재고변경}></Detail>
      </Route>
      </Switch>
    </div>
  );
}


// component 제작법
function Card(props){
  return(
    <div className ='col-md-4'>
      <img src={'https://codingapple1.github.io/shop/shoes' + (props.i + 1) + '.jpg'} width ="100%"></img>
        <h4>{props.shoes.title}</h4>
        <p>{props.shoes.content } & {props.shoes.price}</p>
    </div>
  )
}

export default App;
