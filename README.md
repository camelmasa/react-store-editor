# react-store-editor

React component for Store editor.

## Demo

[demo](http://camelmasa.github.io/react-store-editor/example)

## Example

```js
'use strict'

import React        from "react"
import ReactDOM     from "react-dom"
import StoreEditor  from "react-store-editor"

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
        { image: "/images/men_t_shirts.jpg", name: "Men T Shirts", price: "$20.00"},
        { image: "/images/ladies_t_shirts.jpg", name: "Ladies T Shirts", price: "$20.00"},
        { image: "/images/button_badges.jpg", name: "Button badges", price: "$4.00"},
        { image: "/images/mug.jpg", name: "Mug", price: "$19.00"},
        { image: "/images/seals.jpg", name: "Seals", price: "$5.00"},
        { image: "/images/tracker_hat.jpg", name: "Tracker hat", price: "$17.75"},
        { image: "/images/post_cards.jpg", name: "Post cards", price: "$1.00"},
        { image: "/images/iphone.jpg", name: "iPhone 6/6s, Tough", price: "$53.25"}
      ]}
  />,
  document.getElementById('app')
)
```

## License

MIT
