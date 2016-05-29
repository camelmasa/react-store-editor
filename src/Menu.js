'use strict'

import React          from 'react'
import {Icon}         from 'react-fa'
import filesaver      from 'filesaverjs'
import ReactTabs      from 'react-tabs'
import LayoutMenu     from './menus/LayoutMenu.js'
import LogoMenu       from './menus/LogoMenu.js'
import BackgroundMenu from './menus/BackgroundMenu.js'

export default class Menu extends React.Component {
  constructor(props) {
    super(props)

    this.clickDownload = this.clickDownload.bind(this)
    this.changeSelect  = this.changeSelect.bind(this)
  }

  clickDownload() {
    let data     = this.props.data
    let layout   = data.layouts[data.layoutId]
    let logoFont = data.logoFonts[data.logoFontId]

    window.location = `${data.serverUrl}/download?store[store_logo_font_attributes][logo_font_id]=${logoFont.id}&store[store_layout_attributes][layout_id]=${layout.id}&store[background_url]=${data.backgroundUrl}&store[logo_size]=${data.logoSize}&store[logo_color]=${data.logoColor}`
  }

  changeSelect(index) {
    this.props.data.set({ menuSelectedIndex: index })
  }

  render() {
    let Tab      = ReactTabs.Tab
    let Tabs     = ReactTabs.Tabs
    let TabList  = ReactTabs.TabList
    let TabPanel = ReactTabs.TabPanel

    return (
      <Tabs onSelect={this.changeSelect} selectedIndex={this.props.data.menuSelectedIndex} >
        <TabList className="menu">
          <Tab><Icon name="th-large" /></Tab>
          <Tab><Icon name="font" /></Tab>
          <Tab><Icon name="picture-o" /></Tab>
          <span onClick={this.clickDownload} className="save"><Icon name="save" /></span>
        </TabList>
        <TabPanel><LayoutMenu     data={this.props.data} /></TabPanel>
        <TabPanel><LogoMenu       data={this.props.data} /></TabPanel>
        <TabPanel><BackgroundMenu data={this.props.data} /></TabPanel>
      </Tabs>
    )
  }
}
