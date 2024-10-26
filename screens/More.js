import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const More = (props) => {
    return (
        <View style={styles.cont}>

            <ScrollView>
            <View style={styles.scrollview}>

                <View style={styles.userview}>
                    <View style={styles.usericon}>
                        <FontAwesome5 name="user-alt" size={20} color="green" />
                    </View>
                    <View style={styles.username}>
                    <Text style={styles.usertext}>  Moiz Manzoor</Text>
                    </View>
                </View>

                <View style={styles.view1}>

                    <View style={styles.space1}></View>
                    <Text style={styles.text}>Account Limts</Text>
                    <View style={styles.space}></View>
                    <View  style={styles.view2}>
                    <Text style={styles.text1}>Incoming</Text>
                        <Text style={styles.text2}>Rs. 50,000 left</Text>
                    </View>
                    <View style={styles.space}></View>
                    <View style={styles.bar}></View>
                    <View style={styles.space1}></View>
                    <View style={styles.view3}>
                        <Text style={styles.text3}>Your Rs. 50k monthly resets on 1st of next month</Text>
                        </View>
                </View>

                <View style={styles.space3}></View>

                <View style={styles.view4}>
                    <View style={styles.view5}>
                        <TouchableOpacity style={styles.view6} onPress={()=> props.navigation.navigate("Increasemylimit")}>
                        <MaterialCommunityIcons name="wallet-plus-outline" size={24} color="tomato" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.view7}>
                        <Text style={styles.text4}>Increase my limit</Text>
                        <View style={styles.space}></View>
                        <View>
                        <Text style={styles.text5}>Verify your biometric to bump your limit to 200k pkr.</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.space4}></View>
                <View style={styles.bar1}></View>
                <View style={styles.space4}></View>
                <View style={styles.learnmore}>
                    <Text style={styles.learnmoret}>Learn More</Text>
                </View>

                <ScrollView horizontal style={styles.view8}>

                    <View style={styles.imgview}>
                        <View style={styles.space5}></View>
                        <View style={styles.imgvieww}>
                            <Image source={require('../assets/sadapay.png')} style={styles.img}/>
                        </View>
                        <View style={styles.space}></View>
                        <Text style={styles.imgtext}>Welcome</Text>
                        <Text style={styles.imgtext}>To SadaPay</Text>
                    </View>

                    <View style={styles.imgview1}>
                    <View style={styles.imgvieww1}>
                    <Image source={require('../assets/sadapaycard.png')} style={styles.img1}/>
                        </View>
                        <View style={styles.space}></View>
                        <Text style={styles.imgtext1}>Order Your Card</Text>
                    </View>

                    <View style={styles.imgview2}>
                    <View style={styles.imgvieww2}>
                        <Image source={require("../assets/rupees.jpg")} style={styles.img2}/>
                        </View>
                        <View style={styles.space}></View>
                        <Text style={styles.imgtext2}>Load Money</Text>
                    </View>

                    <View style={styles.imgview3}>
                    <View style={styles.imgvieww3}>
                    <Image source={require('../assets/sadapaycard.png')} style={styles.img1}/>
                        </View>
                        <View style={styles.space}></View>
                        <Text style={styles.imgtext3}>Virtual Card</Text>
                    </View>

                    <View style={styles.imgview4}>
                        <View style={styles.space5}></View>
                    <View style={styles.imgvieww4}>
                        <Image source={require("../assets/lock.png")} style={styles.img4}/>
                        </View>
                        <View style={styles.space}></View>
                        <Text style={styles.imgtext4}>Keeping Your</Text>
                        <Text style={styles.imgtext4}>Account Secure</Text>
                    </View>

                </ScrollView>
                </View>

                <View style={styles.green}>
                    <View style={styles.space3}></View>
                <View style={styles.bar1}></View>
                <View style={styles.space2}></View>
                <View style={styles.view9}>
                    <View style={styles.sharewf}>
                        <Text style={styles.sharewft}>Share with friends</Text>
                        </View>
                        <View style={styles.space2}></View>
                        <View style={styles.space1}></View>
                    <View style={styles.view10}>
                    <Ionicons name="arrow-redo-outline" size={28} color="tomato" />
                    <Text style={styles.inviteFt}>   Invite frriends to SadaPay</Text>
                    </View>
                </View>

                <View style={styles.bar1}></View>
                <View style={styles.view11}>
                    <View style={styles.callus}>
                        <Text style={styles.callust}>Call Us</Text>
                        </View>

                    <View style={styles.callusi}>
                    <Ionicons name="call-outline" size={30} color="tomato" />
                        <Text style={styles.callust1}>    088-1-SADA</Text>
                    </View>
                </View>

                <View style={styles.bar1}></View>

                <View style={styles.view12}>
                    <View style={styles.about}>
                        <Text style={styles.aboutt}>About</Text>
                    </View>
                    <View style={styles.gethelp}>
                    <MaterialCommunityIcons name="message-text-outline" size={28} color="tomato" />
                    <Text style={styles.gethelpt}>   Get Help</Text>
                    </View>
                    <View style={styles.privacy}>
                    <Ionicons name="shield-checkmark-outline" size={28} color="tomato" />
                    <Text style={styles.privacyt}>    Privacy Policy</Text>
                    </View>
                    <View style={styles.terms}>
                    <AntDesign name="copy1" size={28} color="tomato" />
                    <Text style={styles.termst}>    Terms & conditions</Text>
                    </View>
                    <View style={styles.schedule}>
                    <AntDesign name="copy1" size={28} color="tomato" />
                    <Text style={styles.schedulet}>    Schedule of charges</Text>
                    </View>
                </View>

                <View style={styles.bar1}></View>

                </View>
                
                <View style={styles.view13}>
                    <View style={styles.view14}>
                        <View style={styles.delete}>
                        <FontAwesome5 name="trash-alt" size={28} color="tomato" />
                        <Text style={styles.deletet}>    Delete account</Text>
                        </View>
                        <View style={styles.logout}>
                        <MaterialCommunityIcons name="logout-variant" size={28} color="tomato" />
                        <Text style={styles.logoutt}>    Log out</Text>
                        </View>
                    </View>

                </View>
                </ScrollView>
                </View>
    )
}

