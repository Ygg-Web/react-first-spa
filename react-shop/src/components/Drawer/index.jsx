
import classes from './Drawer.module.scss'

export default function Drawer({onClose, items=[]}) {
  return (
    <div className={classes.overlay}>
      <div className={classes.drawer}>
        <h2>
          Корзина
          <img onClick={onClose} className={classes.removeBtn} src="/img/btn-remove.svg" alt="Remove"/>
        </h2>

        <div className={classes.cartItems}>
          {items.map(item => (
            <div key={item.id} className={classes.cartItem}>
              <div style={{backgroundImage: `url(${item.image})`}} className={classes.cartItemImg}></div>
              <div>
                <p>{item.name}</p>
                <b>{item.price} руб.</b>
              </div>
              <img className={classes.removeBtn} src="/img/btn-remove.svg" alt="Remove" />  
            </div>
          ))}
        </div>  

        <div className={classes.cartTotal}>
          <ul >
            <li>
              <span>Итого:</span>
              <div></div>
              <b>30 999 руб.</b>
            </li>
            <li>
              <span>Налог 5%:</span>
              <div></div>
              <b>2065 руб.</b>
            </li>
          </ul>
          <button className="greenButton" >Оформить заказ<img src="/img/arrow.svg" alt="Arrow"/></button>
        </div>
      </div>
    </div>
  )
}