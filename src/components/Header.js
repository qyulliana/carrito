import React, {useMemo, useState} from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import './header.css';

function Header({
  carry = [],
  handleRemoveItem = () => {}
}) {
  const [isCarryVisible, setCarryVisible] = useState(false);

  const carryTotalPrice = useMemo(() =>
    carry.reduce((total, product) => {
      const price = product.price;
      const sum = total + price;
      return sum;
    }, 0),
    [carry]
  )

  console.log(carryTotalPrice)

  return(
    <>
      <div className={'container_header'}>
        <img className={'logo_header'} src={'https://www.mcdonalds.com.uy/images/layout/mcdonalds-logo-footer-bg-white.png'}/>

        <div className={'container-carry'}>
          <AiOutlineShoppingCart
            className={'cart_header'}
            onClick={() => setCarryVisible(!isCarryVisible)}
          />

          {isCarryVisible && (
            <div className={'container-carry-list'}>
              {carry.length ? (
                <>
                  <h2 className={'carry-product-count'}>Carrito de Compra ({carry.length})</h2>
                  <ul className={'carry-product-list'}>
                    {carry.map((product, index) => (
                      <li key={index.toString()}>
                        <div className={'carry-product-image'} style={{ backgroundImage: `url(${product.image})` }}  />
                        <div className={'carry-product-data'}>
                          <h3 className={'carry-product-name'}>{product.name}</h3>
                          <div className={'carry-product-price'}>{product.price}$</div>
                          <button className={'carry-product-remove'} onClick={() => handleRemoveItem(product)}>Quitar del carrito</button>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className={'product-carry-total'}>
                    <h3 className={'product-carry-total-title'}>Total</h3>
                    <div className={'product-carry-total-value'}>{carryTotalPrice}$</div>
                  </div>
                </>
              ) : (
                <p className={'carry-empty'}>No hay productos en el carrito.</p>
              )}
            </div>
          )}

        </div>
      </div>

    </>
  )
}

export default Header;