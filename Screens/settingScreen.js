import * as React from "react";
import {Image, StyleSheet, Text, View, Pressable} from "react-native";

const SettingsPage = () => {
  	
  	return (
    		<View style={[styles.settingsPage, styles.iconLayout1]}>
      			<Image style={styles.image5Icon} resizeMode="cover" source="image 5.png" />
      			<Text style={[styles.settings, styles.audioTypo]}>SETTINGS</Text>
      			<Text style={[styles.audio, styles.audioTypo]}>AUDIO</Text>
      			<View style={[styles.button, styles.buttonLayout]}>
        				<View style={[styles.toggleSwitch, styles.toggleLayout]}>
          					<View style={[styles.toggleSwitchInner, styles.inputFlexBox]}>
            						<Image style={styles.frameChild} resizeMode="cover" source="Ellipse 1.png" />
          					</View>
        				</View>
        				<Image style={[styles.starIcon, styles.iconLayout]} resizeMode="cover" source="Star.png" />
        				<Image style={[styles.xIcon, styles.iconLayout]} resizeMode="cover" source="X.png" />
        				<Text style={[styles.notifications, styles.darkModeLayout]}>Notifications</Text>
      			</View>
      			<View style={[styles.button1, styles.buttonLayout]}>
        				<Image style={[styles.starIcon1, styles.iconLayout]} resizeMode="cover" source="Star.png" />
        				<Image style={[styles.starIcon, styles.iconLayout]} resizeMode="cover" source="X.png" />
        				<Text style={[styles.darkMode, styles.darkModeLayout]}>Dark Mode</Text>
        				<View style={[styles.toggleSwitch1, styles.toggleLayout]}>
          					<View style={[styles.toggleSwitchInner, styles.inputFlexBox]}>
            						<Image style={styles.frameChild} resizeMode="cover" source="Ellipse 1.png" />
          					</View>
        				</View>
      			</View>
      			<Pressable style={[styles.button2, styles.buttonFlexBox]} onPress={()=>{}}>
        				<Image style={[styles.starIcon1, styles.iconLayout]} resizeMode="cover" source="Star.png" />
        				<Image style={[styles.starIcon, styles.iconLayout]} resizeMode="cover" source="X.png" />
        				<Text style={[styles.darkMode, styles.darkModeLayout]}>Edit Account Details</Text>
        				<Image style={styles.moreThanIcon} resizeMode="cover" source="More Than.png" />
      			</Pressable>
      			<Pressable style={[styles.button3, styles.buttonFlexBox]} onPress={()=>{}}>
        				<Image style={[styles.starIcon1, styles.iconLayout]} resizeMode="cover" source="Star.png" />
        				<Image style={[styles.starIcon, styles.iconLayout]} resizeMode="cover" source="X.png" />
        				<Text style={[styles.darkMode, styles.darkModeLayout]}>User Support</Text>
        				<Image style={styles.moreThanIcon} resizeMode="cover" source="More Than.png" />
      			</Pressable>
      			<Pressable style={[styles.button4, styles.buttonFlexBox]} onPress={()=>{}}>
        				<Image style={[styles.starIcon1, styles.iconLayout]} resizeMode="cover" source="Star.png" />
        				<Image style={[styles.starIcon, styles.iconLayout]} resizeMode="cover" source="X.png" />
        				<Text style={[styles.darkMode, styles.darkModeLayout]}>About</Text>
        				<Image style={styles.moreThanIcon} resizeMode="cover" source="More Than.png" />
      			</Pressable>
      			<View style={[styles.inputField, styles.inputPosition]}>
        				<Text style={[styles.description, styles.errorTypo]}>Description</Text>
        				<View style={styles.inputFieldChild} />
        				<Text style={[styles.error, styles.errorTypo]}>Error</Text>
        				<View style={[styles.input, styles.inputFlexBox]}>
          					<Text style={[styles.currentActiveInput, styles.currentTypo]}>Current active input device</Text>
        				</View>
        				<Image style={[styles.expandArrowIcon, styles.button5Layout]} resizeMode="cover" source="Expand Arrow.png" />
        				<Text style={[styles.inputDevice, styles.labelTextClr]}>Input Device</Text>
      			</View>
      			<View style={[styles.inputField1, styles.inputPosition]}>
        				<Text style={[styles.description, styles.errorTypo]}>Description</Text>
        				<View style={styles.inputFieldChild} />
        				<Text style={[styles.error, styles.errorTypo]}>Error</Text>
        				<View style={[styles.input, styles.inputFlexBox]}>
          					<Text style={[styles.currentActiveOutput, styles.currentTypo]}>Current active output device</Text>
        				</View>
        				<Image style={[styles.expandArrowIcon, styles.button5Layout]} resizeMode="cover" source="Expand Arrow.png" />
        				<Text style={[styles.inputDevice, styles.labelTextClr]}>Output Device</Text>
      			</View>
      			<Pressable style={[styles.button5, styles.button5Layout]} onPress={()=>{}}>
        				<View style={[styles.stateLayer, styles.buttonFlexBox]}>
          					<Image style={styles.logoutIcon} resizeMode="cover" source="Logout.png" />
          					<Text style={[styles.labelText, styles.labelTextClr]}>LOGOUT</Text>
        				</View>
      			</Pressable>
      			<Pressable style={styles.arrowLeft} onPress={()=>{}}>
        				<Image style={[styles.icon, styles.iconLayout1]} resizeMode="cover" source="Arrow left.png" />
      			</Pressable>
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
    		width: 395,
    		borderWidth: 1,
    		borderStyle: "solid",
    		backgroundColor: "#2c2c2c",
    		borderRadius: 8,
    		left: 19,
    		position: "absolute",
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
    		height: 36,
    		position: "absolute"
  	},
  	labelTextClr: {
    		color: "#fff",
    		position: "absolute"
  	},
  	image5Icon: {
    		top: -50,
    		left: -947,
    		width: 2485,
    		height: 1042,
    		opacity: 0.13,
    		position: "absolute"
  	},
  	settings: {
    		marginLeft: -84,
    		top: 69,
    		fontSize: 36,
    		width: 168,
    		height: 43
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
    		top: 243,
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
    		top: 322,
    		gap: 8,
    		justifyContent: "flex-end",
    		padding: 12,
    		alignItems: "center",
    		height: 56,
    		borderColor: "#2c2c2c"
  	},
  	moreThanIcon: {
    		top: 16,
    		left: 357,
    		width: 20,
    		height: 25,
    		zIndex: 3,
    		position: "absolute"
  	},
  	button2: {
    		top: 164,
    		gap: 8,
    		padding: 12,
    		height: 56,
    		borderColor: "#2c2c2c",
    		flexDirection: "row",
    		width: 395,
    		borderWidth: 1,
    		borderStyle: "solid",
    		backgroundColor: "#2c2c2c",
    		borderRadius: 8,
    		left: 19,
    		position: "absolute",
    		overflow: "hidden",
    		justifyContent: "center"
  	},
  	button3: {
    		top: 401,
    		gap: 8,
    		padding: 12,
    		height: 56,
    		borderColor: "#2c2c2c",
    		flexDirection: "row",
    		width: 395,
    		borderWidth: 1,
    		borderStyle: "solid",
    		backgroundColor: "#2c2c2c",
    		borderRadius: 8,
    		left: 19,
    		position: "absolute",
    		overflow: "hidden",
    		justifyContent: "center"
  	},
  	button4: {
    		top: 480,
    		gap: 8,
    		padding: 12,
    		height: 56,
    		borderColor: "#2c2c2c",
    		flexDirection: "row",
    		width: 395,
    		borderWidth: 1,
    		borderStyle: "solid",
    		backgroundColor: "#2c2c2c",
    		borderRadius: 8,
    		left: 19,
    		position: "absolute",
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
    		top: 8,
    		left: 85,
    		width: 18,
    		height: 18,
    		zIndex: 0,
    		position: "absolute"
  	},
  	labelText: {
    		marginTop: -10,
    		top: "50%",
    		fontSize: 14,
    		letterSpacing: 0,
    		lineHeight: 20,
    		fontWeight: "500",
    		fontFamily: "Roboto-Medium",
    		textAlign: "center",
    		zIndex: 1,
    		left: 19
  	},
  	stateLayer: {
    		backgroundColor: "#9c6f44",
    		paddingHorizontal: 24,
    		paddingVertical: 10,
    		alignSelf: "stretch",
    		gap: 8,
    		flexDirection: "row",
    		justifyContent: "center",
    		flex: 1
  	},
  	button5: {
    		marginLeft: -61,
    		top: 759,
    		shadowColor: "rgba(0, 0, 0, 0.25)",
    		shadowOffset: {
      			width: 0,
      			height: 4
    		},
    		shadowRadius: 4,
    		elevation: 4,
    		shadowOpacity: 1,
    		backgroundColor: "#000",
    		width: 122,
    		justifyContent: "center",
    		alignItems: "center",
    		borderRadius: 100,
    		left: "50%",
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
