import React from "react";
import PropTypes from "prop-types";
import {View, Text, StyleSheet, StatusBar} from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Clouds : {
        iconName:"weather-cloudy",
        gradient:["#4DA08B", "#D39D38"],
        title : "Clouds",
        subtitle : "Good for going outside"
    },
    Thunderstorm : {
        iconName:"weather-lightning-rainy",
        gradient:["#4DA08B", "#D39D38"]
    },
    Drizzle : {
        iconName:"weather-rainy",
        gradient:["#4DA08B", "#D39D38"]
    },
    Rain : {
        iconName:"weather-pouring",
        gradient:["#4DA08B", "#D39D38"]
    },
    Snow : {
        iconName:"weather-snowy",
        gradient:["#4DA08B", "#D39D38"]
    },
    Atmosphere : {
        iconName:"weather-hail",
        gradient:["#4DA08B", "#D39D38"]
    },
    Clear : {
        iconName:"weather-sunny",
        gradient:["#FF5F6D", "#FFC371"]
    },
    Haze : {
        iconName:"weather-hail",
        gradient:["#4DA08B", "#D39D38"]
    },
    Mist : {
        iconName:"weather-fog",
        gradient:["#4DA08B", "#D39D38"]
    },
    Dust : {
        iconName:"weather-cloudy-alert",
        gradient:["#4DA08B", "#D39D38"]
    }
}


export default function Weather({temp, condition}){

    return (
        <LinearGradient
        // Background Linear Gradient
        colors={weatherOptions[condition].gradient}
        style={
            styles.container
        }>
        <StatusBar barStyle="light-content"/>
        <View style={styles.halfContainer}>
        <MaterialCommunityIcons size={96} name={weatherOptions[condition].iconName} color="white"/>

        <Text style={styles.temp}>{temp}</Text>
        </View>
        <View style={{...styles.halfContainer, ...styles.textContainer}}>
            <Text style={styles.title}>{weatherOptions[condition].title}</Text>
            <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
        </View>
      </LinearGradient>
    )


}

Weather.propTypes = {
    temp : PropTypes.number.isRequired,
    condition : PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Haze",
        "Mist",
        "Dust"
    ]).isRequired

}


const styles = StyleSheet.create({

    container : {
        flex : 1,
        justifyContent : "center",
        alignItems : "center"
    },
    temp : {
        fontSize :  42,
        color : "white"
    },
    halfContainer: {
        flex : 1,
        justifyContent : "center",
        alignItems : "center"
    },
    title : {
        color : "white",
        fontSize : 34,
        fontWeight : "300",
        marginBottom : 10
    },
    subtitle : {
        fontWeight : "600",
        color : "white",
        fontSize : 24
    },
    textContainer : {
        paddingHorizontal : 20,
        alignItems : "flex-start"
    }

})


