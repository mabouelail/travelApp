import React from "react";
import { Text, View, Button, StyleSheet, Image } from "react-native";
const Icon = ({ imageSource }) => {
    return (
        <View style={styles.iconContainer}>
            <Image source={imageSource} style={styles.icon} />
        </View>
    );
};

const styles = StyleSheet.create({
    iconContainer: {
        width: 60,
        height: 60,
        backgroundColor: "#f7ede2",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.5,
        shadowRadius: 6.27,
        elevation: 8,
    },
    icon: {
        width: 40,
        height: 40,
    },
});

export default Icon;
