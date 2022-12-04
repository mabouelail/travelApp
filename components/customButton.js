import React from "react";
import { Text, StyleSheet, Pressable} from "react-native";
const CustomButton = ({ title, titleColor, buttonColor, action}) => {
    return (
        <Pressable style={[styles.button, {backgroundColor: buttonColor}]}
            onPress={action}
        >
            <Text  style={[styles.title, {color: titleColor}]}>{title}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    button : {
        height: 45,
        width: 130,
        justifyContent: 'center',
        borderRadius: 15,
    },
    title: {
        textAlign: 'center',
        fontWeight: '700'

    }
})

export default CustomButton;
