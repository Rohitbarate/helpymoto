import { StyleSheet, Text, View ,TouchableOpacity,Image} from 'react-native'
import React from 'react'

const ServiceView = ({item,navigation}) => {

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Service Details", {
          item: item,
        });
      }}
    >
      <View style={styles.serviceView}>
        <Image style={styles.serviceImg} source={item.img} />
        <TouchableOpacity 
        style={styles.button}
        onPress={()=>navigation.navigate('Payment',
        {serviceName:item.serviceName,price:item.offerPrice})}
        >
          <Text
            style={{
              fontSize: 14,
              lineHeight: 20,
              paddingHorizontal: 24,
              paddingVertical: 4,
              color: "#fff",
            }}
          >
            Add
          </Text>
        </TouchableOpacity>
        <View style={styles.serviceInfo}>
          <Text style={{ fontSize: 15, marginBottom: 4,lineHeight:21,color:'#000',fontWeight:'bold',textTransform:'capitalize' }}>
            {item.serviceName}
          </Text>
          <Text style={styles.text}>{`\u2022 Takes ${item.time} hours to `}</Text>
          <Text style={styles.text}>{`\u2022 ${item.warranty} Months warranty`} </Text>
          <Text style={styles.text}>{`\u2022 After wash care`}</Text>
          <Text style={styles.text}>
            {`\u2022 ${item.offForMember}% off on Membership`}
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              marginTop: 10,
            }}
          >
            <Text
              style={{
                marginRight: 8,
                fontSize: 13,
                textDecorationStyle: "dashed",
                textDecorationLine: "line-through",
                color: "#000000",
                opacity: 0.4,
                lineHeight:19
              }}
            >
              &#8377;{item.price}.00
            </Text>

            <Text
              style={{
                fontSize: 15,
                color: "#000",
                lineHeight:22
              }}
            >
              &#8377;{item.offerPrice}.00
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default ServiceView

const styles = StyleSheet.create({
    offersCont: {
        display: "flex",
        textAlignVertical: "center",
        marginVertical: 4,
        paddingLeft: 8,
      },
      offerScreen: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: "#4D2161",
        marginRight: 8,
        textAlign: "center",
        textAlignVertical: "center",
        width: 300,
        height: 56,
        borderRadius: 4,
      },
      services:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        flexWrap:'nowrap',
        // borderTopWidth:1
      },
      serviceView: {
        height: 197,
        flex:1,
        color: "#FFFFFF",
        paddingVertical: 12,
        paddingHorizontal: 16,
        marginVertical: 2,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomColor:'#ADADAD',
        borderBottomWidth:1,
      },
      serviceImg: {
        width: "45%",
        height:150,
        borderRadius: 4,
        marginRight: 19,
      },
      serviceInfo: {
        display: "flex",
        flexDirection: "column",
        alignItems:'flex-start',
        flex:1
      },
      text: {
        marginBottom: 4,
        color: "#4F4F4F",
        fontSize: 13,
        lineHeight:19
      },
      tredServName: {
        backgroundColor: "#ffffff4d",
        textAlign: "center",
        textAlignVertical: "center",
        fontSize: 13,
        lineHeight: 18,
        color: "#ffffff",
        position: "absolute",
        height: 36,
        width: "100%",
        textAlignVertical:'center',
        bottom: 0,
        letterSpacing:0.5
      },
      button: {
        backgroundColor: "#5D5FEF",
        borderRadius: 4,
        position:'absolute',
        bottom:10,
        left:50
      }
})