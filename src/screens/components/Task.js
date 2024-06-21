import React from "react"
import { StyleSheet, View, Text, TouchableWithoutFeedback } from "react-native"
import moment from "moment"
import 'moment/locale/pt-br'
import {Icon} from "react-native-vector-icons/FontAwesome6"

export default props => {
    return(
        <View style={styles.container}>
        <TouchableWithoutFeedback onPress={() => alert("Olá")}>
            <View style = {styles.checkContainer}>
                <View style = {styles.done}>
                    <Icon name="check" size={20}></Icon>
                </View> 
            </View>
        </TouchableWithoutFeedback>
        <View>
            <Text style={styles.desc}>{props.description}</Text>
            <Text style={styles.date}>{props.estimate + ""}</Text>
            <Text style={styles.date}>{props.date_at + ""}</Text>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        borderColor: '#AAA',
        borderBottomWidth: 1,
        alignItems: 'center',
        paddingVertical: 20
    },
    desc:{
        fontFamily:'Arial',
        frontSize: 20,
        color:'#333'
    },
    date:{
        fontFamily: 'Arial',
        color: '#555',

    },
    checkContainer:{
        width: '20%',
        aligntItems: 'center',
        justifyContent: 'center',
    },
    done:{
        height: 25,
        width: 25,
        borderRadius: 13,
        borderWidth: 1,
        backgroundColor: '#4D7031',
        lignItems: 'center',
        justifyContent: 'center'
    }

})