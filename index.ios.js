// Import a library to create component
import React from 'react';
import { AppRegistry, View} from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';


// Create the component
const App = () => {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText={'Albums!'} />
        <AlbumList />
      </View>
    );
};



// Render the component

AppRegistry.registerComponent('albums', () => App);
