'use strict'

import React  from 'react'
import Frame  from "react-frame"

export default class Preview extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let logoFont = this.props.data.logoFonts[this.props.data.logoFontId]
    let layout   = this.props.data.layouts[this.props.data.layoutId]

    // TODO: configure CSS using object
    return (
       <Frame css={`@import url(${logoFont.css_path}); body { background: url("${this.props.data.backgroundUrl}"); } h1.logo { font-size: ${this.props.data.logoSize}px; color: ${this.props.data.logoColor}; font-family: '${logoFont.name}', cursive;} ${layout.css}`}
        styleSheets={["https://cdnjs.cloudflare.com/ajax/libs/normalize/4.1.1/normalize.css"]}
        className={"preview"} >
        <div dangerouslySetInnerHTML={ { __html: layout.html } } />
      </Frame>
    )
  }
}
