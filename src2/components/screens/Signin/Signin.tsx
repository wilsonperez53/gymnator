import styled from '@emotion/native';
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Text} from 'react-native';
import BlueBackground from '../../atoms/BlueBackground';
import StyledInput from '../../atoms/CustomInput';
import BottomForm from '../../molecules/BottomForm';
import BrandedButton from '../../molecules/BrandedButton';

const Signin = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [name, setName] = useState<string>('');

  const handleSignInPress = () => {
    navigation.navigate('Drawer Navigator');
    // await registerUser(email, password);
  };

  const handleLoginPress = () => {
    navigation.navigate('Login');
  };

  return (
    <Container>
      <BlueBackground height="40%" />
      <BottomForm>
        <FormContainer>
          <Text>Crear mi cuenta</Text>
          <Text>Ingrese su correo electrónico para registrarse.</Text>

          <StyledInput
            value={email}
            onChangeText={value => setEmail(value)}
            placeholder="Correo electrónico"
          />
          <StyledInput
            value={name}
            onChangeText={value => setName(value)}
            placeholder="Nombre completo"
          />
          <StyledInput
            value={phoneNumber}
            onChangeText={value => setPhoneNumber(value)}
            keyboardType="numeric"
            placeholder="Número de teléfono"
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
          text="Siguiente"
          onPress={handleSignInPress}
        />
        <BrandedButton
          color="secondary"
          text="Ya tengo una cuenta"
          onPress={handleLoginPress}
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

// const styles =  StyleSheet.create({
//   input: {
//     bor
//   }
// })

export default Signin;
