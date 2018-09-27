import React, { Component } from 'react';
import Projects from './components/Projects'
import AddProject from './components/AddProject'
import uuid from 'uuid';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: []
    }
  }

  componentWillMount(){ // Alt to constructor()
    this.setState({
      projects: [
        {id: uuid.v4(), title: 'Corporation web site', category: 'Web design'},
        {id: uuid.v4(), title: 'Mobile App ', category: 'Mobile Development'},
        {id: uuid.v4(), title: 'Ecommerce cart', category: 'Web design'}
      ]
    })
  }
   
  handleAddProject(project){
    let projects = this.state.projects;
    projects.push(project);
    this.setState( { projects : projects } );
  }

  render() {

    return (
      <div className="App">
        <AddProject addProject = { this.handleAddProject.bind(this) }/>
        <Projects projects = { this.state.projects } />
      </div>
    );
  }
}

export default App;
