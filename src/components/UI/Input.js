import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
const Input = ({style,label,keyBoardType,value,placeholder,error,
  onChange = () => { },
}) => {
  return (
    <View>
      {label && <Text style={{marginHorizontal:10}}>{label}</Text>}
      <TextInput 
      style={[styles.inputname,style]} 
      onChangeText= {(DATA) => onChange(DATA)}   
      value={value}
      placeholder={placeholder}
      keyboardType={keyBoardType}        
      />
      <Text style={{color:"red",fontSize:14,}} >{error}</Text>
    </View>
  )
}
export default Input
const styles = StyleSheet.create({
  inputname:{
   height:50,
   width:"90%",
   marginHorizontal:15,
   borderWidth:1,
   borderRadius:5,
   borderColor:"#b8860b"
  },
})