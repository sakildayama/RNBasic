import { StyleSheet, Text, View ,Image, ScrollView} from 'react-native'
import React, { useState } from 'react'
import { useRef,useEffect } from 'react';
import { FULL_HEIGHT, FULL_WIDTH,RADIUS } from '../../constants/layout'
import { SafeAreaView } from 'react-native-safe-area-context'
import colors from '../../constants/colors'
import icons from '../../constants/icons'
import Paragraph from '../../components/UI/Paragraph'
import Input from '../../components/UI/Input'
import UiButton from '../../components/UI/UiButton'
import SplashScreen from 'react-native-splash-screen'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { isValidForm, validators } from '../../constants/validation';
import {POST} from '../../backend/Backend'
const SignUp = ({navigation}) => {
const [Email , setEmail]=useState('')
const [Name , setName]=useState('')
const [Password , setPassword]=useState('')
const [ errors , seterrors]=useState('')
const [loading,setloading]=useState(true)
const Signvali = async ()=>{
  const form ={
    Email:validators.checkEmail('Email',Email),
    Name:validators.checkRequire('Name',Name),
    Password:validators.checkPassword('Password',Password),

  }
  seterrors(form)
  if(!isValidForm(form)){
    let body =  {
        mobile_number: "+918742817242",
        first_name:"sakil" ,
        last_name: "dayma",
        email: "2343sds@gmail.com",
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
     console.log('body-------->',body);
     POST(
      "http://54.144.109.80:5000/api/v1/signup",
      body,
      {'Authorization':'Basic YWRtaW46YWRtaW4='},
      res=>{
        console.log('res==>',res)
      },
      err=>{
           console.log('err---->',err)
      },
      fail=>{
 console.log('fail==>',fail)
      }
     )
    // let result = await  fetch('http://54.144.109.80:5000/api/v1/signup',{
    //   method:'post',
    //   body:body,
    //   headers:{
    //     'Content-Type':'application/json',
    //     'Authorization':'Basic YWRtaW46YWRtaW4='
    //   }
    // })
    // console.log('res===>',await result.json());
    
  }
}
  return (
    <SafeAreaView>
      
      <View style={styles.BoxONEContainer}>
       <Image style={styles.ImagePlate} source={icons.deliveryboy} />
        </View>
        <View  style={styles.BoxTWOContainer}>
          <View>
               <Paragraph style={styles.LoginText}>SIGN UP</Paragraph>
          </View>
          <Input onChange={setEmail}  error={errors?.Email}style={{backgroundColor:'#fff5ee'}} placeholder='Enter Email id/ Phone No.' />
          <Input onChange={setName} error={errors?.Name} style={{backgroundColor:'#fff5ee'}} placeholder='Name'/>
          <Input onChange={setPassword} error={errors?.Password} style={{backgroundColor:'#fff5ee'}} placeholder='Password'/>

         <UiButton text='SIGN UP' 
         style={styles.UiButton}
         onPress={()=>Signvali()}
         />
   <View style={styles.Register_red}>
   <Paragraph>Don't have an account ?<Paragraph color={'red'} style={styles.Register_red}> Register</Paragraph></Paragraph>
   </View>
        </View>
    </SafeAreaView>
  )
}
  
export default SignUp

const styles = StyleSheet.create({
  BoxONEContainer:{
    width:FULL_WIDTH,
    // height:FULL_HEIGHT*0.50,
    backgroundColor:colors.pink,
    justifyContent:"center",
    alignItems:"center",
    borderBottomLeftRadius:300,
    
  },
  ImagePlate:{
    resizeMode:"contain",
    marginBottom:40,
  },
  BoxTWOContainer:{
    height:FULL_HEIGHT*0.45,
    width:FULL_WIDTH*0.86,
    marginHorizontal:28,
    marginVertical:-120,
   borderWidth:1,
   backgroundColor:colors.white,
   borderRadius:9,
   elevation:10,
   opacity:0.8,
   borderBottomLeftRadius:60,
   borderTopRightRadius:110,
   borderColor:"blue"
  

  },
  LoginText:{
   fontSize:30,
   marginVertical:13,
   marginHorizontal:10,
  },
  forgat_Text:{
  //  borderWidth:1,
   width:FULL_WIDTH*0.80,
  alignItems:'flex-end', 
  },
  UiButton:{
   backgroundColor:colors.red,
   alignItems:"center",
   alignSelf:"center",
   width:FULL_WIDTH*0.80,
   padding:15,
   borderRadius:10,
   
  },
  Register_red:{
    alignItems:"center",
    marginVertical:10,
  },
 
})