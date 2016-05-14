'use strict'

import React  from 'react'
import Frame  from "react-frame"

export default class Preview extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let family = this.props.data.logoFont.replace(" ", "+")

    // TODO: configure CSS using object
    return (
      <Frame css={`@import url(https://fonts.googleapis.com/css?family=${family}); body { background: url("http://subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/${this.props.data.background}.png"); } h1.logo { font-size: ${this.props.data.logoSize}px; color: ${this.props.data.logoColor}; font-family: '${this.props.data.logoFont}', cursive;} ${this.props.data.layoutStyle}`}
             styleSheets={["https://cdnjs.cloudflare.com/ajax/libs/normalize/4.1.1/normalize.css"]}
             className={this.props.data.previewClassName} >
        {this.props.data.layout}
      </Frame>
    )
  }
}
