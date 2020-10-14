import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Loading from "./Loading";
import {Alert} from "react-native";
import * as Location from 'expo-location';
import axios from "axios";
import Weather from "./Weather";

//import { StyleSheet, Text, View } from 'react-native';

const API_KEY = "a56549ff0f737ec3e17c06ce7254c7bc"

export default class App extends React.Component{

  state = {
    isLoading : true
  };

  getWeather = async (latitude, longitude) =>{
    const {data : {
      main : {temp},
      weather
      
      }} = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
    //console.log(data);
    this.setState({isLoading:false, condition: weather[0].main, temp});
  }

  getLocation = async () =>{
    
    try {
      //throw Error();
      /* const response = await Location.requestPermissionsAsync();
      console.log(response); */
      await Location.requestPermissionsAsync();
      /* const {coords} = await Location.getCurrentPositionAsync();
      console.log(coords.latitude, coords.longitude); */
      const {coords : {latitude, longitude}} = await Location.getCurrentPositionAsync();
      //console.log(latitude, longitude);
      this.getWeather(latitude, longitude);
      
    } catch (error){
      Alert.alert("Can't find you.", "So sad");
    }

  }

  componentDidMount(){
    this.getLocation();
  }

  render(){
    const {isLoading, temp, condition} = this.state;
    return isLoading ? <Loading/> : <Weather temp={Math.round(temp)} condition={condition}/>;
  }


  /* return (
    <View style={styles.container}>
      <View style={styles.yellowView}>
      <Text style={styles.text}>Hello!!!</Text>
      </View>
      <View style={styles.blueView}>
      <Text style={styles.text}>Hello!!!</Text>
      </View>
      <View style={{flex : 1, backgroundColor : "blue"}}/>
       <Text style={styles.text}>Hello!!!</Text>
      <Text style={styles.text}>Hello!!!</Text>
      <StatusBar style="auto" />
    </View>
  ); */
}

/* const styles = StyleSheet.create({
  container: {
    flex: 1,
    //flexDirection : "row,
    backgroundColor: 'white',
    //alignItems: 'center',
    //justifyContent: 'center', 
  },
  text:{
    color : "black",
    //width : "100%"
  },
  yellowView : {
    flex : 1,
    backgroundColor : "yellow"
  },
  blueView : {
    flex : 1,
    backgroundColor : "blue"
  }
}); */
