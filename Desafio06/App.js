import React from 'react'
import {
  Button,
  Image,
  StatusBar,
  StyleSheet,
  View
} from 'react-native'

import dino1 from './assets/dino1.png'
import dino2 from './assets/dino2.png'
import dino3 from './assets/dino3.png'

export default class App extends React.Component {

  state = {
    imagem: dino1
  }

  render() {
    const { imagem } = this.state
    return (
      <View style={styles.container}>
        <Image
          resizeMode='center'
          source={imagem}
          style={styles.image}
        />
        <View style={styles.separator} />
        <View>
          <Button
            title='Imagem 1'
            onPress={_ => this.setState({ imagem: dino1 })}
          />
          <View style={styles.separator} />
          <Button
            title='Imagem 2'
            onPress={_ => this.setState({ imagem: dino2 })}
          />
          <View style={styles.separator} />
          <Button
            title='Imagem 3'
            onPress={_ => this.setState({ imagem: dino3 })}
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
  image: {
    width: 200,
    height: 200,
    alignSelf: 'center'
  },
  separator: {
    marginBottom: 20
  }
})