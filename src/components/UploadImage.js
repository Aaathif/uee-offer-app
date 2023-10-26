import React, { useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function UploadImage() {

  const [selectedImage, setSelectedImage] = useState(null);

  // const pickImageAsync = async () => {
  //     try {
  //         const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
  //         if (status !== 'granted') {
  //             alert('Sorry, we need camera roll permissions to make this work!');
  //             return;
  //         } else {
  //             let result = await ImagePicker.launchImageLibraryAsync({
  //                 mediaTypes: ImagePicker.MediaTypeOptions.All,
  //                 allowsEditing: false,
  //                 quality: 1,
  //             });
  //             if (!result.canceled) {
  //                 setSelectedImage(result.assets[0].uri);
  //             }
  //         }
  //     } catch (error) {
  //         console.log(error);
  //     }
  // };

  // const createFormData = (uri) => {
  //     const fileName = uri.split('/').pop();
  //     const fileType = fileName.split('.').pop();
  //     const formData = new FormData();
  //     formData.append('image', {
  //         name: fileName,
  //         uri,
  //         type: `image/${fileType}`,
  //     });
  //     return formData;
  // };

  // const postImage = async ({ uri }) => {
  //     const data = createFormData(uri);
  //     const res = await Client.post('http://192.168.43.190:3000/images', data, {
  //         headers: {
  //             Accept: 'application/json',
  //             'Content-Type': 'multipart/form-data',
  //         },
  //     });
  //     return res.data.imageName
  // };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      allowsEditing: false,
    });

    if (!result.canceled) {
      setSelectedImage(result.uri);
      uploadImage(result.uri);
    }
  };


  // =======================================================================================================

  const uploadImage = async (uri) => {
    const formData = new FormData();
    formData.append('image', {
      uri,
      type: 'image/jpeg', // Adjust the content type based on your needs
      name: 'image.jpg',
    });

    try {
      const response = await fetch('http://192.168.8.106:3000/upload', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
        },
      });

      const data = await response.json();
      console.log('Image uploaded successfully:', data);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  // Call uploadImage with the selectedImage URI when the user picks an image


  return (
    // <>
    //     {selectedImage && <Image source={{ uri: selectedImage }} style={uploadPhotoStyles.image} />}
    //     <TouchableOpacity style={uploadPhotoStyles.container} onPress={pickImageAsync} >
    //         <Text>+</Text>
    //     </TouchableOpacity>
    //     <Image source={"http://192.168.43.190:3000/images/<IMAGE_NAME>"} />
    // </>
    <View>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {selectedImage && (
        <Image source={{ uri: selectedImage }} style={{ width: 200, height: 200 }} />
      )}
    </View>
  )
}

const uploadPhotoStyles = StyleSheet.create({
  container: {
    height: 56,
    width: 56,
    borderRadius: 28,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    marginBottom: 16
  },
  image: {
    width: '50%',
    height: '50%',
    marginBottom: 16,
    borderRadius: 50,
    borderWidth: 5,
    borderColor: 'red',
  }
})



