import React from 'react';

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//Include Sweetalert

//axios for api request
import axios from 'axios';

class App extends React.Component {
  constructor(props)
    {
      super(props);
      this.addFormData = this.addFormData.bind(this);
    }
    
  //Form Submission
  addFormData(evt)
    {
      evt.preventDefault();
      const fd = new FormData();
      fd.append('myFile', this.refs.myFile.value);
      fd.append('myname', this.refs.myname.value);
      fd.append('myDescription', this.refs.myDescription.value);

      axios.post('http://localhost/New%20folder/upload.php', fd
      ).then(res=>
      {
      //Success alert
   
    this.myFormRef.reset();
    }
    );
    }
 
  render() {
   
    return (
    
      <div className="maincontainer">
        
        <h1 className="mr-5 ml-5 mt-5">New File Upload</h1>
        <div className="container mb-5 mt-5 text-left">
        
        <form ref={(el) => this.myFormRef = el}>
        <div className="form-group">
        <input type="text" className="form-control" id="Name" aria-describedby="name" placeholder="Enter name" ref="myname" />
        <input type="text" className="form-control" id="Description" aria-describedby="Description" placeholder="Description" ref="myDescription" />

        </div>
        <div className="form-group">
        <input type="file" className="form-control" id="File" placeholder="Upload file" ref="myFile" />
        </div>
        <button type="submit" className="btn btn-primary" onClick={this.addFormData}>Submit</button>
        
      </form>

       
            
      </div>

     
      </div>
      
)
};
}

export default App;