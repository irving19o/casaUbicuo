import React, { Component } from 'react'
import Page from 'react-page-loading'

class PageLoader extends Component {
  constructor(props) {
    super(props)
    console.log(props)
    this.state ={
        loading: true
    }
  }

  render() {
    let className = 'pageLoader';
    if (!this.state.loading) {
      className += ' hidden';
    }

    return (
      
        <Page loading={this.state.loading} className={className} loader={"bar"} color={"#A9A9A9"} size={4}>
          
        </Page>
     
    )
  }
}

export default PageLoader