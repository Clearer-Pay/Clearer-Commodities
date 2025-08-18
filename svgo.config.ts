module.exports = {
  plugins: [
    { name: 'removeTitle', active: true },
    { name: 'removeDesc', active: true },
    { name: 'removeDimensions', active: true },
    { name: 'convertColors', active: true },
    { name: 'removeUnusedNS', active: true },
    { name: 'mergePaths', active: true },
    { name: 'removeAttrs', params: { attrs: '(stroke|fill)' } },
  ],
};
