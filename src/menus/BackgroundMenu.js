'use strict'

import React from 'react'

export default class BackgroundMenu extends React.Component {
  constructor(props) {
    super(props)

    this.changeBackground = this.changeBackground.bind(this)
  }

  changeBackground(e) {
    this.props.data.set({ backgroundUrl: e.currentTarget.dataset.backgroundUrl })
  }

  render() {
    let thumbnails = this.props.data.backgrounds.map((background) => {
      return (
        <span onClick={this.changeBackground} data-background-url={background.url}>
          <img src={background.thumbnail_url} />
        </span>
      )
    })

    return <div className="menu-content">{thumbnails}/* Background pattern from subtlepatterns.com */</div>
  }
}
