import * as React from "react";
import {Image, StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView} from "react-native";
import InsetShadow from 'react-native-inset-shadow';
import { getAuth, updateProfile } from "firebase/auth";
import { getFirestore, updateDoc, doc, collection, query, where, getDocs } from "firebase/firestore";
import { useFonts, Roboto_500Medium, Roboto_400Regular } from '@expo-google-fonts/roboto';

const editAccountPage = ({navigation, fbApp}) => {
	const auth = getAuth(fbApp);
	const db = getFirestore(fbApp);

	const [First_Name, onChangeFName] = React.useState('');
	const [Last_Name, onChangeLName] = React.useState('');
	const [Username, onChangeUsername] = React.useState('');

	let [fontsLoaded] = useFonts({
		Roboto_500Medium,
		Roboto_400Regular,
	});

	const handleEditAccountPress = async () => {
        const user = auth.currentUser; // Get the currently authenticated user

        if (!user) {
          console.error("No user is signed in");
          return;
        }

        try {
            // Update the user's display name if a username is provided
            if (Username) {
              await updateProfile(user, {
                displayName: Username,
              });
              console.log("Display name updated to:", Username);
            }
            
            const updates = {};

            // Add fields to `updates` only if they have valid values
            if (First_Name) updates.firstname = First_Name;
            if (Last_Name) updates.lastname = Last_Name;
            if (Username) updates.username = Username;

            if (Object.keys(updates).length === 0) {
                console.log("No updates were made because no fields were provided.");
                return;
              }
          
              // Query Firestore to find the document by UID
              const usersCollection = collection(db, "Users");
              const userQuery = query(usersCollection, where("UID", "==", user.uid));
              const querySnapshot = await getDocs(userQuery);
          
              if (querySnapshot.empty) {
                console.error("No document found for the authenticated user.");
                return;
              }
          
              // Assuming the UID is unique, we update the first (and only) matching document
              const userDoc = querySnapshot.docs[0];
              const userDocRef = doc(db, "Users", userDoc.id);
          
              await updateDoc(userDocRef, updates);
              console.log("Document updated successfully:", updates);
            } catch (error) {
              console.error("Error updating document:", error.message);
            }
          };
  	return (
		<ScrollView>
    		<KeyboardAvoidingView style={styles.signUpPage}>
            <Image style={styles.image5Icon} resizeMode="cover" source={require("../assets/image 5.png")} />
      			<Text style={[styles.cafConnect]}>EDIT ACCOUNT</Text>
      			<View style={[styles.textField4, styles.textShadowBox]}>
        				<View style={[styles.textField1, styles.statePosition]}>
          					<View style={[styles.stateLayer1, styles.statePosition]}>
            						<View style={[styles.content, styles.contentSpaceBlock]}>
              							<View style={styles.inputTextContainer}>
											<TextInput
												style={styles.input}
												onChangeText={onChangeFName}
												value={First_Name}
												placeholder="Change First Name"
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
												placeholder="Change Last Name"
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
										placeholder="Change Username"
									/>
								</View>
							</View>
						</View>
					</View>
					<View style={styles.activeIndicator} />
				</View>
				<TouchableOpacity style={[styles.button, styles.buttonPosition]} onPress={handleEditAccountPress}>
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
		marginLeft: -130,
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
    		height: 645,
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

export default editAccountPage;
