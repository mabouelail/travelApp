import React from "react";
import {
    Text,
    View,
    Button,
    StyleSheet,
    useWindowDimensions,
    ImageBackground,
    Image,
} from "react-native";
import { images, cities, icons, colors } from "../constants/assets";
import CustomButton from "../components/customButton";
const City = ({ navigation, route }) => {
    const { city, picture, country, price } = route.params;
    const { height, width } = useWindowDimensions();
    return (
        <View style={[styles.container, { width: width, height: height }]}>
            <ImageBackground
                style={[
                    styles.background,
                    { width: width, height: height / 1.7 },
                ]}
                source={picture}
            />
            <View style={styles.cityRibbon}>
                <Text style={{ fontSize: 25, color: "white" }}>{city}</Text>
                <Text style={{ fontSize: 15, color: "white" }}>
                    <Image source={icons.star} style={styles.starIcon} />
                    5.0
                </Text>
            </View>
            <View style={styles.tripContainer}>
                <View style={styles.tripDetails}>
                    <Text style={styles.location}>
                        <Image source={icons.gps} style={styles.starIcon} />{" "}
                        {country}
                    </Text>
                    <Text style={styles.tripHeader}>About the trip</Text>
                    <Text style={styles.description}>
                        Customize your city break holiday to {city}, If you plan
                        to experience the most epic travel destinations in this
                        lifetime, make sure to choose it, this is a must-see
                        city
                    </Text>
                </View>
            </View>
            <View style={styles.footer}>
                <Text style={styles.price}>{price}</Text>
                <CustomButton
                    title="Book Now"
                    titleColor={colors.darkGreen}
                    buttonColor="white"
                />
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {},
    background: {
        position: "absolute",
        resizeMode: "contain",
    },
    cityRibbon: {
        width: "100%",
        marginTop: "85%",
        flexDirection: "row",
        padding: 17,
        justifyContent: "space-between",
        // backgroundColor: 'red'
    },
    starIcon: {
        width: 20,
        height: 20,
    },
    tripContainer: {
        flex: 1,
        backgroundColor: colors.fontt,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        // opacity: 0.92
    },
    location: {
        fontSize: 15,
        color: colors.green,
        fontWeight: "600",
    },
    tripDetails: {
        marginTop: "10%",
        marginLeft: "5%",
        marginRight: "5%",
    },
    tripHeader: {
        marginTop: 20,
        color: colors.darkGreen,
        fontSize: 15,
        fontWeight: "700",
        marginBottom: 20,
    },
    description: {
        color: "#395B64",
        width: "100%",
        textAlign: "justify",
        lineHeight: 25,
        fontFamily: "serif",
    },
    footer: {
        width: "100%",
        alignSelf: "center",
        height: "8%",
        backgroundColor: colors.sea,
        bottom: 0,
        position: "absolute",
        borderTopEndRadius: 15,
        borderTopStartRadius: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 15,
    },
    price: {
        color: "white",
    },
});
export default City;
