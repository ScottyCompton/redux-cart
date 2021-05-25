import ProductItem from './ProductItem';
import classes from './Products.module.css';


const DUMMY_PRODUCTS = [
  {id: 'p1',price:6, title: 'My first book', description: 'The first book I ever wrote'},
  {id: 'p2',price:7.5, title: 'My Second book', description: 'The second book I ever wrote'},
]


const Products = (props) => {
  
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((item) => {
              return (<ProductItem
              key={Math.random().toString()}
              id={item.id}
              title={item.title}
              price={item.price}
              description={item.description}
            />)
        })}

      </ul>
    </section>
  );
};

export default Products;
