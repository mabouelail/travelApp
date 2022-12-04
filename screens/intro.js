import React from "react";
import {
    Text,
    View,
    Button,
    StatusBar,
    StyleSheet,
    ImageBackground,
    useWindowDimensions,
} from "react-native";
import { colors, images } from "../constants/assets";
import CustomButton from "../components/customButton";
const Intro = ({navigation}) => {
    const { height, width } = useWindowDimensions();
    return (
        <View style={styles.container}>
            <ImageBackground
                style={[{ height: height, width: width }, styles.background]}
                source={images.intro}
            />
            <View style={styles.contentContainer}>
                <Text style={styles.header}>Discover{"\n"}world with us</Text>
                <Text style={styles.paragraph}>
                    “We travel, some of us forever, to seek other states, {"\n"}
                    other lives, other souls.” ― anaïs nin
                </Text>
                <CustomButton
                    title="Get Started"
                    titleColor={colors.darkGreen}
                    buttonColor={colors.sand}
                    action={() => navigation.navigate('Places')}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        fontSize: 40,
        fontWeight: "900",
        color: colors.kewi,
    },
    paragraph: {
        color: colors.gray,
        fontStyle: "italic",
        fontSize: 12,
    },
    background: {
        position: "absolute",
        resizeMode: "contain",
    },
    contentContainer: {
        position: "absolute",
        bottom: 130,
        left: 30,
        height: 220,
        justifyContent: "space-around",
    },
});
export default Intro;
