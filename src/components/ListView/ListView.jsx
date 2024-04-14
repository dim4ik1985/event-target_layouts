import "./listView.module.css";
import classes from "./listView.module.css";

export const ListView = ({ items }) => {
  return (
    <>
      {items.map((item, index) => (
        <div key={index} className={classes["card"]}>
          <div className={classes["card__img"]}>
            <img src={item.img} alt={item.name} />
          </div>
          <div className={classes["card__title"]}>{item.name}</div>
          <div className={classes["card__description"]}>{item.color}</div>
          <div className={classes["card__price"]}>{"$" + item.price}</div>
          <div className={classes["card__button"]}>Add to cart</div>
        </div>
      ))}
    </>
  );
};
