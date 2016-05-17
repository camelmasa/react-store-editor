'use strict'

import React          from 'react'
import {Icon}         from 'react-fa'
import zip            from 'jszip'
import filesaver      from 'filesaverjs'
import ReactTabs      from 'react-tabs'
import LayoutMenu     from './menus/LayoutMenu.js'
import LogoMenu       from './menus/LogoMenu.js'
import BackgroundMenu from './menus/BackgroundMenu.js'

window.JSZip     = zip
window.filesaver = filesaver

export default class Menu extends React.Component {
  constructor(props) {
    super(props)

    this.clickDownload = this.clickDownload.bind(this)
    this.changeSelect = this.changeSelect.bind(this)
  }

  clickDownload() {
    let iframe       = document.querySelector(".preview").contentWindow.document
    let content      = iframe.all[0].innerHTML
    let designedPage = `<html>${content}</html>`

    let zip = new JSZip
    zip.file("index.html", designedPage)

    this.props.data.products.forEach((product, index) => {
      let img    = iframe.querySelector(`img[src="${product.image}"]`);
      let canvas = document.createElement('canvas')

      canvas.width  = img.naturalWidth
      canvas.height = img.naturalHeight

      let ctx = canvas.getContext('2d')
      ctx.drawImage(img, 0, 0)
      let imageData = canvas.toDataURL().split(',')[1]

      zip.file(product.image, imageData, { base64: true })
    })

    zip.generateAsync({type:"blob"})
      .then((content) => {
      filesaver.saveAs(content, "example.zip");
    });
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
