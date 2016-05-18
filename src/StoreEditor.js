'use strict'

require("./css/index.scss")

import React      from 'react'
import Sidebar    from "react-sidebar"
import Menu       from "./Menu.js"
import MenuButton from "./MenuButton.js"
import Preview    from "./Preview.js"
import Standard   from "./layouts/Standard.js"
import Panel      from "./layouts/Panel.js"

export default class StoreEditor extends React.Component {
  constructor(props) {
    super(props)

    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this)

    this.state = {
      set:               this.set.bind(this),
      locale:            this.props.locale || "en",
      name:              this.props.name,
      background:        this.props.background,
      cssPrefix:         this.props.cssPrefix,
      logoFont:          this.props.logoFont,
      logoSize:          this.props.logoSize,
      logoColor:         this.props.logoColor,
      menuSelectedIndex: this.props.menuSelectedIndex,
      sidebarClassName:  this.props.sidebarClassName,
      sidebarOpen:       this.props.sidebarOpen,
      sidebarShadow:     this.props.sidebarShadow,
      sidebarStyle:      this.props.sidebarStyle,
      previewClassName:  this.props.previewClassName,
      products:          this.props.products
    }

    this.state.t = require(`json!yaml!./data/${this.state.locale}.yml`);
  }

  componentWillMount() {
    // TODO: Implement custom layout API
    this.state.layouts = [Panel, Standard]
    this.state.layout = (<Panel data={this.state} />)
    this.state.layoutStyle = Panel.style()
  }

  onSetSidebarOpen(open) {
    this.set({ sidebarOpen: open })
  }

  set(object) {
    this.setState(object)
  }

  render() {
    return (
      <div className={this.state.cssPrefix} >
        <Sidebar
          sidebar={<Menu data={this.state} />}
          open={this.state.sidebarOpen}
          onSetOpen={this.onSetSidebarOpen}
          shadow={this.state.sidebarShadow}
          sidebarClassName={this.state.sidebarClassName}
          styles={this.state.sidebarStyle}>
          <MenuButton data={this.state} />
          <Preview data={this.state}/>
        </Sidebar>
      </div>
    )
  }
}
