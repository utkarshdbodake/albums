// Step 1: Import libraries to help us create Components
import React from 'react';
import { Text, View } from 'react-native';

// Step 2: Create a Component
const Header = (props) => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

// Create styles
const styles = {
    viewStyle: {
        backgroundColor: '#FBF7E5',
        justifyContent: 'center',
        alignItems: 'center',
        height: 70,
        paddingTop: 25,
        shadowColor: '#000000',
        shadowOffset: { widget: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 18
    }
};

// Step 3: Make components available to other parts of the app
export default Header;
