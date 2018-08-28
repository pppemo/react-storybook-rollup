import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options'
import appPackage from '../package.json'

function loadStories() {
  require('../src/stories');
}

setOptions({
  name: `My Storybook v${appPackage.version}`,
  url: '/storybook/index.html',
  addonPanelInRight: true,
  hierarchySeparator: /\//
})

configure(loadStories, module);
