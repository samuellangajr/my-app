import React from "react";

export default function table(props) {
    const students = props.props
return (

  <div  className="container">

    <h1>Lista de presenças</h1>

    
<table className="table">
  <thead>
    <tr>
      <th scope="col">Nr Estudante</th>
      <th scope="col">Nome</th>
      <th scope="col">Apelido</th>
      <th scope="col">Presente/Ausente</th>
    </tr>

  </thead>

  <tbody>
    {students.map((student, index) =>(
        <tr data-index={index}>
          <th scope="row">{ student.id }</th>
          <td>{ student.name }</td>
          <td>{ student.surname }</td>
          <td><button className="btn btn-success">Presente</button>  <button className="btn btn-danger">Ausente</button></td>
        </tr>

    ))}
  </tbody>
</table>

  </div>
 
);
}