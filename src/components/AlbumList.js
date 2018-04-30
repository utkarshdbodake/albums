import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import Axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {

    state = { albums: [] }

    componentWillMount() {
        Axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => {
                const newState = { albums: response.data };
                this.setState(newState);
            });
    }

    renderAlbums() {
        return this.state.albums.map(album =>
            <AlbumDetail key={album.title} albumObject={album} />
        );
    }

    render() {
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}

export default AlbumList;
