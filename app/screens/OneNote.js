import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Screen from "../components/Screen";
import colors from "../config/colors";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const OneNote = ({ route, navigation }) => {
  console.log(route.params);
  function checkpriority() {
    if (route.params.priority === "HIGH") return colors.orange;
    else if (route.params.priority === "NORMAL") return colors.blue;
    else return colors.green;
  }

  return (
    <Screen style={styles.Screen}>
      <View style={[styles.container, { backgroundColor: checkpriority() }]}>
        <Text style={styles.title} numberOfLines={3}>
          {route.params.title}
        </Text>
        <Text style={styles.description} numberOfLines={10}>
          {route.params.description}
        </Text>
      </View>
      <TouchableWithoutFeedback onPress={() => navigation.navigate('edit', route.params)}>
        <View style={styles.edit}>
          <Text style={{ textTransform: "uppercase" }}>Edit</Text>
        </View>
      </TouchableWithoutFeedback>
    </Screen>
  );
};

export default OneNote;

const styles = StyleSheet.create({
  Screen: {
    flex: 1,
    justifyContent: "center",
  },
  container: {
    width: "90%",
    height: "70%",
    margin: 23,
    borderRadius: 15,
    alignSelf: "center",
    alignItems: "center",
    paddingVertical: 30,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: "600",
    color: "#fff",
  },
  description: {
    fontSize: 20,
    fontWeight: "300",
    marginVertical: 10,
    color: "#fff",
  },
  edit: {
    width: 90,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 2,
    alignSelf: "center",
    borderWidth: 3,
    borderColor: colors.purple,
  },
});
