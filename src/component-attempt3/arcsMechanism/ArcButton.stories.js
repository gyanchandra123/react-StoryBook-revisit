import React from "react";
import Button from '../Button/Button.js'

export default {
  title: "Form/ArcS-button",
  component: Button,
  args:{
      children:'arc at component level'// ***setting args property value at component level.
  }
};
 


const Template = args => <Button {...args}/>

export const PrimaryArc = Template.bind({});
PrimaryArc.args ={
    variant:'primary',
  //  children:'primary'
}

export const SecondaryArc = Template.bind({});
SecondaryArc.args ={
    variant:'secondary',
  //  children:'secondary'
}

export const LongPrimaryArc = Template.bind({});
LongPrimaryArc.args ={
    ...PrimaryArc,
   // children:'long primary'
}
