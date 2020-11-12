const ProductForm = props => {
    const { form, errors, submitValue, handleSubmit, handleChange } = props;

    return(
        <form onSubmit={handleSubmit} className="col-5 mx-auto">
        <div className="form-group">
            <label>Title: </label>
            <input 
            type="text" 
            name="title"
            className="form-control"
            onChange={handleChange}
            value={form.title}
            />
            <span className="text-danger">{errors.title ? errors.title.message : ""}</span>
        </div>
        <div className="form-group">
            <label>Price: </label>
            <input 
            type="number" 
            name="price"
            className="form-control"
            onChange={handleChange}
            value={form.price}
            />
            <span className="text-danger">{errors.price ? errors.price.message : ""}</span>
        </div>
        <div className="form-group">
            <label>Description: </label>
            <input 
            type="text" 
            name="description"
            className="form-control"
            onChange={handleChange}
            value={form.description}
            />
            <span className="text-danger">{errors.description ? errors.description.message : ""}</span>
        </div>
        <input type="submit" value ={submitValue} className="btn btn-primary"/>
        </form>
    )
}
export default ProductForm;