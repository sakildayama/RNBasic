import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import { useRef, useEffect } from 'react';
import { useIsFocused } from '@react-navigation/native'
import { FULL_HEIGHT, FULL_WIDTH, RADIUS } from '../../constants/layout'
import { SafeAreaView } from 'react-native-safe-area-context'
import colors from '../../constants/colors'
import icons from '../../constants/icons'
import Paragraph from '../../components/UI/Paragraph'
import Input from '../../components/UI/Input'
import UiButton from '../../components/UI/UiButton'
import AsyncStorage from '@react-native-async-storage/async-storage';
import ViewContainer from '../../components/HOC/ViewContainer';
import ScrollContainer from '../../components/HOC/ScrollContainer';
const Login = ({ navigation, }) => {

  

  // let token = 'demo_token'
  // const setlogins = async () => {

  //   await AsyncStorage.setItem('TOKEN', token)
  //   navigation.reset({
  //     index: 0,
  //     routes: [{ name: 'Wellcom' }]
  //   })
  // }
  // useEffect(() => {
  //   setlogins()
  // }, [])
  return (
    <ViewContainer style={{flex:1,backgroundColor:colors.darkcyan}}>
      <ScrollContainer>
    
          <View style={styles.BoxONEContainer}>
            <Image style={styles.ImagePlate} source={icons.mixxchaimin} />
          </View>
          <View style={styles.BoxTWOContainer}>
            <View>
              <Paragraph style={styles.LoginText}>Login</Paragraph>
            </View>
            <Input style={{ backgroundColor: '#fff5ee' }} placeholder='Email' />
           <Input style={{ backgroundColor: '#fff5ee' }} placeholder='Password' />
           <View style={styles.lock_VIEW} >
              <Image  style={styles.lock_image} source={icons.lock} />
           </View>

            <View style={styles.forgat_Text}>
              <Paragraph>Forgat Password</Paragraph>
            </View>
            <View style={styles.Ematy_Container}></View>
            <View style={styles.OR_VIEW}>
              <Paragraph size={12}>OR</Paragraph>
            </View>
            <View style={styles.IconsVIEW} >
              <Image style={styles.facebookImage} source={icons.facebook} />
              <Image style={styles.googleImage} source={icons.google} />
            </View>
            <UiButton text='LOGIN'
              style={styles.UiButton}
             
            />
            <View style={styles.Register_red}>
              <Paragraph>Don't have an account ?<Paragraph   onPress={() => navigation.navigate('SignUp')} color={'red'} style={styles.Register_red}> Register</Paragraph></Paragraph>
            </View>
          </View>
      
      </ScrollContainer>
    </ViewContainer>
  )
}

export default Login

const styles = StyleSheet.create({
  BoxONEContainer: {
    // width: FULL_WIDTH,
    // height:FULL_HEIGHT,
    height:FULL_HEIGHT*0.43,
    backgroundColor: colors.pink,
    justifyContent: "center",
    alignItems: "center",
    borderWidth:1,
    borderBottomRightRadius:300,
  },
  ImagePlate: {
    resizeMode: "contain",
    marginBottom: 40,
  },
  BoxTWOContainer: {
    // width: FULL_WIDTH * 0.90,
    marginHorizontal: 20,
    marginTop:-60,
    borderWidth: 1,
    borderColor:"blue",
    backgroundColor: colors.white,
    borderRadius: 15,
    elevation: 10,
    opacity: 0.8,
   

  },
  LoginText: {
    fontSize: 30,
    marginVertical: 13,
    marginHorizontal: 10,
  },
  // lock_VIEW:{
  //  borderWidth:1,
  //  width:FULL_WIDTH*0.80,
  //  alignItems:'flex-end',
  //  justifyContent:"flex-end",

  // },
  lock_image:{
 position:'absolute',
 bottom:30,
 left:289,
  },
  forgat_Text: {
    right:20,
    //  borderWidth:1,
    // width: FULL_WIDTH * 0.50,
    alignSelf: 'flex-end',
  },
  Ematy_Container: {
    marginHorizontal: 50,
    borderBottomWidth: 0.2,
    width: FULL_WIDTH * 0.60,
    marginVertical: 30,

  },
  OR_VIEW: {
    //  borderWidth:1,
    borderRadius: 9,
    // position:'relative',
    marginHorizontal: 155,
    marginVertical: -38,
    alignItems: "center",
    backgroundColor: colors.grey,

  },
  IconsVIEW: {
    flexDirection: "row",
    justifyContent: 'flex-end',
    alignContent: 'flex-end',
    marginTop:60,
    //  borderWidth:1,
    width: FULL_WIDTH * 0.45,
    marginHorizontal: 37,
    marginBottom:20,


  },
  facebookImage: {
    marginVertical: 3,
    marginHorizontal: 5,

  },
  UiButton: {
    backgroundColor: colors.red,
    alignItems: "center",
    alignSelf: "center",
    width: FULL_WIDTH * 0.80,
    padding: 15,
    borderRadius: 10,

  },
  Register_red: {
    alignItems: "center",
    marginVertical: 10,
  },

})