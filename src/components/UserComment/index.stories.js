
import React from 'react'
import { actions } from '@storybook/addon-actions'

import UserComment from './index'

import data from '../../fakeData'

export default {
  title: 'User Comment',
  component: UserComment,
}

const events = actions({ onSubmit: 'submit' })

export const Default = () => (
  <UserComment 
  comment={data[0].comments[0]}
  {...events}
  ></UserComment>
)
