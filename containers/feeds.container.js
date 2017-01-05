import React, {Component} from 'react'
import { StyleSheet, View } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { Container, Header, Title, Content, InputGroup, Input, Button, Icon, Text } from 'native-base'
import { connect } from 'react-redux'
import UserActions from '../actions/user.actions'

class FeedsScreen extends Component {
  constructor (props) {
    super(props)
  }

  _logout () {
    this.props.clear()
    Actions.pop()
  }

  render () {
    const {username} = this.props
    return (<Container style={styles.container}>
      <Header backgroundColor='#00aadf'>
        <Button transparent onPress={this._logout.bind(this)}>
          <Icon name='ios-arrow-back' />
        </Button>
        <Title>Hello {username}</Title>
      </Header>

      <Content>
        <Text>Feeds are gonna be here!</Text>
      </Content>
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
  clear: () => dispatch(UserActions.clear())
})

const mapStateToProps = (state, ownProps) => {
  console.log('state =>', state)
  console.log('ownProps =>', ownProps)
  return {
    username: state.user.get('name')
  }
}

export default connect(mapStateToProps, mapStateToDispatch)(FeedsScreen)
