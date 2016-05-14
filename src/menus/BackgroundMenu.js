'use strict'

import React from 'react'
import thumbnails from './thumbnails.json'

export default class BackgroundMenu extends React.Component {
  constructor(props) {
    super(props)

    this.changeBackground = this.changeBackground.bind(this)
  }

  changeBackground(e) {
    this.props.data.set({ background: e.currentTarget.dataset.background })
  }

  render() {
    let thumbs = thumbnails.map((thumbnail) => {
      return (
        <span onClick={this.changeBackground} data-background={thumbnail}>
          <img src={`/thumbnails/${thumbnail}.png`} />
        </span>
      )
    })

    return (<div className="menu-content">{thumbs}</div>)
  }
}
