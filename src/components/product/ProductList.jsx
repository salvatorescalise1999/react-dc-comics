import comics from "../../../comics"
import ProductCard from "./ProductCard"

const ProductList = () => {


  //  funzione di rendering prodotti 
  const renderProdottiCard = () => {
    return comics.map((comics) => (
      // <div className="prod-card" key={comics.id}>
      //   <img src={comics.thumb} alt={comics.title} />
      //   <h3>{comics.title}</h3>
      // </div>

      <ProductCard key={comics.id}
        thumb={comics.thumb}
        title={comics.title}

      />
    ))
  }

  return (

    <section id="comics">
      <h2 className="current-series">CURRENT SERIES</h2>

      <div className="container card-container">

      {renderProdottiCard()}

      </div>

      <div className="load-more">
        <h2>LOAD MORE</h2>
      </div>

    </section>
  )
}

export default ProductList