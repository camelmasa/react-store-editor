'use strict'

import React from 'react'

export default class DetailPage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let product = this.props.product

    let layout = <div className="product">
                   <div className="image">
                     <img src={product.image} />
                   </div>
                   <div className="name">
                     {product.name}
                   </div>
                   <div className="price">
                     {product.price}
                   </div>
                   <div className="content">
                     {product.content}
                   </div>
                 </div>

    let t = this.props.data.t
    let menu = <div className="menu"><span>{t.home}</span><span>{t.about}</span><span>{t.category}</span></div>

    return (
      <div className="container" >
        <h1 className="logo">{this.props.data.name}</h1>
        {menu}
        <div className="main">{layout}</div>
      </div>
    )
  }
}
