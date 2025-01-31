import React,{useState} from 'react'
import { View,Text,StyleSheet,TouchableOpacity} from 'react-native';

function RoundBtn({text,fun}) {
    return (
      <>
        <View style ={styles.middleware}>
          <TouchableOpacity
            style={styles.roundButton}
            onPress={()=>{fun(text);}}
            >
            <Text style={styles.text}>{text}</Text>
          </TouchableOpacity>
        </View>
      </>
    )
}

export default RoundBtn;
 const styles = StyleSheet.create({
    roundButton: {
      width: 50,
      height: 50,
      backgroundColor: '#EEEEEE',
      borderWidth:2,
      borderColor:'#548CA8',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      borderRadius: 50,
      overflow:'hidden',
      borderStyle:'solid'    
    },
    text:{
        color:'red',
        fontWeight:'bold',
        fontSize:16,
    },
  });
  