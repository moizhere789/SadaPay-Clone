import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const Balance = (props) => {
    return (
        <View style={styles.cont}>
            <View style={styles.view}>
                <TouchableOpacity style={styles.view1} onPress={()=> props.navigation.goBack()}>
                <AntDesign name="left" size={20} color="black" />
                </TouchableOpacity>
                <View style={styles.view2}>
             <Text style={styles.text1}>My Cards</Text>
                </View>
            </View>
            <View style={styles.view3}>
                <View style={styles.view33}>
                 <TouchableOpacity style={styles.virtual}>
                 <Text style={styles.virtualtt}>Virtual</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.physical}>
                     <Text style={styles.physicalt}>Physical</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.view4}>
                <View style={styles.view44}>
                    <View style={styles.view444}>
                        <View style={styles.view4444}>
                        <Image source={require('../assets/sadapay.png')} style={styles.sadapayi}/>
                        <View style={styles.space}></View>
                        <Text style={styles.virtualt}>Virtual</Text>
                        </View>
                        <View style={styles.view44444}>
                            <View style={styles.view444444}>
                        <Entypo name="dots-three-vertical" size={50} color="grey" />
                        <Entypo name="dots-three-vertical" size={50} color="grey" />
                        <Entypo name="dots-three-vertical" size={50} color="grey" />
                        <Entypo name="dots-three-vertical" size={50} color="grey" />
                        </View>
                        <View style={styles.view5}>
                            <Text style={styles.textnum}>5</Text>
                            <Text style={styles.textnum}>6</Text>
                            <Text style={styles.textnum}>7</Text>
                            <Text style={styles.textnum}>8</Text>
                        </View>
                        </View>
                    </View>
                    <View style={styles.view6}>
                        <View style={styles.view66}>
                            <Text style={styles.exp}> Exp Date   </Text>
                            <Entypo name="dots-two-horizontal" size={30} color="grey" />
                            <MaterialCommunityIcons name="slash-forward" size={20} color="grey" />
                            <Entypo name="dots-two-horizontal" size={30} color="grey" />
                        </View>
                        <View style={styles.view7}>
                            <Text style={styles.cvc}>CVC         </Text>
                            <Entypo name="dots-three-horizontal" size={30} color="grey" />
                        </View>
                    </View>
                    <View style={styles.view8}>
                        <TouchableOpacity style={styles.view88}>
                            <Text style={styles.text2}>View</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.view888}>
                            <Text style={styles.text3}>Copy</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.view9}>
                <View style={styles.view99}>
                <FontAwesome5 name="snowflake" size={28} color="salmon" />
                </View>
                <View style={styles.view999}>
                <Text style={styles.text4}>Freez Card</Text>
                <Text style={styles.text5}>Lock this card temporarily</Text>
            </View>
            <View style={styles.view9999}>
            <Entypo name="switch" size={35} color="lightgrey" />
            </View>
            </View>
        </View>
    )
}

export default Balance

const styles = StyleSheet.create({
    cont: {
        backgroundColor: "white",
        flex: 1
    },

    view: {
        width: "100%",
        height: "10%",
        // backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-around",
    },

    view1: {
        height: "25%",
        width: "25%",
    },

    view2: {
        width: "55%",
        height: "50%",
        justifyContent: "center",
    },

    text1: {
        fontSize: 18,
        fontWeight: "500"
    },

    view3: {
        height: "10%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },

    view33: {
        backgroundColor: "lightgrey",
        height: "65%",
        width: "95%",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        borderRadius: 50
    },

    virtual: {
        width: "45%",
        height: "75%",
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 30
    },

    virtualtt: {
        fontWeight: "500",
        fontSize: 17,
    },

    physical: {
        width: "45%",
        height: "75%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 30
    },
    
    physicalt: {
        fontWeight: "500",
        fontSize: 17,
        color: "grey",
    },

    view4: {
        // backgroundColor: "red",
        height: "60%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },

    view44: {
        backgroundColor: "lightgrey",
        width: "65%",
        height: "100%",
        borderRadius: 15,
        justifyContent: "space-around"
    },

    view444: {
        width: "100%",
        height: "50%",
        flexDirection: "row",
        justifyContent: "space-around"
    },

    view4444: {
        width: "30%",
        height: "70%",
        alignItems: "center",
        justifyContent: "center"
    },

    sadapayi: {
        width: "70%",
        height: "48%"
    },

    space: {
        width: "100%",
        height: "7%"
    },

    virtualt: {
        color: "grey",
        fontSize: 15
    },

    view44444: {
        width: "50%",
        height: "95%",
        alignItems: "center",
    },

    view444444: {
        width: "65%",
        height: "70%",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "flex-end"

    },

    view5: {
        width: "65%",
        height: "20%",
        flexDirection: "row",
        justifyContent: "space-around"
    },

    textnum: {
        fontSize: 20,
        color: "grey",
        fontWeight: "600"
    },

    view6: {
        width: "100%",
        height: "25%",
        alignItems: "center",
    },

    view66: {
        width: "90%",
        height: "40%",
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
    },

    exp: {
        fontSize: 16,
        fontWeight: "400",
        color: "grey",
    },

    view7: {
        width: "80%",
        height: "40%",
        justifyContent: "flex-end",
        flexDirection: "row",
        alignItems: "center"
    },

    cvc: {
        fontWeight: "400",
        fontSize: 16,
        color: "grey"
    },

    view8: {
        width: "100%",
        height: "15%",
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row"
    },

    view88: {
        backgroundColor: "grey",
        width: "42%",
        height: "80%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 30
    },

    view888: {
        backgroundColor: "grey",
        width: "42%",
        height: "80%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 30
    },

    text2: {
        color: "white",
        fontSize: 17,
        fontWeight: "500"
    },

    text3: {
        color: "white",
        fontSize: 17,
        fontWeight: "500"
    },

    view9: {
        width: "100%",
        height: "10%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },

    view99: {
        width: "13%",
        height: "47%",
        alignItems: "center",
        justifyContent: "center"
    },

    view999: {
        width: "72%",
        height: "70%",
        justifyContent: "center"
    },

    view9999: {
        width: "10%",
        height: "50%",
        alignItems: "center",
        justifyContent: "center"
    },

    text4: {
        fontWeight: "400",
        fontSize: 16,
    },

    text5: {
        fontSize: 11,
        color: "grey"
    },
})
