import React, { Component } from 'react';
import Projects from './components/Projects'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: [
        {title: 'Corporation web site', category: 'Web design'},
        {title: 'Mobile App ', category: 'Mobile Development'},
        {title: 'Ecommerce cart', category: 'Web design'}
      ]
    }
  }
  
  render() {

    return (
      <div className="App">
        My app
        <Projects projects = { this.state.projects } />
      </div>
    );
  }
}

export default App;
