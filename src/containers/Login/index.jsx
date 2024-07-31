import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { api } from '../../services/api';
import { toast } from 'react-toastify'

import { Container, LeftContainer, RightContainer, Tittle, Form, InputContainer } from "./styles";
import { Button } from '../../components/Button';
import Logo from '../../assets/Logo-Main.png';

export function Login() {
    // Validação os campos para o formulário
    const schema = yup
        .object({
            email: yup.string().email('Digite um e-mail válido').required('O email é obrigatório'),
            password: yup.string().min(6, 'A senha deve ter pelo menos 6 caracteres').required('Digite uma senha'),
        })
        .required();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })

    // Enviando os dados para o BackEnd, e dando um feedback com o React-Toastfy
    const onSubmit = async (data) => {
        const response = await toast.promise(
            api.post('/session', {
                email: data.email,
                password: data.password
            }),
            {
                pending: 'Verificando seus dados...',
                success: 'Seja Bem-vindo(a) 🍔',
                error: 'Email ou Senha incorretos ❌'
            },
        )
    };

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
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <InputContainer>
                        <label>Email</label>
                        <input type="email" {...register("email")} />
                        <p>{errors?.email?.message}</p>
                    </InputContainer>

                    <InputContainer>
                        <label>Senha</label>
                        <input type="password" {...register("password")} />
                        <p>{errors?.password?.message}</p>
                    </InputContainer>

                    <Button type="submit">Entrar</Button>
                </Form>
                <p>Não possui conta? <a>Clique aqui.</a></p>
            </RightContainer>
        </Container>
    )
}