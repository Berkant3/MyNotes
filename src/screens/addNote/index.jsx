import React, {useState, useContext} from 'react';
import {View, Text, TextInput, SafeAreaView} from 'react-native';
import {screenStyle} from '../../styles/screenStyle';
import Button from '../../components/uı/button';
import EditButtons from '../../components/addNote/editButtons';
import {AppColors} from '../../theme/colors';
import {getRandomNumber} from '../../utils/functions';
import MyContext from '../../context';
import { useNavigation } from '@react-navigation/native';

const AddNote = ({route}) => {
  const {addNote, updateNote} = useContext(MyContext);
   const navigation = useNavigation()
  const {note} = route?.params;
  const {type} = route?.params;

  const [description, setDescription] = useState(note?.description);
  const [title, setTitle] = useState(note?.title);
  const [titleRequired, setTitleRequired] = useState(false);
  const [descriptionRequired, setDescriptionRequired] = useState(false);

  const saveNote = () => {
    if (!title) setTitleRequired(true);
    if (!description) setDescriptionRequired(true);
    if (title && description) {
      setTitleRequired(false);
      setDescriptionRequired(false);
      const form = {
        id: getRandomNumber(1.1),
        title: title,
        description: description,
        date: '11:22',
      };
      addNote(form);
      navigation.goBack();
    }
  };
  const onChangeNote = () => {
    if (!title) setTitleRequired(true);
    if (!description) setDescriptionRequired(true);
    if (title && description) {
      setTitleRequired(false);
      setDescriptionRequired(false);
      const form = {
        id: note.id,
        title: title,
        description: description,
        date: '11:22',
        read: false,
      };
      updateNote(note.id, form);
      navigation.goBack();
    }
  };

  return (
    <SafeAreaView style={screenStyle.container}>
      <View style={screenStyle.container}>
        <View style={{flex: 1}}>
          <Text style={{fontWeight: '500', padding: 10}}>Başlık</Text>
          <TextInput
            placeholder="Lütfen Başlığınızı Yazınız"
            value={title}
            style={{
              backgroundColor: AppColors.WHITE,
              borderWidth: 1,
              padding: 5,
              margin: 8,
              borderRadius: 5,
              borderColor: AppColors.GRAY,
              height: 50,
            }}
            onChangeText={text => setTitle(text)}
          />
          {titleRequired && (
            <Text
              style={{
                fontWeight: '500',
                fontSize: 16,
                marginVertical: 10,
                color: AppColors.RED,
              }}>
              Lütfen Başlık Alanını Doldurunuz
            </Text>
          )}
          <Text style={{fontWeight: '500', fontSize: 16}}>Açıklama</Text>
          <TextInput
            placeholder="Lütfen Notunuzu Yazınız"
            value={description}
            style={{
              backgroundColor: AppColors.WHITE,
              borderWidth: 1,
              padding: 5,
              margin: 8,
              borderRadius: 5,
              borderColor: AppColors.GRAY,
              height: 90,
            }}
            onChangeText={text => setDescription(text)}
          />
          {descriptionRequired && (
            <Text
              style={{
                fontWeight: '500',
                fontSize: 16,
                marginVertical: 10,
                color: AppColors.RED,
              }}>
              Lütfen Açıklama Alanını Doldurunuz
            </Text>
          )}
        </View>

        <Button
          onPress={type == 'update' ? onChangeNote : saveNote}
          title={type == 'update' ? 'Güncelle' : 'Kaydet'}
        />
      </View>
    </SafeAreaView>
  );
};

export default AddNote;
