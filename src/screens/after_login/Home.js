import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import colors from '../../constants/colors'
import icons from '../../constants/icons'
import Paragraph from '../../components/UI/Paragraph'
// import UiButton from '../../components/UI/UiButton'
import Card from '../../components/UI/Card'
import Clickable from '../../components/HOC/Clickable'
import Loader from '../../components/UI/Loader'
import ModalContainer from '../../components/HOC/ModalContainer'
import ScrollContainer from '../../components/HOC/ScrollContainer'

const Home = ({ navigation }) => {
    const [data, setdata] = useState([])
    const [loader, setloader] = useState(true)
    const [model, setmodel] = useState(true)          //   get api

//  const [data , setdata]=useState('')
//  const [ loading , setloading]=useState('')

    const getData = async () => {
        let data = await fetch('https://jsonplaceholder.typicode.com/users')
        let abc = await data.json()              // deta fetch k liye
        setdata(abc)
        setloader(false)
    }                                          //get api
    useEffect(() => {
        getData()
    }, [])


    return (
        <View>
          <Loader loading={loader} />
            <ModalContainer show={model} />
            <Clickable onPress={() => setmodel(!model)}></Clickable>
            <Paragraph>Home</Paragraph>
            <Clickable onPress={() => getData}>
                <Paragraph size={20} >getData</Paragraph>
            </Clickable>
          <Paragraph size={50} onPress={() => navigation.navigate('Login')}>getData</Paragraph>
          <FlatList
                data={data}
               renderItem={({ item, index }) => {
                    return (
                        <Card>
                            <Paragraph size={20} type='bold'>{item?.title}</Paragraph>
                            <Paragraph size={14} type='light'>{item?.body}</Paragraph>
                        </Card>
                    )
                }}
            />
        </View>

 )
}

export default Home

const styles = StyleSheet.create({})
