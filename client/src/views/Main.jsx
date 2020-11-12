import { useState, useEffect } from 'react';
import Axios from 'axios';
import {Link} from '@reach/router';
const Main = props => {

    const [products, setProducts] = useState([]);
    const[destroy,setDestroy]= useState(false);
    useEffect(() => {
        Axios.get('http://localhost:8000/api/products')
            .then(res => setProducts(res.data.results))
            .catch(err => console.log(err))
    }, [destroy])

    const removeProduct = (id,title) => {
        Axios.delete(`http://localhost:8000/api/products/destroy/${id}`)
            .then(res => {
                if(res.data.results){
                    setDestroy(!destroy);
                    console.log(`${title} was removed`)
                }
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <h2>Product Manager</h2>
            <Link to="/create">Add product</Link>
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map((p,i)=> <tr key={i}>
                                            <td>{p.title}</td>
                                            <td>{p.price}</td>
                                            <td>{p.description}</td>
                                            <td>
                                                <Link to={`/update/${p._id}`}>Edit </Link> I
                                                <Link to={`/show/${p._id}`}> Details</Link>
                                                <button
                                                onClick= {()=> removeProduct(p._id,p.title)}
                                                className="btn btn-danger"
                                                >
                                                    Remove
                                                </button>
                                            </td>
                                    </tr>)
                }
            </tbody>
        </table>
        </div>
    )
}

export default Main;