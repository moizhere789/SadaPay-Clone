import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';

export default function Dashboard(props) {
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <View style={styles.view11}>
          <TouchableOpacity style={styles.view111} onPress={()=> props.navigation.navigate("Balance")}>
            <View style={styles.view1111} >
            <Text style={styles.text1}> Current Balance </Text>
            <View style={styles.space}></View>
            <Text style={styles.text2}> Rs.99.99 </Text>
            </View>
            <View style={styles.icon1}>
            <Image source={require('../assets/mastercard.png')} style={styles.mastercard}/>
              <AntDesign name="arrowright" size={27} color="white" />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.view2}>
          <TouchableOpacity style={styles.view22} onPress={()=> props.navigation.navigate("Loadmoney")}>
            <View style={styles.icon2}>
          <AntDesign name="arrowdown" size={27} color="white" />
          </View>
          <View style={styles.loadmoney}> 
            <Text style={styles.load}> Load </Text> 
            <Text style={styles.money}> Money </Text>
          
          </View>

          </TouchableOpacity>

          <TouchableOpacity style={styles.view222} onPress={()=> props.navigation.navigate("Sendmoney")}>

            <View style={styles.icon3}>

            <Feather name="arrow-up-right" size={27} color="white" />

            </View>

            <View style={styles.sendmoney}>

              <Text style={styles.send}> Send </Text>
              <Text style={styles.money1}> Money </Text>

            </View>
            
          </TouchableOpacity>

        </View>

      </View>

      <View style={styles.view3}>

        <View style={styles.dash}>

        <TouchableOpacity style={styles.dashbar}></TouchableOpacity>

        </View>

        <View style={styles.it}>

        <View style={styles.icon4}>

        <AntDesign name="arrowright" size={15} color="white" />

        </View>

        <View style={styles.text3}>

          <Text style={styles.textt}> Tap the green card to view your card </Text>
          <Text style={styles.textt}> details and access your card controls </Text>

        </View>
        </View>

        <View style={styles.it1}>

        <View style={styles.icon5}>
          
        <AntDesign name="arrowdown" size={15} color="white" />
        </View>
        <View style={styles.text4}>
        <Text style={styles.textt}> Tap the blue card to see the options </Text>
          <Text style={styles.textt}> for loading funds to your account </Text>
        </View>
        </View>
        <View style={styles.it2}>
        <View style={styles.icon6}>
        <Feather name="arrow-up-right" size={15} color="white" />
        </View>
        <View style={styles.text5}>
        <Text style={styles.textt}> Tap the peach card to send </Text>
          <Text style={styles.textt}> money. it feels like magic! </Text>
        </View>
        </View>
      </View>
      <View style={styles.view4}>
        <View style={styles.home}>
          <TouchableOpacity style={styles.home1}>
        <Foundation name="home" size={22} color="salmon" />
        <Text style={styles.text6}> Personal </Text>
        </TouchableOpacity>
        </View>
        <View style={styles.payment}>
          <TouchableOpacity style={styles.payment1} onPress={()=> props.navigation.navigate("Payment")}>
        <MaterialIcons name="payment" size={22} color="grey" />
        <Text style={styles.text7}> Payment </Text>
        </TouchableOpacity>
        </View>
        <View style={styles.more}>
          <TouchableOpacity style={styles.more1} onPress={()=> props.navigation.navigate("More")}>
        <Feather name="menu" size={22} color="grey" />
        <Text style={styles.text8}> More </Text>
        </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "whitesmoke",
    justifyContent: "center",
    justifyContent: "space-around",
    justifyContent: "flex-start",
  },

  view1: {
    width: "100%",
    height: "50%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",

  },

  view11: {
    height: "100%",
    width: "55%",
    alignItems: "center",
    justifyContent: "space-around",

  },

  view111: {
    backgroundColor: "grey",
    height: "86%",
    width: "90%",
    borderRadius: 20,
    justifyContent: "space-around",
    alignItems: "center",


  },

  view1111: {
    width: "85%",
    height: "65%",
  },

  text1: {
    fontSize: 12,
    color: "white",
  },

  space: {
    width: "100%",
    height: "7%"
  },


  text2: {
    fontSize: 20,
    color: "white",
    fontWeight: "600",
  },

  icon1: {
  width: "85%",
    height: "10%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },

  mastercard: {

    width: "30%",
    height: "90%"
  },
  
  view2: {
    width: "45%",
    height: "100%",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",

  },

  view22: {
    backgroundColor: "deepskyblue",
    height: "40%",
    width: "80%",
    borderRadius: 20,
    justifyContent: "space-around",
    alignItems: "center",


  },

  icon2: {
    height: "45%",
    width: "90%",
  },

  loadmoney: {
    width: "80%",
    height: "35%",
  },

  load: {
    fontSize: 16,
    color: "white",
  },

  money: {
    fontSize: 16,
    color: "white",
  },



  view222: {
    backgroundColor: "salmon",
    height: "40%",
    width: "80%",
    borderRadius: 20,
    alignItems:"center",
    justifyContent:"space-around",

  },

  icon3: {
    width: "88%",
    height: "45%",
    alignItems: "flex-end",

  },

  sendmoney:{
    width: "80%",
    height: "35%",
  },

  send: {
    fontSize: 16,
    color: "white",
  },

  money1: {
    fontSize: 16,
    color: "white",
  },


  view3: {
    height: "41%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    justifyContent: "space-around",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: "white",
  },


  dash: {
    width: "100%",
    height: "10%",
    alignItems:"center"
  },

dashbar:{
  width:"10%",
  height:"19%",
  backgroundColor:"lightgrey",
  borderRadius:10,
  marginTop:5
},


  it: {
    height: "28%",
    width: "66%",
    alignItems: "center",
    justifyContent: "center",
    justifyContent: "space-evenly",
  },

  icon4: {
    backgroundColor: "mediumseagreen",
    width: "9%",
    height: "28%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 7,
  },

  text3: {
    height: "50%",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },

  textt: {
    color: "grey",
  },

  
  it1: {
    height: "28%",
    width: "66%",
    alignItems: "center",
    justifyContent: "center",
    justifyContent: "space-evenly",
  },

  icon5: {
    backgroundColor: "deepskyblue",
    width: "9%",
    height: "27%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 7,
  },

  text4: {
    height: "50%",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },

  
  it2: {
    height: "34%",
    width: "66%",
    alignItems: "center",
    justifyContent: "center",
    justifyContent: "space-evenly",
  },


  icon6: {
    backgroundColor: "salmon",
    width: "9%",
    height: "23%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 7,
  },

  text5: {
    height: "60%",
    alignItems: "center",
    width: "100%",
  },


  view4: {
    height: "10%",
    width: "100%",
    flexDirection: "row",
    borderTopWidth: 0.5
  },

  home:{
    backgroundColor: "white",
    width: "33%",
    height: "90%",
    alignItems: "center",
    justifyContent: "center",

  },

  home1: { 
    justifyContent: "center",
    alignItems: "center",
  },

  text6: {
    fontSize: 13,
    fontWeight: "500",
    color: "salmon"
  },

  
  payment:{
    backgroundColor: "white",
    width: "33%",
    height: "90%",
    alignItems: "center",
    justifyContent: "center",

  },

  payment1: { 
    justifyContent: "center",
    alignItems: "center",
  },

  text7: {
    fontSize: 13,
    fontWeight: "500",
    color: "grey"
  },

  more:{
    backgroundColor: "white",
    width: "34%",
    height: "90%",
    alignItems: "center",
    justifyContent: "center",
  },

  more1: { 
    justifyContent: "center",
    alignItems: "center",
  },

  text8: {
    fontSize: 13,
    fontWeight: "500",
    color: "grey",
  },

});
