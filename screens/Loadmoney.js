import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const Loadmoney = (props) => {
    return (
        <View style={styles.cont}>
            <View style={styles.view}>
            <TouchableOpacity style={styles.backicon} onPress={()=> props.navigation.goBack()}>
             <AntDesign name="left" size={20} color="black" />
             </TouchableOpacity>
             <View style={styles.view1}>
                 <Text style={styles.text1}>Load Money</Text>
             </View>
             <View style={styles.view2}>
                 <Text style={styles.text2}>    Rs. 50,000 </Text>
                 <Text style={styles.text3}>incoming limit left this month</Text>
             </View>
             </View>
             <View style={styles.view3}>
                 <View style={styles.view4}>
                    <Text style={styles.text4}> Receive local transfers</Text>
                 </View>
                 <View style={styles.view5}>
                     <View style={styles.view6}>
                     <Text style={styles.text5}> My SadaPay account number</Text>
                     <Text style={styles.text6}> 03033535016</Text>
                     <View style={styles.view7}>
                     <FontAwesome5 name="copy" size={20} color="salmon"/>
                     <Text style={styles.text7}>   Copy</Text>
                     </View>
                     </View>
                 </View>
             </View>
             <View style={styles.view8}>
                 <View style={styles.view9}>
                    <Text style={styles.text8}> Receive international transfers</Text>
                 </View>
                 <View style={styles.view10}>
                     <View style={styles.view11}>
                     <Text style={styles.text9}> My SadaPay IBAN number</Text>
                     <Text style={styles.text10}> PK02 SADA 0000 0030 3353 5016</Text>
                     <View style={styles.view12}>
                     <FontAwesome5 name="copy" size={20} color="salmon"/>
                     <Text style={styles.text11}>   Copy</Text>
                     </View>
                     </View>
                 </View>
             </View>
        </View>
    )
}

export default Loadmoney

const styles = StyleSheet.create({
    cont: {
        flex: 1,
        backgroundColor: "white"
    },

    view: {
        height: "22%",
        width: "100%",
        justifyContent: "center",
        justifyContent: "space-evenly",
    },

    backicon: {
        width: "10%",
        height: "28%",
        alignItems: "center",
        justifyContent: "flex-end"
    },

    view1: {
        width: "95%",
        height: "35%",
        alignItems: "center",
        justifyContent: "center"
    },

    text1: {
        width: "90%",
        height: "80%",
        fontSize: 30,
        fontWeight: "500"
    },

    view2: {
        width: "97%",
        height: "20%",
        flexDirection: "row"
    },

    text2: {
        color: "salmon",
        fontSize: 17,
        fontWeight: "700"
    },

    text3: {
        color: "grey",
        fontSize: 15
    },

    view3: {
        width: "100%",
        height: "27%",
        alignItems: "center",
        justifyContent: "space-evenly"
    },

    view4: {
        width: "92%",
        height: "25%",
        justifyContent: "center"
    },

    text4: {
        fontSize: 17,
        fontWeight: "500"
    },

    view5: {
        width: "92%",
        height: "65%",
        borderRadius: 7,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 0.7,
        borderColor: "lightgrey"
    },

    view6: {
        width: "95%",
        height: "80%"
    },

    text5: {
        fontSize: 15,
        color: "grey"
    },

    text6: {
        fontSize: 17
    },

    view7: {
        width: "30%",
        height: "54%",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },

    text7: {
        fontSize: 18,
        color: "salmon",
        fontWeight: "700"
    },

    
    view8: {
        width: "100%",
        height: "27%",
        alignItems: "center",
        justifyContent: "space-evenly"
    },

    view9: {
        width: "92%",
        height: "25%",
        justifyContent: "center"
    },

    text8: {
        fontSize: 17,
        fontWeight: "500"
    },

    view10: {
        width: "92%",
        height: "65%",
        borderRadius: 7,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 0.7,
        borderColor: "lightgrey"
    },

    view11: {
        width: "95%",
        height: "80%"
    },

    text9: {
        fontSize: 15,
        color: "grey"
    },

    text10: {
        fontSize: 17
    },

    view12: {
        width: "30%",
        height: "54%",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },

    text11: {
        fontSize: 18,
        color: "salmon",
        fontWeight: "700"
    },

})
