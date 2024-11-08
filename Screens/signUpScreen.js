import * as React from "react";
import {Image, StyleSheet, Text, View} from "react-native";

const SignUpPage = () => {
  	
  	return (
    		<View style={styles.signUpPage}>
      			<Image style={[styles.image2Icon, styles.buttonPosition]} resizeMode="cover" source={require("../assets/image_2.png")} />
      			<View style={[styles.button, styles.buttonPosition]}>
        				<View style={styles.stateLayer}>
          					<Text style={styles.labelText}>CREATE ACCOUNT</Text>
        				</View>
      			</View>
      			<Text style={[styles.cafConnect, styles.buttonPosition]}>CAFÉ CONNECT</Text>
      			<View style={[styles.textField, styles.textShadowBox]}>
        				<View style={[styles.textField1, styles.statePosition]}>
          					<View style={[styles.stateLayer1, styles.statePosition]}>
            						<View style={[styles.content, styles.contentSpaceBlock]}>
              							<View style={styles.inputTextContainer}>
                								<Text style={styles.inputText}>Username</Text>
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
                								<Text style={styles.inputText}>Password</Text>
              							</View>
            						</View>
          					</View>
        				</View>
        				<View style={styles.activeIndicator} />
      			</View>
      			<View style={[styles.textField4, styles.textShadowBox]}>
        				<View style={[styles.textField1, styles.statePosition]}>
          					<View style={[styles.stateLayer1, styles.statePosition]}>
            						<View style={[styles.content, styles.contentSpaceBlock]}>
              							<View style={styles.inputTextContainer}>
                								<Text style={styles.inputText}>First Name</Text>
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
                								<Text style={styles.inputText}>Last Name</Text>
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
                								<Text style={styles.inputText}>Email</Text>
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
                								<Text style={styles.inputText}>Date of Birth (mm/dd/yyyy)</Text>
              							</View>
            						</View>
          					</View>
        				</View>
        				<View style={styles.activeIndicator} />
      			</View>
    		</View>);
};

const styles = StyleSheet.create({
  	buttonPosition: {
    		left: "50%",
    		position: "absolute"
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
    		position: "absolute"
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
    		fontFamily: "Roboto-Medium",
    		color: "#fff",
    		textAlign: "center"
  	},
  	stateLayer: {
    		backgroundColor: "#9c6f44",
    		paddingHorizontal: 24,
    		paddingVertical: 10,
    		flexDirection: "row",
    		alignSelf: "stretch",
    		justifyContent: "center",
    		alignItems: "center",
    		flex: 1
  	},
  	button: {
    		marginLeft: -106,
    		top: 746,
    		borderRadius: 100,
    		backgroundColor: "#000",
    		width: 209,
    		height: 52,
    		justifyContent: "center",
    		alignItems: "center",
    		overflow: "hidden"
  	},
  	cafConnect: {
    		marginLeft: -141,
    		top: 79,
    		fontSize: 36,
    		fontWeight: "700",
    		fontFamily: "JosefinSlab-Bold",
    		color: "#000",
    		width: 283,
    		height: 43,
    		textAlign: "left"
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
    		top: 526
  	},
  	textField2: {
    		top: 606
  	},
  	textField4: {
    		top: 206
  	},
  	textField6: {
    		top: 286
  	},
  	textField8: {
    		top: 366
  	},
  	stateLayer6: {
    		paddingHorizontal: 16,
    		borderTopRightRadius: 4,
    		borderTopLeftRadius: 4,
    		alignSelf: "stretch",
    		flexDirection: "row"
  	},
  	textField10: {
    		top: 446
  	},
  	signUpPage: {
    		backgroundColor: "#face8b",
    		width: "100%",
    		height: 932,
    		overflow: "hidden",
    		flex: 1
  	}
});

export default SignUpPage;
