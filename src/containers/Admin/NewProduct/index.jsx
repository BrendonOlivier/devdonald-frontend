import { useEffect, useState } from 'react';
import { api } from '../../../services/api';
import { useForm } from "react-hook-form"

import { Container, Label, Input, Button, LabelUload } from './styles';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate'; // Icone do upload
import ReactSelect from 'react-select';

function NewProduct() {
    const [fileName, setFileName] = useState(null); // Estado 
    const { register, handleSubmit } = useForm(); // Config do react-hook-form
    const onSubmit = (data) => console.log(data); // Config do react-hook-form

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

                <LabelUload>
                    {fileName || (
                        <>
                            <AddPhotoAlternateIcon />
                            Carregar imagem do produto
                        </>)}
                    <input
                        type='file'
                        accept='imagem/png, imagem/jpeg'
                        {...register("file")}
                        onChange={value => { setFileName(value.target.files[0]?.name) }}
                    />
                </LabelUload>

                <ReactSelect />

                <Button>Adicionar Produto</Button>
            </form>
        </Container>
    )
}

export default NewProduct