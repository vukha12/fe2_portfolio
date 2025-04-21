import { NAVBAR_TILE } from "../constants";
const Navbar = () => {
  return (
    <nav className="mt-4 flex items-center justify-between border mx-2 rounded ">
      <div className="">
        <span>KhaNguyen</span>
      </div>
      <ul className="flex flex-wrap ">
        {NAVBAR_TILE.map((item) => (
          <li key={item.id} className="mr-9 text-2xl font-serif">
            <a href="#">{item.title}</a>
          </li>
        ))}
      </ul>
      <div></div>
    </nav>
  );
};

export default Navbar;
