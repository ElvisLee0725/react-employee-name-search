import React from 'react';

class EmployeesList extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.employeeFilter = this.employeeFilter.bind(this);
    this.state = {
      filteredEmployees: this.props.employees,
      inputVal: ''
    }
  }

  employeeFilter() {
    const { employees } = this.props;
    this.setState({
      filteredEmployees: employees.filter((e) => e.name.toLowerCase().includes(this.state.inputVal.toLowerCase()))
    });
  }

  handleChange(e) {
    const { name, value } = e.target;
    
    this.setState({
      [name]: value
    }, this.employeeFilter);
  }

  render() {
    const { filteredEmployees, inputVal } = this.state;
    return (
      <React.Fragment>
        <div className="controls">
          <input type="text" className="filter-input" data-testid="filter-input" value={inputVal} name="inputVal" onChange={this.handleChange}/>
        </div>
        <ul className="employees-list">
          { filteredEmployees.map(employee => (
            <li key={employee.name} data-testid="employee">{employee.name}</li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

export default EmployeesList;
