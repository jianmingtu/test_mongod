
import React from 'react'
import { actions } from '@storybook/addon-actions'

import NewPost from './index'

export default {
  title: 'New Post',
  component: NewPost,
}

const events = actions({ onSubmit: 'submit', onClose: 'close' })

export const Default = () => (
  <NewPost 
  {...events}
  ></NewPost>
)
