import './App.css';
import { Table } from './components/Table';



function App() {
  
  
  const data = [



    {Curso: 'React', Descrição: 'Curso de React', Instrutor: 'Luciel'},
    {Curso: 'CSS', Descrição: 'Curso de CSS', Instrutor: 'Sabino'},
    {Curso: 'JS e CSS Pro', Descrição: 'Curso avançado de JS e CSS', Instrutor: 'Sabino'},
    {Curso: 'JavaScript básico', Descrição: 'JS básico', Instrutor: 'Cicero'}

    
  ]
  
  
  
  return (
    <>
    
    <Table data={data} />
    
    
    </>
  );
}

export default App;
