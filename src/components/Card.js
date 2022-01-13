import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { IoIosArrowDown, IoIosClose } from 'react-icons/io';
import './card.css';



function Card ({product : {id, name, image, ofer, price}, onClick = () => {}, isInCarry = false}) {

  return(
    <>
      <div className={'container__card'}>
          <div className={'prices__card__container'}>
            <h4 className={'name_hamburger_card'}>{name}</h4>
            <p className={'price_hamburger_card'}>{price}</p>
          </div>
        <div>
          <p className={'paragraph_offer_card'}>{ofer}</p>
          <img className={'img_card_cuarto_de_libra'} src={image} alt={'hamburguesa'}/>
          <p className={'taste_hamburger_card'}>{ofer}</p>
          </div>
        <div className={'container__iconos__card'} onClick={onClick}>
          {isInCarry ? (
            <IoIosClose color={'red'} className={'icono_card_cart'}/>
          ) : (
            <AiOutlineShoppingCart color={'red'} className={'icono_card_cart'}/>
          )}
          <IoIosArrowDown color={'red'} className={'icono_card_arrow'}/>
        </div>
      </div>

    </>


  )

}

export default Card;