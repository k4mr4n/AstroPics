import React, {Component} from 'react'
import { StyleSheet, View } from 'react-native'
import { Container, Header, Title, Content, InputGroup, Input, Button, Icon, Text } from 'native-base'
import { connect } from 'react-redux'
import UserActions from '../actions/user.actions'

class HomepageScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      text: ''
    }
  }

  _login () {
    const {text} = this.state
    this.props.login(text)
  }

  render () {
    return (<Container style={styles.container}>
      <Header backgroundColor='#00aadf'>
        <Title>Login</Title>
      </Header>

      <Content>
        <View style={styles.body}>
          <InputGroup borderType='underline' >
            <Input
              placeholder='Your name will be...'
              onChangeText={(text) => this.setState({text})}
              value={this.state.text} />
          </InputGroup>
          <Button style={styles.button} onPress={this._login.bind(this)}><Icon name='md-log-in' /></Button>
        </View>
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
  login: (name) => dispatch(UserActions.login(name))
})

const mapStateToProps = (state, ownProps) => {
  return {
    userName: state.user.get('name')
  }
}

export default connect(mapStateToProps, mapStateToDispatch)(HomepageScreen)
