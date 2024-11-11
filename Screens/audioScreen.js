import * as React from "react";
import {Image, StyleSheet, Text, View} from "react-native";
import { useFonts, Roboto_500Medium, Roboto_400Regular } from '@expo-google-fonts/roboto';

const AudioScreen = ({fbApp}) => {

    return (
        <View style={styles.audioPage}>
            <Image style={styles.image5Icon} resizeMode="cover" source="image 5.png" />
            <Text style={styles.ambientSounds}>AMBIENT SOUNDS</Text>
            <View style={[styles.menuParent, styles.menuLayout]}>
                <View style={[styles.menu, styles.menuPosition]}>
                    <View style={[styles.menuHeader, styles.menuFlexBox]}>
                        <Text style={[styles.heading, styles.descriptionTypo]}>COFFEE YEAHHHH</Text>
                        <Text style={[styles.heading1, styles.aClr]}>Heading</Text>
                    </View>
                    <View style={[styles.menuSeparator, styles.menuSpaceBlock]}>
                        <View style={[styles.rule, styles.ruleLayout]} />
                    </View>
                    <View style={styles.menuSection}>
                        <View style={[styles.menuItem, styles.menuItemSpaceBlock]}>
                            <View style={styles.play} />
                            <View style={styles.body}>
                                <View style={[styles.row, styles.rowFlexBox]}>
                                    <Text style={[styles.label, styles.aClr]}>Café Calm</Text>
                                </View>
                                <Text style={[styles.description, styles.aClr]}>Relax with the calming background ambiance of your favorite café</Text>
                            </View>
                        </View>
                        <View style={[styles.menuItem, styles.menuItemSpaceBlock]}>
                            <View style={styles.play} />
                            <View style={styles.body}>
                                <View style={[styles.row, styles.rowFlexBox]}>
                                    <Text style={[styles.label, styles.aClr]}>Bistro Buzz</Text>
                                </View>
                                <Text style={[styles.description, styles.aClr]}>Let the buzz of the bistro brew in your ears</Text>
                            </View>
                        </View>
                        <View style={[styles.menuItem, styles.menuItemSpaceBlock]}>
                            <View style={styles.play} />
                            <View style={styles.body}>
                                <View style={[styles.row, styles.rowFlexBox]}>
                                    <Text style={[styles.label, styles.aClr]}>Coffeehouse Chatter</Text>
                                </View>
                                <Text style={[styles.description, styles.aClr]}>The gentle hum of conversations and clinking cups</Text>
                            </View>
                        </View>
                        <View style={[styles.menuItem, styles.menuItemSpaceBlock]}>
                            <View style={styles.play} />
                            <View style={styles.body}>
                                <View style={[styles.row, styles.rowFlexBox]}>
                                    <Text style={[styles.label, styles.aClr]}>Sip Serenity</Text>
                                </View>
                                <Text style={[styles.description, styles.aClr]}>A tranquil blend of quiet sipping and soft music</Text>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.menuSection1, styles.menuFlexBox]}>
                        <View style={[styles.menuItem, styles.menuItemSpaceBlock]}>
                            <Image style={styles.play} resizeMode="cover" source="Star.png" />
                            <View style={styles.body}>
                                <View style={[styles.row, styles.rowFlexBox]}>
                                    <Text style={[styles.label, styles.aClr]}>Menu Label</Text>
                                    <View style={[styles.menuShortcut, styles.rowFlexBox]}>
                                        <Text style={[styles.a, styles.aClr]}>⇧A</Text>
                                    </View>
                                </View>
                                <Text style={[styles.description4, styles.descriptionTypo]}>Menu description.</Text>
                            </View>
                        </View>
                        <View style={[styles.menuItem5, styles.menuItemSpaceBlock]}>
                            <Image style={styles.play} resizeMode="cover" source="Star.png" />
                            <View style={styles.body}>
                                <View style={[styles.row, styles.rowFlexBox]}>
                                    <Text style={[styles.label, styles.aClr]}>Menu Label</Text>
                                    <View style={[styles.menuShortcut, styles.rowFlexBox]}>
                                        <Text style={[styles.a, styles.aClr]}>⇧A</Text>
                                    </View>
                                </View>
                                <Text style={[styles.description4, styles.descriptionTypo]}>Menu description.</Text>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.menuSeparator1, styles.menuSpaceBlock]}>
                        <View style={[styles.rule1, styles.ruleLayout]} />
                    </View>
                    <Image style={[styles.iconPlay, styles.iconLayout]} resizeMode="cover" source={`🦆 icon "play".png`} />
                </View>
                <Image style={[styles.iconPlay1, styles.iconLayout]} resizeMode="cover" source={`🦆 icon "play".png`} />
                <Image style={[styles.iconPlay2, styles.iconLayout]} resizeMode="cover" source={`🦆 icon "play".png`} />
                <Image style={[styles.iconPlay3, styles.iconLayout]} resizeMode="cover" source={`🦆 icon "play".png`} />
                <Image style={[styles.iconPremium, styles.iconLayout]} resizeMode="cover" source={`🦆 icon "Premium".png`} />
                <View style={[styles.mediaPlayerParent, styles.image1IconLayout]}>
                    <View style={styles.mediaPlayer}>
                        <Image style={[styles.solarskipNextOutlineIcon, styles.outlineIconLayout]} resizeMode="cover" source="solar:skip-next-outline.png" />
                        <Image style={[styles.solarplayOutlineIcon, styles.outlineIconLayout]} resizeMode="cover" source="solar:play-outline.png" />
                        <Image style={[styles.solarskipPreviousOutlineIcon, styles.outlineIconLayout]} resizeMode="cover" source="solar:skip-previous-outline.png" />
                    </View>
                    <Image style={[styles.image1Icon, styles.image1IconLayout]} resizeMode="cover" source="image 1.png" />
                    <Image style={styles.image1Icon1} resizeMode="cover" source="image 1.png" />
                </View>
            </View>
            <Image style={styles.navigationBarIcon} resizeMode="cover" source="Navigation Bar.png" />
            <Image style={styles.profileIcon} resizeMode="cover" source="profile icon.png" />
        </View>);
};

