import { View, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

export default Card;

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginHorizontal: 24,
    marginTop: 36,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4, // Android Propetry
    shadowColor: "black", //IOS Property
    shadowOffset: { width: 0, height: 2 }, //IOS Property
    shadowRadius: 6, //IOS Property
    shadowOpacity: 0.25, //IOS Property
  },
});
