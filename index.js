// Step 1: Import libraries to help us create Components.
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Step 2: Create a Component
const App = function () {
    return (
        /*
        * IMP: Whenever u have a ScrollView in any children,
        * we must add a style property of flex:1 to the root element.
        * */
        <View style={{ flex: 1 }}>
            <Header headerText={'Albums!'} />
            <AlbumList />
        </View>
    );
};

// Step 3: Render it to the device
AppRegistry.registerComponent('albums', () => App);
