// import logo from './logo.svg';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';
import data from './data.js';


function App() {

  let [shoes] = useState(data);

  return (
    <div className="App">
      
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Shopping</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#cart">Cart</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>

      <div className="main-bg"></div>

      <div className="container">
        <div className="row">
          {/* <Card shoes={shoes[0]} i={1}/>
          <Card shoes={shoes[1]} i={2}/>
          <Card shoes={shoes[2]} i={3}/> */}

          {
            shoes.map(function(a,i){
              return(
                <Card shoes={shoes[i]} i={i+1}/>
              )
            })
          }
          
          {/* {
            shoes.map(function(a,i){
              return(
                <div className="col-md-4" key={i}>
                  <img src={"https://codingapple1.github.io/shop/shoes"+(i+1)+".jpg"} width="80%" alt="shoes" />
                  <h4>{shoes[i].title}</h4>
                  <h5>{shoes[i].price}</h5>
                  <p>{shoes[i].content}</p>
                </div>
              )
            })
          } */}
        </div>
      </div>
    </div> 
  );
}

function Card(props){
  return(
    <div className="col-md-4">
      <img src={"https://codingapple1.github.io/shop/shoes"+props.i+".jpg"} width="80%" alt="shoes"/>
      <h3>{props.shoes.title}</h3>
      <h5>{props.shoes.price}</h5>
      <p>{props.shoes.content}</p>
    </div>
  )
}

export default App;
