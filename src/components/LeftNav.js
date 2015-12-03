
import React from 'react'
import {Link} from 'react-router'

import View from '../View'

import StoriesView from './StoriesView'

const LeftNav = ({storyId, ctx}) => (
  <View style={styles.container}>
    <View style={styles.topItems}>
      <Link style={styles.link} onlyActiveOnIndex activeStyle={styles.activeLink} to="/">Home</Link>
      <Link style={styles.link} activeStyle={styles.activeLink} to="/map">Map</Link>
    </View>
    <StoriesView selected={storyId} ctx={ctx} />
  </View>
)

export default LeftNav

const styles = {
  container: {
    width: 300,
    borderRight: '1px solid #ccc',
  },
  topItems: {
    flexDirection: 'row',
  },
  link: {
    textDecoration: 'none',
    color: 'white',
    backgroundColor: 'palevioletred',
    padding: '5px 10px',
    flex: 1,
    textAlign: 'center',
  },

  activeLink: {
    backgroundColor: 'purple',
  },
}