export default More

const styles = StyleSheet.create({

    cont: {
        backgroundColor: "#f8f8ff",
        flex: 1
    },

    scrollview: {
        width: wp("100%"),
        height: hp("100%"),
        // backgroundColor: "#faebd7",
        alignItems: "center"
    },

    userview: {
        // backgroundColor: "red",
        width: wp("90%"),
        height: hp("16%"),
        alignItems: "flex-end",
        flexDirection: "row",
    },

    usericon: {
        backgroundColor: "#7fffd4",
        width: "12%",
        height: "36%",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 22
    },

    username: {
        // backgroundColor:"green",
        height: "35%",
        width: "55%",
        justifyContent: "center",
        alignItems: "center"
    },

    usertext: {
        fontSize: 25,
        fontWeight: "600"
    },

    view1: {
        // backgroundColor: "red",
        width: wp("90%"),
        height: hp("28%"),
        justifyContent: "center",
    },

    text: {
        fontSize: 24,
        fontWeight: "600"
    },

    
    view2: {
        // backgroundColor: "grey",
        height: "15%",
        width: "95%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },

    text1: {
        fontSize: 16,
        fontWeight: "600"
    },

    text2: {
        fontSize: 16,
        color: "salmon",
        fontWeight: "600"
    },

    

    space: {
        width: "100%",
        height: "7%",
    },

    bar: {
        backgroundColor: "tomato",
        width: "95%",
        height: "3%",
        borderRadius: 3
    },

    space1: {
        width: "100%",
        height: "9%"
    },

    view3: {
        // backgroundColor: "grey",
        height: "23%",
        width: "80%",
        justifyContent: "center",
    },

    text3: {
        fontSize: 14.5,
        color: "grey"
    },

    space3: {
        width: "100%",
        height: "1%"
    },

    view4: {
        backgroundColor: "white",
        height: hp("18%"),
        width: wp("90%"),
        flexDirection: "row",
        borderRadius: 13,
        shadowColor: "grey",
        shadowRadius: "12%",
        shadowOpacity: 0.5,
    },

    view5: {
        // backgroundColor: "pink",
        width: "23%",
        height: "80%",
        justifyContent: "center",
        alignItems: "center"
    },

    view6: {
        backgroundColor: "#ffe4e1",
        width: "55%",
        height: "47%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20
    },

    view7: {
        // backgroundColor: "green",
        width: "65%",
        height: "90%",
        justifyContent: "center",

    },

    text4: {
        fontSize: 17,
        fontWeight: "600"
    },

    text5: {
        fontSize: 14,
        color: "grey"
    },

    space4: {
        width: "90%",
        height: "5%"
    },

    bar1: {
        width: "90%",
        height: "0.2%",
        backgroundColor: "lightgrey"
    },

    learnmore: {
        height: hp("5%"),
        width: wp("90%"),
        // backgroundColor: "red",
        justifyContent: "center"
    },

    learnmoret: {
        fontSize: 22,
        fontWeight: "500"
    },

    view8: {
        // backgroundColor: "yellow",
        // width: wp("90%"),
        // height: hp("1%"),
        flexDirection: "row",
    },

    imgview: {
        // backgroundColor: "red",
        width: wp("30%"),
        height: hp("17%"),
        justifyContent: "center",
        alignItems: "center",
    },

    space5: {
        width: "100%",
        height: "8%"
    },

    imgvieww: {
        // backgroundColor: "grey",
        width: "70%",
        height: "50%",
        borderRadius: 15,
        borderColor: "tomato",
        borderWidth: 3,
        justifyContent: "center",
        alignItems: "center"
    },

    imgtext: {
        fontSize: 10
    },

    img: {
        width: "50%",
        height: "93%"
    },

    imgview1: {
        // backgroundColor: "green",
        width: wp("30%"),
        height: hp("17%"),
        justifyContent: "center",
        alignItems: "center"
    },

    imgvieww1: {
        // backgroundColor: "grey",
        width: "70%",
        height: "50%",
        borderRadius: 15,
        borderColor: "tomato",
        borderWidth: 3,
        alignItems: "center",
        justifyContent: "center"
    },

    img1: {
        width: "63%",
        height: "130%",
        marginBottom: 20
    },

    imgtext1: {
        fontSize: 10
    },

    imgview2: {
        // backgroundColor: "blue",
        width: wp("30%"),
        height: hp("17%"),
        justifyContent: "center",
        alignItems: "center"
    },

    imgvieww2: {
        // backgroundColor: "grey",
        width: "70%",
        height: "50%",
        borderRadius: 15,
        borderColor: "tomato",
        borderWidth: 3,
        alignItems: "center",
        justifyContent: "center"
    },

    img2: {
        width: "95%",
        height: "80%"
    },

    imgtext2: {
        fontSize: 10
    },

    imgview3: {
        // backgroundColor: "red",
        width: wp("30%"),
        height: hp("17%"),
        justifyContent: "center",
        alignItems: "center"
    },

    imgvieww3: {
        // backgroundColor: "grey",
        width: "70%",
        height: "50%",
        borderRadius: 15,
        borderColor: "tomato",
        borderWidth: 3,
        justifyContent: "center",
        alignItems: "center"
    },

    imgtext3: {
        fontSize: 10
    },

    imgview4: {
        // backgroundColor: "green",
        width: wp("30%"),
        height: hp("17%"),
        justifyContent: "center",
        alignItems: "center"
    },

    imgvieww4: {
        // backgroundColor: "grey",
        width: "70%",
        height: "50%",
        borderRadius: 15,
        borderColor: "tomato",
        borderWidth: 3,
        justifyContent: "center",
        alignItems: "center"
    },

    img4: {
        width: "70%",
        height: "90%"
    },

    imgtext4: {
        fontSize: 10
    },

    green: {
        // backgroundColor: "pink",
        width: wp("100%"),
        height: hp("100%"),
        alignItems: "center",
        // justifyContent: "center"
    },

    space2: {
        width: "90%",
        height: "3%"
    },

    view9: {
        // backgroundColor: "green",
        width: wp("90%"),
        height: hp("14%"),
        marginBottom: 15
    },

    sharewf: {
        // backgroundColor: "red",
        width: "100%",
        height: "35%",
    },

    sharewft: {
        fontSize: 23,
        fontWeight: "600"
    },

    view10: {
        // backgroundColor: "pink",
        width: "65%",
        height: "30%",
        flexDirection: "row",
        alignItems: "center"
    },

    inviteFt: {
        fontSize: 15,
        fontWeight: "500"
    },
    
    view11: {
        // backgroundColor: "green",
        width: wp("90%"),
        height: hp("16%"),
        marginTop: 20,
        marginBottom: 20
    },

    callus: {
        // backgroundColor: "red",
        width: "100%",
        height: "35%",
        marginBottom: 23,
        justifyContent: "center"
    },

    callust: {
        fontSize: 23,
        fontWeight: "600"
    },

    callusi: {
        // backgroundColor: "pink",
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        height: "30%"
    },

    callust1: {
        fontSize: 17
    },

    view12: {
        // backgroundColor: "green",
        width: wp("90%"),
        height: hp("50%"),
        marginTop: 10,
        justifyContent: "space-around",
        marginBottom: 10
    },

    about: {
        // backgroundColor: "red",
        width: "100%",
        height: "10%"
    },

    aboutt: {
        fontSize: 23,
        fontWeight: "600"
    },

    gethelp: {
        // backgroundColor: "red",
        flexDirection: "row",
        width: "100%",
        height: "10%",
        alignItems: "center"
    },

    gethelpt: {
        fontSize: 16,
        fontWeight: "500"
    },

    privacy: {
        // backgroundColor: "blue",
        flexDirection: "row",
        width: "100%",
        height: "10%",
        alignItems: "center"
    },

    privacyt: {
        fontSize: 16,
        fontWeight: "500"
    },

    terms: {
        // backgroundColor: "yellow",
        flexDirection: "row",
        width: "100%",
        height: "10%",
        alignItems: "center"
    },

    termst: {
        fontSize: 16,
        fontWeight: "500"
    },

    schedule: {
        // backgroundColor: "grey",
        flexDirection: "row",
        width: "100%",
        height: "10%",
        alignItems: "center",
    },

    schedulet: {
        fontSize: 16,
        fontWeight: "500"
    },

    view13: {
        width: wp("100%"),
        height: hp("25%"),
        // backgroundColor: "red",
        alignItems: "center",
    },

    view14: {
        // backgroundColor: "green",
        width: wp("90%"),
        height: hp("20%"),
        justifyContent: "space-evenly"
    },

    delete: {
        // backgroundColor: "blue",
        width: "100%",
        height: "30%",
        flexDirection: "row",
        alignItems: "center"
    },

    deletet: {
        fontSize: 17,
        fontWeight: "500",
    },

    logout: {
        // backgroundColor: "pink",
        width: "100%",
        height: "30%",
        flexDirection: "row",
        alignItems: "center"
    },

    logoutt: {
        fontSize: 17,
        fontWeight: "500"
    },
})
