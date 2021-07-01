import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  Button,
  AsyncStorage,
} from 'react-native';
import styled from '@emotion/native';
import DateTimePicker from '@react-native-community/datetimepicker';

const HomeScreen: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [dateTime, setDateTime] = useState<Date>(new Date());

  return (
    <Container>
      {showModal && (
        <DateTimePicker
          value={dateTime}
          mode="datetime"
          display="spinner"
          onChange={(_, date) => date && setDateTime(date)}
        />
      )}

      <Button title="Escoger Fecha" onPress={() => setShowModal(true)} />
    </Container>
  );
};

const Container = styled.View`
  width: 100%;
  height: 100%;
`;

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
export default HomeScreen;
