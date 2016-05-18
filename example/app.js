'use strict'

import React        from "react"
import ReactDOM     from "react-dom"
import StoreEditor  from "../src/StoreEditor.js"

ReactDOM.render(
  <StoreEditor
      name={"React store"}
      background={"tileable_wood_texture"}
      cssPrefix={"store-editor"}
      logoFont={"Amatic SC"}
      logoSize={"50"}
      logoColor={"#000"}
      menuSelectedIndex={0}
      sidebarClassName={"sidebar"}
      sidebarOpen={false}
      sidebarShadow={true}
      sidebarStyle={ { sidebar: { overflowY: "hidden" }, overlay: { backgroundColor: "" } } }
      previewClassName={"preview"}
      products={ [
        { image: "./images/men_t_shirts.jpg",    name: "Men T Shirts",       price: "$20.00", content: "It's awesome thing !" },
        { image: "./images/ladies_t_shirts.jpg", name: "Ladies T Shirts",    price: "$20.00", content: "It's awesome thing !" },
        { image: "./images/button_badges.jpg",   name: "Button badges",      price: "$4.00",  content: "It's awesome thing !" },
        { image: "./images/mug.jpg",             name: "Mug",                price: "$19.00", content: "It's awesome thing !" },
        { image: "./images/seals.jpg",           name: "Seals",              price: "$5.00",  content: "It's awesome thing !" },
        { image: "./images/tracker_hat.jpg",     name: "Tracker hat",        price: "$17.75", content: "It's awesome thing !" },
        { image: "./images/post_cards.jpg",      name: "Post cards",         price: "$1.00",  content: "It's awesome thing !" },
        { image: "./images/iphone.jpg",          name: "iPhone 6/6s, Tough", price: "$53.25", content: "It's awesome thing !" }
      ]}
  />,
  document.getElementById('app')
)
