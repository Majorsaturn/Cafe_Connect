import React, { useState, useEffect } from 'react';
import {StyleSheet, View, Image, Pressable, Text} from "react-native";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const HomePage = ({fbApp}) => {
    const auth = getAuth(fbApp);
    const [userName, setUserName] = useState(null);
    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            const uid = user.uid;
            setUserName(user.displayName);
            console.log(uid);
        } else {
            // User is signed out
        }
    });

    return (
        <View style={styles.homePage}>
            <View style={styles.homePageInner} >
                <View style={[styles.profileIcon, styles.iconPosition]}>
                    <Pressable style={styles.wrapper} onPress={()=>{}}>
                        <Image style={styles.icon} resizeMode="cover" source={require("../assets/Ellipse 1.png")} />
                    </Pressable>
                    <Text style={styles.username}>{userName}</Text>
                    <Text style={[styles.cafConnect, styles.labelText1Position]}>CAFÉ CONNECT</Text>
                </View>
            </View>
            <View style={styles.homePageItem} >
            <Image style={styles.image1Icon} resizeMode="cover" source={require("../assets/image_1.png")} />
            </View>
            <View style={styles.homePageChild} >
            <Image style={[styles.image2Icon]} resizeMode="cover" source={require("../assets/image_2.png")} />
            </View>
        </View>);
};