const styles = StyleSheet.create({
    menuLayout: {
        height: 679,
        width: 401,
        position: "absolute"
    },
    menuPosition: {
        top: 0,
        left: "50%"
    },
    menuFlexBox: {
        display: "none",
        alignSelf: "stretch"
    },
    descriptionTypo: {
        lineHeight: 20,
        fontSize: 14,
        fontFamily: "Inter-Regular",
        alignSelf: "stretch"
    },
    aClr: {
        color: "#fff",
        textAlign: "left"
    },
    menuSpaceBlock: {
        paddingVertical: 8,
        paddingHorizontal: 16
    },
    ruleLayout: {
        height: 1,
        backgroundColor: "#d9d9d9"
    },
    menuItemSpaceBlock: {
        gap: 12,
        paddingVertical: 12,
        flexDirection: "row",
        paddingHorizontal: 16,
        borderRadius: 8,
        overflow: "hidden"
    },
    rowFlexBox: {
        flexDirection: "row",
        alignItems: "center"
    },
    iconLayout: {
        maxHeight: "100%",
        maxWidth: "100%",
        position: "absolute",
        overflow: "hidden"
    },
    image1IconLayout: {
        width: 240,
        position: "absolute"
    },
    outlineIconLayout: {
        width: 50,
        height: 50,
        top: 0,
        position: "absolute",
        overflow: "hidden"
    },
    image5Icon: {
        top: -50,
        left: -947,
        width: 2485,
        height: 1042,
        opacity: 0.13,
        position: "absolute"
    },
    ambientSounds: {
        marginLeft: -161,
        top: 69,
        fontSize: 36,
        fontWeight: "700",
        fontFamily: "JosefinSlab-Bold",
        color: "#000",
        width: 322,
        height: 30,
        textAlign: "left",
        left: "50%",
        position: "absolute"
    },
    heading: {
        color: "#f3f3f3",
        fontFamily: "Inter-Regular",
        textAlign: "left"
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
        paddingHorizontal: 16,
        display: "none",
        overflow: "hidden"
    },
    rule: {
        alignSelf: "stretch"
    },
    menuSeparator: {
        justifyContent: "center",
        zIndex: 1,
        alignItems: "center",
        paddingVertical: 8,
        alignSelf: "stretch"
    },
    play: {
        width: 20,
        height: 20,
        overflow: "hidden"
    },
    label: {
        lineHeight: 22,
        color: "#fff",
        fontSize: 16,
        fontFamily: "Inter-Regular",
        flex: 1
    },
    row: {
        justifyContent: "space-between",
        alignSelf: "stretch"
    },
    description: {
        fontFamily: "Inter-Regular",
        lineHeight: 20,
        fontSize: 14,
        alignSelf: "stretch"
    },
    body: {
        gap: 4,
        flex: 1
    },
    menuItem: {
        alignSelf: "stretch"
    },
    menuSection: {
        zIndex: 2,
        alignSelf: "stretch",
        borderRadius: 8,
        overflow: "hidden"
    },
    a: {
        lineHeight: 16,
        fontSize: 16,
        color: "#fff",
        fontFamily: "Inter-Regular"
    },
    menuShortcut: {
        justifyContent: "flex-end",
        borderRadius: 8
    },
    description4: {
        color: "#757575",
        fontFamily: "Inter-Regular",
        textAlign: "left"
    },
    menuItem5: {
        width: 285
    },
    menuSection1: {
        zIndex: 3
    },
    rule1: {
        width: 353
    },
    menuSeparator1: {
        top: 348,
        left: 8,
        width: 385,
        zIndex: 4,
        borderRadius: 8,
        position: "absolute"
    },
    iconPlay: {
        top: "42.56%",
        bottom: "54.9%",
        zIndex: 5,
        left: "6.48%",
        right: "89.03%",
        width: "4.49%",
        height: "2.53%",
        maxHeight: "100%",
        maxWidth: "100%"
    },
    menu: {
        marginLeft: -200.5,
        shadowColor: "rgba(12, 12, 13, 0.1)",
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowRadius: 4,
        elevation: 4,
        shadowOpacity: 1,
        backgroundColor: "#9c6f44",
        borderStyle: "solid",
        borderColor: "#d9d9d9",
        borderWidth: 1,
        padding: 8,
        borderRadius: 8,
        height: 679,
        width: 401,
        position: "absolute",
        overflow: "hidden"
    },
    iconPlay1: {
        top: "5.74%",
        bottom: "91.72%",
        left: "6.48%",
        right: "89.03%",
        width: "4.49%",
        height: "2.53%",
        maxHeight: "100%",
        maxWidth: "100%"
    },
    iconPlay2: {
        top: "29.31%",
        bottom: "68.16%",
        left: "6.48%",
        right: "89.03%",
        width: "4.49%",
        height: "2.53%",
        maxHeight: "100%",
        maxWidth: "100%"
    },
    iconPlay3: {
        top: "18.7%",
        bottom: "78.76%",
        left: "6.48%",
        right: "89.03%",
        width: "4.49%",
        height: "2.53%",
        maxHeight: "100%",
        maxWidth: "100%"
    },
    iconPremium: {
        height: "3.05%",
        width: "7.48%",
        top: "18.85%",
        right: "3.74%",
        bottom: "78.1%",
        left: "88.78%"
    },
    solarskipNextOutlineIcon: {
        left: 188
    },
    solarplayOutlineIcon: {
        left: 94
    },
    solarskipPreviousOutlineIcon: {
        left: 0,
        width: 50
    },
    mediaPlayer: {
        top: 239,
        width: 238,
        height: 50,
        left: 0,
        position: "absolute"
    },
    image1Icon: {
        marginLeft: -120,
        height: 218,
        top: 0,
        left: "50%"
    },
    image1Icon1: {
        marginLeft: -107,
        top: 40,
        width: 211,
        height: 154,
        left: "50%",
        position: "absolute"
    },
    mediaPlayerParent: {
        top: 370,
        left: 81,
        height: 289
    },
    menuParent: {
        marginLeft: -200,
        top: 130,
        left: "50%"
    },
    navigationBarIcon: {
        top: 862,
        left: -4,
        width: 440,
        height: 70,
        position: "absolute"
    },
    profileIcon: {
        top: 13,
        left: 12,
        width: 46,
        height: 46,
        position: "absolute"
    },
    audioPage: {
        backgroundColor: "#face8b",
        width: "100%",
        height: 932,
        overflow: "hidden",
        flex: 1
    }
});

export default AudioScreen;
