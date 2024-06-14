import React, {Component} from "reac"
import { StyleSheet, View, Text, ImageBackground } from "reac-native"
import moment from "moment"
import 'moment/locale/pt-br'

import today_Image from '../../assets/imgs/today.jpg'

export default class Task_List extends Component{
    render(){
        const today = moment().locale('pt-br').format('dddd, DD [de] MMMMM')
        return(
            <View style={styles.container}>
                <ImageBackground source={today_Image} style={styles.background}>
                    <View styles={styles.titleBar}>
                        <Text styles={styles.title}>Hoje</Text>
                        <Text styles={styles.subTitle}>{today}</Text>
                    </View>
                </ImageBackground>
                <View>
                    <Text>Lista de Tarefas</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    background:{
        flex: 3
    },
    taskList:{
        flex: 7
    },
    titleBar:{
        flex: 1,
        justifyContent: 'flex-end'
    },
    title:{
        fontFamily: 'Arial',
        fontSize: 50,
        color: '#FFF',
        marginLeft: 20,
        marginBottom: 20
    },
    subTitle:{
        fontFamily: 'Arial',
        fontSize: 20,
        color: '#FFF',
        marginLeft: 20,
        marginBottom: 30
    }

})