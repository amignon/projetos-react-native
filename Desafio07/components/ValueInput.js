import React from 'react'
import {
  StyleSheet,
  Text, 
  TextInput,
  View
} from 'react-native'

import formatCurrency from '../utils/mask'

export default class ValueInput extends React.Component {
  state = {
    value: "0.00"
  }

  handleChangeText = text => {
    const value = formatCurrency(text)
    this.setState({ value })
    this.props.onChangeValue(value)
  }

  render() {
    const { value } = this.state
    return(
      <View style={styles.rowContainer}>
        <Text style={styles.text}>Valor</Text>
        <TextInput
          style={styles.input}
          keyboardType='numeric'
          value={value}
          onChangeText={this.handleChangeText}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    marginBottom: 30,
    alignItems: 'center'

  },
  input: {
    flex: 4,
    backgroundColor: 'gray',
    color: 'white',
    paddingHorizontal: 10,
    height: 30,
    fontSize: 18,
    textAlign: 'right'
  ,
  },
  text: {
    flex: 1,
    textAlign: 'right',
    marginRight: 10,
    fontSize: 18
  }
})