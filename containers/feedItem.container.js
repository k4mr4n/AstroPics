import React, {Component} from 'react'
import { StyleSheet, View, Image, Text, Dimensions, StatusBar, TouchableOpacity } from 'react-native'
import {Icon} from 'native-base'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import FavoriteActions from '../actions/favorite.actions'
const {width} = Dimensions.get('window')
class FeedsScreen extends Component {

  constructor (props) {
    super(props)
    this.state = {
      isFav: false
    }
  }

  componentDidMount () {
    StatusBar.setBarStyle('light-content')
    this.setFavState()
  }

  componentWillUnmount () {
    StatusBar.setBarStyle('default')
  }

  setFavState () {
    const {favorites, photo} = this.props
    const {id} = photo
    let isFav = false
    favorites.map(f => { if (f.id === id) isFav = true })
    this.setState({isFav})
  }

  toggleFav () {
    const {isFav} = this.state
    const {setFav, unsetFav, photo} = this.props
    if (isFav) unsetFav(photo.id)
    else setFav(photo)
    this.setState({isFav: !isFav})
  }

  render () {
    const star = this.state.isFav ? 'md-star' : 'md-star-outline'
    const {photo} = this.props
    const URI = photo.img_src.replace('http://', 'https://')
    const {full_name: fullName, name: cameraName} = photo.camera
    const {earth_date: earthDate} = photo

    return (<View style={styles.container}>
      <Image style={styles.img} source={{uri: URI}} />
      <Text style={styles.txt}>Camera{'\n'}{fullName} ({cameraName})</Text>
      <Text style={styles.txt}>Earth Date{'\n'}{earthDate}</Text>
      <TouchableOpacity style={styles.touchableIcon} onPress={this.toggleFav.bind(this)}>
        <Icon name={star} style={styles.star} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchableIconBack} onPress={() => { Actions.pop() }}>
        <Icon name='md-arrow-round-back' style={styles.backIcon} />
      </TouchableOpacity>
    </View>)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  img: {
    width,
    marginTop: -20,
    height: 200,
    marginBottom: 20
  },
  txt: {
    color: '#666',
    fontSize: 13,
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  star: {
    color: '#FFC107',
    fontSize: 60
  },
  touchableIcon: {
    flex: 1,
    alignSelf: 'center',
    marginTop: 20
  },
  touchableIconBack: {
    bottom: 20,
    left: 10
  }
})

const mapStateToDispatch = dispatch => ({
  setFav: (photo) => dispatch(FavoriteActions.setFavorite(photo)),
  unsetFav: (id) => dispatch(FavoriteActions.unsetFavorite(id))
})

const mapStateToProps = (state, ownProps) => {
  return {
    favorites: state.favorites.get('list').toJS()
  }
}

export default connect(mapStateToProps, mapStateToDispatch)(FeedsScreen)
