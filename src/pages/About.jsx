import { Component } from 'react'
import { GoogleMap } from '../cmps/GoogleMap'

export class About extends Component {


  render() {

    return (
      <div>
        <h1>About Us</h1>
        <p>Happy to see you here.</p>
        <p>You can contact us anytime,anywhere in our branches</p>
        <h2>Branches</h2>
        <GoogleMap />
      </div>
    )
  }
}

