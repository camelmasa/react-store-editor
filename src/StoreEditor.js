'use strict'

require("./css/index.scss")

import React      from 'react'
import Sidebar    from "react-sidebar"
import Menu       from "./Menu.js"
import MenuButton from "./MenuButton.js"
import Preview    from "./Preview.js"

export default class StoreEditor extends React.Component {
  constructor(props) {
    super(props)

    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this)

    this.state = {
      set:               this.set.bind(this),
      name:              this.props.name,
      serverUrl:         this.props.serverUrl,
      backgroundUrl:     this.props.backgroundUrl,
      backgrounds:       this.props.backgrounds       || [],
      layouts:           this.props.layouts           || [],
      logoFonts:         this.props.logoFonts         || [],
      locale:            this.props.locale            || "en",
      layoutId:          this.props.layoutId          || 0,
      logoFontId:        this.props.logoFontId        || 0,
      logoSize:          this.props.logoSize          || 50,
      logoColor:         this.props.logoColor         || "#000",
      menuSelectedIndex: this.props.menuSelectedIndex || 0,
      sidebarOpen:       this.props.sidebarOpen       || false,
      sidebarShadow:     this.props.sidebarShadow     || true,
      sidebarStyle:      this.props.sidebarStyle      || { sidebar: { overflowY: "hidden" }, overlay: { backgroundColor: "" } }
    }
  }

  onSetSidebarOpen(open) {
    this.set({ sidebarOpen: open })
  }

  set(object) {
    this.setState(object)
  }

  render() {
    return (
      <div className={"store-editor"} >
        <Sidebar
          sidebar={<Menu data={this.state} />}
          open={this.state.sidebarOpen}
          onSetOpen={this.onSetSidebarOpen}
          shadow={this.state.sidebarShadow}
          sidebarClassName={"sidebar"}
          styles={this.state.sidebarStyle}>
          <MenuButton data={this.state} />
          <Preview data={this.state}/>
        </Sidebar>
      </div>
    )
  }
}
