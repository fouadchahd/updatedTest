import React from "react"
import { StyleSheet, View, Text } from "react-native"

const WelcomeToBits = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to Bits!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 32,
        fontWeight: "bold",
    },
})

export default WelcomeToBits
