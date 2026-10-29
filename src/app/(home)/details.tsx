import React, {useState} from "react";
import {View,Text,StyleSheet,Image} from "react-native";

const styles = StyleSheet.create({
    container: {flex:1, padding:20, alignItems:'center'},
    title:{fontSize:22, fontWeight:'bold', marginBottom:100, marginTop:40},
    text:{fontSize:18, marginBottom:10},
    image:{width:200, height:200, resizeMode:'contain',marginBottom:20},
});

export default function DetailsScreen(){
    const[modelVisible, setModelVisible] = useState(false);
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Digital ID Card</Text>
            <Image source={require("C:/Users/ASUS/OneDrive - University of Kelaniya/COSC/Year 03/Sem 02/COSC 32152 Mobile Application Development/Lab/3/Lab 03 - Mini Student Hub/StudentHub/assets/images/user.png")}  style={styles.image}/>
            <Text style={styles.text}>Name: Enter your name here</Text>
            <Text style={styles.text}>Student ID: Enter your ID here</Text>
            <Text style={styles.text}>Course: Mobile application Development</Text>
        </View>
    );
}