



const Head = ({ keys }) => {
  return (
    

<thead>

        <tr>
          {
            keys.map(key => <th key={key}>{key}</th>)
          }

        </tr>
      </thead>

  )
}


const Row = ({ record }) => {
  const keys = Object.keys(record)
  return (
    

    <tr key={record.curso}>
      
      {
        keys.map(key => <td key={key}>{record[key]}</td>)
      }
      
    </tr>
  )

}

export const Table = ({ data }) => {
  const keys = Object.keys(data[0])

  return (
    
    <table>
      <Head keys={keys} />
      
      <tbody>
        {
          data.map(record => <Row record={record} />)
        }


      </tbody>

    </table>


  )
}