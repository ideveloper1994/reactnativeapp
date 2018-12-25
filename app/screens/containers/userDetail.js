/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {FlatList, StyleSheet, Text, View, Linking} from 'react-native';
import { connect } from 'react-redux';
import Constant from '../../helper/themeHelper';

class UserDetails extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'User Details',
        };
    };

    constructor(props){
        super(props);
        this.state={
            userDetails: props.navigation.state.params.userDetails
        }
    }

    componentDidMount() {
    }

    onLinkPress = () => {
        const {website} = this.state.userDetails;
        Linking.canOpenURL(website).then(supported => {
            if (!supported) {
                console.log('Can\'t handle url: ' + website);
            } else {
                return Linking.openURL(website).then(res=>{

                }).catch(err=>{

                });
            }
        }).catch(err => console.error('An error occurred', err));
    };

    render() {
        const { name, email, username, address, phone, website,  company} = this.state.userDetails;
        return (
            <View style={styles.container}>
                <Text style={styles.titleText}>
                    {name}
                </Text>
                <Text style={styles.titleText}>
                    {email}
                </Text>
                <Text style={styles.linkText} onPress={this.onLinkPress}>
                    {website}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Constant.appColor,
        padding: 10
    },
    titleText: {
        fontSize: Constant.fontSize.medium,
        alignSelf: 'center',
        marginBottom: 10
    },
    linkText:{
        fontSize: Constant.fontSize.small,
        alignSelf: 'center',
        color: Constant.blueColor
    }
});

const mapStateToProps = state => {
    const {userList} = state.user;
    return {
        userList
    };
};

export default connect(mapStateToProps,{
})(UserDetails);