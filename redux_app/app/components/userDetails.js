import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Constant from "../helper/themeHelper";

export default class UsersDetails extends Component {

    constructor(props){
        super(props);
        this.state={
            userDetails: props.navigation.state.params.userDetail
        }
    }

    render(){
        const { name, email, website } = this.state.userDetails;

        return(
            <View style={styles.container}>
                <Text style={styles.titleText}>
                    {name}
                </Text>
                <Text style={styles.details}>
                    {email}
                </Text>
                <Text style={[styles.details,{color: '#00f'}]}>{website}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Constant.appColor,
        alignItems: 'center'
    },
    titleText:{
        fontSize: Constant.fontSize.medium,
        marginBottom: 10,
        marginTop: 10
    },
    details: {
        fontSize: Constant.fontSize.small,
        marginBottom:10
    }
});