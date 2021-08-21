import "react-native-gesture-handler"
import { StatusBar } from "expo-status-bar"
import React from "react"
import { SafeAreaProvider } from "react-native-safe-area-context"

import Navigation from "./navigation"

const App = () => (
    <SafeAreaProvider>
        <Navigation />
        <StatusBar />
    </SafeAreaProvider>
)

export default App
