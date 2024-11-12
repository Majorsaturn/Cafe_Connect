import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, Button, StyleSheet, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Platform, TouchableOpacity } from 'react-native';
import { getFirestore, addDoc, collection, onSnapshot, query, orderBy, Timestamp } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const TableRoom = ({ fbApp }) => {
  const auth = getAuth(fbApp);
  const db = getFirestore(fbApp);

  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);  // Store the logged-in user

  // Set up listener to track auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user); // user will be null if not logged in
    });

    return () => unsubscribe();
  }, [auth]);

  useEffect(() => {
    const messagesRef = collection(db, 'Tables', 'Tedtable', 'messages');
    const messagesQuery = query(messagesRef, orderBy('timestamp'));

    const unsubscribe = onSnapshot(messagesQuery, (snapshot) => {
      const newMessages = snapshot.docs.map(doc => doc.data());
      setMessages(newMessages);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [db]);

  const sendMessage = async () => {
    if (newMessage.trim()) {
      const sender = currentUser ? currentUser.displayName : 'Anonymous';  // Check if user is logged in

      const messagesRef = collection(db, 'Tables', 'Tedtable', 'messages');
      await addDoc(messagesRef, {
        sender: sender,
        text: newMessage,
        timestamp: Timestamp.now(),  // Make sure this is a Firestore Timestamp
      });
      setNewMessage('');
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.innerContainer}>
          {loading ? (
            <Text>Loading messages...</Text>
          ) : (
            <FlatList
              data={messages}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <View style={styles.messageContainer}>
                  <Text style={styles.sender}>{item.sender}:</Text>
                  <Text style={styles.message}>{item.text}</Text>
                </View>
              )}
              contentContainerStyle={styles.messageList}
            />
          )}

          {/* Input field and send button */}
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
              disabled={!currentUser}  // Disable if no user is logged in
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
    justifyContent: 'flex-end', // Align content to the bottom
  },
  messageList: {
    flexGrow: 1,
  },
  messageContainer: {
    marginBottom: 8,
  },
  sender: {
    fontWeight: 'bold',
  },
  message: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',  // Align input and button in a row
    alignItems: 'center',  // Vertically center the elements
    marginTop: 10,
    marginBottom: 10, // Space between messages and input field
  },
  input: {
    flex: 1,  // Allow input to take up available space
    borderWidth: 1,
    borderColor: '#fff',
    padding: 8,
    marginRight: 10,  // Space between input and button
    borderRadius: 20,  // Rounded corners for the input field
    backgroundColor: "#9c6f44",
    color: "#fff"
  },
  sendButton: {
    padding: 10,
    borderRadius: 50,  // Make button circular
    backgroundColor: '#9c6f44',
  },
  sendButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default TableRoom;
