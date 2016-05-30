'use strict'

import React from 'react'

export default class BackgroundMenu extends React.Component {
  constructor(props) {
    super(props)

    this.changeBackground = this.changeBackground.bind(this)
  }

  changeBackground(e) {
    this.props.data.set({ backgroundId: e.currentTarget.dataset.backgroundId })
  }

  render() {
    let thumbnails = this.props.data.backgrounds.map((background, i) => {
      return (
        <span onClick={this.changeBackground} data-background-id={i}>
          <img src={background.thumbnail_url} />
        </span>
      )
    })

    return <div className="menu-content">{thumbnails}/* Background pattern from subtlepatterns.com */</div>
  }
}
