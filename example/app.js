'use strict'

import React       from "react"
import ReactDOM    from "react-dom"
import http        from "axios"
import StoreEditor from "../src/StoreEditor.js"

http.get(`https://zipstore.herokuapp.com/api/meta`)
.then(function (response) {
  const meta = response.data

  ReactDOM.render(
    <StoreEditor
      name={meta.name}
      serverUrl={meta.url}
      backgroundId={meta.background_id}
      backgroundUrl={meta.background_url}
      logoFonts={meta.logo_fonts}
      layouts={meta.layouts}
      backgrounds={meta.backgrounds}
    />,
    document.getElementById('app')
  )
})
.catch(function (response) {
  console.log(response);
});
