import { View, Text, StyleSheet, ScrollView, Button } from 'react-native';
import React, { useState } from 'react';
import { SelectList } from 'react-native-dropdown-select-list';
import Header from '../../components/customComponents/header';
 
export default function CustomerType() {
    const [selectedValue, setSelectedValue] = useState('');
    const [selectedValueRes, setSelectedValueRes] = useState('');
 
    const residentData = [
                { key: "domestic", value: 'Domestic' },
                { key: "staff", value: 'Staff' },
                { key: "salary", value: 'Salary' },
                { key: "minor", value: 'Minor' },
                { key: "senior", value: 'Senior' }
            ];
            const nriData = [
                { key: "NRE", value: 'NRE' },
                { key: "NRO", value: 'NRO' },
                { key: "Both NRE and NRO", value: 'Both NRE and NRO' },
               
            ];
            const foreignerData = [
                { key: "NRE", value: 'NRE' },
                { key: "NRO", value: 'NRO' },
                { key: "Both NRE and NRO", value: 'Both NRE and NRO' },
            ];
            const pioData = [
                { key: "NRE", value: 'NRE' },
                { key: "NRO", value: 'NRO' },
                { key: "Both NRE and NRO", value: 'Both NRE and NRO' },
            ];
 
    const handleInputChange = (item) => {
        setSelectedValue(item);
    };
 
    const data = [
        { key: "Resident", value: 'Resident' },
        { key: "NRI", value: 'NRI' },
         { key: "Foreigner ", value: 'Foreigner' },
        { key: "PIO", value: 'PIO' }
    ];
 
    return (
        <View style={styles.mainContainer}>
            <Header />
            <Text style={styles.text}>Select Customer Type and Product</Text>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.container}>
                    <Text style={styles.header}>Customer Type</Text>
                    <SelectList
                        boxStyles={styles.selectBox}
                        dropdownStyles={styles.dropdown}
                        setSelected={(label) => handleInputChange(label)}
                        data={data.map(item => ({ value: item.value, label: item.value }))}
                        save="value"
                    />
                    {selectedValue === 'Resident' && (
                        <View style={styles.residentContainer}>
                            <Text style={styles.header}>Product Options</Text>
                            <SelectList
                                boxStyles={styles.selectBox}
                                dropdownStyles={styles.dropdown}
                                setSelected={(label) => setSelectedValueRes(label)}
                                data={residentData.map(item => ({ value: item.key, label: item.value }))}
                                save="value"
                            />
                        </View>
                    )}
                     {selectedValue === 'NRI' && (
                        <View style={styles.residentContainer}>
                            <Text style={styles.subHeader}>Product Options</Text>
                            <SelectList
                                boxStyles={styles.selectBox}
                                dropdownStyles={styles.dropdown}
                                setSelected={(label) => setSelectedValueRes(label)}
                                data={nriData.map(item => ({ value: item.key, label: item.value }))}
                                save="value"
                            />
                        </View>
                    )}
                           {selectedValue === 'Foreigner' && (
                        <View style={styles.residentContainer}>
                            <Text style={styles.subHeader}>Product Options</Text>
                            <SelectList
                                boxStyles={styles.selectBox}
                                dropdownStyles={styles.dropdown}
                                setSelected={(label) => setSelectedValueRes(label)}
                                data={foreignerData.map(item => ({ value: item.key, label: item.value }))}
                                save="value"
                            />
                        </View>
                    )}
                     {selectedValue === 'PIO' && (
                        <View style={styles.residentContainer}>
                            <Text style={styles.subHeader}>Product Options</Text>
                            <SelectList
                                boxStyles={styles.selectBox}
                                dropdownStyles={styles.dropdown}
                                setSelected={(label) => setSelectedValueRes(label)}
                                data={pioData.map(item => ({ value: item.key, label: item.value }))}
                                save="value"
                            />
                        </View>
                    )}
                   
                </View>
                <Button title='Submit' color={'#00408F'}></Button>
               
            </ScrollView>
 
        </View>
    );
}
 
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    scrollContainer: {
        flexGrow: 1,
        padding: 20,
    },
    container: {
        flex: 1,
      // backgroundColor: '#e0e0e0',
    },
    header: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subHeader: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    text:{
     fontSize:18,
     textAlign:'center',
     fontWeight:'bold',
     paddingTop:20,
     paddingLeft:12
    },
    selectBox: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingVertical: 10,
        paddingHorizontal: 10,
        fontSize: 16,
        borderWidth: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
    },
    dropdown: {
        backgroundColor: '#fff',
        borderRadius: 5,
    },
    residentContainer: {
        marginTop: 20,
       
       // backgroundColor: '#e0e0e0',
        borderRadius: 5,
    }
});