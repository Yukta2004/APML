import React, { Component } from 'react'
import Loading from '../components/Loading.gif';

export class Spinner extends Component {
  render() {
    return (
      <div>
        <>
        <div className="text-center" >
        <img src = {Loading} alt ="loading"/>
        </div>
      </>
      </div>
    )
  }
}


