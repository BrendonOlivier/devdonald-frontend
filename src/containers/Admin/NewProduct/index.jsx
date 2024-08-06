import { useEffect } from 'react';
import { api } from '../../../services/api';
import { useForm } from "react-hook-form"

import { Container, Label, Input, Button } from './styles';
import ReactSelect from 'react-select';

function NewProduct() {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => console.log(data)

    useEffect(() => {
        // Carregando as categorias
        async function loadProducts() {
            const { data } = await api.get('/products')

            setProducts(data)
        }

        loadProducts()
    }, [])

    return (
        <Container>
            <form noValidate>
                <Label>Nome</Label>
                <Input type='text' {...register("name")} />

                <Label>Preço</Label>
                <Input type='number' {...register("price")} />

                <Label>Upload da imagem</Label>
                <Input type='file' accept='imagem/png, imagem/jpeg' />

                <ReactSelect />

                <Button>Adicionar Produto</Button>
            </form>
        </Container>
    )
}

export default NewProduct