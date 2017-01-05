import React, { Component } from 'react'
import { Scene, Router, Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'

// screens identified by the router
import HomepageScreen from '../containers/homepage.container'
import FeedsScreen from '../containers/feeds.container'
import FeedItemScreen from '../containers/feedItem.container'

class NavigationRouter extends Component {

  componentWillReceiveProps (nextProps) {
    const {isLoggedIn} = nextProps
    if (isLoggedIn) Actions.feeds()
  }

  componentDidMount () {
    const {isLoggedIn} = this.props
    if (!isLoggedIn) Actions.loginModal()
  }
  render () {
    return (
      <Router>
        <Scene key='loginModal' hideNavBar direction='vertical' component={HomepageScreen} schema='modal' title='Login' />
        <Scene key='feeds' hideNavBar>
          <Scene key='feedsList' component={FeedsScreen} initial />
          <Scene key='feedItem' component={FeedItemScreen} />
        </Scene>
      </Router>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isLoggedIn: state.user.get('isLoggedIn')
  }
}
export default connect(mapStateToProps)(NavigationRouter)
