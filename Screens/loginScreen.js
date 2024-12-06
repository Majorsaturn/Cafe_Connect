import * as React from "react";
import {Image, StyleSheet, Text, View, TouchableOpacity, TextInput, ActivityIndicator} from "react-native";
import InsetShadow from 'react-native-inset-shadow';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useFonts, Roboto_500Medium, Roboto_400Regular } from '@expo-google-fonts/roboto';

const LoginPage = ({navigation, onLogin, fbApp}) => {
	let [fontsLoaded] = useFonts({
		Roboto_500Medium,
		Roboto_400Regular,
	});

	const auth = getAuth(fbApp);

	const [Email, onChangeEmail] = React.useState('');
	const [Password, onChangePassword] = React.useState('');

	const handleLoginPress = async () => {
		// Logic for login, e.g., Firebase authentication
		const userCredential = await signInWithEmailAndPassword(auth, Email, Password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				console.log("User UID:", user.uid);
				onLogin(); // Call the onLogin callback passed from App
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(errorMessage);
			});
	  };
	const handleSignUpPress = async () => {
		navigation.navigate('SignUp');
	}

	// Show a loading indicator until the fonts are loaded
	if (!fontsLoaded) {
		return (
			<View style={[styles.loginPage, styles.centered]}>
				<ActivityIndicator size="large" color="#9c6f44" />
			</View>
		);
	}

  	return (
    		<View style={styles.loginPage}>
      			<Image style={styles.image2Icon} resizeMode="cover" source={require("../assets/image_2.png")} />
      			<Text style={styles.cafConnect}>CAFÉ CONNECT</Text>
      			<Image style={styles.image1Icon} resizeMode="cover" source={require("../assets/image_1.png")} />
      			<View style={[styles.textField, styles.textShadowBox]}>
        				<View style={[styles.textField1, styles.textField1Position]}>
          					<View style={[styles.stateLayer3, styles.textField1Position]}>
            						<View style={[styles.content, styles.contentFlexBox]}>
              							<View style={styles.inputTextContainer}>
											<TextInput
												style={styles.input}
												onChangeText={onChangeEmail}
												value={Email}
												placeholder="Email"
											/>
              							</View>
            						</View>
          					</View>
        				</View>
        				<View style={styles.activeIndicator} />
      			</View>
      			<View style={[styles.textField2, styles.textShadowBox]}>
        				<View style={[styles.textField1]}>
          					<View style={[styles.stateLayer3, styles.textField1Position]}>
            						<View style={[styles.content, styles.contentFlexBox]}>
              							<View style={styles.inputTextContainer}>
											<TextInput
												style={styles.input}
												onChangeText={onChangePassword}
												value={Password}
												placeholder="Password"
												secureTextEntry={true}
											/>
              							</View>
            						</View>
          					</View>
        				</View>
        				<View style={styles.activeIndicator} />
      			</View>
				
				<TouchableOpacity  style={[styles.button, styles.buttonLayout]} onPress={handleLoginPress}>
					<InsetShadow>
        				<View style={[styles.stateLayer5, styles.contentFlexBox]}>
          					<Text style={[styles.labelText, styles.labelTextTypo]}>  LOGIN  </Text>
        				</View>
					</InsetShadow>
				</TouchableOpacity>
				<TouchableOpacity  style={[styles.button1, styles.buttonLayout]} onPress={handleSignUpPress}>
				  	<InsetShadow>
        				<View style={[styles.stateLayer5, styles.contentFlexBox]}>
          					<Text style={[styles.labelText, styles.labelTextTypo]}>SIGNUP</Text>
        				</View>
					</InsetShadow>
				  </TouchableOpacity>
				<View style={styles.sso}>
        				<Text style={[styles.singleSignOn, styles.labelTextTypo]}>Single Sign-On</Text>
      			</View>
				<View style = {styles.ssoBox}>
				<View style={[styles.fab1, styles.fabShadowBox]}>
        				<View style={styles.stateLayer}>
          					<Image style={styles.iconGoogle} resizeMode="cover" source={require(`../assets/🦆 icon _google_.png`)} />
        				</View>
      			</View>
				<View style={[styles.fab2, styles.fabShadowBox]}>
        				<View style={styles.stateLayer}>
          					<Image style={styles.iconXLetter} resizeMode="cover" source={require(`../assets/🦆 icon _x letter_.png`)} />
        				</View>
      			</View>
      			<View style={[styles.fab3, styles.fabShadowBox]}>
        				<View style={styles.stateLayer}>
          					<Image style={styles.iconXLetter} resizeMode="cover" source={require(`../assets/🦆 icon _facebook_.png`)} />
        				</View>
      			</View>
				</View>
    		</View>);
};

