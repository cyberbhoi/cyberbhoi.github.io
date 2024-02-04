import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";


const Home = () =>{

  return(
    <Container>
        <h1> Coming Soon...  <Spinner animation="border" variant="primary" />
</h1>
       <h1>Website is under construction </h1>
    </Container>
  )
}

export default Home 
