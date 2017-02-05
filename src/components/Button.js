import React from 'react';
import { Text, TouchableOpacity } from 'react-native';


const Button = ({ children,onPressFunction }) => {
	const { buttonStyle, textStyle } = styles;
	return (
		<TouchableOpacity style={buttonStyle} onPress={onPressFunction}>
			<Text style={textStyle}>{children}</Text>
		</TouchableOpacity>
	);
};
const styles = {
	buttonStyle: {
		flex: 1,
		alignSelf: 'stretch',
		marginTop: 4,
		borderRadius: 5,
		borderWidth: 1,
		borderColor: '#007aff',
		backgroundColor: '#FFF',
		marginLeft: 5,
		marginRight: 5
	},
	textStyle: {
		color: '#007aff',
		alignSelf: 'center',
		paddingTop: 10,
		paddingBottom: 10
	}
};

export default Button;
