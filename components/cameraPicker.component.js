import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { Picker } from 'native-base'
const Item = Picker.Item

export default class CameraPickerComponent extends Component {

    render(){
        const {selected, onChangeCamera, enabled} = this.props
        return(
        <View>
            <Text style={styles.label}>Select one of the Cameras</Text>
            <Picker
                iosHeader="Select one of the Cameras"
                mode="dropdown"
                selectedValue={selected}
                enabled={enabled}
                onValueChange={onChangeCamera}>
                <Item label="All" value="all" />
                <Item label="Front Hazard Avoidance Camera" value="FHAZ" />
                <Item label="Rear Hazard Avoidance Camera" value="RHAZ" />
                <Item label="Mast Camera" value="MAST" />
                <Item label="Chemistry and Camera Complex" value="CHEMCAM" />
                <Item label="Mars Hand Lens Imager" value="MAHLI" />
                <Item label="Mars Descent Imager" value="MARDI" />
                <Item label="Navigation Camera" value="NAVCAM" />
                <Item label="Panoramic Camera" value="PANCAM" />
                <Item label="Miniature Thermal Emission Spectrometer (Mini-TES)" value="MINITES" />
            </Picker>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    label: {
        color: '#666',
        fontSize: 10
    }
})