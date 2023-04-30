import './App.css';
import Table from './components/table'
function App() {

  var data = 
  [
    {'id': 2, 'name': 'John', 'surname': 'Josh'},
    {'id': 3, 'name': 'Selena', 'surname': 'Matapa'},
  ]
    return (
      <Table props={data} ></Table>
    );
  
}



export default App;
