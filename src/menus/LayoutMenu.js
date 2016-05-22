'use strict'

import React from 'react'

export default class LayoutMenu extends React.Component {
  constructor(props) {
    super(props)

    this.changeLayout = this.changeLayout.bind(this)
  }

  changeLayout(e) {
    let layoutId = parseInt(e.currentTarget.dataset.layoutId)
    let layout   = this.props.data.layouts[layoutId]

    this.props.data.set({ layout: React.createElement(layout, { data: this.props.data })})
    this.props.data.set({ layoutStyle: layout.style() })
    this.props.data.set({ layoutId: layoutId + 1 }) // TODO: Need to refactor
  }

  render() {
    let layouts = this.props.data.layouts.map((layout, i) => {
      return (<a className="item" onClick={this.changeLayout} data-layout-id={i}>{layout.icon()}</a>)
    })

    return (
      <div className="menu-content">{layouts}</div>
    )
  }
}
