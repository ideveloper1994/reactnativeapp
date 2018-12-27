import React, {Component} from 'react';
import {AsyncStorage} from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import AppReducer from './reducers/index';
import AppNavigator from './navigator/appNavigator';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react'

const persistConfig = {
    key: 'root',
    storage,
};
const persistedReducer = persistReducer(persistConfig, AppReducer);
let store = createStore(persistedReducer,applyMiddleware(thunk));
let persistor = persistStore(store);

export default class App extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <AppNavigator/>
                </PersistGate>
            </Provider>
        );
    }
}