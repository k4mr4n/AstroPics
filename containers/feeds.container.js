import React, {Component} from 'react'
import { StyleSheet } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { Container, Header, Content, Text } from 'native-base'
import { connect } from 'react-redux'
import FeedsActions from '../actions/feeds.actions'
import CameraPickerComponent from '../components/cameraPicker.component'
import DatePickerComponent from '../components/datePicker.component'
import GridViewComponent from '../components/gridview.component'

class FeedsScreen extends Component {

  constructor (props) {
    super(props)
    this.state = {
      selectedCamera: 'all',
      selectedDate: new Date()
    }
  }

  _logout () {
    this.props.clear()
    Actions.pop()
  }

  onChangeCamera (camera) {
    if (this.props.fetching) return
    this.setState({selectedCamera: camera})
    this._fetchFeeds({camera})
  }

  onChangeDate (date) {
    if (this.props.fetching) return
    this.setState({selectedDate: date})
    this._fetchFeeds({date})
  }

  _fetchFeeds (options) {
    const camera = options.camera || this.state.selectedCamera
    const date = options.date || this.state.selectedDate
    this.props.fetchFeeds({camera, date})
  }
  _onImagePressed (item) {
    Actions.feedItem({photo: item})
  }

  render () {
    const { username, feeds } = this.props
    const {selectedCamera, selectedDate} = this.state
    return (<Container style={styles.container}>
      <Header>
        <Text>Hi {username}</Text>
      </Header>
      <Content style={styles.body}>
        <CameraPickerComponent
          selected={selectedCamera}
          onChangeCamera={this.onChangeCamera.bind(this)} />
        <DatePickerComponent
          date={selectedDate}
          onChangeDate={this.onChangeDate.bind(this)} />
        <GridViewComponent rows={feeds} onPress={this._onImagePressed.bind(this)} />
      </Content>
    </Container>)
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: -20,
    paddingBottom: 20
  },
  body: {
    paddingTop: 30,
    paddingHorizontal: 20
  }
})

const mapStateToDispatch = dispatch => ({
  fetchFeeds: (filter) => dispatch(FeedsActions.fetch(filter))
})

const mapStateToProps = (state, ownProps) => {
  return {
    username: state.user.get('name'),
    feeds: state.feeds.get('feeds').toJS(),
    fetching: state.feeds.get('fetching')
  }
}

export default connect(mapStateToProps, mapStateToDispatch)(FeedsScreen)
