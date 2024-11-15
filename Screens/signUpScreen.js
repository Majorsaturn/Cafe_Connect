import * as React from "react";
import {Image, StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView} from "react-native";
import InsetShadow from 'react-native-inset-shadow';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { getFirestore, addDoc, collection } from "firebase/firestore";
import { useFonts, Roboto_500Medium, Roboto_400Regular } from '@expo-google-fonts/roboto';

const SignUpPage = ({navigation, fbApp}) => {
	const auth = getAuth(fbApp);
	const db = getFirestore(fbApp);

	const [First_Name, onChangeFName] = React.useState('');
	const [Last_Name, onChangeLName] = React.useState('');
	const [Password, onChangePassword] = React.useState('');
	const [Email, onChangeEmail] = React.useState('');
	const [Username, onChangeUsername] = React.useState('');
	const [UDate, setDate] = React.useState('');

	const handleInputChangeDate = async (newText) => {
		const formattedText = newText
			.replace(/\D/g, '')
			.replace(/(\d{2})(\d{2})/, '$1/$2/')
			.substring(0, 10);
		setDate(formattedText);
	};

	let [fontsLoaded] = useFonts({
		Roboto_500Medium,
		Roboto_400Regular,
	});

	const handleLoginPress = async () => {
		navigation.navigate('Login');
	};

	const handleCreateAccountPress = async () => {
		try {
			// Create user with email and password
			const userCredential = await createUserWithEmailAndPassword(auth, Email, Password);
			const user = userCredential.user;
			console.log("User UID:", user.uid);
	
			// Set the user's displayName to the chosen username
			await updateProfile(user, {
				displayName: Username,  // Set the displayName to the username
			});
			console.log("Display name set:", user.displayName);  // Confirm the displayName
	
			// Convert the date into a proper format
			const [month, day, year] = UDate.split('/').map(part => parseInt(part, 10));
			const dateObject = new Date(year, month - 1, day);
	
			// Add user data to Firestore
			const docRef = await addDoc(collection(db, "Users"), {
				firstname: First_Name,
				lastname: Last_Name,
				birthday: dateObject,
				username: Username,
				password: Password,
				UID: user.uid,
				Friends: [],
				Table: "none" // 0 indicates not in a table
			});
			console.log("Document written with ID: ", docRef.id);
	
			// Add user settings to Firestore
			const docRef2 = await addDoc(collection(db, "Usersettings"), {
				input: "test mic",
				light_dark: true,
				notifications: true,
				output: "test speaker",
				status: "offline",
				UID: user.uid,
				subscribed: false
			});
			console.log("Document written with ID: ", docRef2.id);
	
			// Navigate to Login after successful signup
			navigation.navigate('Login');
		} catch (error) {
			console.error("Error during account creation:", error.message);
		}
	};

  	return (
		<ScrollView>
    		<KeyboardAvoidingView style={styles.signUpPage}>
      			<Image style={[styles.image2Icon]} resizeMode="cover" source={require("../assets/image_2.png")} />
      			<Text style={[styles.cafConnect]}>CAFÉ CONNECT</Text>
      			<View style={[styles.textField4, styles.textShadowBox]}>
        				<View style={[styles.textField1, styles.statePosition]}>
          					<View style={[styles.stateLayer1, styles.statePosition]}>
            						<View style={[styles.content, styles.contentSpaceBlock]}>
              							<View style={styles.inputTextContainer}>
											<TextInput
												style={styles.input}
												onChangeText={onChangeFName}
												value={First_Name}
												placeholder="First Name"
											/>
              							</View>
            						</View>
          					</View>
        				</View>
        				<View style={styles.activeIndicator} />
      			</View>
      			<View style={[styles.textField6, styles.textShadowBox]}>
        				<View style={[styles.textField1, styles.statePosition]}>
          					<View style={[styles.stateLayer1, styles.statePosition]}>
            						<View style={[styles.content, styles.contentSpaceBlock]}>
              							<View style={styles.inputTextContainer}>
											<TextInput
												style={styles.input}
												onChangeText={onChangeLName}
												value={Last_Name}
												placeholder="Last Name"
											/>
              							</View>
            						</View>
          					</View>
        				</View>
        				<View style={styles.activeIndicator} />
      			</View>
      			<View style={[styles.textField8, styles.textShadowBox]}>
        				<View style={[styles.textField1, styles.statePosition]}>
          					<View style={[styles.stateLayer1, styles.statePosition]}>
            						<View style={[styles.content, styles.contentSpaceBlock]}>
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
      			<View style={[styles.textField10, styles.textShadowBox]}>
        				<View style={[styles.textField1, styles.statePosition]}>
          					<View style={[styles.stateLayer6, styles.contentSpaceBlock]}>
            						<View style={[styles.content, styles.contentSpaceBlock]}>
              							<View style={styles.inputTextContainer}>
											<TextInput
												style={styles.input}
												onChangeText={handleInputChangeDate}
												value={UDate}
												placeholder="Birthday mm/dd/yyyy"
												keyboardType="numeric"
											/>
              							</View>
            						</View>
          					</View>
        				</View>
        				<View style={styles.activeIndicator} />
      			</View>
				<View style={[styles.textField, styles.textShadowBox]}>
					<View style={[styles.textField1, styles.statePosition]}>
						<View style={[styles.stateLayer1, styles.statePosition]}>
							<View style={[styles.content, styles.contentSpaceBlock]}>
								<View style={styles.inputTextContainer}>
									<TextInput
										style={styles.input}
										onChangeText={onChangeUsername}
										value={Username}
										placeholder="Username"
										//keyboardType="numeric"
									/>
								</View>
							</View>
						</View>
					</View>
					<View style={styles.activeIndicator} />
				</View>
				<View style={[styles.textField2, styles.textShadowBox]}>
					<View style={[styles.textField1, styles.statePosition]}>
						<View style={[styles.stateLayer1, styles.statePosition]}>
							<View style={[styles.content, styles.contentSpaceBlock]}>
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
				<TouchableOpacity style={[styles.button, styles.buttonPosition]} onPress={handleCreateAccountPress}>
					<InsetShadow>
						<View style={styles.stateLayer}>
							<Text style={styles.labelText}>CREATE ACCOUNT</Text>
						</View>
					</InsetShadow>
				</TouchableOpacity>
				<TouchableOpacity style={[styles.button1, styles.buttonPosition]} onPress={handleLoginPress}>
					<InsetShadow>
						<View style={styles.stateLayer3}>
							<Text style={styles.labelText}>LOGIN</Text>
						</View>
					</InsetShadow>
				</TouchableOpacity>
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
  	textField1: {
    		backgroundColor: "#e6e0e9",
    		flex: 1
  	},
  	activeIndicator: {
    		borderStyle: "solid",
    		borderColor: "#49454f",
    		borderTopWidth: 1,
    		height: 1,
    		alignSelf: "stretch"
  	},
  	textField: {
    		top: "14%"
  	},
  	textField2: {
    		top: "17%"
  	},
  	textField4: {
    		top: "2%"
  	},
  	textField6: {
    		top: "5%"
  	},
  	textField8: {
    		top: "8%"
  	},
  	stateLayer6: {
    		paddingHorizontal: 16,
    		borderTopRightRadius: 4,
    		borderTopLeftRadius: 4,
    		alignSelf: "stretch",
    		flexDirection: "row"
  	},
  	textField10: {
    		top: "11%"
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
	}
});

export default SignUpPage;
