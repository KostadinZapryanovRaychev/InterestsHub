
import Homepage from './components/Homepage';
import Phylosophy2 from './components/Phylosophy2';
import QuantumPhysics2 from './components/QuantumPhysics2';
import Soccer2 from './components/Soccer2';
import Math2 from './components/Math2';
import Poker2 from './components/Poker2';
import Header from './components/header/Header';
import Footer from './components/header/Footer';
import Sidebarr from './components/homepage/Sidebarr';
import { BrowserRouter as Router , Route, Switch } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Contact from './components/Contact';

function App() 



{
  return (

    <Router>
    <Container>
         <Row > 
                <Col md={12}>
                               <Header/>
                </Col>
          </Row>

      <Row >
         <Col md={3}>
              <Sidebarr/>
          </Col>
                   
                        <Switch>
                           <Col md={9}>
                         
                              <Route path="/quantumphysics" exact component={QuantumPhysics2}/>
                              <Route path="/math" exact component={Math2}/>
                              <Route path="/soccer" exact component={Soccer2}/>
                              <Route path="/philosophy" exact component={Phylosophy2}/>
                              <Route path="/poker" exact component={Poker2}/>
                              <Route path="/home" exact component={Homepage}/>
                              <Route path="/about" exact component={Homepage}/>
                              <Route path="/FAQ" exact component={Homepage}/>
                              <Route path="/contact" exact component={Contact}/>
                            </Col>
                        </Switch>
                  
      </Row>

    
    <Row >
      <Col md={12}>
        <Footer/>
      </Col>
    </Row>

  </Container>

</Router>
  );
}

export default App;
