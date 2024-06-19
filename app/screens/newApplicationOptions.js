// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
// import { BranchKyc, AadhaarEkyc } from '../../assets/images/assets';
// import { router } from 'expo-router';
// import Header from '../../components/customComponents/header';

// const NewApplicationOptionsScreen = () => {
//   const goToApplicantsList = () => {
//     router.navigate('screens/applicantsList');
//   };

//   return (
//     <View style={styles.container}>
//         <View style={styles.headerbox}>
//       <Header />
//       </View>
//       {/* <TouchableOpacity style={styles.backButton} onPress={() => router.navigate('/screens/listOfApplications')}>
//         <Ionicons name="arrow-back" size={24} color="black" />
//       </TouchableOpacity> */}
//       <Text style={styles.title}>Create New Application</Text>
//       <Text style={styles.subtitle}>Select your required account creation option</Text>
//       <TouchableOpacity onPress={goToApplicantsList}>
//         <View style={styles.optionContainer}>
//           <View style={styles.option}>
//             {/* <Image
//               source={AadhaarEkyc} // Replace with your own icon path
//               style={styles.icon}
//             /> */}
//             <View style={styles.optionTextContainer}>
//               <Text style={styles.optionTitle}>Account On-boarding</Text>
//               <Text style={styles.optionDescription}>
//                 To open a specific account with the bank
//               </Text>
//             </View>
//             <TouchableOpacity style={styles.button}>
//               <Text style={styles.buttonText}>CHOOSE & CONTINUE</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </TouchableOpacity>
//       <TouchableOpacity>
//         <View style={styles.optionContainer}>
//           <View style={styles.option}>
            
//             <View style={styles.optionTextContainer}>
//               <Text style={styles.optionTitle}>Client Creation or Updation</Text>
//               <Text style={styles.optionDescription}>
//                 To create a new client within the bank
//               </Text>
//             </View>
//             <TouchableOpacity style={styles.button}>
//               <Text style={styles.buttonText}>CHOOSE & CONTINUE</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 5, // Added to provide space for the header
//     // paddingHorizontal: 1,
//     backgroundColor: '#EFF9FF',
//   },
 
//   title: {
//     fontSize: 26,
//     fontWeight: 'bold',
//     marginBottom: 10,
//     color: 'black',
//     textAlign: 'center', // Center-align text
//     width: '90%', // Adjust width to center within the screen
//   },
//   subtitle: {
//     fontSize: 14,
//     marginBottom: 30,
//     color: 'black',
//     textAlign: 'center', // Center-align text
//     width: '90%', // Adjust width to center within the screen
//   },
//   optionContainer: {
//     backgroundColor: 'white',
//       borderRadius: 10,
//       marginHorizontal: 20, // Added to provide space from left and right sides of the screen
//       padding: 10,
//       marginBottom: 20,
//       shadowColor: '#000',
//       shadowOpacity: 0.5,
//       shadowRadius: 5,
//       elevation: 3,
//       alignItems: 'center',
//     },
//   option: {
//     flexDirection: 'column',
//     alignItems: 'flex-start',
//     alignItems: 'center',
//   },
//   icon: {
//     width: 50,
//     height: 50,
//     marginRight: 20,
//     alignItems: 'center',
//   },
//   optionTextContainer: {
//     marginRight: 50,
//     alignItems: 'center',
//   },
//   optionTitle: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     marginBottom: 5,
//     color: '#003366',
//     alignItems: 'center',
//   },
//   optionDescription: {
//     fontSize: 14,
//     color: '#666666',
//     alignItems: 'center',
//   },
//   button: {
//     marginTop: 12,
//     backgroundColor: '#00408F',
//     paddingVertical: 7,
//     paddingHorizontal: 10,
//     borderRadius: 5,
//     alignItems: 'center',
//     // alignItems: 'center',
//   },
//   buttonText: {
//     color: '#FFFFFF',
//     fontWeight: 'bold',
//     fontSize: 14,
//   },
//   backButton: {
//     position: 'absolute',
//     top: 70, // Adjusted to account for header height
//     left: 10,
//     zIndex: 1,
//   },
// });

// export default NewApplicationOptionsScreen;

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { BranchKyc, AadhaarEkyc } from '../../assets/images/assets';
import { router } from 'expo-router';
import Header from '../../components/customComponents/header';

const NewApplicationOptionsScreen = () => {
  const goToApplicantsList = () => {
    router.navigate('screens/applicantsList');
  };

  const goToCustType=()=>
  {
router.navigate('screens/customerType');
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerbox}>
        <Header />
      </View>
      <Text style={styles.title}>Create New Application</Text>
      <Text style={styles.subtitle}>Select your required account creation option</Text>
 
        <View style={styles.optionContainer}>
          <View style={styles.option}>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionTitle}>Account On-boarding</Text>
              <Text style={styles.optionDescription}>
                To open a specific account with the bank
              </Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={goToCustType}>
              <Text style={styles.buttonText}>CHOOSE & CONTINUE</Text>
            </TouchableOpacity>
          </View>
        </View>
     
 
        <View style={styles.optionContainer}>
          <View style={styles.option}>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionTitle}>Client Creation or Updation</Text>
              <Text style={styles.optionDescription}>
                To create a new client within the bank
              </Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={goToCustType}>
              <Text style={styles.buttonText}>CHOOSE & CONTINUE</Text>
            </TouchableOpacity>
          </View>
        </View>
   
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5, // Added to provide space for the header
    backgroundColor: '#EFF9FF',
    alignItems: 'center', // Center-align all children horizontally
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20, // Added space below the header
    marginBottom: 10,
    color: 'black',
    textAlign: 'center', // Center-align text
    width: '90%', // Adjust width to center within the screen
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 30,
    color: 'black',
    textAlign: 'center', // Center-align text
    width: '90%', // Adjust width to center within the screen
  },
  optionContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginHorizontal: 20, // Added to provide space from left and right sides of the screen
    // padding: 30,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 3,
    alignItems: 'center',
    height: 180, 
    width:300
    },

    option: {
        //backgroundColor: 'red',
        borderRadius: 10,
      // Ensures both options have the same width
        padding: 30,
     // Ensures both options have the same height
      
      },
  icon: {
    width: 50,
    height: 50,
    marginRight: 20,
  },
  optionTextContainer: {
    alignItems: 'center', // Center-align all children horizontally
  },
  optionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#003366',
    textAlign: 'center', // Center-align text
  },
  optionDescription: {
    fontSize: 14,
    color: '#666666',
    textAlign: 'center', // Center-align text
  },
  button: {
    marginTop: 17,
    backgroundColor: '#00408F',
    paddingVertical: 7,
    paddingHorizontal: 10,
    borderRadius: 5,
    alignItems: 'center', // Center-align text
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
  backButton: {
    position: 'absolute',
    top: 70, // Adjusted to account for header height
    left: 10,
    zIndex: 1,
  },
});

export default NewApplicationOptionsScreen;
