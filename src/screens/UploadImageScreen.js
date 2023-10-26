import React from 'react'

export default function UploadImageScreen() {
  return (
    <View style={styles.container}>
      <UploadImage />
      <Text>Upload photo</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });