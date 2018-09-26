import React, { Component } from 'react'
import Projects from './Projects'

 class ProjectItem extends Component {
  render() {
    return (
      <li className="Project">
        {this.props.project.title} - {this.props.project.category}

      </li>
    )
  }
}

export default ProjectItem;