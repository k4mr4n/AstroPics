import React from 'react'
import DatePicker from 'react-native-datepicker'

export default class DatePickerComponent extends React.Component {
  render () {
      const {onChangeDate, date} = this.props
      return (
          <DatePicker
              style={{width: 200}}
              date={date}
              onDateChange={onChangeDate}
              mode='date'
              placeholder='select date'
              format='YYYY-MM-DD'
              minDate='2010-05-01'
              maxDate='2017-01-10'
              confirmBtnText='Confirm'
              cancelBtnText='Cancel'
              customStyles={{
                  dateIcon: {
                  position: 'absolute',
                  left: 0,
                  top: 4,
                  marginLeft: 0
                },
                  dateInput: {
                  marginLeft: 36
                }
                }}
            />
        )
    }
}
