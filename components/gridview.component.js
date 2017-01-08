import React from 'react'
import {StyleSheet, View, TouchableOpacity, Text, Image} from 'react-native'

export default class GridViewComponent extends React.Component {

  _getRow (row, index, onPress) {
    const URI = row.img_src.replace('http://', 'https://')
    return (<TouchableOpacity onPress={() => { onPress(row) }} key={row.id} style={styles.col}><Image style={styles.img} source={{uri: URI}} /></TouchableOpacity>)
  }
  render () {
    const {rows, onPress} = this.props
    if (rows.length > 0) {
      return (
        <View style={styles.parent}>
          {rows.map((row, index) => this._getRow(row, index, onPress))}
        </View>
      )
    }
    return (<Text style={styles.emptyText}>No Photos Found!</Text>)
  }
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginTop: 20
  },
  col: {
    height: 100,
    margin: 5,
    width: 120,
    backgroundColor: '#eee'
  },
  img: {
    flex: 1
  },
  emptyText: {
    alignSelf: 'center',
    marginTop: 50,
    color: '#999',
    fontSize: 14
  }
})
