import comics from "../../comics"

const MainComics = () => {

  return (

    <section id="comics">
      <h2 className="current-series">CURRENT SERIES</h2>

      <div className="container card-container">

        {comics.map((comics) => (
          <div className="prod-card" key={comics.id}>
            <img src={comics.thumb} alt={comics.title} />
            <h3>{comics.title}</h3>
          </div>

        ))

        }

      </div>
      <div className="load-more">
        <h2>LOAD MORE</h2>
      </div>


    </section>
  )
}

export default MainComics