import React, { forwardRef } from "react";
import "./menu.css";

import MenuItem from "./menuItem/MenuItem";
const Menu = forwardRef(({ list }, ref) => (
  <main ref={ref}>
    {list.map((item) => (
      <MenuItem item={item} key={item.id} />
    ))}
  </main>
));
export default Menu;
