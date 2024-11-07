import * as React from "react";
import {Image, StyleSheet, Text, View} from "react-native";

const LoginPage = () => {

  	return (
    		<View style={styles.loginPage}>
      			<Image style={styles.image2Icon} resizeMode="cover" source="image 2.png" />
      			<Text style={styles.cafConnect}>CAFÉ CONNECT</Text>
      			<Image style={styles.image1Icon} resizeMode="cover" source="image 1.png" />
      			<View style={[styles.fab, styles.fabShadowBox]}>
        				<View style={styles.stateLayer}>
          					<Image style={styles.iconXLetter} resizeMode="cover" source={`🦆 icon "x letter".png`} />
        				</View>
      			</View>
      			<View style={[styles.fab1, styles.fabShadowBox]}>
        				<View style={styles.stateLayer}>
          					<Image style={styles.iconXLetter} resizeMode="cover" source={`🦆 icon "facebook".png`} />
        				</View>
      			</View>
      			<View style={[styles.fab2, styles.fabShadowBox]}>
        				<View style={styles.stateLayer}>
          					<Image style={styles.iconGoogle} resizeMode="cover" source={`🦆 icon "google".png`} />
        				</View>
      			</View>
      			<View style={styles.sso}>
        				<Text style={[styles.singleSignOn, styles.labelTextTypo]}>Single Sign-On</Text>
      			</View>
      			<View style={[styles.textField, styles.textShadowBox]}>
        				<View style={[styles.textField1, styles.textField1Position]}>
          					<View style={[styles.stateLayer3, styles.textField1Position]}>
            						<View style={[styles.content, styles.contentFlexBox]}>
              							<View style={styles.inputTextContainer}>
                								<Text style={styles.inputText}>Username</Text>
              							</View>
            						</View>
          					</View>
        				</View>
        				<View style={styles.activeIndicator} />
      			</View>
      			<View style={[styles.textField2, styles.textShadowBox]}>
        				<View style={[styles.textField1, styles.textField1Position]}>
          					<View style={[styles.stateLayer3, styles.textField1Position]}>
            						<View style={[styles.content, styles.contentFlexBox]}>
              							<View style={styles.inputTextContainer}>
                								<Text style={styles.inputText}>Password</Text>
              							</View>
            						</View>
          					</View>
        				</View>
        				<View style={styles.activeIndicator} />
      			</View>
      			<View style={[styles.button, styles.buttonLayout]}>
        				<View style={[styles.stateLayer5, styles.contentFlexBox]}>
          					<Text style={[styles.labelText, styles.labelTextTypo]}>LOGIN</Text>
        				</View>
      			</View>
      			<View style={[styles.button1, styles.buttonLayout]}>
        				<View style={[styles.stateLayer5, styles.contentFlexBox]}>
          					<Text style={[styles.labelText, styles.labelTextTypo]}>SIGNUP</Text>
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
    		shadowColor: "rgba(0, 0, 0, 0.15)",
    		top: 790,
    		justifyContent: "center",
    		alignItems: "center",
    		flexDirection: "row",
    		position: "absolute",
    		overflow: "hidden"
  	},
  	labelTextTypo: {
    		textAlign: "center",
    		color: "#fff",
    		fontFamily: "Roboto-Medium",
    		fontWeight: "500",
    		lineHeight: 20,
    		letterSpacing: 0
  	},
  	textShadowBox: {
    		height: 56,
    		width: 277,
    		elevation: 4,
    		shadowRadius: 4,
    		shadowColor: "rgba(0, 0, 0, 0.25)",
    		marginLeft: -139,
    		borderTopRightRadius: 4,
    		borderTopLeftRadius: 4,
    		shadowOpacity: 1,
    		shadowOffset: {
      			width: 0,
      			height: 4
    		},
    		left: "50%",
    		position: "absolute"
  	},
  	textField1Position: {
    		borderTopRightRadius: 4,
    		borderTopLeftRadius: 4,
    		alignSelf: "stretch",
    		flex: 1
  	},
  	contentFlexBox: {
    		flex: 1,
    		justifyContent: "center"
  	},
  	buttonLayout: {
    		height: 52,
    		width: 209,
    		backgroundColor: "#000",
    		borderRadius: 100,
    		justifyContent: "center",
    		alignItems: "center",
    		left: "50%",
    		position: "absolute",
    		overflow: "hidden"
  	},
  	image2Icon: {
    		marginLeft: -415,
    		top: -37,
    		width: 830,
    		height: 969,
    		opacity: 0.1,
    		left: "50%",
    		position: "absolute"
  	},
  	cafConnect: {
    		marginLeft: -142,
    		top: 79,
    		fontSize: 36,
    		fontWeight: "700",
    		fontFamily: "JosefinSlab-Bold",
    		color: "#000",
    		width: 283,
    		height: 51,
    		textAlign: "left",
    		left: "50%",
    		position: "absolute"
  	},
  	image1Icon: {
    		marginLeft: -128,
    		top: 130,
    		width: 256,
    		height: 235,
    		left: "50%",
    		position: "absolute"
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
  	fab: {
    		left: 297,
    		justifyContent: "center",
    		alignItems: "center",
    		flexDirection: "row"
  	},
  	fab1: {
    		marginLeft: -41,
    		justifyContent: "center",
    		alignItems: "center",
    		flexDirection: "row",
    		left: "50%"
  	},
  	iconGoogle: {
    		width: 69,
    		height: 68
  	},
  	fab2: {
    		left: 41,
    		justifyContent: "center",
    		alignItems: "center",
    		flexDirection: "row"
  	},
  	singleSignOn: {
    		height: "100%",
    		top: "0%",
    		left: "0%",
    		fontSize: 20,
    		display: "flex",
    		justifyContent: "center",
    		alignItems: "center",
    		position: "absolute",
    		width: "100%",
    		color: "#fff",
    		fontFamily: "Roboto-Medium",
    		fontWeight: "500",
    		lineHeight: 20,
    		letterSpacing: 0
  	},
  	sso: {
    		top: 699,
    		left: 94,
    		borderRadius: 11,
    		width: 244,
    		height: 50,
    		backgroundColor: "#9c6f44",
    		position: "absolute"
  	},
  	inputText: {
    		fontSize: 16,
    		letterSpacing: 1,
    		lineHeight: 24,
    		fontFamily: "Roboto-Regular",
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
    		alignSelf: "stretch",
    		flexDirection: "row"
  	},
  	textField1: {
    		backgroundColor: "#e6e0e9",
    		alignSelf: "stretch"
  	},
  	activeIndicator: {
    		borderStyle: "solid",
    		borderColor: "#49454f",
    		borderTopWidth: 1,
    		height: 1,
    		alignSelf: "stretch"
  	},
  	textField: {
    		top: 391
  	},
  	textField2: {
    		top: 466
  	},
  	labelText: {
    		fontSize: 14
  	},
  	stateLayer5: {
    		paddingHorizontal: 24,
    		paddingVertical: 10,
    		alignSelf: "stretch",
    		backgroundColor: "#9c6f44",
    		justifyContent: "center",
    		alignItems: "center",
    		flexDirection: "row"
  	},
  	button: {
    		marginLeft: -105,
    		top: 535
  	},
  	button1: {
    		marginLeft: -104,
    		top: 606
  	},
  	loginPage: {
    		backgroundColor: "#face8b",
    		height: 932,
    		overflow: "hidden",
    		width: "100%",
    		flex: 1
  	}
});

export default LoginPage;
