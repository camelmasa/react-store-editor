'use strict'

import React      from 'react'
import DetailPage from '../DetailPage.js'

export default class Panel extends React.Component {
  static icon () {
    return <img src={require(`../images/panel.png`)} />
  }

  static style() {
    return `
      .container {
        position: relative;
        width: 100%;
        max-width: 960px;
        margin: 0 auto;
        padding: 0 20px;
        box-sizing: border-box;
      }

      .logo {
        text-align: center;
      }

      .menu {
        margin-bottom: 20px;
      }

      .menu span {
        margin-right: 10px;
      }

      .product {
        margin-bottom: 20px;
        width: 100%;
        float: left;
        box-sizing: border-box;
      }

      .image img {
        width: 100%;
        max-width: 480px;
        margin-bottom: 5px;
      }

      .name {
        margin-bottom: 2px;
      }

      @media (min-width: 400px) {
        .container {
          width: 85%;
          padding: 0;
        }
      }

      @media (min-width: 550px) {
        .container { width: 80%; }
        .product { margin-left: 4%; }
        .product:first-child { margin-left: 0; }
        .product { width: 22% }
      }
      @media (min-width: 400px) {}
      @media (min-width: 550px) {}
      @media (min-width: 750px) {}
      @media (min-width: 1000px) {}
      @media (min-width: 1200px) {}
    `
  }

  constructor(props) {
    super(props)

    this.clickImage = this.clickImage.bind(this)
  }


  clickImage(e) {
    let product = this.props.data.products[e.currentTarget.dataset.productId]

     this.props.data.set({ layout: <DetailPage data={this.props.data} product={product} /> })
  }

  render() {
    let productLayouts = this.props.data.products.map((product, i) => {
      return (
        <div className="product">
          <div className="image">
            <img src={product.image} onClick={this.clickImage} data-product-id={i} />
          </div>
          <div className="name">
            {product.name}
          </div>
          <div className="price">
            {product.price}
          </div>
        </div>
      )
    })

    let layout = []
    let num = Math.ceil(productLayouts.length / 4)

    for (let i = 0; i < num; i++) {
      layout.push(<div>{productLayouts.slice(i * 4, i * 4 + 4)}</div>)
    }

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
