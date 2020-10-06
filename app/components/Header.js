import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import axios from 'axios';

import colors from "../config/colors";
import { TouchableOpacity } from "react-native-gesture-handler";

const Header = ({ page }) => {
  const navigation = useNavigation();
  const [date, setdate] = useState(null);

  const getDate = async() => {
    const res = await axios.get('http://worldclockapi.com/api/json/est/now')
     setdate(res.data)
  }

  useEffect(() => {
    getDate()
  }, []);

  return (
    <View style={styles.Header}>
      <View style={styles.Calendar}>
        <Text style={styles.day}>{date?.currentDateTime.substring(8,10)}</Text>
        <View>
          <Text>{date?.dayOfTheWeek}</Text>
          <Text>{date?.currentDateTime.substring(0,7)}</Text>
        </View>
      </View>
      {page === "home" ? (
        <TouchableOpacity onPress={() => navigation.navigate("add")}>
          <View style={styles.Add}>
            <MaterialCommunityIcons
              name="plus"
              size={22}
              color="white"
              style={styles.icon}
            />
            <Text style={styles.task}>New Task</Text>
          </View>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={styles.Add}>
            <MaterialCommunityIcons
              name="chevron-triple-down"
              size={22}
              color="white"
              style={styles.icon}
            />
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  Header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 25,
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: colors.light,
  },
  Calendar: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  day: {
    fontSize: 35,
    fontWeight: "600",
    marginRight: 5,
  },
  Add: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    padding: 10,
    backgroundColor: colors.purple,
    borderRadius: 50,
    overflow: "hidden",
  },
  task: {
    textTransform: "uppercase",
    fontWeight: "600",
  },
});
