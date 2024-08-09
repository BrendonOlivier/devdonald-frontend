import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { api } from '../../../services/api';
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { Container, Label, Input, Button, LabelUload, Error, ContainerInput } from './styles';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate'; // Icone do upload
import ReactSelect from 'react-select';
import { toast } from 'react-toastify';

function EditProduct() {
    const [fileName, setFileName] = useState(null); // Estado do file de upload de imagem
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();
    const product = location.state?.product;  // Extraindo o produto do estado, se existir

    // Validação os campos para o formulário
    const schema = yup
        .object({
            name: yup.string().required('Digite o nome do produto'),
            price: yup.string().required('Digite o preço do produto'),
            category: yup.object().required('Escolha uma categoria'),
            offer: yup.bool()
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
        productDataFormData.append('offer', data.offer)

        // Enviando um feedback visual com o toast
        await toast.promise(api.put(`/products/${product.id}`, productDataFormData), {
            pending: 'Editando novo produto...',
            success: 'Produto editado com sucesso',
            error: 'Falha ao editar o produto'
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

                <div>
                    <Label>Nome</Label>
                    <Input type='text' {...register("name")} defaultValue={product.name} />
                    <Error>{errors?.name?.message}</Error>
                </div>

                <div>
                    <Label>Preço</Label>
                    <Input type='number' {...register("price")} defaultValue={product.price} />
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
                        defaultValue={product.category}
                        render={({ field }) => {
                            return (
                                <ReactSelect
                                    {...field}
                                    options={categories}
                                    getOptionLabel={cat => cat.name}
                                    getOptionValue={cat => cat.id}
                                    placeholder='...Escolha a categoria'
                                    defaultValue={product.category}
                                />
                            )
                        }}>
                    </Controller>
                    <Error>{errors?.category?.message}</Error>
                </div>

                <ContainerInput>
                    <input type="checkbox" {...register("offer")} defaultChecked={product.offer} />
                    <Label>Produto em oferta ?</Label>
                </ContainerInput>

                <Button>Editar Produto</Button>
            </form>
        </Container>
    )
}

export default EditProduct