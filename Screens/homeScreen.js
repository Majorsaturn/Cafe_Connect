import * as React from "react";
import {StyleSheet, View, Image, Pressable, Text} from "react-native";

const HomePage = () => {

    return (
        <View style={styles.homePage}>
            <View style={styles.homePageChild} />
            <View style={styles.homePageItem} />
            <View style={styles.homePageInner} />
            <View style={[styles.profileIcon, styles.iconPosition]}>
                <Pressable style={styles.wrapper} onPress={()=>{}}>
                    <Image style={styles.icon} resizeMode="cover" source="Ellipse 1.png" />
                </Pressable>
                <Image style={[styles.pfpIcon, styles.iconLayout1]} resizeMode="cover" source="pfp icon.png" />
                <Text style={styles.username}>Username</Text>
            </View>
            <View style={[styles.adSpace, styles.spaceLayout]}>
                <View style={[styles.adSpaceChild, styles.spaceLayout]} />
                <View style={styles.adSpaceItem} />
                <Text style={styles.adSpace1}>Ad Space</Text>
            </View>
            <View style={[styles.adSpace2, styles.spaceLayout]}>
                <View style={[styles.adSpaceChild, styles.spaceLayout]} />
                <View style={styles.adSpaceItem} />
                <Text style={styles.adSpace1}>Ad Space</Text>
            </View>
            <View style={[styles.table1, styles.tableLayout]}>
                <Image style={[styles.table1Child, styles.childPosition]} resizeMode="cover" source="Line 1.png" />
                <Image style={[styles.table1Item, styles.itemLayout]} resizeMode="cover" source="Ellipse 2.png" />
                <Image style={[styles.mug4Icon, styles.mug4IconLayout]} resizeMode="cover" source="Mug 4.png" />
                <Image style={[styles.mug5Icon, styles.mug5IconPosition]} resizeMode="cover" source="Mug 5.png" />
                <View style={[styles.privatepublicMarker, styles.privatepublicLayout]}>
                    <View style={[styles.privatepublicMarkerChild, styles.childLayout]} />
                    <Text style={styles.public}>Public</Text>
                </View>
                <View style={[styles.namejoin, styles.namejoinLayout]}>
                    <View style={styles.namejoinShadowBox} />
                    <Text style={styles.title}>Chilling/studying</Text>
                    <View style={[styles.button, styles.buttonShadowBox]}>
                        <Pressable style={styles.stateFlexBox} onPress={()=>{}}>
                            <Text style={styles.labelTypo}>Join</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
            <View style={[styles.table2, styles.tableLayout]}>
                <Image style={[styles.table2Child, styles.childLayout]} resizeMode="cover" source="Line 1.png" />
                <Image style={[styles.table2Item, styles.itemLayout]} resizeMode="cover" source="Ellipse 2.png" />
                <Image style={[styles.mug4Icon1, styles.mug4IconLayout]} resizeMode="cover" source="Mug 4.png" />
                <Image style={[styles.mug5Icon1, styles.mug5IconPosition]} resizeMode="cover" source="Mug 5.png" />
                <View style={[styles.privatepublicMarker1, styles.privatepublicLayout]}>
                    <View style={[styles.privatepublicMarkerChild, styles.childLayout]} />
                    <Text style={styles.public}>Private</Text>
                </View>
                <View style={[styles.namejoin1, styles.namejoinLayout]}>
                    <View style={styles.namejoinShadowBox} />
                    <Text style={styles.title}>Game Brainstorming</Text>
                    <View style={[styles.button1, styles.buttonShadowBox]}>
                        <View style={[styles.stateLayer1, styles.stateFlexBox]}>
                            <Text style={[styles.labelText1, styles.labelTypo]}>Join</Text>
                        </View>
                        <Image style={styles.lockIcon} resizeMode="cover" source="Lock.png" />
                    </View>
                </View>
            </View>
            <View style={styles.table3}>
                <Image style={[styles.table3Child, styles.childPosition]} resizeMode="cover" source="Line 1.png" />
                <Image style={[styles.table3Item, styles.mug1IconPosition]} resizeMode="cover" source="Ellipse 2.png" />
                <Image style={[styles.mug1Icon, styles.mug1IconPosition]} resizeMode="cover" source="Mug 1.png" />
                <Image style={styles.mug2Icon} resizeMode="cover" source="Mug 2.png" />
                <Image style={[styles.mug3Icon, styles.mug4IconLayout]} resizeMode="cover" source="Mug 3.png" />
                <Image style={[styles.mug4Icon2, styles.mug4IconLayout]} resizeMode="cover" source="Mug 4.png" />
                <View style={[styles.namejoin2, styles.namejoinLayout]}>
                    <View style={styles.namejoinShadowBox} />
                    <Text style={styles.title}>join if bored</Text>
                    <View style={[styles.button2, styles.buttonShadowBox]}>
                        <Pressable style={styles.stateFlexBox} onPress={()=>{}}>
                            <Text style={styles.labelTypo}>Join</Text>
                        </Pressable>
                    </View>
                </View>
                <View style={[styles.privatepublicMarker2, styles.privatepublicLayout]}>
                    <View style={[styles.privatepublicMarkerChild, styles.childLayout]} />
                    <Text style={styles.public}>Public</Text>
                </View>
            </View>
            <View style={styles.mediaPlayer}>
                <Image style={[styles.iconPlay, styles.iconLayout1]} resizeMode="cover" source={`🦆 icon "play".png`} />
                <Image style={[styles.iconForward, styles.iconLayout]} resizeMode="cover" source={`🦆 icon "forward".png`} />
                <Image style={[styles.iconForward1, styles.iconLayout]} resizeMode="cover" source={`🦆 icon "forward".png`} />
                <Text style={[styles.text, styles.textTypo]}>0:00</Text>
                <Text style={[styles.cafCalm, styles.textTypo]}>Café Calm</Text>
            </View>
            <Text style={[styles.cafConnect, styles.labelText1Position]}>CAFÉ CONNECT</Text>
            <Image style={styles.navigationBarIcon} resizeMode="cover" source="Navigation Bar.png" />
        </View>);
};

