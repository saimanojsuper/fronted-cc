import React,{Component} from 'react';
//import logo from './logo.svg';
//import './App.css';
import Contacts from './components/contacts'
import Employees from './components/employees'
import axios from  'axios';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


// class App extends Component{

//   state = {
//     contacts:[]
//   }

//   componentDidMount() {
//     // fetch('http://jsonplaceholder.typicode.com/users')
//     // .then(res => res.json())
//     // .then((data) => {
//     //   this.setState({ contacts: data })
//     // })
//     // .catch(console.log)
//     axios.get('http://jsonplaceholder.typicode.com/users')
//         .then(res=>{
//           const contacts=res.data;
//           this.setState({contacts});
//         })

//   }


//   render () {
//     return (
//       <Contacts contacts={this.state.contacts} />
//     );
//   }
// }


// class App extends Component{

//   state = {
//     employees:[]
//   }

//   componentDidMount() {
//     // fetch('http://jsonplaceholder.typicode.com/users')
//     // .then(res => res.json())
//     // .then((data) => {
//     //   this.setState({ contacts: data })
//     // })
//     // .catch(console.log)
//     axios.get('http://localhost:8085/springfox/api/employees')
//         .then(res=>{
//           const employees=res.data;
//           console.log(res.data);
//           this.setState({employees});
//         })

//   }


//   render () {
//     return (
//       <Employees employees={this.state.employees} />
//     );
//   }
// }

// class Post extends Component{

//   state ={
//     name:''//,
//    // job:'',
//    // hiredate:'',
//    // salary:''
//   }

//   // handleChange = event => {
//   //   this.setState({ name: event.target.value });
//   // }

//   handleSubmit = event => {
//     event.preventDefault();

//   handleChange = (e)=>{
//    //name = e.target.name;
//    this.setState({name: e.target.value});
//   }

//  employee = {
//     name: this.state.name //,
//    // job: this.state.job,
//    // hiredate: this.state.hiredate,    	
//    // salary: this.state.salary
// };

//   componentDidMount() {
    
//     axios.post('http://localhost:8085/springfox/api/employees'),{employe}
//         .then(res=>{
//           //const employees=res.data;
//           console.log(res.data);
//           console.log(res);
//           //this.setState({employees});
//         })

//   };


//   // render () {
//   //   return (
//   //     <div>
//   //       <form onSubmit={this.handleSubmit}>
//   //         <label>
//   //           Employee Name:
//   //           <input type="text" name="name" onChange={this.handleChange} />
//   //         </label>
//   //         <button type="submit">Add</button>
//   //       </form>
//   //     </div>
//   //  // <Employees employees={this.state.employees} />
//   //   );
//   // }

//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <label>
//           Employee Name:
//             <input type="text" name="name" onChange={this.handleChange} />
//           </label>
//           <button type="submit">Add</button>
//         </form>
//       </div>
//     )
//   }
// }

//import React from 'react';
//import axios from 'axios';

// export default class EmployeeList extends React.Component {
//   state = {
//    name: '',
//    job:'',
//    hiredate:'',
//    salary:'',
   
//   }

//   handleChange = event => {
//     const name = event.target.name;
//     this.setState({ [name]: event.target.value });
//     console.log(this.state);
//   }

//   handleSubmit = event => {
//     event.preventDefault();

//     //const { name, job, hiredate,salary } = this.state;

//       //const   employee = this.state; //{
// //           name: this.state.name ,
// //           job: this.state.job,
// //           hiredate: this.state.hiredate,    	
// //           salary: this.state.salary
// //       };
//       console.log(this.state)
//       //console.log(employee);

//     axios.post(`http://localhost:8085/springfox/api/employees`,(this.state)) //({name,job,hiredate,salary}))
//       .then(res => {
//         console.log(res);
//         console.log(res.data);
//       })
//   }

//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Employee Name:
//             <input type="text" name="name" onChange={this.handleChange} />
//           </label>
//           <label>
//             Job:
//             <input type="text" name="job" onChange={this.handleChange} />
//           </label>
//           <label>
//              Hiredate:
//             <input type="date" name="hiredate" onChange={this.handleChange} />
//           </label>
//           <label>
//             Salary:
//             <input type="text" name="salary" onChange={this.handleChange} />
//           </label>
//           <button type="submit">Add</button>
//         </form>
//       </div>
//     )
//   }
// }



export default class App extends Component{

    state = {
      id:'',
      employees:[]
    }

    handleChange= event =>{
      this.setState({id:event.target.value});
    }

    handleSubmit= event=> {
      event.preventDefault();

    
      axios.get(`http://localhost:8085/springfox/api/employees/${this.state.id}`)
          .then(res=>{
            const employees=res.data;
            console.log(res.data);
            this.setState({employees});
          })
  
    }
  
  
    render () {
      return (
        <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Person ID:
            <input type="text" name="id" onChange={this.handleChange} />
          </label>
          <button type="submit">Get Employee</button>
        </form>
      </div>
        
        
      );
    }
  }
  


