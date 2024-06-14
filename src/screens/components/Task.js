import React, {Component} from "reac"
import { StyleSheet, View, Text, ImageBackground } from "reac-native"
import moment from "moment"
import 'moment/locale/pt-br'

export default props => {
    return(
        <View>
            <View>
                <Text style={styles.desc}>{props.description}</Text>
                <Text style={styles.date}>{props.estimate_ay}</Text>
                <Text style={styles.date}>{props.date_at}</Text>
            </View>
        </View>
    )
}

const styles = StylesSheet.create({
    container:{
        borderColor: '#AAA',
        borderBottomWidth: 1,
        alightItens: 'center',
        paddingVertical: 20
    },
    desc:{
        fontFamily: 'Arial',
        fontSize: 20,
        color: '#333'
    },
    date:{
        fontFamily: 'Arial',
        color: '#555'
    }
})