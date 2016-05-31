'use strict'

import React from 'react'

export default class LayoutMenu extends React.Component {
  constructor(props) {
    super(props)

    this.changeLayout = this.changeLayout.bind(this)
  }

  changeLayout(e) {
    const layoutId = parseInt(e.currentTarget.dataset.layoutId)
    this.props.data.set({ layoutId: layoutId })
  }

  render() {
    const layouts = this.props.data.layouts.map((layout, i) => {
      return <a className="item" onClick={this.changeLayout} data-layout-id={i}><img src={layout.icon_url} /></a>
    })

    return <div className="menu-content">{layouts}</div>
  }
}
