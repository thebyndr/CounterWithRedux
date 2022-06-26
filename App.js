

import React,{Component}from "react";
import { 
  View,
  Text,
  StyleSheet,
  ScrollView,
  StatusBar,
  SafeAreaView,
  Touchable,
  Image,Alert,
  PermissionsAndroid,
  TouchableOpacity,
  Platform,
  Modal,
  Button
 } from 'react-native';
import { Provider } from "react-redux";
 import Appp from './Navigation/Navigation';
 import {store} from './REDUX/store'

const App:() => Node=()=>{


  return (
<Provider store={store}>
<SafeAreaView style={{flex:1}}>

<Appp/>


    </SafeAreaView>
    </Provider>

   );
  }
   export default App;
 
 
 