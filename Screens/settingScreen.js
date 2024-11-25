import * as React from "react";
import {Image, StyleSheet, Text, View, Pressable, TouchableOpacity,} from "react-native";
import { getAuth, signOut } from "firebase/auth";

const SettingsPage = ({ navigation, fbApp }) => {

	const auth = getAuth(fbApp);

	const handleLogout = async () => {
	  try {
		await signOut(auth); // Logs the user out of Firebase
	  } catch (error) {
		console.error("Error logging out:", error.message);
	  }
	};

	const handleEditPress = async () => {
		navigation.navigate('EditAccountDetails');
	}

	const handleAboutPress = async () => {
		navigation.navigate('About');
	}

	const handleSupportPress = async () => {
		navigation.navigate('Support');
	}
  	
  	return (
    		<View style={[styles.settingsPage, styles.iconLayout1]}>
      			<Image style={styles.image5Icon} resizeMode="cover" source={require("../assets/image 5.png")} />
      			<Text style={[styles.settings]}>SETTINGS</Text>
				<Pressable style={[styles.button2, styles.buttonFlexBox]} onPress={handleEditPress}>
        				<Text style={[styles.darkMode, styles.darkModeLayout]}>Edit Account Details</Text>
        				<Image style={styles.moreThanIcon} resizeMode="cover" source={require("../assets/More Than.png")} />
      			</Pressable>
      			<View style={[styles.button, styles.buttonLayout]}>
        				<View style={[styles.toggleSwitch, styles.toggleLayout]}>
          					<View style={[styles.toggleSwitchInner, styles.inputFlexBox]}>
            						<Image style={styles.frameChild} resizeMode="cover" source={require("../assets/Ellipse 2.png")} />
          					</View>
        				</View>
        				<Text style={[styles.notifications, styles.darkModeLayout]}>Notifications</Text>
      			</View>
      			<View style={[styles.button1, styles.buttonLayout]}>
        				<Text style={[styles.darkMode, styles.darkModeLayout]}>Dark Mode</Text>
        				<View style={[styles.toggleSwitch1, styles.toggleLayout]}>
          					<View style={[styles.toggleSwitchInner, styles.inputFlexBox]}>
            						<Image style={styles.frameChild} resizeMode="cover" source={require("../assets/Ellipse 2.png")} />
          					</View>
        				</View>
      			</View>
      			<Pressable style={[styles.button3, styles.buttonFlexBox]} onPress={handleSupportPress}>
        				<Text style={[styles.darkMode, styles.darkModeLayout]}>User Support</Text>
        				<Image style={styles.moreThanIcon} resizeMode="cover" source={require("../assets/More Than.png")} />
      			</Pressable>
      			<Pressable style={[styles.button4, styles.buttonFlexBox]} onPress={handleAboutPress}>
        				<Text style={[styles.darkMode, styles.darkModeLayout]}>About</Text>
        				<Image style={styles.moreThanIcon} resizeMode="cover" source={require("../assets/More Than.png")} />
      			</Pressable>
      			<TouchableOpacity
        			style={[styles.button5, styles.button5Layout]}
        			onPress={handleLogout}
      			>
        			<View style={[styles.stateLayer, styles.buttonFlexBox]}>
          			<Text style={[styles.labelText, styles.labelTextClr]}>LOGOUT</Text>
          			<Image
            			style={styles.logoutIcon}
            			resizeMode="cover"
            			source={require("../assets/Logout.png")}
          			/>
        			</View>
      			</TouchableOpacity>
    		</View>);
};

