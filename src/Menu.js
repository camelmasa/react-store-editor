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
    this.changeSelect = this.changeSelect.bind(this)
  }

  clickDownload() {
    let d = this.props.data

    window.location = `${d.serverUrl}/download?store_assets[name]=${d.name}&store_assets[locale]=${d.locale}&store_assets[logo_font_id]=${d.logoFontId}&store_assets[layout_id]=${d.layoutId}&store_assets[background_url]=http://subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/${d.background}.png&store_assets[logo_size]=${d.logoSize}&store_assets[logo_color]=${d.logoColor}`
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
