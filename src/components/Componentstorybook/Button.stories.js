import React from 'react'
import Button from './Button'

export default {
  title: 'Button',
  component: Button
}

export const Primary = () => <Button variant='primary'>Name</Button>
export const Secondary = () => <Button variant='secondary'>Birth</Button>
export const Success = () => <Button variant='success'>death</Button>
export const Danger = () => <Button variant='danger'>spouse</Button>