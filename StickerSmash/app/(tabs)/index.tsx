import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import ImageViewer from "@/components/ImageViewer";
import Button from "@/components/Button";
const placeholderImage = require("../../assets/images/background-image.png");

export default function HomeScreen() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(
    undefined
  );
  const [takenImage, setTakenImage] = useState<string | undefined>(undefined);
  // Slect Image from the library
  const picImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true, //able to edit
      quality: 1,
    });
    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      console.log(result);
    } else {
      alert("You did not select any image.");
    }
  };
  // Capture image
  const takePicImageAsync = async () => {
    const imageResult = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      quality: 1,
    });
    if (!imageResult.canceled) {
      setTakenImage(imageResult.assets[0].uri);
      console.log(imageResult);
    } else {
      alert("No Image Taken");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer
          imgSource={selectedImage || takenImage || placeholderImage}
        />
      </View>
      <View style={styles.footerContainer}>
        <Button
          label="Choose a Photo"
          theme="primary"
          onPress={picImageAsync}
        />
        <Button label="Take Photo" onPress={takePicImageAsync} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#393E46",
  },
  imageContainer: {
    flex: 1,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
});
