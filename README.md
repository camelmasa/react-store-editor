# react-store-editor

React component for Store editor.

## Demo

[demo](http://camelmasa.github.io/react-store-editor/example)

## Example

```js
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

```

## License

MIT

This project is using [React logo ](https://github.com/facebook/react/blob/master/docs/img/logo.svg) for example products images.
See [license](https://github.com/facebook/react/blob/master/LICENSE-docs) for reference. (creative commons license)

Also, this project is using [Subtle Patterns](http://subtlepatterns.com/) for background images.
See [Frequently Asked Questions](http://subtlepatterns.com/about/) for reference.
