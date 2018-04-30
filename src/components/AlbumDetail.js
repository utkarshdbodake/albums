import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ albumObject }) => {
    const {
        title,
        artist,
        thumbnail_image,
        image,
        url
    } = albumObject;

    const {
        cardSectionHeaderContainer,
        textSectionHeaderContainer,
        titleInTextSectionHeader,
        thumbnailImageContainer,
        thumbnailImage,
        artworkImage
    } = styles;


    return (
        <Card>
            <CardSection style={cardSectionHeaderContainer}>
                <View style={thumbnailImageContainer}>
                    <Image
                        source={{ uri: image }}
                        style={thumbnailImage}
                    />
                </View>

                <View style={textSectionHeaderContainer}>
                    <Text style={titleInTextSectionHeader}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>

            <CardSection>
                <Image
                    source={{ uri: image }}
                    style={artworkImage}
                />
            </CardSection>

            <CardSection>
                <Button onPress={() => Linking.openURL(url)}>
                    <Text>Buy</Text>
                </Button>
            </CardSection>
        </Card>
    );
};

const styles = {
    cardSectionHeaderContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    textSectionHeaderContainer: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    titleInTextSectionHeader: {
        fontSize: 16
    },
    thumbnailImageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    thumbnailImage: {
        width: 50,
        height: 50
    },
    artworkImage: {
        width: null,
        flex: 1,
        height: 300
    }

};

export default AlbumDetail;
