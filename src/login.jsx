import React, { useState } from 'react';
import { Container, Header, Logo, Title, LoginBox, BoxHeader, Form, Input, Button, Footer, GlobalStyle, Label, Message, Text, Link, ImageContainer, Image, SideText } from './styled/login';
import logo from '../public/logo.png'; 
import foto from '../public/foto.png'; 

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Lógica simples que sempre invalida o login
    setLoginError('Login inválido. Por favor, tente novamente.');
  };

  return (
    <>
      <GlobalStyle />
      <Header>
        <Logo src={logo} alt="ClearTrack Logo" />
        <Title>ClearTrack</Title>
      </Header>
      <Container>
        <LoginBox>
          <BoxHeader>Faça o Login no ClearTrack</BoxHeader>
          <Form onSubmit={handleLogin}>
            <Label htmlFor="username">Usuário:</Label>
            <Input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <Message>Utilize CPF sem pontuação ou e-mail cadastrado.</Message>
            <Label htmlFor="password">Senha:</Label>
            <Input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Button type="submit">ENTRAR</Button>
            {loginError && <Message style={{ color: 'red' }}>{loginError}</Message>}
            <Text>Esqueceu sua senha?</Text>
          </Form>
          <Text>Não possui conta? <Link href="#">Clique aqui</Link></Text>
        </LoginBox>
        <ImageContainer>
          <Image src={foto} alt="ClearTrack" />
          <SideText>Com o ClearTrack, você pode registrar e acompanhar a limpeza dos banheiros em tempo real, garantindo uma gestão eficiente e a pontualidade nas tarefas.</SideText>
        </ImageContainer>
        <Footer>
          &copy; {new Date().getFullYear()} ClearTrack. Todos os direitos reservados.
        </Footer>
      </Container>
    </>
  );
};

export default Login;
