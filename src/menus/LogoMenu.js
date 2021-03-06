'use strict'

require('rc-slider/assets/index.css');

import React  from 'react'
import Slider from 'rc-slider'

export default class LogoMenu extends React.Component {
  constructor(props) {
    super(props)

    this.changeLogoFont   = this.changeLogoFont.bind(this)
    this.changeLogoColor  = this.changeLogoColor.bind(this)
    this.changeLogoSize   = this.changeLogoSize.bind(this)
  }

  changeLogoFont(e) {
    const fontId = e.currentTarget.dataset.fontId

    this.props.data.set({ logoFontId: fontId })
  }

  changeLogoColor(e) {
    this.props.data.set({ logoColor: e.currentTarget.style.background })
  }

  changeLogoSize(value) {
    this.props.data.set({ logoSize: value })
  }

  render() {
    const logoFontTemplate = this.props.data.logoFonts.map((logoFont, index) => {
      return (
        <div>
          <a className="item" onClick={this.changeLogoFont} data-font-id={index}>
            <img src={logoFont.icon_url} />
          </a>
        </div>
      )
    })

    return (
      <div className="menu-content">
        <div className="font">
          <h3>Logo font</h3>
          {logoFontTemplate}
        </div>
        <div className="size">
          <h3>Logo size</h3>
          <div>
            <Slider value={this.props.data.logoSize} onChange={this.changeLogoSize} />
          </div>
        </div>
        <div className="color">
          <h3>Logo color</h3>
          <div className="circles">
            <div className="item circle" style={ { background: "#000" } }    onClick={this.changeLogoColor}></div>
            <div className="item circle" style={ { background: "#282828" } } onClick={this.changeLogoColor}></div>
            <div className="item circle" style={ { background: "#585858" } } onClick={this.changeLogoColor}></div>
            <div className="item circle" style={ { background: "#888" } }    onClick={this.changeLogoColor}></div>
            <div className="item circle" style={ { background: "#B8B8B8" } } onClick={this.changeLogoColor}></div>
            <div className="item circle" style={ { background: "#fff" } }    onClick={this.changeLogoColor}></div>
          </div>
        </div>
      </div>
    )
  }
}
