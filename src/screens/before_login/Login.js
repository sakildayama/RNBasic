import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import { useRef, useEffect, useState } from 'react';
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
import { isValidForm, validators } from '../../constants/validation';
import { POST } from '../../backend/Backend'
import Toast from 'react-native-simple-toast';

const Login = ({ navigation }) => {

  const [mobile_number, setMobileNumber] = useState('')
  const [password, setPassword] = useState('')
  const [errors, seterrors] = useState('')
  const [loading, setLoading] = useState(false)

  const onLogin = async () => {
    const form = {
      mobile_number: validators.checkNumber('mobile_number', mobile_number),
      password: validators.checkPassword('Password', password),
    }
    seterrors(form);
    if (isValidForm(form)) {
      let body = {
        mobile_number: mobile_number,
        device_information: {
          device_id: "12345",
          os_name: "Android",
          model_name: "SM-M307F",
          os_version: "10",
          app_version: "1.3.0",
          manufacturer: "samsung",
          total_memory: "5860327424",
          fcm_token: "12345"
        }
      }
      console.log('body-------->', body);
      POST(
        "http://54.144.109.80:5000/api/v1/login",
        body,
        { 'Authorization': 'Basic YWRtaW46YWRtaW4=' },
        res => {
          console.log('res==>', res)
          if (res.ok) {
            Toast.showWithGravity('okkkk', Toast.LONG, Toast.TOP);
            navigation.navigate("Home")
          } else {
            Toast.showWithGravity('not ok', Toast.LONG, Toast.TOP);
          }
        },
        err => {
          console.log('err---->', err)
          let error = JSON.parse(err.res1);
          Toast.showWithGravity(error.message, Toast.LONG, Toast.TOP);
        },
        fail => {
          console.log('fail==>', fail)
          Toast.showWithGravity('Api failed');
        }
      )

      // let result = await fetch('http://54.144.109.80:5000/api/v1/signup', {
      //   method: 'post',
      //   body: body,
      //   headers: {
      //     'Content-Type': 'application/json',
      //     'Authorization': 'Basic YWRtaW46YWRtaW4='
      //   }
      // })
      // console.log('res===>', await result.json());

    } else {
    }
  }

  return (
    <ViewContainer style={{ flex: 1, backgroundColor: colors.darkcyan }}>
      <ScrollContainer>

        <View style={styles.BoxONEContainer}>
          <Image style={styles.ImagePlate} source={icons.mixxchaimin} />
        </View>
        <View style={styles.BoxTWOContainer}>
          <View>
            <Paragraph style={styles.LoginText}>Login</Paragraph>
          </View>
          <Input onChange={setMobileNumber} error={errors?.mobile_number} style={{ backgroundColor: '#fff5ee' }} placeholder='Mobile Number' />
          <Input onChange={setPassword} error={errors?.password} style={{ backgroundColor: '#fff5ee' }} placeholder='Password' />

          <View style={styles.lock_VIEW} >
            <Image style={styles.lock_image} source={icons.lock} />
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
            onPress={onLogin}
          />
          <View style={styles.Register_red}>
            <Paragraph>Don't have an account ?<Paragraph onPress={() => navigation.navigate('SignUp')} color={'red'} style={styles.Register_red}> Register</Paragraph></Paragraph>
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
    height: FULL_HEIGHT * 0.43,
    backgroundColor: colors.pink,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderBottomRightRadius: 300,
  },
  ImagePlate: {
    resizeMode: "contain",
    marginBottom: 40,
  },
  BoxTWOContainer: {
    // width: FULL_WIDTH * 0.90,
    marginHorizontal: 20,
    marginTop: -60,
    borderWidth: 1,
    borderColor: "blue",
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
  lock_image: {
    position: 'absolute',
    bottom: 30,
    left: 289,
  },
  forgat_Text: {
    right: 20,
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
    marginTop: 60,
    //  borderWidth:1,
    width: FULL_WIDTH * 0.45,
    marginHorizontal: 37,
    marginBottom: 20,


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