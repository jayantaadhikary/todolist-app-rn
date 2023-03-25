import { StatusBar } from "expo-status-bar";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useState } from "react";
import Tasks from "./components/tasks";

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const addTaskHandler = (item) => {
    setTask(item);
  };
  const tasKListHandler = () => {
    setTaskItems([...taskItems, task]);
  };

  const removeTaskHandler = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>My Tasks</Text>
      </View>
      <View style={styles.innerContainer}>
        {taskItems.map((data, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => removeTaskHandler(index)}
            >
              <Tasks text={data} />
            </TouchableOpacity>
          );
        })}
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.textInputWrapper}
      >
        <TextInput
          onChangeText={addTaskHandler}
          style={styles.textInput}
          placeholder="Write down Tasks"
        />
        <TouchableOpacity
          onPress={tasKListHandler}
          style={styles.buttonContainer}
        >
          <Text style={{ fontSize: 24 }}>+</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerContainer: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  header: {
    fontWeight: "bold",
    fontSize: 24,
  },
  innerContainer: {
    padding: 20,
  },
  textInputWrapper: {
    position: "absolute",
    bottom: 80,
    padding: 15,
    borderWidth: 2,
    borderRadius: 40,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  textInput: {
    fontSize: 15,
    width: "80%",
  },
  buttonContainer: {},
});
