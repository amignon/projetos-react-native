import React from 'react'
import {
  StyleSheet,
  Text,
  View
} from 'react-native'

export default class ResultValues extends React.Component {

  defaultTip = () => {
    const {defaultPercent, value} = this.props
    return value * defaultPercent / 100
  }

  customTip = () => {
    const {customPercent, value} = this.props
    return value * customPercent / 100
  }

  defaultTotal = () => {
    const {value} = this.props
    return value + this.defaultTip();
  }

  customTotal = () => {
    const {value} = this.props
    return value + this.customTip()
  }

  render() {
    const {defaultPercent, customPercent} = this.props
    return(
      <View>
        <View style={styles.rowContainer}>
          <Text style={styles.label}/>
          <Text style={[styles.percentText, {marginRight: 10}]}>
            {`${defaultPercent}%`}
          </Text>
          <Text style={styles.percentText}>
            {`${customPercent}%`}
          </Text>
        </View>
        <View style={styles.rowContainer}>
          <Text style={styles.label}>Gorjeta</Text>
          <Text style={[styles.valueText, {marginRight: 10}]}>
            {this.defaultTip().toFixed(2)}
          </Text>
          <Text style={styles.valueText}>
            {this.customTip().toFixed(2)}
          </Text>
        </View>
        <View style={styles.rowContainer}>
          <Text style={styles.label}>Total</Text>
          <Text style={[styles.valueText, {marginRight: 10}]}>
            {this.defaultTotal().toFixed(2)}
          </Text>
          <Text style={styles.valueText}>
            {this.customTotal().toFixed(2)}
          </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  label: {
    flex: 1,
    marginRight: 10,
    textAlign: 'right',
    fontSize: 18
  },
  valueText: {
    flex: 2,
    textAlign: 'center',
    textAlignVertical: 'center',
    backgroundColor: 'gray',
    color: 'white',
    height: 30,
    fontSize: 18,
  },
  percentText: {
    flex: 2, 
    textAlign: 'center',
    fontSize: 18
  }
})