const styles = StyleSheet.create({
  	iconLayout1: {
    		overflow: "hidden",
    		width: "100%"
  	},
  	audioTypo: {
    		textAlign: "left",
    		fontFamily: "JosefinSlab-Bold",
    		fontWeight: "700",
    		color: "#000",
    		left: "50%",
    		position: "absolute"
  	},
  	buttonLayout: {
    		padding: 12,
    		height: 56,
    		borderColor: "#2c2c2c",
    		gap: 8,
    		flexDirection: "row",
    		width: 325,
    		borderWidth: 1,
    		borderStyle: "solid",
    		backgroundColor: "#2c2c2c",
    		borderRadius: 8,
    		left: 19,
    		position: "relative",
    		overflow: "hidden"
  	},
  	toggleLayout: {
    		height: 40,
    		width: 64,
    		padding: 4
  	},
  	inputFlexBox: {
    		alignItems: "center",
    		borderWidth: 1,
    		borderStyle: "solid",
    		flexDirection: "row"
  	},
  	iconLayout: {
    		height: 16,
    		width: 16,
    		display: "none",
    		overflow: "hidden"
  	},
  	darkModeLayout: {
    		width: 153,
    		color: "#f5f5f5",
    		left: 13,
    		top: 20,
    		fontFamily: "Inter-Regular",
    		lineHeight: 16,
    		fontSize: 16,
    		height: 16,
    		textAlign: "left",
    		position: "absolute"
  	},
  	buttonFlexBox: {
    		justifyContent: "center",
    		alignItems: "center"
  	},
  	inputPosition: {
    		gap: 8,
    		width: 395,
    		left: 19,
    		position: "absolute"
  	},
  	errorTypo: {
    		lineHeight: 22,
    		fontFamily: "Inter-Regular",
    		fontSize: 16,
    		textAlign: "left"
  	},
  	currentTypo: {
    		fontFamily: "Inter-Regular",
    		lineHeight: 16,
    		fontSize: 16,
    		textAlign: "left",
    		flex: 1
  	},
  	button5Layout: {
    		position: "relative"
  	},
  	labelTextClr: {
    		color: "#fff",
    		position: "relative"
  	},
  	image5Icon: {
    		opacity: 1,
    		position: "absolute"
  	},
  	settings: {
		marginLeft: -80,
        top: "12%",
        fontSize: 36,
        fontWeight: "700",
        fontFamily: "JosefinSlab-Bold",
        color: "#000",
        width: 322,
        height: "6%",
        textAlign: "left",
        left: "50%",
        position: "relative"
  	},
  	audio: {
    		marginLeft: -190,
    		top: 554,
    		fontSize: 24,
    		width: 100,
    		height: 29
  	},
  	frameChild: {
    		width: 24,
    		height: 24
  	},
  	toggleSwitchInner: {
    		backgroundColor: "#a7a7a7",
    		borderColor: "#c0c0c0",
    		borderRadius: 100,
    		alignSelf: "stretch",
    		padding: 4
  	},
  	toggleSwitch: {
    		zIndex: 0,
    		padding: 4
  	},
  	starIcon: {
    		zIndex: 1,
    		display: "none"
  	},
  	xIcon: {
    		zIndex: 2,
    		display: "none"
  	},
  	notifications: {
    		zIndex: 3
  	},
  	button: {
    		top: "35%",
    		gap: 8,
    		justifyContent: "flex-end",
    		padding: 12,
    		alignItems: "center",
    		height: 56,
    		borderColor: "#2c2c2c"
  	},
  	starIcon1: {
    		display: "none",
    		zIndex: 0
  	},
  	darkMode: {
    		zIndex: 2
  	},
  	toggleSwitch1: {
    		zIndex: 3,
    		padding: 4
  	},
  	button1: {
    		top: "40%",
    		gap: 8,
    		justifyContent: "flex-end",
    		padding: 12,
    		alignItems: "center",
    		height: 56,
    		borderColor: "#2c2c2c"
  	},
  	moreThanIcon: {
			left: "450%",
    		zIndex: 0,
			padding: 4
  	},
  	button2: {
    		top: "30%",
    		gap: 8,
    		padding: 12,
    		height: 56,
    		borderColor: "#2c2c2c",
    		flexDirection: "row",
    		width: 325,
    		borderWidth: 1,
    		borderStyle: "solid",
    		backgroundColor: "#2c2c2c",
    		borderRadius: 8,
    		left: 19,
    		position: "relative",
    		overflow: "hidden",
    		justifyContent: "center"
  	},
  	button3: {
    		top: "45%",
    		gap: 8,
    		padding: 12,
    		height: 56,
    		borderColor: "#2c2c2c",
    		flexDirection: "row",
    		width: 325,
    		borderWidth: 1,
    		borderStyle: "solid",
    		backgroundColor: "#2c2c2c",
    		borderRadius: 8,
    		left: 19,
    		position: "relative",
    		overflow: "hidden",
    		justifyContent: "center"
  	},
  	button4: {
    		top: "50%",
    		gap: 8,
    		padding: 12,
    		height: 56,
    		borderColor: "#2c2c2c",
    		flexDirection: "row",
    		width: 325,
    		borderWidth: 1,
    		borderStyle: "solid",
    		backgroundColor: "#2c2c2c",
    		borderRadius: 8,
    		left: 19,
    		position: "relative",
    		overflow: "hidden",
    		justifyContent: "center"
  	},
  	description: {
    		color: "#757575",
    		display: "none",
    		alignSelf: "stretch",
    		zIndex: 0
  	},
  	inputFieldChild: {
    		height: 74,
    		zIndex: 1,
    		alignSelf: "stretch",
    		backgroundColor: "#2c2c2c",
    		borderRadius: 8
  	},
  	error: {
    		color: "#1e1e1e",
    		zIndex: 2,
    		display: "none"
  	},
  	currentActiveInput: {
    		color: "#000",
    		fontFamily: "Inter-Regular",
    		lineHeight: 16,
    		fontSize: 16
  	},
  	input: {
    		top: 34,
    		left: 0,
    		backgroundColor: "#fff",
    		borderColor: "#d9d9d9",
    		width: 396,
    		paddingHorizontal: 16,
    		paddingVertical: 12,
    		minWidth: 240,
    		zIndex: 3,
    		borderRadius: 8,
    		borderWidth: 1,
    		borderStyle: "solid",
    		position: "absolute",
    		overflow: "hidden"
  	},
  	expandArrowIcon: {
    		top: 37,
    		left: 346,
    		width: 33,
    		zIndex: 4
  	},
  	inputDevice: {
    		top: 4,
    		left: 6,
    		width: 240,
    		zIndex: 5,
    		lineHeight: 22,
    		fontFamily: "Inter-Regular",
    		fontSize: 16,
    		textAlign: "left"
  	},
  	inputField: {
    		top: 583,
    		gap: 8
  	},
  	currentActiveOutput: {
    		color: "#2c2c2c"
  	},
  	inputField1: {
    		top: 669,
    		gap: 8
  	},
  	logoutIcon: {
			top: "-1%",
    		width: 18,
    		height: 18,
    		zIndex: 0,
    		position: "relative"
  	},
  	labelText: {
			top: "-2%",
    		fontSize: 16,
    		letterSpacing: 0,
    		lineHeight: 20,
    		fontWeight: "500",
    		fontFamily: "Roboto-Medium",
    		textAlign: "center",
    		zIndex: 1,
  	},
  	stateLayer: {
    		backgroundColor: "#9c6f44",
    		paddingHorizontal: 24,
    		paddingVertical: 10,
    		alignSelf: "stretch",
    		gap: 8,
    		flexDirection: "row",
    		justifyContent: "center",
    		alignItems: "center",
    		flex: 1
  	},
  	button5: {
    		top: "35%",
    		elevation: 4,
    		shadowOpacity: 1,
    		backgroundColor: "#000",
    		width: "50%",
    		justifyContent: "center",
    		alignItems: "center",
    		borderRadius: 100,
    		left: "26%",
    		height: 36,
    		overflow: "hidden"
  	},
  	icon: {
    		height: "100%"
  	},
  	arrowLeft: {
    		top: 15,
    		width: 48,
    		height: 48,
    		left: 19,
    		position: "absolute"
  	},
  	settingsPage: {
    		backgroundColor: "#face8b",
    		height: 932,
    		flex: 1,
    		width: "100%"
  	}
});

export default SettingsPage;
