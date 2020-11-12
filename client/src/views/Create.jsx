import {useState} from 'react';
import {navigate} from '@reach/router';
import Axios from 'axios';
import ProductForm from '../components/ProductForm';


const Create = props => {
    const [form, setForm] = useState({
        title:"",
        price:0,
        description:""
    });
    const [errors,setErrors] = useState({
        title:"",
        price:"",
        description:""
    });
    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]:e.target.value
        });
    }
    
    const handleSubmit = e =>{
        e.preventDefault();
        Axios.post('http://localhost:8000/api/products/create',form)
            .then(res=>{
                if(res.data.results){
                    navigate('/');
                }
                else{
                    console.log(res.data)
                    setErrors(res.data);
                }
            })
    }
    return(
        <div>
            <h2 className="text-center">Add Product</h2>
            <ProductForm
                form={form}
                errors={errors}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                submitValue="Create Product"
                />
        </div>
    )
}

export default Create;