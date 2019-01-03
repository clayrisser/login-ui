import React from 'react';
import { Button } from '~/components';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import Container from '../Container';

storiesOf('Button', module).add('Default Button', () => (
  <Container>
    <Button onClick={action('onClick')}>Hello, world!</Button>
  </Container>
));
