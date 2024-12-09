import * as React from "react";
import { View, Text, TextInput, ScrollView, Image, StyleSheet, KeyboardAvoidingView, TouchableOpacity, ActivityIndicator } from 'react-native';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, addDoc, updateDoc, collection, doc, where, getDocs, query } from "firebase/firestore";
import { useFonts, Roboto_500Medium, Roboto_400Regular } from '@expo-google-fonts/roboto';
import InsetShadow from 'react-native-inset-shadow';

const CreateTableScreen = ({ updateUserTableName, updateUserTable, fbApp}) => {
    const auth = getAuth(fbApp);
    const db = getFirestore(fbApp);

    const [currentUser, setCurrentUser] = React.useState(null);
    const [Table_Name, onChangeTName] = React.useState('');
    const [Table_Join, onChangeTJName] = React.useState('');
	const [maxmembers, onChangeMaxMembers] = React.useState('');
	// const [privateState, onChangePrivacy] = React.useState('');

   // Set up listener to track auth state changes
  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user); // user will be null if not logged in
    });

        return () => unsubscribe();
    }, [auth]);
    
    handleCreateTablePress = async () => {
        try{
            const user = currentUser;
            console.log("User UID:", user.uid)
            //document for the new table
            const docRef = await addDoc(collection(db, "Tables"), {
				Table_Name: Table_Name,
                maxmembers: maxmembers,
                members: [user.uid],
                owner: user.uid
			});
            console.log("Document written with ID: ", docRef.id);
            const usersCollectionRef = collection(db, 'Users');
            const userQuery = query(usersCollectionRef, where("UID", "==", user.uid));
            const querySnapshot = await getDocs(userQuery);
            if (!querySnapshot.empty) {
                // Assuming there's only one user document matching the UID
                const userDoc = querySnapshot.docs[0];
                const userDocRef = doc(db, 'Users', userDoc.id); // Get the reference of the matched document

                // Now, update the 'Table' field in the user's document
                await updateDoc(userDocRef, {
                    Table: docRef.id, // Assuming docRef.id is the value you want to set
                });
                updateUserTableName(Table_Name);
                updateUserTable(docRef.id);
                console.log('Document updated successfully');
            } else {
                console.log("No matching user found");
            }
        } catch (error) {
			console.error("Error during account creation:", error.message);
		}
    }

    const joinTable = async () => {
        onAuthStateChanged(auth, async (user) => {
        if (!user) {
          console.log("No user is logged in.");
          return; // Return early if no user is logged in
        }
      
        try {
            // building queries and getting the documents from user and table information
          const usersCollection = collection(db, "Users");
          const tablesCollection = collection(db, "Tables");
          const userQuery = query(usersCollection, where("UID", "==", user.uid));
          const tableQuery = query(tablesCollection, where("Table_Name", "==", Table_Join))
          const tQuerySnapshot = await getDocs(tableQuery);
          const querySnapshot = await getDocs(userQuery);
            
          if (querySnapshot.empty) {
            console.error("No document found for the authenticated user.");
            return;
          }
          const tableDoc = tQuerySnapshot.docs[0];
          const userDoc = querySnapshot.docs[0];
          const userDocRef = doc(db, "Users", userDoc.id);
      
          // Use updateDoc to update the Table field
          await updateDoc(userDocRef, { Table: tableDoc.id });
          console.log("User joined table successfully.");
      
          // Refetch user table
          const updatedSnapshot = await getDocs(userQuery);
          if (!updatedSnapshot.empty) {
            const updatedUserDoc = updatedSnapshot.docs[0];
            const updatedUserData = updatedUserDoc.data();
            // ensure table name is updated so it is shown in the table screen
            updateUserTableName(Table_Join);
            updateUserTable(updatedUserData.Table);
          }
        } catch (error) {
          console.error("Error updating user table:", error);
        }
        });
      };

    let [fontsLoaded] = useFonts({
		Roboto_500Medium,
		Roboto_400Regular,
	});

    	// Show a loading indicator until the fonts are loaded
	if (!fontsLoaded) {
		return (
			<View style={[styles.loginPage, styles.centered]}>
				<ActivityIndicator size="large" color="#9c6f44" />
			</View>
		);
	}
    return(
        <ScrollView>
        <KeyboardAvoidingView style={styles.container}>
            <Image style={[styles.image2Icon]} resizeMode="cover" source={require("../assets/image_2.png")} />
            <Text style={[styles.cafConnect]}>CREATE A TABLE</Text>
            <View style={[styles.topEnforcer, styles.textShadowBox]}>
        				<View style={[styles.textField1, styles.statePosition]}>
          					<View style={[styles.stateLayer1, styles.statePosition]}>
            						<View style={[styles.content, styles.contentSpaceBlock]}>
              							<View style={styles.inputTextContainer}>
											<TextInput
												style={styles.input}
												onChangeText={onChangeTName}
												value={Table_Name}
												placeholder="Table Name"
											/>
              							</View>
            						</View>
          					</View>
        				</View>
        			<View style={styles.activeIndicator} />
      		</View>
              <View style={[styles.topEnforcer2, styles.textShadowBox]}>
        			<View style={[styles.textField1, styles.statePosition]}>
          				<View style={[styles.stateLayer1, styles.statePosition]}>
            				<View style={[styles.content, styles.contentSpaceBlock]}>
              						<View style={styles.inputTextContainer}>
										<TextInput
											style={styles.input}
											onChangeText={onChangeMaxMembers}
											value={maxmembers}
											placeholder="Max Members"
										/>
              						</View>
            				</View>
          				</View>
        			</View>
        		<View style={styles.activeIndicator} />
      		</View>
                <TouchableOpacity  style={[styles.button1, styles.buttonLayout]} onPress={handleCreateTablePress}>
				  	<InsetShadow>
        				<View style={[styles.stateLayer5, styles.contentFlexBox]}>
          					<Text style={[styles.labelText, styles.labelTextTypo]}>CREATE TABLE</Text>
        				</View>
					</InsetShadow>
				</TouchableOpacity>
                <Text style={[styles.cafConnect2]}>JOIN A TABLE</Text>
                <View style={[styles.topEnforcer3, styles.textShadowBox]}>
        			<View style={[styles.textField1, styles.statePosition]}>
          				<View style={[styles.stateLayer1, styles.statePosition]}>
            				<View style={[styles.content, styles.contentSpaceBlock]}>
              						<View style={styles.inputTextContainer}>
										<TextInput
											style={styles.input}
											onChangeText={onChangeTJName}
											value={Table_Join}
											placeholder="Table Name"
										/>
              						</View>
            				</View>
          				</View>
        			</View>
        		<View style={styles.activeIndicator} />
      		</View>
              <TouchableOpacity  style={[styles.button2, styles.buttonLayout]} onPress={joinTable}>
				  	<InsetShadow>
        				<View style={[styles.stateLayer6, styles.contentFlexBox]}>
          					<Text style={[styles.labelText, styles.labelTextTypo]}>JOIN TABLE</Text>
        				</View>
					</InsetShadow>
				</TouchableOpacity>
        </KeyboardAvoidingView>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#face8b",
        width: "100%",
    	height: 750,
    	overflow: "hidden",
    	flex: 1
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
    image2Icon: {
		marginLeft: -360,
		top: 0,
		width: "100%",
		height: "100%",
		opacity: 1,
		left: "100%",
		position: "absolute"
	},
    cafConnect: {
		top: "5%",
		fontSize: 36,
		fontWeight: "300",
		fontFamily: "Roboto_500Medium",
		color: "#000",
		width: "100%",
		height: "10%",
		textAlign: "left",
		left: "10%",
		position: "relative"
	},
    cafConnect2: {
		top: "13%",
		fontSize: 36,
		fontWeight: "300",
		fontFamily: "Roboto_500Medium",
		color: "#000",
		width: "100%",
		height: "10%",
		textAlign: "left",
		left: "18%",
		position: "relative"
	},
    topEnforcer: {
        top: "5%"
    },
    topEnforcer2: {
        top: "7%"
    },
    topEnforcer3: {
        top: "13%"
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
    textField1: {
        backgroundColor: "#e6e0e9",
        flex: 1
    },
    statePosition: {
        borderTopRightRadius: 4,
        borderTopLeftRadius: 4,
        alignSelf: "stretch"
    },
    content: {
        height: 48,
        paddingHorizontal: 0,
        justifyContent: "center"
    },
    contentSpaceBlock: {
        paddingVertical: 4,
        flex: 1
    },
    stateLayer1: {
        paddingLeft: 16,
        paddingTop: 4,
        paddingBottom: 4,
        flexDirection: "row",
        flex: 1
    },
    activeIndicator: {
        borderStyle: "solid",
        borderColor: "#49454f",
        borderTopWidth: 1,
        height: 1,
        alignSelf: "stretch"
    },
    button1: {
        marginLeft: -105,
        top: "10%",
    },
    button2: {
        marginLeft: -105,
        top: "17%",
    },
    buttonLayout: {
        height: 52,
        width: 209,
        backgroundColor: "#9c6f44",
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
        left: "50%",
        position: "relative",
        overflow: "hidden",
    },
    stateLayer5: {
        paddingHorizontal: "27%",
        paddingVertical: 0,
        alignSelf: "stretch",
        backgroundColor: "#9c6f44",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
    },
    stateLayer6: {
        paddingHorizontal: "31.8%",
        paddingVertical: 0,
        alignSelf: "stretch",
        backgroundColor: "#9c6f44",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
    },
    contentFlexBox: {
        flex: 1,
        justifyContent: "center"
    },
    labelText: {
        fontSize: 14
    },
    labelTextTypo: {
        textAlign: "center",
        color: "#fff",
        fontFamily: "Roboto_500Medium",
        fontWeight: "500",
        lineHeight: 20,
        letterSpacing: 0
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

export default CreateTableScreen;