import { ButtonStyle } from './AddToCardStyles';

const AddToCard = ({ price }) => (
  <ButtonStyle disabled={price <= 0}>
    {price > 0
      ? <p>Add to card <span itemProp="offers" itemScope="" itemType="http://schema.org/Offer">{price} Kr.</span></p>
      : 'Soon'
    }
  </ButtonStyle>
);

export default AddToCard;
