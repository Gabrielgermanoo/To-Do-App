import React from 'react';
import {StyleSheet} from 'react-native'
import {Picker} from '@react-native-picker/picker'
import App from './App'
class Selecionar extends React.Component{
    state = {
        opcao: ''

    }
    constructor(props){
        super(props)
    }
render(){
    return (
        <Picker style={styles.pickerComponent} 
          selectedValue = {this.state.opcao}
          onValueChange = {
            (itemvalor,itemindex) => 
              this.setState({
                opcao: itemvalor
              })
          }
          > 
                <Picker.Item label='Prioridade da Atividade:' value=''/>
                <Picker.Item label='High' value='High'/>
                <Picker.Item label='Medium' value='Medium'/>
                <Picker.Item label='Low' value='Low'/>
          </Picker>
    );
};
}
const styles = StyleSheet.create({
    pickerComponent: {
        width: 250,
        
      },
    });
    
export default Selecionar;