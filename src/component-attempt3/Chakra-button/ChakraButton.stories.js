/* import React from 'react';
import { Button } from '@chakra-ui/core';

export default {
    title: 'Chakra/button',
    component:Button
}

export const Success = () => <Button colorScheme="pink">Success</Button>
export const Primary = () => <Button colorScheme="teal">Primary</Button> */

import React from 'react'
import { Button } from '@chakra-ui/core'

export default {
  title: 'Chakra/Button',
  component: Button,

}

export const Success = () => <Button variantColor='green'>Success</Button>
export const Danger = () => <Button variantColor='red'>Danger</Button>