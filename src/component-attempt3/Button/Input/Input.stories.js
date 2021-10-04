
import React from 'react';
import Input from './Input';

export default {
    title:'Form/Input',
    component:Input, 
}

export const LargeInput = ()=> <Input variant='large' placeholder='input larger size'/>
export const MediumInput = ()=> <Input variant='medium' placeholder='input medium size'/>
export const SmallInput = ()=> <Input variant='small' placeholder='input small size'/>

