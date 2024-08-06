import { useEffect, useState } from 'react';
import { api } from '../../../services/api';
import { useForm, Controller } from "react-hook-form";

import { Container, Label, Input, Button, LabelUload } from './styles';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate'; // Icone do upload
import ReactSelect from 'react-select';

function NewProduct() {
    const [fileName, setFileName] = useState(null); // Estado do file de upload de imagem
    const [categories, setCategories] = useState([]);

    const { register, handleSubmit, control } = useForm(); // Config do react-hook-form
    const onSubmit = (data) => console.log(data); // Config do react-hook-form

    useEffect(() => {
        // Carregando as categorias
        async function loadCategories() {
            const { data } = await api.get('/categories')
            console.log(data)
            setCategories(data)
        }

        loadCategories()
    }, [])

    return (
        <Container>
            <form noValidate onSubmit={handleSubmit(onSubmit)}>
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

                <Controller
                    name='category_id'
                    control={control}
                    render={({ field }) => {
                        return (
                            <ReactSelect
                                {...field}
                                options={categories}
                                getOptionLabel={cat => cat.name}
                                getOptionValue={cat => cat.id}
                                placeholder='...Escolha a categoria'
                            />
                        )
                    }}>
                </Controller>

                <Button>Adicionar Produto</Button>
            </form>
        </Container>
    )
}

export default NewProduct