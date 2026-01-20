import ProductList from "./product/ProductList"


const MainContent = () => {
    return (

        <main>
            <ProductList />
            <main>
                <div className="infotron">
                    <ul>
                        <li>
                            <img src="src/assets/img/buy-comics-digital-comics.png" alt="" />
                            DIGITAL COMICS</li>
                        <li>
                            <img src="src/assets/img/buy-comics-merchandise.png" alt="" />
                            DC MERCHANDISE</li>
                        <li>
                            <img src="src/assets/img/buy-comics-subscriptions.png" alt="" />
                            SUBSCRIPTION</li>
                        <li>
                            <img src="src/assets/img/buy-comics-shop-locator.png" alt="" />
                            COMIC SHOP LOCATOR</li>
                        <li>
                            <img className="visa" src="src/assets/img/buy-dc-power-visa.svg" alt="" />
                            DC POWER VISA</li>
                    </ul>
                </div>
            </main>
        </main>
    )
}

export default MainContent