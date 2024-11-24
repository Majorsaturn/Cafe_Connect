import * as React from "react";
import {Image, StyleSheet, Text, ScrollView, KeyboardAvoidingView} from "react-native";
import { useFonts, Roboto_500Medium, Roboto_400Regular } from '@expo-google-fonts/roboto';

const AboutPage = ({navigation}) => {
	let [fontsLoaded] = useFonts({
		Roboto_500Medium,
		Roboto_400Regular,
	});

  	return (
		<ScrollView>
    		<KeyboardAvoidingView style={styles.signUpPage}>
      			<Image style={[styles.image2Icon]} resizeMode="cover" source={require("../assets/image_2.png")} />
      			<Text style={[styles.cafConnect]}>ABOUT</Text>
                <Text style={[styles.textArea]}>We have felt that the people who work from home have not been able to get out as much as they wished to. Our goal is to provide a wonderful platform for users to find others with the intention of working hard. Study together or maybe even work alone but with others to talk to. We want people to feel a little less lonely with our app.</Text>
      			
    		</KeyboardAvoidingView>
		</ScrollView>);
};

const styles = StyleSheet.create({
  	buttonPosition: {
    		left: "50%",
    		position: "relative"
  	},
  	textShadowBox: {
    		height: 56,
    		width: 277,
    		shadowOpacity: 1,
    		elevation: 4,
    		shadowRadius: 4,
    		shadowOffset: {
      			width: 0,
      			height: 4
    		},
    		shadowColor: "rgba(0, 0, 0, 0.25)",
    		marginLeft: -140,
    		borderTopRightRadius: 4,
    		borderTopLeftRadius: 4,
    		left: "50%",
    		position: "relative"
  	},
  	statePosition: {
    		borderTopRightRadius: 4,
    		borderTopLeftRadius: 4,
    		alignSelf: "stretch"
  	},
  	contentSpaceBlock: {
    		paddingVertical: 4,
    		flex: 1
  	},
	image2Icon: {
		marginLeft: -360,
		top: 0,
		width: "100%",
		height: "100%",
		opacity: 1,
		left: "100%",
		position: "absolute"
	},
  	labelText: {
    		fontSize: 14,
    		letterSpacing: 0,
    		lineHeight: 20,
    		fontWeight: "500",
    		fontFamily: "Roboto_500Medium",
    		color: "#fff",
    		textAlign: "center"
  	},
  	stateLayer: {
    		backgroundColor: "#9c6f44",
			paddingHorizontal: "21.8%",
    		paddingVertical: 10,
    		flexDirection: "row",
    		alignSelf: "stretch",
    		justifyContent: "center",
    		alignItems: "center",
    		flex: 1
  	},
  	button: {
    		marginLeft: -106,
    		top: "19%",
    		borderRadius: 100,
    		backgroundColor: "#000",
    		width: 209,
    		height: 52,
    		justifyContent: "center",
    		alignItems: "center",
    		overflow: "hidden"
  	},
	cafConnect: {
		marginLeft: -60,
		top: "5%",
		fontSize: 36,
		fontWeight: "300",
		fontFamily: "Roboto_500Medium",
		color: "#000",
		width: "100%",
		height: "10%",
		textAlign: "left",
		left: "50%",
		position: "relative"
	},
  	inputText: {
    		fontSize: 16,
    		letterSpacing: 1,
    		lineHeight: 24,
    		fontFamily: "Roboto_400Regular",
    		color: "#1d1b20",
    		textAlign: "left"
  	},
  	inputTextContainer: {
    		flexDirection: "row",
    		alignItems: "center"
  	},
  	content: {
    		height: 48,
    		paddingHorizontal: 0,
    		justifyContent: "center"
  	},
  	stateLayer1: {
    		paddingLeft: 16,
    		paddingTop: 4,
    		paddingBottom: 4,
    		flexDirection: "row",
    		flex: 1
  	},

  	signUpPage: {
    		backgroundColor: "#face8b",
    		width: "100%",
    		height: 735,
    		overflow: "hidden",
    		flex: 1
  	},
	button1: {
		marginLeft: -106,
		top: "20%",
		borderRadius: 100,
		backgroundColor: "#000",
		width: 209,
		height: 52,
		justifyContent: "center",
		alignItems: "center",
		overflow: "hidden"
	},
	stateLayer3: {
		backgroundColor: "#9c6f44",
		paddingHorizontal: "40.3%",
		paddingVertical: 10,
		flexDirection: "row",
		alignSelf: "stretch",
		justifyContent: "center",
		alignItems: "center",
		flex: 1
	},
    textArea: {
        padding: 10,
		fontWeight: "300",
		fontFamily: "Roboto_500Medium",
    }
});

export default AboutPage;
