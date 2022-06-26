import React, { Component } from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import * as all from '../REDUX/actions'
import {connect} from 'react-redux'
export class Home extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             counter:0
        }
    } 
    render() {
        return (
        <View
            style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row'
        }}>
            <TouchableOpacity
                onPress={() => this.props.counterGetBigger()}
                style={{
                height: 20,
                width: 20,
                borderWidth: 1,
                borderColor: 'gray',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text style={{
                    fontSize: 17
                }}>-</Text>
            </TouchableOpacity>
            <Text
                style={{
                fontSize: 17,
                marginRight: '5%',
                marginLeft: '5%'
            }}>
                Counter: {this.props.counter}
            </Text>
            <TouchableOpacity
                onPress={() => this.props.counterGetSmaller()}
                style={{
                height: 20,
                width: 20,
                borderWidth: 1,
                borderColor: 'gray',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text>+</Text>
            </TouchableOpacity>
        </View>
    )}
}

const mapStateToProps = (state, props) => {
    const {counter} = state.default
    return {counter}
}
const mapDispatchToProps = (dispatch, props) => ({
    counterGetSmaller: ()=>{
        dispatch({
            type:all.CounterArttir
        })
    },
    counterGetBigger: ()=>{
        dispatch({
            type:all.CounterAzalt
        })
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(Home)
