import './App.css';
import Table from './components/table'
function App() {

  var data = 
  // a variavel data e um array de objectos
  [{'id': 2000, 'name': 'John', 'surname': 'Josh'}, 
    {'id': 3890, 'name': 'Selena', 'surname': 'Matapa'},
    {'id': 6790, 'name': 'Samuel', 'surname': 'Langa'},
    {'id': 5542, 'name': 'Hassan', 'surname': 'Mutole'},
    {'id': 6773, 'name': 'Lecticia', 'surname':'Cuna'},
    {'id': 4873, 'name': 'Sibiao', 'surname': 'Marilia'},
    {'id': 6367, 'name': 'Sandra', 'surname': 'Mutavele'},
    {'id': 7862, 'name': 'Alfredo', 'surname': 'Rosa'},
    {'id': 5624, 'name': 'Neylik', 'surname': 'Mohamed'},
    {'id': 9815, 'name': 'Shelsea', 'surname': 'Orlando'},
    {'id': 1098, 'name': 'Victoria', 'surname': 'Luis'},
    {'id': 7601, 'name': 'Serena', 'surname': 'Maconne'},
  ]
  // O componente "App" ira retornaro o componente table
    return (
      <Table props={data}></Table>
    );
  
}



export default App;
