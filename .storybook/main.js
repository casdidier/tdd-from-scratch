module.exports = {
  stories: ['../stories/**/*.stories.js'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links', '@storybook/addon-knobs/register'],
};


// import { configure } from '@storybook/react'
// import '../src/global/styles.css'

// const req = require.context('../src', true, /\.stories\.jsx$/)

// function loadStories() {
//   req.keys().forEach(req)
// }

// configure(loadStories, module)