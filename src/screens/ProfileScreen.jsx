import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import ModalPhoto from "../components/ModalPhoto";
import ModalPhotoBackground from "../components/ModalPhotoBackground";
import React from "react";
import TextStyle from "../constants/TextStyle";

const ProfileScreen = () => {
  const [showModal, setShowModal] = React.useState(false);
  const handleCloseModal = ()=>{
    setShowModal(false);
  }
  return (
    <View style={{ flex: 1 }} >
    <ModalPhotoBackground isVisible={showModal} onClose={handleCloseModal}  />
      <ModalPhoto isVisible={showModal} onClose={handleCloseModal}/>
      <ScrollView>
        <Image style={styles.banner} />
        <View style={{ alignItems: "center", backgroundColor:'white', height:100 }}>
          <View style={styles.profileContainer}>
            <TouchableOpacity onPress={()=>setShowModal(true)}>
              <Image
                source={{
                  uri: "https://misanimales.com/wp-content/uploads/2018/07/perfiles-de-instagram-sobre-perros.jpg",
                }}
                style={styles.profile}
              />
            </TouchableOpacity>
          </View>
          <Text style={[styles.title,{position:'relative',bottom:110}]}>Camilo Gómez</Text>
        </View>
        <View style={styles.infoContainer}>
          
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  banner: {
    flex: 2,
    height: 170,
    backgroundColor: "#ccc",
    alignItems: "center",
  },
  profileContainer: {
    height: 168,
    width: 168,
    position: "relative",
    bottom: 110,
    borderRadius: 120,
    borderWidth: 4,
    borderColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  profile: {
    height: 160,
    width: 160,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 120,
    borderWidth: 4,
  },
  infoContainer: {
    alignItems: "center",
    paddingTop:10,
  },
  title: {
    fontFamily: TextStyle.titleRegular,
    fontSize: 25,
  },
});
