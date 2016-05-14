'use strict'

import React          from 'react'
import {Icon}         from 'react-fa'
import ReactTabs      from 'react-tabs'
import LayoutMenu     from './menus/LayoutMenu.js'
import LogoMenu       from './menus/LogoMenu.js'
import BackgroundMenu from './menus/BackgroundMenu.js'

export default class Menu extends React.Component {
  constructor(props) {
    super(props)

    this.changeSelect = this.changeSelect.bind(this)
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
        </TabList>
        <TabPanel><LayoutMenu     data={this.props.data} /></TabPanel>
        <TabPanel><LogoMenu       data={this.props.data} /></TabPanel>
        <TabPanel><BackgroundMenu data={this.props.data} /></TabPanel>
      </Tabs>
    )
  }
}