const styles = StyleSheet.create({
    iconPosition: {
        left: 12,
        position: "absolute"
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
        fontFamily: "Roboto-Medium",
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
        fontFamily: "Roboto-Medium",
        fontWeight: "500",
        lineHeight: 20,
        letterSpacing: 0,
        fontSize: 18,
        position: "absolute"
    },
    labelText1Position: {
        left: "50%",
        position: "absolute"
    },
    homePageChild: {
        top: 370,
        left: -1,
        width: 432,
        height: 562,
        backgroundColor: "#face8b",
        position: "absolute"
    },
    homePageItem: {
        top: 68,
        width: 430,
        height: 302,
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
        position: "absolute"
    },
    homePageInner: {
        width: 431,
        height: 68,
        top: 0,
        left: 0,
        backgroundColor: "#face8b",
        position: "absolute"
    },
    icon: {
        height: "100%",
        width: "100%"
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
        top: "13.21%",
        right: "71.63%",
        bottom: "26.42%",
        left: "4.26%"
    },
    username: {
        left: 52,
        width: 89,
        textShadowColor: "rgba(0, 0, 0, 0.25)",
        textShadowOffset: {
            width: 0,
            height: 4
        },
        textShadowRadius: 4,
        height: 39,
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        textAlign: "center",
        color: "#000",
        fontFamily: "Roboto-Medium",
        fontWeight: "500",
        lineHeight: 20,
        letterSpacing: 0,
        fontSize: 18,
        top: 14,
        position: "absolute"
    },
    profileIcon: {
        top: 13,
        width: 141,
        height: 53
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
        fontFamily: "Roboto-Medium",
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
        fontFamily: "Roboto-Medium",
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
        fontFamily: "Roboto-Medium",
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
    mediaPlayer: {
        height: "16.2%",
        width: "41.4%",
        top: "22.64%",
        right: "28.14%",
        bottom: "61.16%",
        left: "30.47%",
        position: "absolute"
    },
    cafConnect: {
        marginLeft: 51,
        top: 12,
        fontWeight: "700",
        fontFamily: "JosefinSlab-Bold",
        width: 160,
        height: 48,
        fontSize: 24,
        left: "50%",
        textAlign: "center",
        color: "#000"
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
        height: 932,
        overflow: "hidden",
        flex: 1,
        width: "100%"
    }
});

export default HomePage;
