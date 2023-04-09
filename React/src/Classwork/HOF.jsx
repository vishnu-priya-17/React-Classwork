import React from 'react';
const withProductList = (Component) => {
const product=[
     {
            name:"A",
            price:'10,000',
            img:"https://cdn.pixabay.com/photo/2016/03/08/20/03/flag-1244649__340.jpg"
        },
        {
            name:"B",
            price:'10,000',
            img:"https://cdn.pixabay.com/photo/2016/03/08/20/03/flag-1244649__340.jpg"
        },
        {
            name:"C",
            price:'10,000',
            img:"https://cdn.pixabay.com/photo/2016/03/08/20/03/flag-1244649__340.jpg"
        },
        {
            name:"D",
            price:'10,000',
            img:"https://cdn.pixabay.com/photo/2016/03/08/20/03/flag-1244649__340.jpg"
        }
]

  return () => <Component products={product} />;
};
const ProductList = ({ products }) => (
  <div>
    {products.map((product, index) => (
      <div key={index}>
        <h2>{product.name}</h2>
        <p>{product.price}</p>
        <img src={product.img}/>
      </div>
    ))}
  </div>
);

export default withProductList(ProductList);