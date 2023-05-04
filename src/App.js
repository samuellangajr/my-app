import './App.css';
import Table from './components/table';
function App() {

  var data = 
  [
    {'id': 2000, 'name': 'John', 'surname': 'Josh', 'state':1},
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
    return (
      <Table props={data} ></Table>
    );
  
}



export default App;
