// ChatRoom.js
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, Button } from 'react-native';
import { getFirestore, addDoc, collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const TableRoom = ({ fbApp }) => {
  const auth = getAuth(fbApp);
  const db = getFirestore(fbApp);

  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    const messagesRef = collection(db, 'Tables', 'Tedtable', 'messages');
    const messagesQuery = query(messagesRef, orderBy('timestamp'));

    const unsubscribe = onSnapshot(messagesQuery, (snapshot) => {
      const newMessages = snapshot.docs.map(doc => doc.data());
      setMessages(newMessages);
    });

    return () => unsubscribe();
  }, [db]);

  const sendMessage = async () => {
    if (newMessage.trim()) {
      const messagesRef = collection(db, 'Tables', 'Tedtable', 'messages');
      await addDoc(messagesRef, {
        sender: auth.currentUser ? auth.currentUser.displayName : 'Anonymous',
        text: newMessage,
        timestamp: new Date(),
      });
      setNewMessage('');
    }
  };

  return (
    <View>
      <FlatList
        data={messages}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text>{item.sender}: {item.text}</Text>
        )}
      />
      <TextInput 
        value={newMessage} 
        onChangeText={setNewMessage} 
        placeholder="Type a message" 
      />
      <Button title="Send" onPress={sendMessage} />
    </View>
  );
};

export default TableRoom;
