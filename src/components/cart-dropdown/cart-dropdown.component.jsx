import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className='empty-message'>Your cart is empty</span>
      )}
    </div>
    <CustomButton
      onClick={() => {
        history.push('/checkout');
        dispatch(toggleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
);
// Without using selector
// const mapStateToProps = ({ cart: { cartItems } }) => ({
//   cartItems
// });

// Using selector, so that the cart dropdown will not get re-rendered every time
// that any state changes, but only when cart items are changed.
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});
// connect() passes dispatch to the component when we don't specify the second argument
// i.e. the usual mapDispatchToProps
export default withRouter(connect(mapStateToProps)(CartDropdown));