const styles = StyleSheet.create({
  	fabShadowBox: {
		height: 75,
		width: 80,
		backgroundColor: "#ece6f0",
		borderRadius: 16,
		shadowOpacity: 1,
		elevation: 8,
		shadowRadius: 8,
		shadowOffset: {
			  width: 0,
			  height: 4
		},
		shadowColor: "rgba(0, 0, 0, 1)",
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "row",
		position: "relative",
		overflow: "hidden"
  	},
  	labelTextTypo: {
    		textAlign: "center",
    		color: "#fff",
    		fontFamily: "Roboto_500Medium",
    		fontWeight: "500",
    		lineHeight: 20,
    		letterSpacing: 0
  	},
  	textShadowBox: {
    		height: 56,
    		width: 277,
    		elevation: 4,
    		shadowRadius: 4,
    		shadowColor: "rgba(0, 0, 0, 1)",
    		marginLeft: -139,
    		borderTopRightRadius: 4,
    		borderTopLeftRadius: 4,
    		shadowOpacity: 1,
    		shadowOffset: {
      			width: 0,
      			height: 4
    		},
    		left: "50%",
    		position: "relative"
  	},
  	textField1Position: {
    		alignSelf: "center",
    		flex: 1
  	},
  	contentFlexBox: {
    		flex: 1,
    		justifyContent: "center"
  	},
  	buttonLayout: {
    		height: 52,
    		width: 209,
    		backgroundColor: "#9c6f44",
    		borderRadius: 100,
    		justifyContent: "center",
    		alignItems: "center",
    		left: "50%",
    		position: "relative",
    		overflow: "hidden",
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
  	cafConnect: {
    		marginLeft: -130,
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
  	image1Icon: {
    		width: "60%",
    		height: "30%",
    		left: "20%",
    		position: "relative"
  	},
  	iconXLetter: {
    		width: 63,
    		height: 68
  	},
  	stateLayer: {
    		padding: 16,
    		justifyContent: "center",
    		alignItems: "center",
    		flexDirection: "row"
  	},
  	fab1: {
    		left: "-5%",
    		justifyContent: "center",
    		alignItems: "center",
    		position: "relative"
  	},
  	fab2: {
    		justifyContent: "center",
    		alignItems: "center",
    		left: "0%",
			position: "relative"
  	},
  	iconGoogle: {
    		width: 69,
    		height: 68
  	},
  	fab3: {
    		justifyContent: "center",
    		alignItems: "center",
			left: "5%",
			position: "relative"
  	},
  	singleSignOn: {
    		fontSize: 20,
    		display: "flex",
    		position: "absolute",
    		color: "#fff",
    		fontFamily: "Roboto_500Medium",
    		fontWeight: "500",
    		letterSpacing: 0
  	},
  	sso: {
    		top: "7%",
    		left: "16%",
    		borderRadius: 11,
    		width: 244,
    		height: 50,
    		backgroundColor: "#9c6f44",
    		position: "relative",
			justifyContent: "center",
    		alignItems: "center",
			
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
    		alignItems: "center",
    		flexDirection: "row"
  	},
  	content: {
    		height: 48,
    		paddingHorizontal: 0,
    		paddingVertical: 4,
    		justifyContent: "center"
  	},
  	stateLayer3: {
    		paddingLeft: 16,
    		paddingTop: 4,
    		paddingBottom: 4,
    		alignSelf: "center",
    		flexDirection: "row"
  	},
  	textField1: {
    		backgroundColor: "#e6e0e9",
    		alignSelf: "center"
  	},
  	activeIndicator: {
    		borderStyle: "solid",
    		borderColor: "#49454f",
    		borderTopWidth: 1,
    		height: 1,
    		alignSelf: "stretch"
  	},
  	textField: {
    		top: "0%",
			height: "100%",
			width: "100%"
  	},
  	textField2: {
    		top: "3%",
			height: "100%",
			width: "100%"
  	},
  	labelText: {
    		fontSize: 14
  	},
  	stateLayer5: {
    		paddingHorizontal: "38%",
    		paddingVertical: 0,
    		alignSelf: "stretch",
    		backgroundColor: "#9c6f44",
    		justifyContent: "center",
    		alignItems: "center",
    		flexDirection: "row"
  	},
  	button: {
			marginLeft: -105,
			top: "5%",
			position: "relative"
  	},
  	button1: {
			marginLeft: -105,
    		top: "6%",
  	},
	ssoBox: {
		flexDirection: "row",
		top: "20%",
		left: "8.2%"
	},
	loginPage: {
		backgroundColor: "#face8b",
		height: "100%",
		width: "100%",
		flex: 1,
		position: "relative",
  	},
	centered: {
        justifyContent: "center",
        alignItems: "center",
    },
});

export default LoginPage;
