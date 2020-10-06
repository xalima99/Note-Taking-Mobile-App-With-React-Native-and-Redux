import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Screen from "../components/Screen";
import {useSelector, useDispatch} from 'react-redux';
import {editStatus} from '../ducks/actions'

import Header from "../components/Header";
import Note from "../components/Note";
import { FlatList } from "react-native-gesture-handler";
import colors from "../config/colors";

const HomeScreen = ({navigation}) => {
  
  const dispatch = useDispatch()
  const Notes = useSelector(state => state.Note.Notes)

  const setDone = (id,priority) => {
    // setNotes(
    //   Notes.map((note) => {
    //     return note.id === id
    //       ? Object.assign({}, note, { priority: priority })
    //       : note;
    //   })
    // );
  };

  return (
    <Screen>
      <Header page='home' />
      <View style={styles.main}>
        <Text style={{ fontWeight: "700", borderRadius: 50 }}>
          PLANNED TASKS
        </Text>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={Notes}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => {
            if(item.priority === 'DONE') return null
            return (
              <Note
                title={item.title}
                description={item.description}
                id={item.id}
                priority={item.priority}
                onPress={() => dispatch(editStatus({id: item.id, status: 'DONE'}))}
                onPressNote={() => navigation.navigate('note', item)}
              />
            );
          }}
        />
      </View>
      <View style={styles.done}>
        <Text style={{ fontWeight: "700", borderRadius: 50 }}>DONE TASKS</Text>
        <FlatList showsHorizontalScrollIndicator={false} horizontal data={Notes} keyExtractor={item => item.id.toString()} renderItem={({item}) => {
            if(item.priority === 'DONE')
            return <Note title={item.title}
                description={item.description}
                id={item.id}
                priority={item.priority}
                onPress={() => dispatch(editStatus({id: item.id, status: 'NORMAL'}))}
                onPressNote={() => navigation.navigate('note', item)}
                />
                
        }} />
      </View>
    </Screen>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  main: {
    flex: 0.8,
    alignItems: "center",
    paddingTop: 10,
    borderBottomColor: colors.light,
    borderBottomWidth: 4,
    marginBottom: 5,
  },
  done:{
      alignItems:'center',
      justifyContent: 'center',
      flex: 0.3,
  }
});
