# FabHotels CRS App

### Getting started

Checkout this repo, install dependencies, then start the gulp process with the following:

```
> git clone https://sahil_fab@bitbucket.org/sahil_fab/fabcrs-ui.git
> cd fabcrs-ui
> npm install
> npm start
```

### Dependency management
It's a good idea to have everyone on the same version. To make this easier for everyone, the
 .npmrc file has some useful properties that can make sure npm install always updates the 
 package.json and enforces the version of installed dependency to be an exact match.

```
> npm config set save=true
> npm config set save-exact=true
> npm install -g eslint
```

### Behind the scenes 
 Must have:

   // "eslint": "^4.16.0",


```
> npm install --save react react-dom prop-types react-redux react-router react-router-dom react-router-redux react-slick react-swipeable redux redux-logger redux-thunk axios d3 keymirror
> npm install --save-dev webpack webpack-dev-server webpack-dashboard html-webpack-plugin webpack-cleanup-plugin webpack-s3-plugin file-loader style-loader css-loader less less-loader eslint eslint-plugin-react eslint-plugin-import eslint-plugin-jsx-a11y eslint-config-airbnb babel-eslint babel-loader babel-core babel-preset-env babel-preset-react babel-preset-stage-1
```