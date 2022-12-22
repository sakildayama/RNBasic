import { StyleSheet, Text, View, Image, Button } from 'react-native'
import React from 'react'
import Paragraph from '../../components/UI/Paragraph'
import ScrollContainer from '../../components/HOC/ScrollContainer'
import icons from '../../constants/icons'
import { FULL_HEIGHT, FULL_WIDTH, RADIUS } from '../../constants/layout'
import colors from '../../constants/colors'
import UiButton from '../../components/UI/UiButton'
import ViewContainer from '../../components/HOC/ViewContainer'
const Wellcome = ({ navigation }) => {
  return (
    <ViewContainer>
      <ScrollContainer>
        <View style={styles.imageView}>
          <Image style={styles.ImageDelevery} source={icons.deleverymainww} />
        </View>
        <View style={styles.twoBoxView}>
          <Paragraph style={styles.TextOrder} colors='black' type='bold'>Order fram a wide range of restaurants </Paragraph>
          <Paragraph style={styles.Textready}>Ready from a wide range of restaurants</Paragraph>

          <UiButton text='GET STARTED'
            style={styles.UiButton}
            onPress={() => navigation.navigate('Login')}
          />
        </View>
      </ScrollContainer>
    </ViewContainer>


  )
}

export default Wellcome

const styles = StyleSheet.create({
  imageView: {
    alignItems: "center",
    borderWidth: 1,
    // width: FULL_WIDTH,
    height: FULL_HEIGHT * 0.50,
    elevation: 9,
    backgroundColor: colors.pink,
  },
  ImageDelevery: {
    resizeMode: 'contain',
    width: FULL_WIDTH,
    height: FULL_HEIGHT * 0.50,

  },
  twoBoxView: {
    backgroundColor: colors.white,
    height: FULL_HEIGHT * 0.50,
    alignSelf: "center"
  },
  TextOrder: {
    width: FULL_WIDTH * 1,
    marginVertical: 30,
    fontSize: 25,
    textAlign: "center",

  },
  Textready: {
    textAlign: "center",
  },
  UiButton: {
    backgroundColor: colors.red,
    alignItems: "center",
    alignSelf: "center",
    width: FULL_WIDTH * 0.90,
    marginVertical: 40,
    padding: 15,
    borderRadius: 15,
    padding: 20,

  },
})