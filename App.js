import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisable, setModalIsVisable] = useState(false);

  function startAddGoalHandle() {
    setModalIsVisable(true);
  }
  function endAddGoalHandle() {
    setModalIsVisable(false);
  }
  function addGoalHandler(enterdGoalText) {
    setCourseGoals((currentCourseGoal) => [
      ...currentCourseGoal,
      { text: enterdGoalText, id: Math.random().toString() },
    ]);
    endAddGoalHandle();
  }

  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoal) => {
      return currentCourseGoal.filter((goal) => goal.id !== id);
    });
    console.log("DELETE");
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#c48ad0"
          onPress={startAddGoalHandle}
        />
        <GoalInput
          visible={modalIsVisable}
          onAddGoal={addGoalHandler}
          onCancel={endAddGoalHandle}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  onDeleteItem={deleteGoalHandler}
                  id={itemData.item.id}
                />
              );
            }}
            alwaysBounceVertical={false}
          />
          {/* <ScrollView alwaysBounceVertical={false}>
        {courseGoals.map((goal) => (
          <View style={styles.goalItem} key={goal}>
          <Text style={styles.goalText}>
            {goal}
          </Text>
          </View>
        ))}
      </ScrollView> */}

          {/* keyExtractor */}
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#cfc4db",
  },
  goalsContainer: {
    flex: 4,
  },
});
