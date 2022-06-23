//src/App.js
import React from 'react';
 
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {employee: []};
        this.headers = [
           
            { key: 'ELEMENT_NM', label: 'ELEMENT_NM' },
            { key: 'ELEMENT_ALIAS_NM	', label: 'ELEMENT_ALIAS_NM	' },
            { key: 'ELEMENT_DESC	', label: 'ELEMENT_DESC	' },
            { key: 'DATA_TYPE		', label: 'DATA_TYPE		' },
           
        ];
        this.state = { checkedBoxes: [] };
        this.deleteEmployee = this.deleteEmployees.bind(this);
        this.toggleCheckbox = this.toggleCheckbox.bind(this);
    }
     
    deleteEmployees = (event) => {
        event.preventDefault();
        if(window.confirm('Are you sure, want to delete the selected employee?')) {
            alert(this.state.checkedBoxes + " Succesfully Deleted");
        }
    }
     
    toggleCheckbox = (e, item) => {      
        if(e.target.checked) {
            let arr = this.state.checkedBoxes;
            arr.push(item.id);
             
            this.setState = { checkedBoxes: arr};
        } else {            
            let items = this.state.checkedBoxes.splice(this.state.checkedBoxes.indexOf(item.id), 1);
             
            this.setState = {
                checkedBoxes: items
            }
        }       
        console.log(this.state.checkedBoxes);
    }
     
    componentDidMount() {
        fetch('http://localhost/New%20folder/file.php/').then(response => {
            console.log(response);
            return response.json();
          }).then(result => {
            // Work with JSON data here
            console.log(result);
            this.setState({
                employee_rs:result
            }); 
          }).catch(err => {
            // Do something for an error here
            console.log("Error Reading data " + err);
          });
    }
         
    render() {
        const employeeFound = this.state.employee_rs && this.state.employee_rs.length;
        if(employeeFound) {
            return (
                <div className="container"><h1> </h1>
                    <div id="msg"></div>
                    <table className="table table-bordered table-striped">
                        <thead>
                            <tr>
                                {
                                    this.headers.map(function(h) {
                                        return (
                                            <th key={h.key}>{h.label}</th>
                                        )
                                    })
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employee_rs.map(function(item, index) {
                                return (
                                    <tr key={index}>
                                     
                                      
                                      <td>{item.ELEMENT_NM}</td>
                                      <td>{item.ELEMENT_ALIAS_NM}</td>
                                      <td>{item.ELEMENT_DESC}</td>
                                      <td>{item.DATA_TYPE}</td>

                                    </tr>
                                )}.bind(this))
                            }
                        </tbody>
                    </table>
                </div>
            )
        } else {
            return (
                <div id="container">
                    No product found
                </div>
            )
        }
    }
}
export default App;