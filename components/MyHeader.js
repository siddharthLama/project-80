import React, { Component} from 'react';
import { Header,Icon,Badge } from 'react-native-elements';
import { View, Text, StyleSheet ,Alert} from 'react-native';
import db from '../config'
import firebase from 'firebase';


export default class MyHeader extends Component{
   
    
    render(){
        return(
            <Header
            leftComponent={<Icon name='bars' type='font-awesome' color='#ffffff'  onPress={() => this.props.navigation.toggleDrawer()}/>}
              centerComponent={{ text: this.props.title, style: { color: '#ffffff', fontSize:20,fontWeight:"bold", } }}
              backgroundColor = "#32867d"
            />
    
    )
    }
}