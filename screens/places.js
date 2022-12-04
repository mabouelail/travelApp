import React from "react";
import {
    Text,
    View,
    Button,
    StyleSheet,
    Image,
    useWindowDimensions,
    TextInput,
    FlatList,
} from "react-native";
import { icons, colors, images, cities } from "../constants/assets";
import Icon from "../components/iconHolder";
import PlaceCard from "../components/placeCard";
const Places = ({navigation}) => {
    const { height, width } = useWindowDimensions();
    return (
        <View style={[styles.container, { width: width, height: height }]}>
            <View style={styles.header}>
                <View style={styles.icons}>
                    {/* <Image source={icons.list} style={styles.image1} /> */}
                    <Image source={icons.ringBell} style={styles.image1} />
                </View>
                <Text style={styles.headerText}>
                    Explore the {"\n"}beautiful places
                </Text>
                <View style={styles.searchContainer}>
                    <Image source={icons.search} style={styles.searchIcon} />
                    <TextInput
                        placeholder="search places"
                        style={styles.input}
                    ></TextInput>
                </View>
            </View>
            <View style={styles.iconsContainer}>
                <Icon imageSource={icons.airplane} />
                <Icon imageSource={icons.beach} />
                <Icon imageSource={icons.mountain} />
                <Icon imageSource={icons.location} />
            </View>
            <Text style={styles.heading}>Places</Text>
            <View>
                <FlatList
                    data={cities}
                    renderItem={({ item }) => (
                        <PlaceCard
                            placee={item}
                            width={150}
                            height={170}
                            action={() => navigation.navigate('City', item)}
                        />
                    )}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
            <Text style={[styles.heading, { marginTop: 8 }]}>Recommended</Text>
            <View
                style={{
                    flex: 1,
                    alignSelf: "center",
                    width: "100%",
                    overflow: "hidden",
                    bottom: 5,
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    flexDirection: "row",
                }}
            >
                <PlaceCard
                    placee={cities[5]}
                    width={180}
                    height={140}
                    action={() => navigation.navigate('City', cities[5])}
                />
                <PlaceCard
                    placee={cities[2]}
                    width={180}
                    height={140}
                    action={() => navigation.navigate('City', cities[2])}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {},
    header: {
        backgroundColor: colors.gray,
        height: "30%",
        width: "100%",
    },
    image1: {
        width: 30,
        height: 30,
    },
    icons: {
        height: 60,
        marginTop: "9%",
        flexDirection: "row",
        justifyContent: "flex-end",
        padding: 15,
    },
    headerText: {
        color: colors.darkGreen,
        padding: 15,
        fontSize: 25,
    },
    input: {
        height: 30,
        marginLeft: 10,
        flex: 1,
    },
    searchIcon: {
        width: 30,
        height: 30,
    },
    searchContainer: {
        height: 60,
        flexDirection: "row",
        width: "90%",
        alignItems: "center",
        backgroundColor: "white",
        padding: 10,
        alignSelf: "center",
        justifyContent: "flex-start",
        marginTop: "1%",
        borderRadius: 13,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.5,
        shadowRadius: 6.27,
        elevation: 5,
    },
    iconsContainer: {
        flexDirection: "row",
        width: "100%",
        padding: 10,
        justifyContent: "space-around",
        marginTop: 40,
        marginBottom: 10,
    },
    heading: {
        fontSize: 15,
        fontWeight: "600",
        color: colors.darkGreen,
        marginLeft: 15,
        marginBottom: 12,
    },
});

export default Places;
