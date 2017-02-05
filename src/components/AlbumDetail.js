import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card.js';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
	const { title, artist, thumbnail_image, image, url } = album;
	const { headerContentStyle, headerTextStyle, thumbnailStyle, thumbnailContainerStyle, albumArtworkStyle, buttonStyle } = styles;
	return (
		<Card>
			<CardSection>
				<View style={thumbnailContainerStyle}>
					<Image 
						style={thumbnailStyle} 
						source={{ uri: thumbnail_image }} 
					/>
				</View>
				<View style={headerContentStyle}>
					<Text style={headerTextStyle}>{title}</Text>
					<Text>{artist}</Text>
				</View>
				
			</CardSection>

			<CardSection>
				<Image source={{ uri: image }} style={albumArtworkStyle} />
			</CardSection>

			<CardSection>
				<Button style={buttonStyle} onPressFunction={() => { Linking.openURL(url); }}>
					Buy {title} 
				</Button>
			</CardSection>
		</Card>
	);
};

const styles = {
	headerContentStyle: {
		flexDirection: 'column',
		justifyContent: 'space-around',
	},
	headerTextStyle: {
		fontSize: 18,
		fontWeight: 'bold'
	},
	thumbnailStyle: {
		height: 50,
		width: 50,
		borderRadius: 5
	},
	thumbnailContainerStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 10,
		marginRight: 10
	},
	albumArtworkStyle: {
		height: 300,	//Way to make image stretch
		flex: 1,		//Way to make image stretch
		width: null,	//Way to make image stretch
		borderRadius: 5
	}
};


export default AlbumDetail;
