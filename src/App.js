// import logo from './logo.svg';
import { createContext, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';
import data from './data.js';
import {Routes, Route, useNavigate, Outlet} from 'react-router-dom'
import Detail from './routes/Detail.js';
import axios from 'axios';
import Cart from './routes/Cart.js';

export let Context1 = createContext();


function App() {

  let [shoes, setShoes] = useState(data);
  let [재고] = useState([10,11,12]);
  let navigate = useNavigate();

  return (
    <div className="App">

      
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Shopping</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>(navigate('/'))}>Home</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/detail')}}>Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>


      <Routes>
        <Route path ="/"  element={
        <div>
          <div className="main-bg"></div>
          <div className="container">
            <div className="row">
              {
                shoes.map(function(a,i){
                  return(
                    <Card shoes={shoes[i]} i={i+1}/>
                  )
                })
              }
            </div>
            <button onClick={()=>{
              axios.get('https://codingapple1.github.io/shop/data2.json')
              .then((결과)=>{
                console.log(결과.data);
                let copy = [...shoes, ...결과.data];
                setShoes(copy);
              })
              .catch(()=>{
                console.log('Json Connect fail')
              })

            }}>더보기</button>
          </div>
        </div>}/>

        <Route path ="/detail/:id" element={
          <Context1.Provider value={{재고, shoes}}>
            <Detail shoes={shoes} />

          </Context1.Provider>
        }/>

        <Route path = "/cart" element={<Cart/>} />

        <Route path ="/about" element={<About/>}>
          <Route path ="member" element={<div>Member</div>}/>
          <Route path ="location" element={<div>Location Impormation</div>}/>
        </Route>
        <Route path ="*"  element={<div>Page not Found</div>}/>
      </Routes>

    </div> 
  );
}

function About(){
  return(
    <div>
      <h4>회사 정보</h4>
      <Outlet></Outlet>
    </div>
  )
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
