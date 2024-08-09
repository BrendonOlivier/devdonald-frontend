import { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { api } from '../../../services/api';
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { Container, Label, Input, Button, LabelUload, Error } from './styles';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate'; // Icone do upload
import ReactSelect from 'react-select';
import { toast } from 'react-toastify';

function NewProduct() {
    const [fileName, setFileName] = useState(null); // Estado do file de upload de imagem
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();

    // Validação os campos para o formulário
    const schema = yup
        .object({
            name: yup.string().required('Digite o nome do produto'),
            price: yup.string().required('Digite o preço do produto'),
            category: yup.object().required('Escolha uma categoria'),
            file: yup.mixed().test('required', 'Carregue uma imagem', value => {
                return value?.length > 0
            }).test('fileSize', 'Permitido arquivos de até 2mb', value => {
                return value[0]?.size <= 200000
            })
        })
        .required();

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })

    // Mandando os dados para a API no formato 'FormData'
    const onSubmit = async data => {
        const productDataFormData = new FormData()

        // Montando a estrutura o FormData usando o 'append'
        productDataFormData.append('name', data.name)
        productDataFormData.append('price', data.price)
        productDataFormData.append('category_id', data.category.id)
        productDataFormData.append('file', data.file[0])

        // Enviando um feedback visual com o toast
        await toast.promise( api.post('/products', productDataFormData), {
            pending: 'Criando novo produto...',
            success: 'Produto criado com sucesso',
            error: 'Falha ao criar o produto'
        })

        setTimeout(() => {
            navigate('/listar-produtos')
        }, 1200);
    }

    useEffect(() => {
        // Carregando as categorias
        async function loadCategories() {
            const { data } = await api.get('/categories')

            setCategories(data)
        }

        loadCategories()
    }, [])

    return (
        <Container>
            <form noValidate onSubmit={handleSubmit(onSubmit)}>
                <h2>Criar Produto</h2>
                <div>
                    <Label>Nome</Label>
                    <Input type='text' {...register("name")} />
                    <Error>{errors?.name?.message}</Error>
                </div>

                <div>
                    <Label>Preço</Label>
                    <Input type='number' {...register("price")} />
                    <Error>{errors?.price?.message}</Error>
                </div>

                <div>
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
                    <Error>{errors?.file?.message}</Error>
                </div>

                <div>
                    <Controller
                        name='category'
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
                    <Error>{errors?.category?.message}</Error>
                </div>

                <Button>Adicionar Produto</Button>
            </form>
        </Container>
    )
}

export default NewProduct