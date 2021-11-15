import ProductItem from './ProductItem';
import classes from './Products.module.css';
const DUMMY_PRODUCTS=[
  {id:'p1', title:'working on vue.js',description:'he there' ,price:5},
  {id:'p2', title:'working on react.js',description:'amir ali anwar',price:15},
  {id:'p3', title:'working on frontend',description:'iam doing mscs',price:25}
]
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product)=>(
         <ProductItem
         key={product.id}
         id={product.id}
         title={product.title}
         price={product.price}
         description={product.description}
       /> 
        ))}
        
      </ul>
    </section>
  );
};

export default Products;
