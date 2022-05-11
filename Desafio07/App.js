import React from 'react'
import {
  StatusBar,
  StyleSheet,
  Text, 
  View
} from 'react-native'

import Slider from '@react-native-community/slider'

import ValueInput from './components/ValueInput'
import ResultValues from './components/ResultValues'

export default class App extends React.Component {
  state = {
    valueText: "0.00",
    customPercent: 15

  }

  handleChangeText = valueText => {this.setState({ valueText })}

  render() {
    const {customPercent, valueText} = this.state
    return(
      <View style={styles.container}>
        <ValueInput onChangeValue={this.handleChangeText}/>
        <View style={styles.rowContainer}>
          <Text style={styles.text}>%</Text>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={30}
            step={1}
            value={customPercent}
            onValueChange={value => this.setState({customPercent: value})}
          />
        </View>
        <ResultValues
          defaultPercent={10}
          customPercent={customPercent}
          value={parseFloat(valueText)}
        />
        <StatusBar style="auto"/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginTop: 50,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30
  },
  text: {
    flex: 1, 
    textAlign: 'right',
    marginRight: 10,
    fontSize: 18
  },
  slider: {
    flex: 4
  }
})





