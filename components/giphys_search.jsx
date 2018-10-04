import React, { Component } from 'react'

export default class GiphysSearch extends Component {
  constructor (props) {
    super(props)

    this.state = {
      searchTerm: ''
    }
  }

  handleInput (e) {
    e.preventDefault()

    this.setState({
      searchTerm: e.target.value
    })
  }

  handleSubmit (e) {
    e.preventDefault()

    this.props.fetchSearchGiphys(this.state.searchTerm).then(
      this.setState({
        searchTerm: ''
      })
    )
  }

  render() {
    return (
      <div>
        <form onSubmit={ (e) => this.handleSubmit(e) }>
          <input onChange={(e) => { this.handleInput(e) }} value={this.state.searchTerm} />
          <button type="submit">Search</button>
        </form>
      </div>
    )
  }
}

