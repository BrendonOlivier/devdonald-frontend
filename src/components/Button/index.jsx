import { ContainerButton } from "./styles";

// Pegando a informação (children) dos Botões, EX: Entrar, Enviar, Cadastrar, etc...
// E o (..props) pegando o que vem de config do botão, EX: type='submit', color={red}, etc...
export function Button({ children, ...props }) {
    return <ContainerButton {...props}>{children}</ContainerButton>
}