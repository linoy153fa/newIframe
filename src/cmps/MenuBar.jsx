

import { NavLink } from 'react-router-dom'
import { Component } from 'react'

export class MenuBar extends Component {
  
  render() {
    return (
      <div className="obj">
        <NavLink className="as" to="/">Search</NavLink>
        <NavLink className="as" to="/about">About</NavLink>
      </div>
    )
  }
}