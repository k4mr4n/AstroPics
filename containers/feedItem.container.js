import React, {Component} from 'react'
import { StyleSheet, View } from 'react-native'
import { Container, Header, Title, Content, InputGroup, Input, Button, Icon, Text } from 'native-base'
import { connect } from 'react-redux'
import UserActions from '../actions/user.actions'

class FeedsScreen extends Component {

  render () {
    const {username} = this.props
    return (<Container style={styles.container}>
      <Header backgroundColor='#00aadf'>
        <Title>FeedItem {username}</Title>
      </Header>
    </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: -20,
    paddingBottom: 20
  },
  body: {
    marginTop: 150,
    paddingHorizontal: 20
  },
  button: {
    backgroundColor: '#00aadf',
    marginTop: 10,
    alignSelf: 'center'
  }
})

const mapStateToDispatch = dispatch => ({
  login: (name) => dispatch(UserActions.login(name))
})

const mapStateToProps = (state, ownProps) => {
  return {
    username: state.user.get('name')
  }
}

export default connect(mapStateToProps, mapStateToDispatch)(FeedsScreen)
