module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'ReactCleanTable',
      externals: {
        react: 'React'
      }
    }
  }
}
