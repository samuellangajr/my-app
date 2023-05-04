import React from "react";

export default function Table(props) {
  const [selectedButtons, setSelectedButtons] = React.useState({});
  const [showReport, setShowReport] = React.useState(false);

  function handleClickButton1(index) {
    setSelectedButtons(prevState => {
      return { ...prevState, [index]: 'presente' };
    });
  }

  function handleClickButton2(index) {
    setSelectedButtons(prevState => {
      return { ...prevState, [index]: 'ausente' };
    });
  }

  function handleClickButton3() {
   setShowReport(true); 
  }

  const students = props.props;

  return (
    <div className="container my-5 text-center">
      <h1>Lista de presenças</h1>
      <br />
      <br />
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Nr Estudante</th>
            <th scope="col">Nome</th>
            <th scope="col">Apelido</th>
            <th scope="col">Presente/Ausente</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr data-index={index} key={index}>
              <th scope="row">{student.id}</th>
              <td>{student.name}</td>
              <td>{student.surname}</td>
              <td>
                <button
                  className={
                    "btn btn-outline-success " +
                    (selectedButtons[index] === "presente" ? "active" : "")
                  }
                  onClick={() => handleClickButton1(index)}
                >
                  Presente
                </button>{" "}
                <button
                  className={
                    "btn btn-outline-danger " +
                    (selectedButtons[index] === "presente" ? "" : "active")
                  }
                  onClick={() => handleClickButton2(index)}
                >
                  Ausente
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button class="btn btn-info"  onClick={() => handleClickButton3()}>Ver relatorio</button>
      <div class="relatorio container my-5 text-center">
        <h2>Estudantes presentes</h2>
        <br />
        <br />
        <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Nr Estudante</th>
            <th scope="col">Nome</th>
            <th scope="col">Apelido</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr data-index={index} key={index}>
              <th scope="row">{student.id}</th>
              <td>{student.name}</td>
              <td>{student.surname}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
}
