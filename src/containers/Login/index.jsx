import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useUser } from '../../hooks/UserContext';
import { api } from '../../services/api';
import { toast } from 'react-toastify';

import { Container, LeftContainer, RightContainer, Tittle, Form, InputContainer, Link } from "./styles";
import { Button } from '../../components/Button';
import Logo from '../../assets/Logo-Main.png';

export function Login() {
    const navigate = useNavigate(); // Função para redirecionar o usuário
    const { putUserData } = useUser(); // Pegando os dados do children la no 'UserContext'

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
        try {
            const response = await api.post('/session', {
                email: data.email,
                password: data.password
            },
                {
                    validateStatus: () => true
                },
            );

            if (response.status === 200 || response.status === 201) {
                putUserData(response.data); // Armazena os dados do usuário 

                setTimeout(() => {
                    navigate('/home')
                }, 1200);

                toast.success('Seja Bem-vindo(a) 🍔');
            } else if (response.status === 400) {
                toast.error('🛑 Verifique Email ou Senha se estão corretos');
            } else {
                throw new Error();
            }
        } catch (error) {
            toast.error('❌ Falha no sistema! Tente novamente');
        }


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
                <p>Não possui conta? <Link to="/cadastro">Clique aqui.</Link></p>
            </RightContainer>
        </Container>
    )
}