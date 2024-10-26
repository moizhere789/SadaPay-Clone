import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const Increasemylimit = (props) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.back} onPress={()=> props.navigation.goBack()}>
            <AntDesign name="left" size={20} color="black" />
            </TouchableOpacity>

            <View style={styles.view1}>
                <View style={styles.view11}>
            <Image source={require('../assets/Notion.png')} style={styles.img}/>
            </View>
            </View>

            <View style={styles.view2}>
                <View style={styles.view22}>
                    <Text style={styles.text}>Verify your biometric to</Text>
                    <Text style={styles.text}>bump up your wallet limit</Text>
                </View>
            </View>

            <View style={styles.view3}>
                <View style={styles.view33}>
                    <View style={styles.icon}>
                    <MaterialIcons name="done" size={20} color="lightgreen" />
                    </View>
                    <View style={styles.view333}>
                        <Text style={styles.text1}>Please make sure your fingers are clean</Text>
                        <Text style={styles.text1}>and have a clear background</Text>
                    </View>
                </View>
                <View style={styles.view33}>
                    <View style={styles.icon}>
                    <MaterialIcons name="done" size={20} color="lightgreen" />
                    </View>
                    <View style={styles.view333}>
                        <Text style={styles.text1}>Place them close together as shown in the</Text>
                        <Text style={styles.text1}>illustration above</Text>
                    </View>
                </View>
                <View style={styles.view33}>
                    <View style={styles.icon}>
                    <MaterialIcons name="done" size={20} color="lightgreen" />
                    </View>
                    <View style={styles.view333}>
                        <Text style={styles.text1}>Scan your left hand first, then repeat the</Text>
                        <Text style={styles.text1}>scan with your right hand</Text>
                    </View>
                </View>
            </View>

            <View style={styles.view4}>
                <TouchableOpacity style={styles.scan}>
                    <Text style={styles.text2}>Start scanning</Text>
                    <Feather name="arrow-right" size={22} color="white" />
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default Increasemylimit

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1
    },

    back: {
        // backgroundColor: "red",
        marginTop: 30,
        marginLeft: 8,
        height: "4%",
        width: "6%",
        alignItems: "center",
        justifyContent: "center"
    },

    view1: {
        // backgroundColor: "red",
        width: "100%",
        height: "33%",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30
    },

    view11: {
        // backgroundColor: "green",
        width: "90%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center"
    },

    img: {
        width: "100%",
        height: "100%"
    },

    view2: {
        // backgroundColor: "red",
        width: "100%",
        height: "10%",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 22
    },

    view22: {
        // backgroundColor: "red",
        width: "90%",
        height: "100%",
        justifyContent: "center",

    },

    text: {
        fontSize: 28,
        fontWeight: "600"
    },

    view3: {
        // backgroundColor: "red",
        height: "25%",
        width: "100%",
        alignItems: "center",
        marginTop: 6
    },

    view33: {
        // backgroundColor: "green",
        width: "90%",
        height: "25%",
        flexDirection: "row",
        marginTop: 12
    },

    icon: {
        // backgroundColor: "yellow",
        width: "7%",
        height: "45%"
    },

    view333: {
        // backgroundColor: "blue",
        justifyContent: "center",
        marginLeft: 10
    },

    text1: {
        fontSize: 16,
        color: "grey"
    },

    view4: {
        // backgroundColor: "red",
        width: "100%",
        height: "14%",
        justifyContent: "center",
        alignItems: "center",
    },

    scan: {
        backgroundColor: "tomato",
        width: "90%",
        height: "60%",
        borderRadius: 14,
        flexDirection: "row",
        alignItems: "center"
    },

    text2: {
        fontSize: 18,
        fontWeight: "700",
        marginLeft: 20,
        marginRight: 150,
        color: "white"
    },
})

