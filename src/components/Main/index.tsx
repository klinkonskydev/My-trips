import * as S from './styles';

const Main = () => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="imagem de um átomo e React Avançado escrito ao lado"
    />
    <S.Title>React avançado</S.Title>
    <S.Description>TypeScript, NextJS e Styles Components</S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor de frente a uma tela com código"
    />
  </S.Wrapper>
);

export default Main;
