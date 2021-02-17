
import React from 'react'
import { actions } from '@storybook/addon-actions'

import PageHeader from './index'

export default {
  title: 'Page Header',
  component: PageHeader,
}

const events = actions({ titleClicked: "title clicked", signOut: 'sign out', newPost: "new post", profile: "profile", onSearch: "search", login: "login"})

export const LoggedIn = () => (
  <PageHeader 
  title="Social Something"
  {...events}
  user={true}
  ></PageHeader>
)

export const LoggedOut = () => (
  <PageHeader 
  title="Social Something"
  {...events}
  ></PageHeader>
)
