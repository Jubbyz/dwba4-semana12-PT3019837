class Ads extends React.Component {

  constructor() {
    super();
    this.state = {
      disciplina: "DISCIPLINA", carga: "CARGA", periodo: "PERIODO",
      disciplina1: "Sistemas Operacionais", carga1: "66.7", periodo1: "norturno",
      disciplina2: "Inglês", carga2: "33.3", periodo2: "noturno",
      disciplina3: "Laboratório de Estruturas de Dados e Programação", carga3: "33.3", periodo3: "norturno",
      disciplina4: "Introdução a Banco de Dados", carga4: "66.7", periodo4: "noturno"};
  }
  
  render() {
    
    return <div>

      <br></br>
      <h3 align="center">Componentes Curriculares</h3>
      <table  class="table table-striped table-hover table-bordered" align="center">
        <thead class="p-3 mb-2 bg-success text-white">
          <tr align="center">
            <th class="th" scope="col">{this.state.disciplina}</th>
            <th scope="col">{this.state.carga}</th>
            <th scope="col">{this.state.periodo}</th>
          </tr>
        </thead>
        <tbody align="center">
          <tr>
            <td class="td">{this.state.disciplina1}</td>
            <td>{this.state.carga1}</td>
            <td>{this.state.periodo1}</td>
          </tr>
          <tr>
            <td>{this.state.disciplina2}</td>
            <td>{this.state.carga2}</td>
            <td>{this.state.periodo2}</td>
          </tr>
          <tr>
            <td>{this.state.disciplina3}</td>
            <td>{this.state.carga3}</td>
            <td>{this.state.periodo3}</td>
          </tr>
          <tr>
            <td>{this.state.disciplina4}</td>
            <td>{this.state.carga4}</td>
            <td>{this.state.periodo4}</td>
          </tr>
        </tbody>
        </table>

    </div>;

  }
}

ReactDOM.render(<Ads />, document.getElementById('ads'));