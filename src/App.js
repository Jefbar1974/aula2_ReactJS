import './App.css';
import { Table } from './components/Table';
import { Title } from './components/Title';


function App() {

  const data = [

    { Curso: 'React', Descrição: 'Curso de React', Instrutor: 'Luciel' },
    { Curso: 'CSS', Descrição: 'Curso de CSS', Instrutor: 'Sabino' },
    { Curso: 'JS e CSS Pro', Descrição: 'Curso avançado de JS e CSS', Instrutor: 'Sabino' },
    { Curso: 'JavaScript básico', Descrição: 'JS básico', Instrutor: 'Cicero' }

  ]

  return (

    <><div>
      <Title text='Tabela de Cursos' />
      
    </div><>

        <Table data={data} />

      </></>
  );
}

export default App;
