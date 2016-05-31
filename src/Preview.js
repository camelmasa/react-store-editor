'use strict'

import React  from 'react'
import Frame  from "react-frame"

export default class Preview extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const logoFont   = this.props.data.logoFonts[this.props.data.logoFontId]
    const layout     = this.props.data.layouts[this.props.data.layoutId]
    const background = this.props.data.backgrounds[this.props.data.backgroundId]

    // TODO: configure CSS using object
    return (
       <Frame css={`@import url(${logoFont.css_path}); body { background: url("${background.url}"); } h1.logo { font-size: ${this.props.data.logoSize}px; color: ${this.props.data.logoColor}; font-family: '${logoFont.name}', cursive;} ${layout.css}`}
        styleSheets={["https://cdnjs.cloudflare.com/ajax/libs/normalize/4.1.1/normalize.css"]}
        className={"preview"} >
        <div dangerouslySetInnerHTML={ { __html: layout.html } } />
      </Frame>
    )
  }
}
