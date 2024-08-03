import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { api } from '../../services/api';
import { toast } from 'react-toastify'

import { Container, LeftContainer, RightContainer, Tittle, Form, InputContainer, Link } from "./styles";
import { Button } from '../../components';
import Logo from '../../assets/Logo-Main.png';

export function Register() {
    const navigate = useNavigate(); // Função para redirecionar o usuário

    // Validação os campos para o formulário
    const schema = yup
        .object({
            name: yup.string().required('O nome é obrigatório'),
            email: yup.string().email('Digite um e-mail válido').required('O email é obrigatório'),
            password: yup.string().min(6, 'A senha deve ter pelo menos 6 caracteres').required('Digite uma senha'),
            confirmPassword: yup.string().oneOf([yup.ref('password')], 'As senhas devem ser iguais').required('Confirme sua senha')
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
            const { status } = await api.post('/users', {
                name: data.name,
                email: data.email,
                password: data.password
            },
                {
                    validateStatus: () => true
                },
            );

            if (status === 200 || status === 201) {
                setTimeout(() => {
                    navigate('/login')
                }, 1200);

                toast.success('Conta criada com sucesso!');
            } else if (status === 409) {
                toast.error('Email já cadastrado! Faça o login para continuar');
            } else {
                throw new Error();
            }
        } catch (error) {
            toast.error('❌ Falha no sistema! Tente novamente');
        };


    };

    return (
        <Container>

            <LeftContainer>
                <img src={Logo} alt="logo-devdonald" />
            </LeftContainer>

            <RightContainer>
                <Tittle>Cadastre-se</Tittle>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <InputContainer>
                        <label>Nome</label>
                        <input type="text" {...register("name")} />
                        <p>{errors?.name?.message}</p>
                    </InputContainer>

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

                    <InputContainer>
                        <label>Confirmar Senha</label>
                        <input type="password" {...register("confirmPassword")} />
                        <p>{errors?.confirmPassword?.message}</p>
                    </InputContainer>

                    <Button type="submit">Criar Conta</Button>
                </Form>
                <p>Já possui conta? <Link to="/login">Clique aqui.</Link></p>
            </RightContainer>
        </Container>
    )
}