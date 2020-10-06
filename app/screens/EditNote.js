import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {useDispatch} from 'react-redux';
import {changeNote} from '../ducks/actions'

import colors from "../config/colors";

const EditNote = ({ route, navigation }) => {
  const [title, settitle] = useState(route.params.title);
  const [description, setdescription] = useState(route.params.description);
  const [priority, setpriority] = useState(route.params.priority);
  const dispatch = useDispatch()


  const onSubmit = () => {
    dispatch(
      changeNote({ title, description, priority: priority, id: route.params.id })
    );
    navigation.navigate('home');
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View>
          <Text style={{ fontWeight: "700", borderRadius: 50, fontSize: 18 }}>
            ADD NEW TASK
          </Text>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              paddingVertical: 10,
            }}
          >
            <Text style={{ textTransform: "uppercase", marginBottom: 5 }}>
              Select Priority
            </Text>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity onPress={() => setpriority("NORMAL")}>
                <View
                  style={[
                    styles.round1,
                    {
                      backgroundColor:
                        priority === "NORMAL" ? colors.blue : "#fff",
                    },
                  ]}
                ></View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setpriority("HIGH")}>
                <View
                  style={[
                    styles.round2,
                    {
                      backgroundColor:
                        priority === "HIGH" ? colors.orange : "#fff",
                    },
                  ]}
                ></View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{ width: "100%", paddingVertical: 35 }}>
          <TextInput
            multiline={true}
            numberOfLines={4}
            style={styles.TextInput}
            value={title}
            onChangeText={(text) => settitle(text)}
            placeholder="Enter Task Title"
            onSubmitEditing={() => Keyboard.dismiss()}
          />
          <TextInput
            multiline={true}
            numberOfLines={4}
            style={styles.DescInput}
            value={description}
            onChangeText={(text) => setdescription(text)}
            placeholder="Enter Task Description"
            onSubmitEditing={() => Keyboard.dismiss()}
          />
        </View>
      </View>
      <TouchableOpacity onPress={onSubmit} style={styles.icon}>
        <MaterialCommunityIcons name="plus-box" size={22} color="white" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default EditNote;

const styles = StyleSheet.create({
  container: {
    padding: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  TextInput: {
    fontSize: 20,
    borderColor: "#000",
    width: "100%",
    marginBottom: 70,
    borderBottomWidth: 4,
    textTransform: "uppercase",
    fontWeight: "800",
  },
  DescInput: {
    fontSize: 20,
    borderColor: "#000",
    width: "100%",
    borderBottomWidth: 4,
  },
  icon: {
    width: 70,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.purple,
    borderRadius: 50,
    overflow: "hidden",
    borderWidth: 5,
    borderColor: "#fff",

    top: -40,
    alignSelf: "center",
  },
  round1: {
    height: 25,
    width: 25,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: colors.blue,
    marginRight: 3,
  },
  round2: {
    height: 25,
    width: 25,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: colors.orange,
    marginLeft: 3,
  },
});
