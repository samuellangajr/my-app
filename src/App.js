import logo from './logo.svg';
import './App.css';
import ListGroup from 'react-bootstrap/ListGroup';
function App() {

    return (
      <ListGroup>
        <ListGroup.Item>Cras justo odio <button>Presente</button><button>Ausente</button></ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in  <button>Presente</button><button>Ausente</button></ListGroup.Item>
        <ListGroup.Item>Morbi leo risus <button>Presente</button><button>Ausente</button></ListGroup.Item>
        <ListGroup.Item>Porta ac consectetur ac <button>Presente</button><button>Ausente</button></ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros <button>Presente</button><button>Ausente</button></ListGroup.Item>
      </ListGroup>
    );
  
}

export default App;
