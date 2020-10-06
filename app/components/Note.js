import React from "react";
import { StyleSheet, Text, View , TouchableOpacity, Alert} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {useDispatch} from 'react-redux'

import colors from "../config/colors";
import { DeleteNote } from "../ducks/actions";



const Note = ({ title, description, priority, onPress, onPressNote, id }) => {
  const dispatch = useDispatch()

  function checkpriority() {
    if (priority === "HIGH") return colors.orange;
    else if (priority === "NORMAL") return colors.blue;
    else return colors.green;
  }
  function checkborder() {
    if (priority === "HIGH") return colors.borderOrange;
    else if (priority === "NORMAL") return colors.borderBlue;
    else return colors.borderGreen;
  }

  const onLong = () => {
    Alert.alert('Delete Note', 'Are You Sure you want to delete this note ?', [
      {text: 'Yes', onPress: () => dispatch(DeleteNote(id))},
      {text: 'No'}
    ])
  }

  return (
    <TouchableOpacity onPress={onPressNote} onLongPress={onLong}>
      <View style={[styles.Container, { backgroundColor: checkpriority() }]}>
        <View style={{ width: "80%" }}>
          <Text style={styles.label}>{priority} priority</Text>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
          <Text style={styles.description} numberOfLines={1}>
            {description}
          </Text>
        </View>
        <TouchableOpacity onPress={onPress}>
          <View
            style={[
              styles.round,
              {
                borderColor: checkborder(),
              },
            ]}
          >
            {priority === "HIGH" || priority === "NORMAL" ? null : (
              <MaterialCommunityIcons name="check" color={colors.green} />
            )}
          </View>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default Note;

const styles = StyleSheet.create({
  Container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    borderRadius: 15,
    marginVertical: 10,
    marginHorizontal: 20,
    alignItems: "center",
    width: 330,
  },
  label: {
    fontSize: 12,
    textTransform: "uppercase",
    fontWeight: "300",
    color: "#fff",
  },
  title: {
    fontWeight: "500",
    fontSize: 20,
    color: "#fff",
  },
  description: {
    fontSize: 10,
    color: "#fff",
  },
  round: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 40,
    borderWidth: 2,
    width: 30,
    height: 30,
  },
});
