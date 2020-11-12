import {useState,useEffect} from 'react';
import Axios from 'axios';

const Show = props =>{
    // const [thing,setThing] = useState({
    //     title:"",
    //     subthings:0
    // });

    const[product,setProduct] =useState();

    
    useEffect(() => {
        Axios.get(`http://localhost:8000/api/products/${props.id}`)
            .then(res => setProduct(res.data.results))
            .catch(err => console.log(err)) 
    },[props])

    return(
        product ? 
        <div className="card col-6 mx-auto">
            <div className="card-body">
                <h2 className="card-title">{product.title}</h2>
                <p className="card-text">{product.price}</p>
                <p className="card-text">{product.description}</p>
            </div>
        </div>:<div>Loading...</div>
    );
}

export default Show;