import { useState } from 'react'
import { nanoid } from 'nanoid'
import FooterColumnLinks from "./components/FooterColumnLinks";
import Product from "./components/Product";
import { initialProducts } from './fixtures';
import { initialCategories } from './fixtures';

const footerLinks = [
  {
    title: "Our store",
    links: ["About us", "Contact us", "Become a partner"],
  },
  {
    title: "Our policies",
    links: ["Return policies", "Shipping policy", "Terms of service"],
  },
  {
    title: "Our products",
    links: ["Home page", "Search", "Catalog"],
  }
];

const productTemplate = {
  name: 'new product',
  image_url: 'https://placehold.co/600x400',
  category: 0,
  price: 0.0,
  quantity: 1,
  id: nanoid(),

}

function App() {

  const[editing, setEditing] = useState(false)

  const[product, setProduct] = useState(productTemplate)

  // state varaible for the cateogory form
  const[category, setCategory] = useState({
    id:nanoid(),
    name: '',
  })
  
  const [products, setProducts] = useState(initialProducts)

  const[categories, setCategories] = useState(initialCategories)


  const categoryOptions = categories.map(category => (
    <option key={category.id} value={category.id}>
      {category.name}
    </option>
  ));

  const footerColumns = footerLinks.map(column => <FooterColumnLinks key={column.title} data={column} />);

  const productList = products.map(product => <Product key={product.name} product={product} />);
  
  function handleSubmit(e) {
    e.preventDefault();

    setProducts([...products, product])

    setProduct(productTemplate);

    setEditing(false)
  }

  const productForm = (
    <form onSubmit={handleSubmit}>
      <div className="control-group">
        <label htmlFor="product-name">Name:</label>
        <input
          id="product-name"
          name="product-name"
          type="text"
          value={product.name}
          onChange={(e) => setProduct({...product, name: e.target.value })}
        />
      </div>
      <div className="control-group">
        <label htmlFor="product-image">Image URL:</label>
        <input
          id="product-image"
          name="product-image"
          type="text"
          value={product.image_url}
          onChange={(e) => setProduct({...product, image_url: e.target.value })}
        />
      </div>

      <div>
        <label htmlFor="product-category">Category:</label>
        <select
          id="product-category"
          name="product-category"
          onChange={(e) => setProduct({...product, category: e.target.value })}
        >
          {categoryOptions}
        </select>
      </div>
       
       <div>
        <label htmlFor="product-price">Price: </label>
        <input 
          id="product-price"
          name="product-price"
          type="number"
          step="0.01"
          value={product.price}
          onChange={(e) => setProduct({...product, price: e.target.value })}
        />
       </div>

        <div>
          <label htmlFor="product-quantity">Quantity: </label>
          <input
            id="product-quantity"
            name="product-quantity"
            type="number"
            value={product.quantity}
            onChange={(e) => setProduct({...product, quantity: e.target.value })}
          />
        </div>

        <div className="btn-group">
          <button className="btn-primary">Save</button>
          <button className="btn-cancel" onClick={() => setEditing(false)}>Cancel</button>
        </div>
    </form>
  );

  const categoryForm = (
    <form>
      <div className="control-group">
        <label htmlFOR="category-name">Name:</label>
        <input 
          id="category-name"
          name="category-name"
          type="text"
        />
      </div>

      <div className="btn-group">
        <button className="btn-primary">Save</button>
        <button className="btn-cancel" onClick={() => setEditing(false)}>Cancel</button>
      </div>
    </form>
  )

  return (
    <div class="app">
      <section id="content">
        <header>
          <div>
            <h1>Hent Mart</h1>
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
          <div>
            <button 
              className="btn-primary" 
              onClick={() => setEditing('product')}
            >New Product </button>
            <button 
              className="btn-secondary"
              onClick={() => setEditing('category')}
            >New Category</button>
          </div>
        </header>

        <div className="add-form">
          {editing === 'product' && productForm} {/* if editing is equal to product, then render the product form*/}
          {editing === 'category' && categoryForm}
        </div>
        <main>
          {productList}
        </main>
      </section>
      <footer>
        <div>
          {footerColumns}
        </div>
        <div>
          &copy; Yves Rene Shema, 2024
        </div>
        
      </footer>
    </div>
  );
}

export default App;
