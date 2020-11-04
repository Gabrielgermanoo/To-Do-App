import React from 'react';
import { View , Text, StyleSheet, TextInput, SafeAreaView, TouchableOpacity, ScrollView} from 'react-native';
import Navbar from './navbar';
import Tarefas from './tarefas';
import Selecionar from './picker';
class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {

      noteArray: [],
      noteText: '',
    };
   
  }
  addTask(){
      if (this.state.noteText){
        var date = new Date();
        this.state.noteArray.push({
          'date' : date.getUTCDate() + 
          '/' + (date.getMonth() + 1) +
          '/' + date.getFullYear(),
          'note': this.state.noteText
        });

          this.setState({noteArray: this.state.noteArray});
          this.setState({noteText: this.state.noteText});
          this.textInput.clear()
      }
  }
  deleteNote (key){
    this.state.noteArray.splice(key,1);
    this.setState({noteArray:this.state.noteArray});
    }    
  render() {

    let notes = this.state.noteArray.map ((val,key)=> {
      return <Tarefas key = {key} keyval={key} val={val}
        deleteMethod = {()=> this.deleteNote(key)}
        />
        })
   return(
      <SafeAreaView>
        <View>
          <Navbar>
            <Text>this.props.Text</Text>
          </Navbar>
          <View style={{padding: 20,flexDirection: 'row' }}>
            <TextInput 
              style={styles.TextInput} 
              ref={noteText => { this.textInput = noteText }}
             placeholder = 'Adicionar Atividade' 
             onChangeText = {(noteText) => this.setState({noteText})}
              value = {this.state.noteText}
              >   
            </TextInput>
            <View>
                <TouchableOpacity onPress = {this.addTask.bind(this)} style = {styles.button}>
                  <Text>+</Text>
                </TouchableOpacity>
            </View>
          </View>
         <Selecionar></Selecionar>
          <ScrollView style= {styles.scrollContainer}>  
              {notes}
            </ScrollView>
        </View>

      </SafeAreaView>
    );
          
  } 
}

const styles = StyleSheet.create({
  TextInput: {
    borderRadius: 5,
    flex: 1,
    right: 10,
    borderColor: 'gray', 
    borderWidth: 0.5,
    }, 
    button: {
      top: 20,
      width: 35,
      left: 10,

    },
    scrollContainer: {
      marginBottom: 100,
    },
  });
export default App;
