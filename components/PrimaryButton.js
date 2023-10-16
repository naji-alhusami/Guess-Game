import { View, Text, Pressable, StyleSheet } from "react-native";

function PrimaryButton(props) {
  function handler() {
    console.log("clicked");
  }

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={handler}
        android_ripple={{ color: "#644202" }}
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
      >
        <Text style={styles.buttonText}>{props.children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: "#72063c",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75, // between 0-1
  },
});
