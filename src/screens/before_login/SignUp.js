import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { useRef, useEffect } from 'react';
import { FULL_HEIGHT, FULL_WIDTH, RADIUS } from '../../constants/layout'
import { SafeAreaView } from 'react-native-safe-area-context'
import colors from '../../constants/colors'
import icons from '../../constants/icons'
import Paragraph from '../../components/UI/Paragraph'
import Input from '../../components/UI/Input'
import UiButton from '../../components/UI/UiButton'
import SplashScreen from 'react-native-splash-screen'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { isValidForm, validators } from '../../constants/validation';
import Toast from 'react-native-simple-toast';
import { POST } from '../../backend/Backend'
import Loader from '../../components/UI/Loader';
const SignUp = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [mobile, setMobile] = useState('')
  const [errors, seterrors] = useState('')
  const [loading, setLoading] = useState(true)

  const Signvali = async () => {
    const form = {
      email: validators.checkEmail('Email', email),
      firstName: validators.checkRequire('First Name', firstName),
      lastName: validators.checkRequire('Last Name', lastName),
      mobile: validators.checkNumber('Mobile', mobile),
    }
    seterrors(form)

    if (isValidForm(form)) {
      let body = {
        mobile_number: mobile,
        first_name: firstName,
        last_name: lastName,
        email: email,
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
        "http://54.144.109.80:5000/api/v1/signup",
        body,
        { 'Authorization': 'Basic YWRtaW46YWRtaW4=' },
        res => {
          console.log('res==>', res)
          if (res.ok) {
            navigation.navigate("Login")

          } else {
            Toast.showWithGravity(res.Error.toString(), Toast.LONG, Toast.TOP);
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
    <SafeAreaView>
      <Loader loading={loading} />
      <View style={styles.BoxONEContainer}>
        <Image style={styles.ImagePlate} source={icons.deliveryboy} />
      </View>
      <View style={styles.BoxTWOContainer}>
        <View>
          <Paragraph style={styles.LoginText}>SIGN UP</Paragraph>
        </View>
        <Input onChange={setFirstName} error={errors?.firstName} style={{ backgroundColor: '#fff5ee' }} placeholder='First Name' />
        <Input onChange={setLastName} error={errors?.lastName} style={{ backgroundColor: '#fff5ee' }} placeholder='Last Name' />
        <Input onChange={setEmail} error={errors?.email} style={{ backgroundColor: '#fff5ee' }} placeholder='Enter Email ' />
        <Input onChange={setMobile} error={errors?.mobile} style={{ backgroundColor: '#fff5ee' }} placeholder='Mobile Number' />

        <UiButton text='SIGN UP'
          style={styles.UiButton}
          onPress={() => Signvali()}
        />
        <View style={styles.Register_red}>
          <Paragraph onPress={() => navigation.navigate("Login")}>Have an account ?<Paragraph color={'red'} style={styles.Register_red}> Login</Paragraph></Paragraph>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default SignUp

const styles = StyleSheet.create({
  BoxONEContainer: {
    width: FULL_WIDTH,
    // height:FULL_HEIGHT*0.50,
    backgroundColor: colors.pink,
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 300,

  },
  ImagePlate: {
    resizeMode: "contain",
    marginBottom: 40,
  },
  BoxTWOContainer: {
    height: FULL_HEIGHT * 0.45,
    width: FULL_WIDTH * 0.86,
    marginHorizontal: 28,
    marginVertical: -120,
    borderWidth: 1,
    backgroundColor: colors.white,
    borderRadius: 9,
    elevation: 10,
    opacity: 0.8,
    borderBottomLeftRadius: 60,
    borderTopRightRadius: 110,
    borderColor: "blue"


  },
  LoginText: {
    fontSize: 30,
    marginVertical: 13,
    marginHorizontal: 10,
  },
  forgat_Text: {
    //  borderWidth:1,
    width: FULL_WIDTH * 0.80,
    alignItems: 'flex-end',
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