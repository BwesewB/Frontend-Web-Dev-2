function App(){
  return(
    <div className="App">
      <section id="content">
        <header>
          <div>
            <h1>Shop Mart</h1>
            <div>
              <button className="icon-button">
                <span>&#128722;</span>
                <span className="badge">3</span>
              </button>
              <button className="icon-button">
                <span>&#129293;</span>
                <span className="badge">1</span>
              </button>
            </div>
          </div>

          <div>
            <nav>
              <button>Home</button>
              <button>Catalog</button>
              <button>All products</button>
              <button>Wishlist</button>
            </nav>
            <form>
              <input type="search" placeholder="search"></input>
              <button type="button">Go</button>
            </form>
          </div>
        </header>
        <main>

          <div className="product">
            <img src="/Kinmedai.jpg" alt="Kinmedai"/>
            <p className="pr-name">Kinmedai</p>
            <p className="pr-Price">$43.59/lb</p>
          </div>

          <div className="product">
            <img src="/Katsuo.jpg" alt="Katsuo"/>
            <p className="pr-name">Katsuo</p>
            <p className="pr-Price">$50.77/lb</p>
          </div>

          <div className="product">
            <img src="/Gochi.jpg" alt="Gochi"/>
            <p className="pr-name">Gochi</p>
            <p className="pr-Price">$30.99/lb</p>
          </div>

          <div className="product">
            <img src="/Tairagi.jpg" alt="Tairagi"/>
            <p className="pr-name">Tairagi</p>
            <p className="pr-Price">$45.57/lb</p>
          </div>

          <div className="product">
            <img src="/Threeline grunt.jpg" alt="Isaki"/>
            <p className="pr-name">Isaki</p>
            <p className="pr-Price">$27.99/kg</p>
          </div>

          <div className="product">
            <img src="/yagara.jpg" alt="yagara"/>
            <p className="pr-name">Yagara</p>
            <p className="pr-Price">$32.99/kg</p>
          </div>

        </main>
      </section>
      <footer>
        <div>
          <h3>Who we are</h3>
          <ul>
            <li><a href="">About us</a></li>
            <li><a href="">Contact us</a></li>
            <li><a href="">Sell with us</a></li>
          </ul>
        </div>

        <div>
          <h3>Policies</h3>
          <ul>
            <li><a href="">Return</a></li>
            <li><a href="">Shipping</a></li>
            <li><a href="">Terms of service</a></li>
          </ul>
        </div>

        <div>
          <h3>Our Products</h3>
          <ul>
            <li><a href="">Home page</a></li>
            <li><a href="">Search</a></li>
            <li><a href="">Catalog</a></li>
          </ul>
        </div>
      </footer>
    </div>
  )
}

export default App