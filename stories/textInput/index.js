import React from 'react';
import { TextInput } from '~/components';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import Container from '../Container';

storiesOf('TextInput', module).add('Default TextInput', () => (
  <Container>
    <TextInput
      onBlur={action('onBlur')}
      onChange={action('onChange')}
      onFocus={action('onFocus')}
    />
  </Container>
));
