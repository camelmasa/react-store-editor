'use strict'

import React from 'react'
import thumbnails from '../data/thumbnails.json'

export default class BackgroundMenu extends React.Component {
  constructor(props) {
    super(props)

    this.changeBackground = this.changeBackground.bind(this)
  }

  changeBackground(e) {
    this.props.data.set({ backgroundUrl: e.currentTarget.dataset.backgroundUrl })
  }

  render() {
    // TODO: Move assets to server
    let thumbs = thumbnails.map((thumbnail) => {
      let url = `http://subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/${thumbnail}.png`

      return (
        <span onClick={this.changeBackground} data-background-url={url}>
          <img src={require(`../images/thumbnails/${thumbnail}.png`)} />
        </span>
      )
    })

    return <div className="menu-content">{thumbs}/* Background pattern from subtlepatterns.com */</div>
  }
}
