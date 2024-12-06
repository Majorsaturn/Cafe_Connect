import React, { useState, useEffect, useRef } from 'react'; // Add useRef for managing FlatList reference
import { View, Text, TextInput, FlatList, StyleSheet, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, TouchableOpacity, ActivityIndicator } from 'react-native';
import { getFirestore, addDoc, collection, doc, where, getDocs, onSnapshot, query, orderBy, Timestamp, updateDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { format } from 'date-fns';
import InsetShadow from 'react-native-inset-shadow';

const TableRoom = ({ updateUserTableName, updateUserTable, navigation, fbApp }) => {
  
  const auth = getAuth(fbApp);
  const db = getFirestore(fbApp);

  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);
  const [userTable, setUserTable] = useState(null);

  const flatListRef = useRef(null); // Ref for FlatList

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setCurrentUser(user);
        try {
          const usersRef = collection(db, 'Users');
          const querySnapshot = await getDocs(query(usersRef, where("UID", "==", user.uid)));

          if (!querySnapshot.empty) {
            const userDoc = querySnapshot.docs[0];
            const userData = userDoc.data();
            setUserTable(userData.Table);
          } else {
            console.warn("No user document found for this Auth UID.");
            setUserTable(null);
          }
        } catch (error) {
          console.error("Error fetching user document:", error);
        }
      } else {
        setCurrentUser(null);
        setUserTable(null);
      }
    });

    return () => unsubscribe();
  }, [auth, db]);

  useEffect(() => {
    if (!userTable) return;

    const messagesRef = collection(db, 'Tables', userTable, 'messages');
    const messagesQuery = query(messagesRef, orderBy('timestamp'));

    const unsubscribe = onSnapshot(messagesQuery, (snapshot) => {
      const newMessages = snapshot.docs.map((doc) => doc.data());
      setMessages(newMessages);
      setLoading(false);

      // Auto-scroll to bottom when new messages arrive
      if (flatListRef.current) {
        flatListRef.current.scrollToEnd({ animated: true });
      }
    });

    return () => unsubscribe();
  }, [db, userTable]);

  const sendMessage = async () => {
    if (newMessage.trim() && userTable) {
      try {
        const sender = currentUser ? currentUser.displayName || 'Anonymous' : 'Anonymous';
        const messagesRef = collection(db, 'Tables', userTable, 'messages');
        await addDoc(messagesRef, {
          sender: sender,
          text: newMessage,
          timestamp: Timestamp.now(),
        });
        setNewMessage('');
      } catch (error) {
        console.error('Error sending message: ', error);
      }
    }
  };

  const leaveTable = async () => {
    onAuthStateChanged(auth, async (user) => {
    if (!user) {
      console.log("No user is logged in.");
      return; // Return early if no user is logged in
    }
  
    try {
      const usersCollection = collection(db, "Users");
      const userQuery = query(usersCollection, where("UID", "==", user.uid));
      const querySnapshot = await getDocs(userQuery);
  
      if (querySnapshot.empty) {
        console.error("No document found for the authenticated user.");
        return;
      }
  
      const userDoc = querySnapshot.docs[0];
      const userDocRef = doc(db, "Users", userDoc.id);
  
      // Use updateDoc to update the Table field
      await updateDoc(userDocRef, { Table: "none" });
      console.log("User left table successfully.");
  
      // Refetch user table
      const updatedSnapshot = await getDocs(userQuery);
      if (!updatedSnapshot.empty) {
        const updatedUserDoc = updatedSnapshot.docs[0];
        const updatedUserData = updatedUserDoc.data();
        updateUserTableName("none")
        updateUserTable(updatedUserData.Table);
      }
    } catch (error) {
      console.error("Error updating user table:", error);
    }
    });
  };

  const renderItem = ({ item }) => (
    <View style={styles.messageContainer}>
      <View style={styles.headerRow}>
        <Text style={styles.sender}>{item.sender}</Text>
        {item.timestamp && (
          <Text style={styles.timestamp}>{format(item.timestamp.toDate(), 'p, MMM d')}</Text>
        )}
      </View>
      <Text style={styles.message}>{item.text}</Text>
    </View>
  );
    // Set the header button
    useEffect(() => {
      navigation.setOptions({
        headerRight: () => (
            <TouchableOpacity style={styles.friendItem} onPress={leaveTable}>
              <InsetShadow>
              <View style={styles.statelayer}>
              <Text style={styles.friendText}>Leave Table</Text>
              </View>
              </InsetShadow>
            </TouchableOpacity>
        ),
      });
    }, [navigation]);
  
  return (
    <KeyboardAvoidingView style={styles.container}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.innerContainer}>
          {loading ? (
            <ActivityIndicator size="large" color="#9c6f44" />
          ) : (
            <>
              {messages.length === 0 ? (
                <Text style={styles.noMessagesText}>No messages yet. Be the first to send one!</Text>
              ) : (
                <FlatList
                  data={messages}
                  ref={flatListRef} // Attach the ref here
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={renderItem}
                  contentContainerStyle={styles.messageList}
                  onContentSizeChange={() => flatListRef.current?.scrollToEnd({ animated: true })} // Auto-scroll on content change
                  onLayout={() => flatListRef.current?.scrollToEnd({ animated: true })} // Auto-scroll on layout change
                />
              )}
            </>
          )}

          {!currentUser && (
            <Text style={styles.authMessage}>Please log in to send messages.</Text>
          )}

          <View style={styles.inputContainer}>
            <TextInput
              value={newMessage}
              onChangeText={setNewMessage}
              placeholder="Type a message"
              style={styles.input}
              placeholderTextColor="#ffffff"
            />
            <TouchableOpacity
              style={styles.sendButton}
              onPress={sendMessage}
              disabled={!currentUser || !userTable}
            >
              <Text style={styles.sendButtonText}>Send</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#face8b",
  },
  innerContainer: {
    flex: 1,
    paddingLeft: 10,
    justifyContent: 'flex-end',
  },
  messageList: {
    flexGrow: 1,
  },
  messageContainer: {
    marginBottom: 8,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  sender: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  timestamp: {
    fontSize: 12,
    color: '#666',
  },
  message: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    right: 5,
    marginBottom: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#fff',
    padding: 8,
    marginRight: 10,
    borderRadius: 20,
    backgroundColor: "#9c6f44",
    color: "#fff",
  },
  sendButton: {
    padding: 10,
    borderRadius: 50,
    backgroundColor: '#9c6f44',
  },
  sendButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  friendItem: {
    backgroundColor: "#face8b", // Light background color for the border
    marginVertical: 13,
    borderRadius: 20, // Makes the border rounded
    overflow: "hidden",
    right: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  friendText: { 
    fontSize: 18, 
    paddingVertical: 5, 
    color: "black" 
  },
  statelayer: {
    paddingHorizontal: 10
  }
});

export default TableRoom;
