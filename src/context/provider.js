import {useState} from 'react';
import MyContext from '.';
import {Alert} from 'react-native';
const Provider = ({children}) => {
  const [count, SetCount] = useState(0);
  const [message, setMessage] = useState('ikinci Sayfa');
  const [notes, setNote] = useState([
    {
      id: 1,
      title: 'Design Engineer',
      description: 'Bu birinci notun acıklamasıdır',
      date: '12:25',
      read: false,
    },
    {
      id: 2,
      title: 'Software Engineer',
      description: 'Bu ikinci notun acıklamasıdır',
      date: '12:25',
      read: false,
    },
    {
      id: 3,
      title: 'Content Writer',
      description: 'Bu üçüncü notun acıklamasıdır',
      date: '12:25',
      read: false,
    },
    {
      id: 4,
      title: 'Data Engineer',
      description: 'Bu dördüncü notun acıklamasıdır',
      date: '12:25',
      read: false,
    },
  ]);
  const addNote = item => {
    if (item) setNote([...notes, item]);
    Alert.alert('Notunuz Eklendi !');
  };
  const deleteNote = id => {
    if (id) {
      const updateItems = notes.filter(item => item.id !== id);
      setNote(updateItems);
      Alert.alert('Notunuz başarılı bir şekilde silindi.');
    } else Alert.alert('Böyle bir not bulunamadı !');
  };
  const updateNote = (id, item) => {
    const updateItems = notes.map(note =>
      note.id === id
        ? {
            ...note,
            title: item.title,
            description: item.description,
            read: true,
            date:'20:00',
          }
        : note,
    );
    setNote(updateItems);
    Alert.alert('Notunuz başarılı bir şekilde güncellendi.');
  };

  const changeCount = () => {
    SetCount(count + 1);
  };

  const changeMessage = text => {
    setMessage(text);
  };
  return (
    <MyContext.Provider
      value={{
        count,
        changeCount,
        message,
        changeMessage,
        notes,
        addNote,
        updateNote,
        deleteNote,
      }}>
      {children}
    </MyContext.Provider>
  );
};
export default Provider;
