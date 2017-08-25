module.exports = {
  loader: 'babel-loader',
  options: {
    "plugins": [
      'transform-object-rest-spread',
      ["import", {
      "libraryName": "antd",
      "style": true,   // or 'css'
      }]
    ]
  }
};
