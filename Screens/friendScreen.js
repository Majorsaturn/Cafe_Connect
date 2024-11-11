import * as React from "react";
import {Image, StyleSheet, Text, View, Pressable} from "react-native";

const FriendsPage = () => {
  	
  	return (
    		<View style={[styles.friendsPage, styles.stateLayerBg]}>
      			<Image style={styles.image5Icon} resizeMode="cover" source="image 5.png" />
      			<Text style={styles.friends}>FRIENDS</Text>
      			<View style={styles.menuWrapper}>
        				<View style={styles.menu}>
          					<View style={styles.menuHeader}>
            						<Text style={[styles.heading, styles.headingTypo]}>COFFEE YEAHHHH</Text>
            						<Text style={[styles.heading1, styles.labelClr]}>Heading</Text>
          					</View>
          					<View style={styles.menuSeparator}>
            						<View style={[styles.rule, styles.ruleLayout]} />
          					</View>
          					<View style={styles.menuSection}>
            						<View style={styles.friendArea}>
              							<View style={styles.buttonShadowBox2}>
                								<View style={[styles.stateLayer, styles.rowFlexBox]}>
                  									<Text style={styles.labelText}>Message</Text>
                								</View>
              							</View>
              							<View style={styles.buttonShadowBox1}>
                								<View style={[styles.stateLayer, styles.rowFlexBox]}>
                  									<Text style={styles.labelText}>Remove Friend</Text>
                								</View>
              							</View>
              							<View style={styles.buttonShadowBox}>
                								<View style={[styles.stateLayer, styles.rowFlexBox]}>
                  									<Text style={styles.labelText}>Block</Text>
                								</View>
              							</View>
              							<View style={[styles.menuItem, styles.menuItemSpaceBlock]}>
                								<View style={styles.play} />
                								<View style={styles.body}>
                  									<View style={[styles.row, styles.rowFlexBox]}>
                    										<Text style={[styles.label, styles.labelClr]}>Crazy Terry</Text>
                    										<View style={[styles.menuShortcut, styles.menuFlexBox]}>
                      											<Text style={[styles.a, styles.labelClr]}>⇧A</Text>
                    										</View>
                  									</View>
                  									<Text style={[styles.description, styles.labelClr]} />
                								</View>
              							</View>
              							<Image style={styles.nameIcon} resizeMode="cover" source="Name.png" />
            						</View>
            						<View style={styles.friendArea1}>
              							<View style={styles.buttonShadowBox2}>
                								<View style={[styles.stateLayer, styles.rowFlexBox]}>
                  									<Text style={styles.labelText}>Message</Text>
                								</View>
              							</View>
              							<View style={styles.buttonShadowBox1}>
                								<View style={[styles.stateLayer, styles.rowFlexBox]}>
                  									<Text style={styles.labelText}>Remove Friend</Text>
                								</View>
              							</View>
              							<View style={styles.buttonShadowBox}>
                								<View style={[styles.stateLayer, styles.rowFlexBox]}>
                  									<Text style={styles.labelText}>Block</Text>
                								</View>
              							</View>
              							<View style={[styles.menuItem1, styles.menuLayout]}>
                								<View style={styles.play} />
                								<View style={styles.body}>
                  									<View style={[styles.row, styles.rowFlexBox]}>
                    										<Text style={[styles.label, styles.labelClr]}>Ted Tod</Text>
                    										<View style={[styles.menuShortcut, styles.menuFlexBox]}>
                      											<Text style={[styles.a, styles.labelClr]}>⇧A</Text>
                    										</View>
                  									</View>
                  									<Text style={[styles.description, styles.labelClr]} />
                								</View>
              							</View>
              							<Image style={styles.nameIcon} resizeMode="cover" source="Name.png" />
            						</View>
          					</View>
          					<View style={styles.menuSection1}>
            						<View style={[styles.menuItem2, styles.menuItemSpaceBlock]}>
              							<Image style={styles.play} resizeMode="cover" source="Star.png" />
              							<View style={styles.body}>
                								<View style={[styles.row, styles.rowFlexBox]}>
                  									<Text style={[styles.label2, styles.labelClr]}>Menu Label</Text>
                  									<View style={styles.menuFlexBox}>
                    										<Text style={[styles.a, styles.labelClr]}>⇧A</Text>
                  									</View>
                								</View>
                								<Text style={[styles.description2, styles.headingTypo]}>Menu description.</Text>
              							</View>
            						</View>
            						<View style={[styles.menuItem3, styles.menuItemSpaceBlock]}>
              							<Image style={styles.play} resizeMode="cover" source="Star.png" />
              							<View style={styles.body}>
                								<View style={[styles.row, styles.rowFlexBox]}>
                  									<Text style={[styles.label2, styles.labelClr]}>Menu Label</Text>
                  									<View style={styles.menuFlexBox}>
                    										<Text style={[styles.a, styles.labelClr]}>⇧A</Text>
                  									</View>
                								</View>
                								<Text style={[styles.description2, styles.headingTypo]}>Menu description.</Text>
              							</View>
            						</View>
          					</View>
          					<View style={[styles.menuSeparator1, styles.menuLayout]}>
            						<View style={[styles.rule1, styles.ruleLayout]} />
          					</View>
        				</View>
      			</View>
      			<Image style={styles.navigationBarIcon} resizeMode="cover" source="Navigation Bar.png" />
      			<Pressable style={[styles.profileIcon, styles.menuItemLayout]} onPress={()=>{}}>
        				<Image style={styles.icon} resizeMode="cover" source="profile icon.png" />
      			</Pressable>
    		</View>);
};

