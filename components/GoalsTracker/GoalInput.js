import {
  StyleSheet,
  View,
  Button,
  TextInput,
  Modal,
  Image,
} from "react-native";
import { useState } from "react";

function GoalInput(props) {
  const [enterdGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enterdText) {
    setEnteredGoalText(enterdText);
  }

  function addGoalHandler() {
    props.onAddGoal(enterdGoalText);
    setEnteredGoalText("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.Image}
          source={require("../../assets/images/goal.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your Goal!"
          onChangeText={goalInputHandler}
          value={enterdGoalText}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color="#942a5f" />
          </View>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color="#c48ad0" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    // flexDirection: "colum",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#baa1d5",
  },

  textInput: {
    borderWidth: 1,
    borderColor: "#ffffff",
    backgroundColor: "#ffffff",
    color: "#141111",
    width: "100%",
    borderRadius: 16,
    padding: 16,
  },
  buttonsContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  Image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});

export default GoalInput;
