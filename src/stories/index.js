import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, text, select, withKnobs } from '@storybook/addon-knobs/react'
import { withInfo } from '@storybook/addon-info'

import Button, { COLORS } from '../components/Button';
import ButtonREADME from '../components/Button/README.md.storybook'

storiesOf('Buttons', module)
  .addDecorator(withKnobs)
  .add('Button', withInfo(ButtonREADME)(
    () => (<Button disabled={boolean('Disabled', false)}
      color={select('Color', Object.values(COLORS))}
      isLoading={boolean('Is loading', false)}
      fillWidth={boolean('Fill width', false)}
      roundish={boolean('Roundish', false)}
      noFill={boolean('No fill', false)}
      noOutline={boolean('No outline', false)}
      onClick={action('clicked')}>{text('Label', 'Button')}</Button>))
  )
