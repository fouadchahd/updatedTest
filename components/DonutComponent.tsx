import * as React from "react";
import {
  Easing,
  TextInput,
  Animated,
  Text,
  View,
  StyleSheet,
} from "react-native";
import Svg, { G, Circle, Rect } from "react-native-svg";
import Colors from "../constants/Colors";
import Layout from "../constants/Layout";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

export default function DonutComponent({
  remaining = 100,
  radius = 40,
  strokeWidth = 10,
  duration = 500,
  color = "tomato",
  textColor = color,
  max = 100,
  status = "A",
}) {
  const animated = React.useRef(new Animated.Value(0)).current;
  const circleRef = React.useRef();
  const inputRef = React.useRef();
  const circumference = 2 * Math.PI * radius;
  const halfCircle = radius + strokeWidth;

  const animation = (toValue: number) => {
    return Animated.timing(animated, {
      delay: 1000,
      toValue,
      duration,
      useNativeDriver: true,
      easing: Easing.out(Easing.ease),
    }).start(() => {
      animation(remaining);
    });
  };

  React.useEffect(() => {
    animation(remaining);
    animated.addListener((v) => {
      const maxPerc = (100 * v.value) / max;
      const strokeDashoffset = circumference - (circumference * maxPerc) / 100;
      if (inputRef?.current) {
        inputRef.current.setNativeProps({
          text: `${Number(v.value).toFixed(2)}`,
        });
      }
      if (circleRef?.current) {
        circleRef.current.setNativeProps({
          strokeDashoffset,
        });
      }
    }, []);

    return () => {
      animated.removeAllListeners();
    };
  });

  return (
    <View style={{ width: radius * 2, height: radius * 2 }}>
      <Svg
        height={radius * 2}
        width={radius * 2}
        viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2}`}
      >
        <G rotation="-180" origin={`${halfCircle}, ${halfCircle}`}>
          <AnimatedCircle
            ref={circleRef}
            cx="50%"
            cy="50%"
            r={radius}
            fill="transparent"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDashoffset={circumference}
            strokeDasharray={circumference}
          />
          <AnimatedCircle
            cx="50%"
            cy="50%"
            r={radius}
            fill="transparent"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinejoin="round"
            strokeOpacity=".1"
          />
        </G>
      </Svg>
      <View
        style={[
          StyleSheet.absoluteFillObject,
          { justifyContent: "center", alignItems: "center", marginTop: 10 },
        ]}
      >
        <Text style={styles.titleText}>
          {remaining === 0 ? "No " : ""}Remaining Amount
        </Text>
        <AnimatedTextInput
          ref={inputRef}
          underlineColorAndroid="transparent"
          editable={false}
          defaultValue="0"
          style={[
            { fontSize: 20, color: "black" },
            styles.Numbertext,
          ]}
        />
        <View style={styles.devider}></View>
        {status == "A" ? (
          <Text style={[styles.mediumText, { color: Colors.light.redText }]}>
            Active
          </Text>
        ) : (
          <Text style={[styles.mediumText, { color: Colors.light.redText }]}>
            Closed
          </Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Numbertext: {
    fontWeight: "800",
    fontSize: 28,
    textAlign: "center",
  },
  titleText: {
    textAlign: "center",
    fontWeight: "600",
    fontSize: 13,
    color: "black",
    marginBottom: 5,
  },
  mediumText: {
    textAlign: "center",
    fontWeight: "800",
    fontSize: 14,
  },
  devider: {
    height: 3,
    marginVertical: 5,
    alignSelf: "center",
    width: Layout.window.width * 0.15,
    backgroundColor: Colors.light.deviderColor,
    opacity: 0.5,
  },
});
