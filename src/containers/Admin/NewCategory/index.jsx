import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../../services/api';
import { useForm, Controller } from "react-hook-form";
import { useUser } from '../../../hooks/UserContext'
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import paths from '../../../constants/path'

// CONFIG DA TABELA DO MUI
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
//////////////////////////////////

import { Container, Label, Input, Button, LabelUload, Error, EditIcon } from './styles';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate'; // Icone do upload
import ReactSelect from 'react-select';
import { toast } from 'react-toastify';

function NewCategory() {
    const [fileName, setFileName] = useState(null); // Estado do file de upload de imagem
    const [categories, setCategories] = useState([]);
    const { logout } = useUser();
    const navigate = useNavigate();

    // Validação os campos para o formulário
    const schema = yup
        .object({
            name: yup.string().required('Digite o nome do produto'),
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
        control,
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

        try {
            const response = await api.post('/categories', categoryDataFormData, {
                validateStatus: () => true
            })

            if (response.status === 200 || response.status === 201) {
                toast.success('Categoria cadastrada com sucesso')
                setCategories([...categories, response.data])

                reset({ name: '', file: {} })
                setFileName(null)
            } else if (response.status === 400) {
                toast.error('Nome da categoria já existe, tente usar outro nome.')
            } else if (response.status === 401) {
                logout()
                toast.error('Ocorreu um erro com sua autenticação! Tente novamente.')

                setTimeout(() => {
                    navigate('/login')
                }, 2000)
            } else {
                throw new Error()
            }
        } catch (err) {
            toast.error('Erro no sistema, tente novamente 🛑')
        }
    }

    useEffect(() => {
        // Carregando as categorias
        async function loadCategories() {
            try {
                const { data } = await api.get('/categories')

                setTimeout(() => {
                    setCategories(data)
                }, 1000)
            } catch (err) {
                toast.error('Erro na busca')
            }
        }

        loadCategories()
    }, [])

    // Função para levar o usuário para edição de categorias
    function editCategory(category) {
        navigate(paths.EditCategory, { state: { category } })
    }

    return (
        <Container>
            <form noValidate onSubmit={handleSubmit(onSubmit)}>
                <h2>Criar Categoria</h2>
                <div>
                    <Label>Nome</Label>
                    <Input type='text' {...register("name")} />
                    <Error>{errors?.name?.message}</Error>
                </div>

                <div>
                    <LabelUload>
                        {fileName || (
                            <>
                                <AddPhotoAlternateIcon />
                                Carregar imagem
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

                <Button>Criar Categoria</Button>
            </form>


            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Nome</TableCell>
                            <TableCell className="close"></TableCell>
                            <TableCell className="edit">Editar</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {categories &&
                            categories.map(category => (
                                <TableRow
                                    key={category.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {category.name}
                                    </TableCell>
                                    <TableCell className="cell-image">
                                        <img src={category.url} alt="imagem-categoria" />
                                    </TableCell>
                                    <TableCell className="edit">
                                        <EditIcon onClick={() => editCategory(category)} />
                                    </TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </Container>
    )
}

export default NewCategory