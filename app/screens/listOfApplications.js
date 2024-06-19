import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Card from '../../components/customComponents/cards';
import Header from '../../components/customComponents/header';
import FloatingButton from '../../components/customComponents/floatingButton';
import { router } from 'expo-router';
 
const goToActivityForm = () => {
  router.navigate('/screens/newApplicationOptions')
}
 
const List = () => {
  return (
    <SafeAreaView style={styles.container}>
        <Header/>
      <Card/>
      <FloatingButton onPress={goToActivityForm}/>
    </SafeAreaView>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
});
 
export default List;
