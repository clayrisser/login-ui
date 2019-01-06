import React from 'react';
import { Checkbox } from '~/components';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import Container from '../Container';

storiesOf('Checkbox', module).add('Default Checkbox', () => (
  <Container>
    <Checkbox onChange={action('onChange')} />
  </Container>
));
