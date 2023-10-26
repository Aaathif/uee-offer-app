import React, { useState } from 'react'
import { SafeAreaView, StatusBar, StyleSheet, Text, View, TouchableOpacity, Image, Alert } from 'react-native'
import COLORS from '../consts/colors';
import * as ImagePicker from 'expo-image-picker';

export default function TakePhoto({title, text, image}) {

    const [selectedImage, setSelectedImage] = useState(null);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 5],
            quality: 1,
        });

        if (!result.canceled) {
            setSelectedImage(result.assets[0].uri);
            uploadImage(result.assets[0].uri);
        }
    };

    const uploadImage = async (uri) => {
        const formData = new FormData();
        formData.append('image', {
          uri,
          type: 'image/jpeg', // Adjust the content type based on your needs
          name: 'image.jpg',
        });
      
        try {
          const response = await fetch('http://192.168.43.190:3000/upload', {  
            method: 'POST',
            body: formData,
            headers: {
              Accept: 'application/json',
              'Content-Type': 'multipart/form-data',
            },
          });
      
          const data = await response.json();
          Alert.alert("Image uploaded successfully");
          console.log('Image uploaded successfully:', data);
        } catch (error) {
            Alert.alert("Error uploading image");
          console.error('Error uploading image:', error);
        }
      };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent={false} />
            <View style={styles.innercontainer}>
                <View style={styles.titleView}>
                    <Text style={styles.titleText}>{title}</Text>
                    <Text style={styles.smallText}>{text}</Text>
                </View>
                <View style={styles.fieldContainer}>
                    {
                        selectedImage ? (
                            <Image style={styles.imgBtn} source={{ uri: selectedImage }} />
                        ): (
                            <Image style={styles.imgBtn} source={image} />
                        )
                    }
                    
                </View>

                <View style={styles.fieldBtnContainer}>
                    <TouchableOpacity style={styles.submitBtn} onPress={pickImage}>
                        <Text style={styles.submitText}>Go To File</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 5,
    },
    innercontainer: {
        flex: 1,
        margin: 5,
        backgroundColor: 'white'
    },
    titleView: {
        flex: 0.2,
        marginLeft: 10,
        marginTop: 5,
        marginBottom: 10,
    },
    titleText: {
        color: COLORS.primary,
        fontWeight: 'bold',
        fontSize: 30
    },
    fieldContainer: {
        flex: 0.8,
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 15,
        // marginLeft: 10,
    },
    fieldBtnContainer: {
        flex: 0.12,
        marginLeft: 15,
        marginRight: 10,
    },
    submitBtn: {
        backgroundColor: COLORS.primary,
        padding: 15,
        borderRadius: 10,
    },
    submitText: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: COLORS.white,
    },
    imgBtn: {
        width: '80%',
        height: '80%'
    }
});