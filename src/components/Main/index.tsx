import * as S from './styles'

const Main = ({
    title = 'React Avançado',
    description = 'TypeScript, ReactJS'
              }) => (
    <S.Wrapper>
      <S.Logo
          src="/img/logo.svg"
          alt="Imagem de um átomo e React Avançado escrito ao lado"
      />
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
        <S.Image
            src="/img/hero.svg"
            alt="Um desenvoledor de frente para uma tela com um código."
        />

    </S.Wrapper>
)

export default Main