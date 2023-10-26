import React, { useState, useEffect } from 'react';
import { View, FlatList, Image, Text, StyleSheet } from 'react-native';
import COLORS from '../consts/colors';

export default function ViewImageScreen() {

  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('http://192.168.43.190:3000/images') // Replace with your server URL
      .then(response => response.json())
      .then(data => setImages(data))
      .catch(error => console.error('Error fetching images:', error));
  }, []);

  return (
    <View style={styles.container}>
    <FlatList
      data={images}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <View style={styles.innercontainer}>
          <Image source={{ uri: item.path }} style={{ width: 200, height: 200 }} />
          <Image source={{ uri: 'https://img.freepik.com/premium-vector/documents-folder-with-stamp-text-contract-with-approval-stamp_349999-535.jpg?w=2000' }} style={{ width: 200, height: 200 }} />
          <Text>{item.path}</Text>
        </View>
      )}
    />
  </View>
  )
}


const styles = StyleSheet.create({
  container: {
      flex: 1,
      margin: 10,
      // backgroundColor: COLORS.grey,
      backgroundColor: 'rgba(217, 217, 217, 0.31)'
  },
  innercontainer: {
      flex: 1,
      margin: 5,
      padding: 15,
      borderRadius: 10,
      backgroundColor: 'white'
  }
});