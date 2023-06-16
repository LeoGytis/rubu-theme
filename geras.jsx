import React, { Component } from 'react'
import { connect } from 'react-redux'

export class geras extends Component {
  render() {
    return (
      <div>geras</div>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(geras)