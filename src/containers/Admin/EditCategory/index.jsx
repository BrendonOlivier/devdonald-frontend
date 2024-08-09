import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { api } from '../../../services/api';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { Container, Label, Input, Button, LabelUload, Error, ContainerInput } from './styles';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate'; // Icone do upload
import { toast } from 'react-toastify';

function EditCategory() {
    const [fileName, setFileName] = useState(null); // Estado do file de upload de imagem
    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);
    const location = useLocation();
    const category = location.state?.category;  // Extraindo o produto do estado, se existir

    if (!category) {  
        return toast.error('Categoria não encontrada, tente novamente') // Ou redirecione para outra página  
    } 

    // Validação os campos para o formulário
    const schema = yup
        .object({
            name: yup.string().required('Digite o nome da categoria'),
            file: yup.mixed().test('required', 'Carregue uma imagem', value => {
                return value?.length > 0
            }).test('type', 'Carregue apenas arquivos de extensões png, jpg, jpeg.', value => {
                return value[0]?.type === 'image/jpeg' || value[0]?.type === 'image/png'
            })
        })
        .required();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })

    // Mandando os dados para a API no formato 'FormData'
    const onSubmit = async data => {
        const categoryDataFormData = new FormData()

        // Montando a estrutura o FormData usando o 'append'
        categoryDataFormData.append('name', data.name)
        categoryDataFormData.append('file', data.file[0])

        // Enviando um feedback visual com o toast
        await toast.promise(api.put(`/categories/${category.id}`, categoryDataFormData), {
            pending: 'Editando nova categoria...',
            success: 'Categoria editada com sucesso',
            error: 'Falha ao editar a categoria'
        })

        setTimeout(() => {
            navigate('/nova-categoria')
        }, 1200);
    }

    return (
        <Container>
            <form noValidate onSubmit={handleSubmit(onSubmit)}>
                <h2>Editar Categoria</h2>
                <div>
                    <Label>Nome</Label>
                    <Input type='text' {...register("name")} defaultValue={category.name} />
                    <Error>{errors?.name?.message}</Error>
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

                <Button>Editar Categoria</Button>
            </form>
        </Container>
    )
}

export default EditCategory