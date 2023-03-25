import React from "react";
import { Text, View, StyleSheet } from "react-native";

function Tasks(props) {
  return (
    <View style={styles.outerContainer}>
      <View style={styles.taskContainer}>
        <Text style={styles.taskText}>{props.text}</Text>
      </View>
    </View>
  );
}

export default Tasks;

const styles = StyleSheet.create({
  taskContainer: {
    borderWidth: 2,
    borderColor: "#bdfe",
    borderRadius: 10,
    padding: 10,
  },
  outerContainer: {
    padding: 10,
  },
  taskText: {
    fontSize: 14,
  },
});
