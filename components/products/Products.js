import { Item } from 'components';
import { Grid } from './ProductsStyles';

const Products = ({ products }) => {
  return (
    <Grid>
      {products.map(item => (
        <li key={item.id}>
          <Item data={item} />
        </li>
      ))}
    </Grid>
  )
};

export default Products;
