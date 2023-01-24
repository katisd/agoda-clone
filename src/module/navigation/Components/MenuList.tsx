import { menuList } from "../../assets/staticObject";

function MenuList({ nMenu = 2 }: { nMenu?: number }) {
  return (
    <ul className="menu menu-horizontal px-5">
      {menuList.slice(0, nMenu).map((menu) => (
        <li key={menu}>
          <a>{menu}</a>
        </li>
      ))}
      <li tabIndex={0}>
        <a>...</a>
        <ul className="bg-base-100 p-2">
          {menuList.slice(nMenu).map((menu) => (
            <li key={menu}>
              <a>{menu}</a>
            </li>
          ))}
        </ul>
      </li>
    </ul>
  );
}

export default MenuList;
