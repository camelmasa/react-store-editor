'use strict'

import React  from 'react'
import {Icon} from 'react-fa'

export default class MenuButton extends React.Component {
  constructor(props) {
    super(props)

    this.handleMenu = this.handleMenu.bind(this)
  }

  handleMenu(e) {
    this.props.data.set({ sidebarOpen: true })
  }

  render() {
    return (
      <div className="menu-button" onClick={this.handleMenu}>
        <Icon name="bars" />
      </div>
    )
  }
}