const styles = StyleSheet.create({
    image2Icon: {
		marginLeft: -463,
		top: 0,
		width: "100%",
		height: "100%",
		opacity: 1,
		left: "100%",
		position: "absolute"
	},
    iconPosition: {
        left: 0,
        position: "relative"
    },
    iconLayout1: {
        maxHeight: "100%",
        maxWidth: "100%",
        position: "absolute",
        overflow: "hidden"
    },
    spaceLayout: {
        height: 123,
        width: 205,
        position: "absolute"
    },
    tableLayout: {
        width: 376,
        position: "absolute"
    },
    childPosition: {
        left: 51,
        height: 39,
        maxWidth: "100%",
        position: "absolute",
        overflow: "hidden"
    },
    itemLayout: {
        height: 43,
        width: 101
    },
    mug4IconLayout: {
        height: 28,
        width: 29
    },
    mug5IconPosition: {
        top: 37,
        height: 28,
        width: 29,
        position: "absolute"
    },
    privatepublicLayout: {
        height: 24,
        width: 93,
        top: 0
    },
    childLayout: {
        borderRadius: 20,
        position: "absolute"
    },
    namejoinLayout: {
        height: 85,
        width: 275,
        position: "absolute"
    },
    buttonShadowBox: {
        height: 36,
        width: 122,
        borderRadius: 100,
        top: 49,
        marginLeft: -60.5,
        left: "50%",
        justifyContent: "center",
        alignItems: "center",
        shadowOpacity: 1,
        elevation: 4,
        shadowRadius: 4,
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowColor: "rgba(0, 0, 0, 0.25)",
        position: "absolute",
        overflow: "hidden"
    },
    stateFlexBox: {
        paddingVertical: 10,
        paddingHorizontal: 24,
        flexDirection: "row",
        alignSelf: "stretch",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#9c6f44",
        flex: 1
    },
    labelTypo: {
        fontSize: 14,
        color: "#fff",
        textAlign: "center",
        fontFamily: "Roboto_500Medium",
        fontWeight: "500",
        lineHeight: 20,
        letterSpacing: 0
    },
    mug1IconPosition: {
        top: 50,
        position: "absolute"
    },
    iconLayout: {
        width: "26.52%",
        height: "25.3%",
        maxHeight: "100%",
        maxWidth: "100%",
        position: "absolute",
        overflow: "hidden"
    },
    textTypo: {
        width: 159,
        height: 36,
        left: "50%",
        color: "#fff",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        textAlign: "center",
        fontWeight: "500",
        lineHeight: 20,
        letterSpacing: 0,
        fontSize: 18,
        position: "absolute"
    },
    labelText1Position: {
        left: "150%",
        position: "relative"
    },
    homePageChild: {
        left: -1,
        width: 432,
        height: 562,
        backgroundColor: "#face8b",
        position: "relative"
    },
    homePageItem: {
        width: 430,
        height: "30%",
        backgroundColor: "#9c6f44",
        shadowOpacity: 1,
        elevation: 4,
        shadowRadius: 4,
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowColor: "rgba(0, 0, 0, 0.25)",
        left: 0,
        position: "relative"
    },
    homePageInner: {
        width: 431,
        height: "12%",
        top: 0,
        left: 0,
        backgroundColor: "#face8b",
        position: "relative"
    },
    icon: {
        height: "120%",
        top: "20%"
    },
    wrapper: {
        width: 46,
        height: 46,
        top: 0,
        left: 0,
        position: "absolute"
    },
    pfpIcon: {
        height: "60.38%",
        width: "24.11%",
    },
    username: {
        left: "40%",
        width: "110%",
        textShadowColor: "rgba(0, 0, 0, 0.15)",
        textShadowOffset: {
            width: 0,
            height: 4
        },
        textShadowRadius: 4,
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        textAlign: "center",
        color: "#000",
        fontFamily: "Roboto_500Medium",
        fontWeight: "500",
        lineHeight: 20,
        letterSpacing: 0,
        fontSize: 18,
        top: "70%",
        position: "relative"
    },
    profileIcon: {
        top: 20,
        width: 141,
        height: 53,
        position: "relative"
    },
    adSpaceChild: {
        top: 0,
        left: 0,
        backgroundColor: "#face8b"
    },
    adSpaceItem: {
        width: 172,
        height: 93,
        backgroundColor: "#000",
        left: 16,
        top: 14,
        position: "absolute"
    },
    adSpace1: {
        left: 50,
        width: 104,
        color: "#fff",
        fontSize: 24,
        top: 33,
        height: 39,
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        textAlign: "center",
        fontWeight: "500",
        lineHeight: 20,
        letterSpacing: 0,
        position: "absolute"
    },
    adSpace: {
        left: 5,
        top: 73,
        width: 205,
        shadowOpacity: 1,
        elevation: 4,
        shadowRadius: 4,
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowColor: "rgba(0, 0, 0, 0.25)"
    },
    adSpace2: {
        left: 218,
        top: 73,
        width: 205,
        shadowOpacity: 1,
        elevation: 4,
        shadowRadius: 4,
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowColor: "rgba(0, 0, 0, 0.25)"
    },
    table1Child: {
        top: 80
    },
    table1Item: {
        top: 38,
        position: "absolute",
        left: 0
    },
    mug4Icon: {
        top: 38,
        position: "absolute",
        left: 16
    },
    mug5Icon: {
        left: 59
    },
    privatepublicMarkerChild: {
        backgroundColor: "#4b2909",
        height: 24,
        width: 93,
        top: 0,
        left: 0
    },
    public: {
        left: 6,
        width: 82,
        height: 20,
        top: 2,
        color: "#fff",
        fontSize: 24,
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        textAlign: "center",
        fontWeight: "500",
        lineHeight: 20,
        letterSpacing: 0,
        position: "absolute"
    },
    privatepublicMarker: {
        left: 2,
        position: "absolute"
    },
    namejoinShadowBox: {
        height: 30,
        width: 203,
        left: 36,
        borderRadius: 20,
        top: 0,
        backgroundColor: "#9c6f44",
        shadowOpacity: 1,
        elevation: 4,
        shadowRadius: 4,
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowColor: "rgba(0, 0, 0, 0.25)",
        position: "absolute"
    },
    title: {
        fontSize: 20,
        width: 275,
        top: 2,
        height: 28,
        color: "#fff",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        textAlign: "center",
        fontWeight: "500",
        lineHeight: 20,
        letterSpacing: 0,
        left: 0,
        position: "absolute"
    },
    button: {
        backgroundColor: "#000"
    },
    namejoin: {
        left: 101,
        top: 33,
        height: 85
    },
    table1: {
        top: 388,
        height: 119,
        left: 38
    },
    table2Child: {
        top: 78,
        left: 326,
        height: 39,
        maxWidth: "100%",
        borderRadius: 20,
        overflow: "hidden"
    },
    table2Item: {
        top: 36,
        left: 275,
        position: "absolute"
    },
    mug4Icon1: {
        left: 339,
        top: 38,
        position: "absolute"
    },
    mug5Icon1: {
        left: 287
    },
    privatepublicMarker1: {
        left: 278,
        position: "absolute"
    },
    labelText1: {
        marginTop: -10,
        marginLeft: -27,
        top: "50%",
        zIndex: 0,
        left: "50%",
        position: "absolute"
    },
    stateLayer1: {
        zIndex: 0
    },
    lockIcon: {
        top: 10,
        left: 70,
        width: 16,
        height: 16,
        zIndex: 1,
        position: "absolute"
    },
    button1: {
        gap: 8,
        backgroundColor: "#9c6f44"
    },
    namejoin1: {
        top: 31,
        left: 0
    },
    table2: {
        top: 539,
        left: 1,
        height: 117
    },
    table3Child: {
        top: 92
    },
    table3Item: {
        height: 43,
        width: 101,
        left: 0
    },
    mug1Icon: {
        left: 65,
        height: 28,
        width: 29
    },
    mug2Icon: {
        left: 36,
        top: 37,
        height: 28,
        width: 29,
        position: "absolute"
    },
    mug3Icon: {
        top: 52,
        left: 12,
        position: "absolute"
    },
    mug4Icon2: {
        top: 59,
        left: 38,
        position: "absolute"
    },
    button2: {
        backgroundColor: "#000"
    },
    namejoin2: {
        top: 45,
        left: 102
    },
    privatepublicMarker2: {
        left: 0,
        position: "absolute"
    },
    table3: {
        top: 690,
        left: 40,
        width: 377,
        height: 131,
        position: "absolute"
    },
    iconPlay: {
        height: "26.03%",
        width: "19.89%",
        top: "37.16%",
        right: "39.19%",
        bottom: "36.81%",
        left: "40.93%"
    },
    iconForward: {
        top: "36.79%",
        right: "73.48%",
        bottom: "37.91%",
        left: "0%"
    },
    iconForward1: {
        top: "36.8%",
        right: "-0.01%",
        bottom: "37.9%",
        left: "73.49%"
    },
    text: {
        marginLeft: -78.4,
        top: 115
    },
    cafCalm: {
        marginLeft: -79.46,
        top: 0
    },
    cafConnect: {
        top: "-100%",
        fontWeight: "700",
        width: 160,
        height: 60,
        fontSize: 24,
        textAlign: "center",
        color: "#000",
        position: "relative"
    },
    navigationBarIcon: {
        top: 862,
        left: -4,
        width: 440,
        height: 70,
        position: "absolute"
    },
    homePage: {
        backgroundColor: "#fff",
        overflow: "hidden",
        flex: 1,
        width: "100%"
    },
    image1Icon: {
        width: "60%",
        left: "13%",
        position: "relative"
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

export default HomePage;
