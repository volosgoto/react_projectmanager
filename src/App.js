import React, { Component } from 'react';
import Projects from './components/Projects'
import AddProject from './components/AddProject'

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
        {title: 'Corporation web site', category: 'Web design'},
        {title: 'Mobile App ', category: 'Mobile Development'},
        {title: 'Ecommerce cart', category: 'Web design'}
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
