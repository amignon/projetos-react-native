import React from 'react'
import {
  Image,
  StatusBar,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  View
} from 'react-native'

import equilatero from './assets/equilatero.png'
import escaleno from './assets/escaleno.png'
import isoceles from './assets/isoceles.png'

export default class App extends React.Component {
  state = {
    txtA: "",
    txtB: "",
    txtC: "",
    mensagem: "",
    imagem: null,
  }

  identificar = () => {
    const { txtA, txtB, txtC } = this.state
    const a = parseFloat(txtA)
    const b = parseFloat(txtB)
    const c = parseFloat(txtC)
    let mensagem = "Os valores não formam um triângulo."
    let imagem = null
    if (a !== 0 && b !== 0 && c !== 0) {
      if (a + b > c && a + c > b && b + c > a) {
        if (a !== b && a !== c && b !== c) {
          mensagem = "É um triângulo escaleno."
          imagem = escaleno
        }
        else if (a === b && b === c) {
          mensagem = "É um triângulo equilátero."
          imagem = equilatero
        }
        else {
          mensagem = "É um triângulo isóceles."
          imagem = isoceles
        }
      }
    }
    this.setState({ mensagem, imagem })
  }

  render() {
    const { mensagem, imagem } = this.state
    return (
      <View style={styles.container}>
        <View>
          <TextInput
            style={styles.input}
            placeholder="A"
            keyboardType='numeric'
            onChangeText={txtA => this.setState({ txtA })}
          />
          <TextInput
            style={styles.input}
            placeholder="B"
            keyboardType='numeric'
            onChangeText={txtB => this.setState({ txtB })}
          />
          <TextInput
            style={styles.input}
            placeholder="C"
            keyboardType='numeric'
            onChangeText={txtC => this.setState({ txtC })}
          />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={this.identificar}
        >
          <Text style={styles.buttonText}>Classificar</Text>
        </TouchableOpacity>
        <View>
          <Text style={styles.text}>{mensagem}</Text>
          <Image
            source={imagem}
            resizeMode='center'
            style={styles.image}
          />
        </View>
        <StatusBar />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 16
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 5,
    marginBottom: 16
  },
  button: {
    alignSelf: 'center',
    backgroundColor: 'steelblue',
    padding: 10,
    borderRadius: 10,
    marginTop: 20
  },
  buttonText: {
    fontSize: 22,
    color: 'white'
  },
  text: {
    alignSelf: 'center',
    fontSize: 24,
    marginTop: 50,
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: 'center'
  }
})