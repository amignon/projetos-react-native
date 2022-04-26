import React from 'react'
import {
  Alert,
  Button,
  StatusBar,
  StyleSheet,
  TextInput,
  View
} from 'react-native'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      txtPeso: "",
      txtAltura: ""
    }
  }

  botaoCalcular = _ => {
    const { txtPeso, txtAltura } = this.state
    const peso = parseFloat(txtPeso)
    const altura = parseFloat(txtAltura)
    if (Number.isNaN(peso) || Number.isNaN(altura)) {
      Alert.alert("Erro", "Preencha os campos corretamente.")
      return
    }
    const imc = peso / altura ** 2
    let categoria = ""
    if (imc < 18.5) {
      categoria = "Abaixo do peso."
    }
    else if (imc < 25) {
      categoria = "Peso Normal."
    }
    else if (imc < 30) {
      categoria = "Acima do Peso."
    }
    else {
      categoria = "Obesidade."
    }
    const mensagem = `IMC = ${imc.toFixed(1)}\n${categoria}`
    Alert.alert("Índice de Massa Corporal", mensagem)

  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Informe o peso"
          keyboardType='numeric'
          onChangeText={txtPeso => this.setState({ txtPeso })}
        />
        <View style={styles.separator} />
        <TextInput
          style={styles.input}
          placeholder="Informe a altura"
          keyboardType='numeric'
          onChangeText={txtAltura => this.setState({ txtAltura })}
        />
        <View style={styles.separator} />
        <Button
          title='Calcular IMC'
          onPress={this.botaoCalcular}
        />
        <StatusBar />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    fontSize: 22,
    paddingHorizontal: 5
  },
  separator: {
    marginBottom: 20
  }
})