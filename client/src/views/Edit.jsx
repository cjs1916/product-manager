import Axios from 'axios';
import { useState, useEffect } from 'react';
import ProductForm from '../components/ProductForm'
import { navigate } from '@reach/router'
const Edit = props => {
    const [form, setProductForm] = useState({
        title: "",
        price: 0,
        description: ""
    });
    const[errors,setErrors] =useState({
        title:"",
        price:"",
        description:""
    });

    useEffect(() => {
        Axios.get(`http://localhost:8000/api/products/${props.id}`)
            .then(res => setProductForm(res.data.results))
            .catch(err => console.log(err))
    }, [props])

    const handleChange = e => {
        setProductForm({
            ...form,
            [e.target.name]: e.target.value
        });

    }

    const handleUpdate = e => {
        e.preventDefault();
        Axios.put(`http://localhost:8000/api/products/update/${props.id}`, form)
        .then(res => navigate(`/show/${props.id}`))
        .catch(err => console.log(err));
    }
    return (
        <div>
            <h2 className="text-center">Edit Product</h2>
            <ProductForm
                form={form}
                errors={errors}
                handleSubmit={handleUpdate}
                handleChange={handleChange}
                submitValue="Edit"
            />
        </div>
    )
}

export default Edit;