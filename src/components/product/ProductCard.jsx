const ProductCard = (props) => {

    // destructuring
    const{thumb, title, id} = props

    return (
        <div className="prod-card" >
            <img src={thumb} alt={title} />
            <h3>{title}</h3>
        </div>

    )
}

export default ProductCard