const styles = StyleSheet.create({
  	stateLayerBg: {
    		backgroundColor: "#face8b",
    		flex: 1
  	},
  	headingTypo: {
    		textAlign: "left",
    		fontFamily: "Inter-Regular",
    		lineHeight: 20,
    		fontSize: 14,
    		alignSelf: "stretch"
  	},
  	labelClr: {
    		color: "#fff",
    		textAlign: "left"
  	},
  	ruleLayout: {
    		height: 1,
    		backgroundColor: "#d9d9d9"
  	},
  	rowFlexBox: {
    		flexDirection: "row",
    		alignItems: "center",
    		alignSelf: "stretch"
  	},
  	menuItemSpaceBlock: {
    		gap: 12,
    		paddingVertical: 12,
    		flexDirection: "row",
    		overflow: "hidden"
  	},
  	menuFlexBox: {
    		justifyContent: "flex-end",
    		flexDirection: "row",
    		alignItems: "center",
    		borderRadius: 8
  	},
  	menuLayout: {
    		width: 385,
    		paddingHorizontal: 16,
    		borderRadius: 8,
    		position: "absolute"
  	},
  	menuItemLayout: {
    		height: 46,
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
  	friends: {
    		marginLeft: -72,
    		top: 51,
    		fontSize: 36,
    		fontFamily: "JosefinSlab-Bold",
    		width: 144,
    		height: 36,
    		textAlign: "center",
    		color: "#000",
    		fontWeight: "700",
    		left: "50%",
    		position: "absolute"
  	},
  	heading: {
    		color: "#f3f3f3"
  	},
  	heading1: {
    		fontWeight: "600",
    		fontFamily: "Inter-SemiBold",
    		lineHeight: 22,
    		color: "#fff",
    		fontSize: 16,
    		alignSelf: "stretch"
  	},
  	menuHeader: {
    		paddingTop: 8,
    		paddingBottom: 4,
    		zIndex: 0,
    		display: "none",
    		paddingHorizontal: 16,
    		alignSelf: "stretch",
    		overflow: "hidden"
  	},
  	rule: {
    		alignSelf: "stretch"
  	},
  	menuSeparator: {
    		zIndex: 1,
    		paddingVertical: 8,
    		justifyContent: "center",
    		alignItems: "center",
    		paddingHorizontal: 16,
    		alignSelf: "stretch"
  	},
  	labelText: {
    		letterSpacing: 0,
    		lineHeight: 20,
    		fontWeight: "500",
    		fontFamily: "Roboto-Medium",
    		fontSize: 14,
    		textAlign: "center",
    		color: "#000"
  	},
  	stateLayer: {
    		paddingHorizontal: 24,
    		paddingVertical: 10,
    		justifyContent: "center",
    		flex: 1,
    		backgroundColor: "#face8b"
  	},
  	buttonShadowBox2: {
    		width: 100,
    		backgroundColor: "#000",
    		borderRadius: 100,
    		shadowColor: "rgba(0, 0, 0, 0.25)",
    		left: 70,
    		top: 38,
    		justifyContent: "center",
    		alignItems: "center",
    		shadowOpacity: 1,
    		elevation: 4,
    		shadowRadius: 4,
    		shadowOffset: {
      			width: 0,
      			height: 4
    		},
    		height: 36,
    		position: "absolute",
    		overflow: "hidden"
  	},
  	buttonShadowBox1: {
    		width: 110,
    		left: 171,
    		backgroundColor: "#000",
    		borderRadius: 100,
    		shadowColor: "rgba(0, 0, 0, 0.25)",
    		top: 38,
    		justifyContent: "center",
    		alignItems: "center",
    		shadowOpacity: 1,
    		elevation: 4,
    		shadowRadius: 4,
    		shadowOffset: {
      			width: 0,
      			height: 4
    		},
    		height: 36,
    		position: "absolute",
    		overflow: "hidden"
  	},
  	buttonShadowBox: {
    		width: 90,
    		left: 281,
    		backgroundColor: "#000",
    		borderRadius: 100,
    		shadowColor: "rgba(0, 0, 0, 0.25)",
    		top: 38,
    		justifyContent: "center",
    		alignItems: "center",
    		shadowOpacity: 1,
    		elevation: 4,
    		shadowRadius: 4,
    		shadowOffset: {
      			width: 0,
      			height: 4
    		},
    		height: 36,
    		position: "absolute",
    		overflow: "hidden"
  	},
  	play: {
    		width: 20,
    		height: 20,
    		overflow: "hidden"
  	},
  	label: {
    		fontFamily: "Inter-Bold",
    		lineHeight: 22,
    		color: "#fff",
    		fontSize: 16,
    		fontWeight: "700",
    		flex: 1
  	},
  	a: {
    		lineHeight: 16,
    		fontSize: 16,
    		color: "#fff",
    		fontFamily: "Inter-Regular"
  	},
  	menuShortcut: {
    		display: "none"
  	},
  	row: {
    		justifyContent: "space-between"
  	},
  	description: {
    		fontFamily: "Inter-Regular",
    		color: "#fff",
    		lineHeight: 20,
    		fontSize: 14,
    		alignSelf: "stretch"
  	},
  	body: {
    		gap: 4,
    		flex: 1
  	},
  	menuItem: {
    		width: 159,
    		height: 46,
    		position: "absolute",
    		left: 34,
    		gap: 12,
    		paddingVertical: 12,
    		top: 0,
    		paddingHorizontal: 16,
    		borderRadius: 8
  	},
  	nameIcon: {
    		top: 14,
    		left: 0,
    		width: 68,
    		height: 63,
    		position: "absolute"
  	},
  	friendArea: {
    		width: 371,
    		height: 77
  	},
  	menuItem1: {
    		gap: 12,
    		paddingVertical: 12,
    		flexDirection: "row",
    		overflow: "hidden",
    		left: 34,
    		top: 0
  	},
  	friendArea1: {
    		width: 419,
    		height: 77
  	},
  	menuSection: {
    		height: 625,
    		zIndex: 2,
    		alignSelf: "stretch",
    		borderRadius: 8,
    		overflow: "hidden"
  	},
  	label2: {
    		lineHeight: 22,
    		color: "#fff",
    		fontSize: 16,
    		fontFamily: "Inter-Regular",
    		flex: 1
  	},
  	description2: {
    		color: "#757575"
  	},
  	menuItem2: {
    		paddingHorizontal: 16,
    		alignSelf: "stretch",
    		borderRadius: 8
  	},
  	menuItem3: {
    		width: 285,
    		paddingHorizontal: 16,
    		borderRadius: 8
  	},
  	menuSection1: {
    		zIndex: 3,
    		display: "none",
    		alignSelf: "stretch"
  	},
  	rule1: {
    		width: 353
  	},
  	menuSeparator1: {
    		marginLeft: -192.5,
    		top: 650,
    		zIndex: 4,
    		paddingVertical: 8,
    		left: "50%",
    		width: 385
  	},
  	menu: {
    		marginLeft: -200.5,
    		shadowColor: "rgba(12, 12, 13, 0.1)",
    		backgroundColor: "#9c6f44",
    		borderStyle: "solid",
    		borderColor: "#d9d9d9",
    		borderWidth: 1,
    		padding: 8,
    		borderRadius: 8,
    		shadowOpacity: 1,
    		elevation: 4,
    		shadowRadius: 4,
    		shadowOffset: {
      			width: 0,
      			height: 4
    		},
    		top: 0,
    		height: 679,
    		width: 401,
    		left: "50%",
    		position: "absolute",
    		overflow: "hidden"
  	},
  	menuWrapper: {
    		marginLeft: -200,
    		top: 130,
    		height: 679,
    		width: 401,
    		left: "50%",
    		position: "absolute"
  	},
  	navigationBarIcon: {
    		top: 862,
    		left: -4,
    		width: 440,
    		height: 70,
    		position: "absolute"
  	},
  	icon: {
    		height: "100%",
    		width: "100%"
  	},
  	profileIcon: {
    		left: 12,
    		top: 13,
    		width: 46
  	},
  	friendsPage: {
    		height: 932,
    		overflow: "hidden",
    		width: "100%",
    		flex: 1
  	}
});

export default FriendsPage;
