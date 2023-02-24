import React from 'react';
import './wish-list.scss';

const WishList = ({wishItems, addItem, deleteWish, clearWish, closeWishList}) => {
  return (
    <div className="wish-list">
      <h2>products in your wish list</h2>
      <span className="close-button" onClick={closeWishList}><i className="fa-solid fa-x"></i></span>
      {wishItems.length === 0 && <div className="empty-wish-list">your wish list is empty</div>}
      <div className="wish-list-items">
        {wishItems.map((wishItem) => (
          <div className="wish-list-item" key={wishItem.id}>
            <div className="item-image">
                <img src={wishItem.img} alt="item_image"/>
            </div>
            <div className="item-desc">
                <h3>{wishItem.title}</h3>
                <h3>{wishItem.product_tag}</h3>
                <h3><i className="fa-solid fa-naira-sign"></i>{wishItem.new_price}:00</h3>
                <button onClick={()=> addItem(wishItem)}>add to cart</button>
            </div>
            <div className="item-delete">
                <i className="fa-solid fa-heart" onClick={() => deleteWish(wishItem)}></i>
            </div>
          </div>
        ))}
      </div>
      {wishItems.length >=1 && 
        <div className="clear-wish-list">
          <button onClick={clearWish}>clear wish list</button>
        </div>
      }
    </div>
  );
}

export default WishList;
