import { StyleSheet, View, Text, Pressable, Image } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{props.text}</Text>
      <Pressable
        android_ripple={{ color: "#000000" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <View style={styles.goalDeleteIcon}>
          <Image
            source={require("../assets/images/delete.png")}
            style={styles.image}
          />
        </View>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    display: "flex",
    flexDirection: "row",
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    alignItems: "center",
    justifyContent: "space-between",
  },

  pressedItem: {
    opacity: 0.5,
  },

  goalText: {
    color: "#fff",
    padding: 8,
    borderRadius: 6,
  },

  goalDeleteIcon: {
    marginHorizontal: 8,
  },

  image: {
    height: 16,
    width: 16,
  },
});
