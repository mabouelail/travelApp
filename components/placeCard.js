import React from "react";
import {
    Text,
    View,
    Pressable,
    StyleSheet,
    ImageBackground,
    Image,
} from "react-native";
import { images, icons, colors } from "../constants/assets";
const PlaceCard = (props) => {
    const { country, city, evaluation, picture} = props.placee;
    return (
        <Pressable
            style={[styles.container, {width: props.width,height: props.height,}]}
            onPress={props.action}
        >
            <ImageBackground
                source={picture}
                style={[styles.image, { width: props.width, height: props.height }]}
            />
            <Text
                style={{
                    zIndex: 3,
                    color: colors.fontt,
                    top: 8,
                    left: 8,
                    fontSize: 16,
                }}
            >
                {city}
            </Text>
            <View style={styles.iconsRibbon}>
                <View style={styles.group1}>
                    <Text style={{ color: colors.fontt, fontSize: 12 }}>
                        {" "}
                        <Image source={icons.gps} style={styles.icon} />{" "}
                        {country}
                    </Text>
                </View>
                <View style={styles.group2}>
                    <Text style={{ color: colors.fontt, fontSize: 12 }}>
                        <Image source={icons.star} style={styles.icon} />{" "}
                        {evaluation}
                    </Text>
                </View>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 15,
        overflow: "hidden",
        marginLeft: 10,
        marginRight: 7,
    },
    image: {
        position: "absolute",
        resizeMode: "contain",
    },
    iconsRibbon: {
        width: "95%",
        flexDirection: "row",
        justifyContent: "space-between",
        position: "absolute",
        bottom: 10,
    },
    icon: {
        width: 10,
        height: 10,
    },
    group1: {
        flexDirection: "row",
    },
    group2: {
        flexDirection: "row",
    },
});
export default PlaceCard;
