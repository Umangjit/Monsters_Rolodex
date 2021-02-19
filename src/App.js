import React, { Component } from "react";
import "./App.css";
import {CardList} from './components/card-list/card-list';
import {SearchBox} from './components/card-list/search-box/SearchBox';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };   
  }

  async componentDidMount() {
   const rawData= await fetch('http://jsonplaceholder.typicode.com/users');
   const finalData = await rawData.json();
   this.setState({monsters:finalData})
  }

   getSearch = (e) =>{this.setState({searchField:e.target.value})}  

  render() {
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
        <h1>Monster - Rolodex</h1>
       <SearchBox placeholder="search monsters" handleChange={this.getSearch}/>
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}
