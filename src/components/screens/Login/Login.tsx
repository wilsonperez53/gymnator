import styled from '@emotion/native';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {View, Text} from 'react-native';
import BlueBackground from '../../atoms/BlueBackground';
import StyledInput from '../../atoms/CustomInput';
import BottomForm from '../../molecules/BottomForm';
import BrandedButton from '../../molecules/BrandedButton';

const navigation = useNavigation();

const [email, setEmail] = useState<string>('');
const [password, setPassword] = useState<string>('');

const handleLoginButton = () => {
  navigation.navigate('Login');
};

const Login = () => {
 
return (
  <Container>
  <BlueBackground height="40%" />
  <BottomForm>
    <FormContainer>
      <Text>Ingresar</Text>
      <Text>Ingrese su correo electrónico para registrarse.</Text>

      <StyledInput
        value={email}
        onChangeText={value => setEmail(value)}
        placeholder="Correo electrónico"
      />
      <StyledInput
        value={password}
        onChangeText={value => setPassword(value)}
        secureTextEntry={true}
        placeholder="Contraseña"
      />
    </FormContainer>

    <BrandedButton
      color="primary"
      text="Ingresar"
      onPress={handleLoginButton}
    />
   
  </BottomForm>
</Container>
);
};

const Container = styled.SafeAreaView`
width: 100%;
height: 100%;
`;

const FormContainer = styled.View`
margin: 0 0 16px 0;
`;

export default Login;


