import FooterLinks from "./components/footerLinks";
import Product from "./components/Product";

const PRODUCTS = [
  {
    name: "Gochi",
    image: "/Gochi.jpg",
    price: "43.59/lb",
  },
  {
    name: "Katsuo",
    image: "/Katsuo.jpg",
    price: "50.77/lb",
  },
  {
    name: "Kinmedai",
    image: "/Kinmedai.jpg",
    price: "30.99/lb",
  },
  {
    name: "Tairagi",
    image: "/Tairagi.jpg",
    price: "45.57/lb",
  },
  {
    name: "Isaki",
    image: "/Threeline grunt.jpg",
    price: "27.99/lb",
  },
  {
    name: "Yagara",
    image: "/yagara.jpg",
    price: "32.99/lb",
  },
]


function App() {

  const productList = PRODUCTS.map(product => <Product key={product.name} product={product}/>);
  return (
    <div className="app">
      <section id="content">
        <header>
          <div>
            <h1>Shop Mart</h1>
            <div>
              <button className="icon-btn"><span>&#129293;</span><span className="badge">2</span></button>
              <button className="icon-btn"><span>&#128722;</span><span className="badge">1</span></button>
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
              <input type="search" placeholder="search" />
              <button type="button">Go</button>
            </form>
          </div>
          
        </header>
        <main>
          {productList}
        </main>
      </section>
      <footer>
        <div>
  
          <FooterLinks 
            title="Our Store"
            links={["About us", "Contact Us", "Become a partner"]}
          />

          <FooterLinks 
            title="Policies"
            links={["Refund Policy", "Shipping Policy", "Dead On arrival"]}
          />

          <FooterLinks 
            title="Our Products"
            links={["Home Page", "Search", "Catalog"]}
          />

        </div>
        <div>
          &copy; Yves Rene Shema, 2024
        </div>
        
      </footer>
    </div>
  );
}

export default App;
