/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {FlatList, StyleSheet, Text, View, Button} from 'react-native';
import { connect } from 'react-redux';
import { getUsers } from "../../actions/user";
import Constant from '../../helper/themeHelper';


class UserDetails extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            //headerTitle: <LogoTitle />,
            title: 'Users',
            headerRight: (
                <Button
                    onPress={navigation.getParam('onAddNewSong')}
                    title="Add new"
                    color="rgb(13,99,255)"
                />
            ),
        };
    };

    constructor(props){
        super(props);
        this.state={
            refreshing: false
        }
    }

    componentDidMount() {
        this.props.getUsers();
        this.props.navigation.setParams({ onAddNewSong: this.onAddNewSong });
    }

    onAddNewSong = () => {
        this.props.navigation.navigate('addNewSong');
    };

    renderItem = ({item, index}) => {
        return(
            <View style={styles.rowContainer}
                  key={index}>
                <Text>
                    {item.name}
                </Text>
            </View>
        )
    };

    keyExtractor = (item) => {
        return item.id + "";
    };

    renderSeparator = ({leadingItem, section})=>{
        return <View style={{height:10}}/>;
    };

    renderEmpty = () => {
        return <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <Text style={{fontSize:15}}>
                {"No data found"}
            </Text>
        </View>
    };

    onRefresh = () => {
        this.setState({refreshing: true});
        this.props.getUsers().then(res=>{
            this.setState({refreshing: false});
        });
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>
                    User Details
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Constant.appColor
    },
    titleText: {
        fontSize: Constant.fontSize.small,
        alignSelf: 'center',
        marginBottom: 20
    },
    rowContainer: {
        borderWidth: 1,
        borderColor: '#bdbdbd',
        borderRadius: 5,
        justifyContent:'center',
        padding: 20,
        marginLeft: 10,
        marginRight: 10,
    }
});

const mapStateToProps = state => {
    const {userList} = state.user;
    return {
        userList
    };
};

export default connect(mapStateToProps,{
    getUsers
})(UserDetails);