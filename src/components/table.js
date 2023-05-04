import React from "react";

export default function Table(props) {
  const [selectedButtons, setSelectedButtons] = React.useState({});

  
  // Adiciona 'ausente' como valor padrão para todos os estudantes
  React.useEffect(() => {
    const newSelectedButtons = {};
    props.props.forEach((student, index) => {
      newSelectedButtons[index] = "ausente";
    });
    setSelectedButtons(newSelectedButtons);
  }, [props.props]);



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
                  onClick={() => handleClickButton1(index,"ausente")}
                >
                  Presente
                </button>{" "}
                <button
                  className={
                    "btn btn-outline-danger " +
                    (selectedButtons[index] === "presente" ? "" : "active")
                  }
                  onClick={() => handleClickButton2(index,"ausente")}
                >
                  Ausente
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button class="btn btn-info">Ver relatorio</button>
    </div>
  );
}
