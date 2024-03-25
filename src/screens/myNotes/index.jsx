import React, {useState, useEffect, useContext} from 'react';
import {View, SafeAreaView, FlatList, Alert} from 'react-native';
import Header from '../../components/router/header';
import {screenStyle} from '../../styles/screenStyle';
import FloatActionButton from '../../components/uı/floatActionButton';
import NoteCard from '../../components/myNotes/noteCard';
import {ADDNOTE} from '../../utils/routes';
import MyContext from '../../context';

const MyNotes = ({navigation}) => {
  const {notes} = useContext(MyContext);

  let note1 = {
    id: 5,
    title: 'Back-End Developer',
    description: 'Bu beşinci notun acıklamasıdır',
    date: '12:25',
  };
  let note2 = {
    id: 6,
    title: 'Mobile Developer',
    description: 'Bu altıncı notun acıklamasıdır',
    date: '12:25',
  };
  let note3 = {
    id: 7,
    title: 'Frond-End Developer',
    description: 'Bu yedinci notun acıklamasıdır',
    date: '12:25',
  };

  // useEffect(() => {}, []);
  return (
    <SafeAreaView style={screenStyle.container}>
      <View style={screenStyle.container}>
        <Header />
        <FlatList
          data={notes}
          renderItem={({item}) => (
            <NoteCard
              item={item}
              navigation={navigation}
              deleteItem={item => deleteNote(item.id)}
              updateItem={item => updateNote(item.id, note3)}
            />
          )}
          keyExtractor={item => item.id}
        />
        <FloatActionButton
          onPress={() => navigation.navigate(ADDNOTE, {type: 'add'})}
        />
      </View>
    </SafeAreaView>
  );
};

export default MyNotes;
