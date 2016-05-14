'use strict'

import React from 'react'

export default class LayoutMenu extends React.Component {
  constructor(props) {
    super(props)

    this.changeLayout = this.changeLayout.bind(this)
  }

  changeLayout(e) {
    let layout = this.props.data.layouts[e.currentTarget.dataset.layoutId]
    this.props.data.set({ layout: React.createElement(layout, { data: this.props.data })})
    this.props.data.set({ layoutStyle: layout.style() })
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
