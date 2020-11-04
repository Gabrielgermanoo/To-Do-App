import React from 'react';
import{
    StyleSheet,
    Text,
    View,
    TouchableOpacity

} from 'react-native';
class Tarefas extends React.Component {
    render(){
        return(
            <View key = {this.props.keyval} style={styles.note}>
                <Text style={styles.tarText}>{this.props.val.date}</Text>
                <Text style={styles.tarText}>{this.props.val.note}</Text>
                <View style={styles.Prioridade1} /> 
                <TouchableOpacity onPress ={this.props.deleteMethod} style = {styles.noteDelete}>
                  <Text style={styles.noteDeleteText}>del</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    note: {
        position: 'relative',
        padding: 20,
        paddingRight:100,
        borderBottomWidth: 2,
        borderBottomColor: '#ededed',
    },
    noteText: {
        paddingLeft: 20,
        borderLeftWidth: 10,
        borderLeftColor: '#e91e63',
    },
    noteDelete: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2980b9',
        padding: 10,
        top: 10,
        bottom: 10,
        right: 10
    },
    noteDeleteText: {
        color: 'white',
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
      },
      Prioridade1: {
        backgroundColor: '#ec3c1a',
        flexDirection: 'row',
        height: 20,
        aspectRatio: 1,
        left: 250,
        bottom: 20
      },
      Prioridade2: {
        backgroundColor: '#ec3c1a',
        flexDirection: 'row',
        height: 20,
        aspectRatio: 1,
        left: 250,
        bottom: 20
      },
      Prioridade3: {
        backgroundColor: '#ec3c1a',
        flexDirection: 'row',
        height: 20,
        aspectRatio: 1,
        left: 250,
        bottom: 20
      },
      
});
export default Tarefas;