import React from 'react';
import {View, Text, StyleSheet} from 'react-native'

const Navbar = (props) => {
    return (
        <View style ={styles.navegacao} > 
            <Text style={styles.text1}>TODO </Text>
            <Text style={styles.text1}>LIST</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    text1: {
      color: '#ffffff',
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