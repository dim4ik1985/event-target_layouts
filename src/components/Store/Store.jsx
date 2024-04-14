import "./store.css";
import { IconSwitch } from "../IconSwitch/IconSwitch";
import { useState } from "react";
import { CardsView } from "../CardsView/CardsView";
import { ListView } from "../ListView/index.js";
import cn from "classnames";
export const Store = () => {
  const products = [
    {
      name: "Nike Metcon 2",
      price: "130",
      color: "red",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
    },
    {
      name: "Nike Metcon 2",
      price: "130",
      color: "green",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
    },
    {
      name: "Nike Metcon 2",
      price: "130",
      color: "blue",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
    },
    {
      name: "Nike Metcon 2",
      price: "130",
      color: "black",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
    },
    {
      name: "Nike free run",
      price: "170",
      color: "black",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
    },
    {
      name: "Nike Metcon 3",
      price: "150",
      color: "green",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
    }
  ];

  const [actualIcon, setChoiceIcon] = useState("view_list");

  const onSwitch = (e) => {
    e.target.textContent === "view_list"
      ? setChoiceIcon("view_module")
      : setChoiceIcon("view_list");
  };
  console.log(typeof actualIcon);

  return (
    <>
      <div className={"icon-switch"}>
        <IconSwitch icon={actualIcon} onSwitch={onSwitch} />
      </div>
      <div className={"product"}>
        <div className={"container"}>
          <div
            className={cn(
              "product__items",
              actualIcon === "view_list" ? "view_module" : "view_list"
            )}
          >
            {actualIcon === "view_list" ? (
              <CardsView items={products} />
            ) : (
              <ListView items={products} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
