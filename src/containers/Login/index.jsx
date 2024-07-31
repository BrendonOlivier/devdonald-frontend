import { Container, LeftContainer, RightContainer, Tittle, Form, InputContainer, Button } from "./styles"
import Logo from '../../assets/Logo-Main.png'

export function Login() {

    return (
        <Container>

            <LeftContainer>
                <img src={Logo} alt="logo-devdonald" />
            </LeftContainer>

            <RightContainer>
                <Tittle>
                    Olá, seja bem vindo ao <span>Dev Donald!</span><br />
                    Acesse com seu <span>Login e senha.</span>
                </Tittle>
                <Form>
                    <InputContainer>
                        <label>Email</label>
                        <input type="email" />
                    </InputContainer>

                    <InputContainer>
                        <label>Senha</label>
                        <input type="password" />
                    </InputContainer>

                    <Button>Entrar</Button>
                </Form>
                <p>Não possui conta? <a>Clique aqui.</a></p>
            </RightContainer>
        </Container>
    )
}