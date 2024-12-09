import * as React from "react";
import {Image, StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, ActivityIndicator} from "react-native";
import InsetShadow from 'react-native-inset-shadow';
import { getAuth } from "firebase/auth";
import { getFirestore, addDoc, collection } from "firebase/firestore";
import { useFonts, Roboto_500Medium, Roboto_400Regular } from '@expo-google-fonts/roboto';

const SupportPage = ({navigation, fbApp}) => {
	const auth = getAuth(fbApp);
	const db = getFirestore(fbApp);

	const [Subject, onChangeSubject] = React.useState('');
	const [Problem, onChangeProblem] = React.useState('');

	let [fontsLoaded] = useFonts({
		Roboto_500Medium,
		Roboto_400Regular,
	});
	

	//submit a support ticket
	const handleSupportPress = async () => {
        const user = auth.currentUser; // Get the currently authenticated user

        if (!user) {
          console.error("No user is signed in");
          return;
        }

        try {
              // Query Firestore to find the document by UID
              const docRef = await addDoc(collection(db, "Support"), {
				subject: Subject,
				problem: Problem,
				UID: user.uid,
			});
            console.log("Document written with ID: ", docRef.id);
            } catch (error) {
              console.error("Error updating document:", error.message);
            }
          };

		  	// Show a loading indicator until the fonts are loaded
	if (!fontsLoaded) {
		return (
			<View style={[styles.loginPage, styles.centered]}>
				<ActivityIndicator size="large" color="#9c6f44" />
			</View>
		);
	}
  	return (
		<ScrollView>
    		<KeyboardAvoidingView style={styles.signUpPage}>
            <Image style={styles.image5Icon} resizeMode="cover" source={require("../assets/image 5.png")} />
      			<Text style={[styles.cafConnect]}>SUPPORT</Text>
      			<View style={[styles.textField4, styles.textShadowBox]}>
        				<View style={[styles.textField1, styles.statePosition]}>
          					<View style={[styles.stateLayer1, styles.statePosition]}>
            						<View style={[styles.content, styles.contentSpaceBlock]}>
              							<View style={styles.inputTextContainer}>
											<TextInput
												style={styles.input}
                                                multiline={true}
                                                numberOfLines={10}
												onChangeText={onChangeSubject}
												value={Subject}
												placeholder="Enter Support Subject Here"
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
												onChangeText={onChangeProblem}
												value={Problem}
												placeholder="Enter Issue Here"
											/>
              							</View>
            						</View>
          					</View>
        				</View>
        				<View style={styles.activeIndicator} />
      			</View>
				<TouchableOpacity style={[styles.button, styles.buttonPosition]} onPress={handleSupportPress}>
					<InsetShadow>
						<View style={styles.stateLayer}>
							<Text style={styles.labelText}>CONFIRM</Text>
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
    		height: 100,
    		width: 277,
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
  	image5Icon: {
        opacity: 1,
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
			paddingHorizontal: "35.4%",
    		paddingVertical: 10,
    		flexDirection: "row",
    		alignSelf: "stretch",
    		justifyContent: "center",
    		alignItems: "center",
    		flex: 1
  	},
  	button: {
    		marginLeft: -106,
    		top: "13%",
    		borderRadius: 100,
    		backgroundColor: "#000",
    		width: 209,
    		height: 52,
    		justifyContent: "center",
    		alignItems: "center",
    		overflow: "hidden"
  	},
	cafConnect: {
		marginLeft: -80,
		top: "2%",
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
    		top: "8%"
  	},
  	textField2: {
    		top: "11%"
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
    		height: 670,
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
    input: {
        padding: 10,
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

export default SupportPage;
