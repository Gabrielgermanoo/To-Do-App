import React from 'react';
import {View, Text, StyleSheet} from 'react-native'

const Navbar = (props) => {
    return (
        <View style ={styles.navegacao} > 
            <Text style={styles.text1}>TODO </Text>
            <Text style={styles.text2}>LIST</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    text1: {
      color: '#ffffff',
      fontSize: 20,
    },
    text2: {
        color: '#ffffff',
        fontSize: 20,
      },
    navegacao: {
        alignItems:'center',
        justifyContent: 'center',
        paddingTop: 20, 
        flexDirection: 'row', 
        backgroundColor: '#7ec576', 
        height: 60
    },
  });
    
export default Navbar;