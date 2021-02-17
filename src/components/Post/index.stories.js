import React from 'react'
import Post from './index'
import { actions } from '@storybook/addon-actions'

import data from '../../fakeData'

const post1 = data[0]
post1.liked = false
const post2 = data[1]
post2.liked = true


const events = actions({ cardClicked: 'card clicked', likeClicked: 'like clicked', commentClicked: 'comment clicked' })

export default {
  title: 'Post',
  component: Post,
}

export const Unliked = () => (
  <Post {...events} post={post1} />
)

export const Liked = () => (
  <Post {...events} post={post2} />
)