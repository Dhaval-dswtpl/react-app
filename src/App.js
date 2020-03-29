import React from 'react';
import logo from './logo.svg';
import { CardList } from  './components/card-lists/card-lists.component';
import { SearchBox } from './components/search-box/search-box.components';
import './App.css';


class App extends React.Component
{

  constructor(){
    super();

    this.state = {
       monster:[],
       searchFiled:''
    }

    
  };

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json()) 
    .then(users => this.setState({ monster: users})) 
  }
  render() {
    const {monster, searchFiled } = this.state;
    const filteredMonsterd = monster.filter(monster => 
        monster.name.toLowerCase().includes(searchFiled.toLowerCase())
      )
     return (
      <div className="App">
        <h1> Monster</h1>
        <SearchBox placeholder= 'Search' handleChange =  { e => this.setState({searchFiled : e.target.value})} />
         <CardList monster={filteredMonsterd}>
          </CardList>
      </div>
    );
  }
  
}


export default App;
