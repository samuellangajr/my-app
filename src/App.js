import './App.css';
import Table from './components/table'
function App() {

  var data = 
  // a variavel data e um array de objectos
  [
    {'id': 2, 'name': 'John', 'surname': 'Josh'},
    {'id': 3, 'name': 'Selena', 'surname': 'Matapa'},
  ]
  // O componente "App" ira retornaro o componente table
    return (
      <Table props={data}></Table>
    );
  
}



export default App;
