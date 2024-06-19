import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { CsbBank } from "../../assets/images/assets";
 
const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}></Text>
      <Image
      // source={{ uri: "https://i.postimg.cc/FskjFB0Y/rpt.jpg" }}
        source={CsbBank}
        style={styles.logo}
      />
    </View>
  );
};
 
const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 60,
    backgroundColor: '#00408F',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  logo: {
    width: 140,
    height: 40,
  },
});
 
export default Header;