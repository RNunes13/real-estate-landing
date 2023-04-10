"use client";
import { useState } from "react";
import { MdMenu, MdOutlineClose } from "react-icons/md";
import classNames from "classnames";
import styles from "./Menu.module.scss";

enum ItemKey {
  home,
  properties,
  locations,
  services,
  about,
  contact,
}

interface IItem {
  key: ItemKey;
  text: string;
  onClick?: () => void;
}

export const Menu: React.FC = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [activeItem, setActiveItem] = useState<ItemKey | null>(ItemKey.home);

  const toggleItems = () => setOpen(!isOpen);

  const onItemClick = (key: ItemKey) => () => {
    setActiveItem(key);
    isOpen && toggleItems();
  };

  const items: IItem[] = [
    { key: ItemKey.home, text: "Home", onClick: onItemClick(ItemKey.home) },
    {
      key: ItemKey.properties,
      text: "Properties",
      onClick: onItemClick(ItemKey.properties),
    },
    {
      key: ItemKey.locations,
      text: "Locations",
      onClick: onItemClick(ItemKey.locations),
    },
    {
      key: ItemKey.services,
      text: "Services",
      onClick: onItemClick(ItemKey.services),
    },
    {
      key: ItemKey.about,
      text: "About us",
      onClick: onItemClick(ItemKey.about),
    },
    {
      key: ItemKey.contact,
      text: "Contact us",
      onClick: onItemClick(ItemKey.contact),
    },
  ];

  const Icon = isOpen ? MdOutlineClose : MdMenu;

  return (
    <>
      <nav className={classNames(styles.items, { [styles.open]: isOpen })}>
        {items.map(({ key, text, onClick }) => (
          <button
            key={key}
            type="button"
            onClick={onClick}
            className={classNames(
              styles.item,
              activeItem === key ? styles.active : null
            )}
          >
            {text}
          </button>
        ))}
      </nav>
      <button type="button" className={styles.menu} onClick={toggleItems}>
        <Icon className={styles.menuIcon} />
      </button>
    </>
  );
};
