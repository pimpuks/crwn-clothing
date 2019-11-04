const ShopActionTypes = {
  // Update collection is the action we used before using the redux-thunk
  // to handle asynchronous call i.e. in the ComponentDidMount of the ShopPage
  // UPDATE_COLLECTIONS: 'UPDATE_COLLECTIONS'

  // The following actions are used with redux-thunk
  FETCH_COLLECTIONS_START: 'FETCH_COLLECTIONS_START',
  FETCH_COLLECTIONS_SUCCESS: 'FETCH_COLLECTIONS_SUCCESS',
  FETCH_COLLECTIONS_FAILURE: 'FETCH_COLLECTIONS_FAILURE'
};

export default ShopActionTypes;
