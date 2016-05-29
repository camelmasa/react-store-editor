'use strict'

import React       from "react"
import ReactDOM    from "react-dom"
import http        from "axios"
import StoreEditor from "../src/StoreEditor.js"

http.get(`http://localhost:3000/api/meta`)
.then(function (response) {
  let meta = response.data

  ReactDOM.render(
    <StoreEditor
      name={meta.name}
      serverUrl={meta.url}
      backgroundUrl={meta.background_url}
      logoFonts={meta.logo_fonts}
      layouts={meta.layouts}
    />,
    document.getElementById('app')
  )
})
.catch(function (response) {
  console.log(response);
});
