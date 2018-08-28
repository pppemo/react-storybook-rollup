import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, text, select, withKnobs } from '@storybook/addon-knobs/react'
import Button, { COLORS } from '../components/Button';

storiesOf('Buttons', module)
  .addDecorator(withKnobs)
  .add('Button',
    () => (<Button disabled={boolean('Disabled', false)}
      color={select('Color', Object.values(COLORS))}
      isLoading={boolean('Is loading', false)}
      fillWidth={boolean('Fill width', false)}
      roundish={boolean('Roundish', false)}
      noFill={boolean('No fill', false)}
      noOutline={boolean('No outline', false)}
      onClick={action('clicked')}>{text('Label', 'Button')}</Button>)
  )
