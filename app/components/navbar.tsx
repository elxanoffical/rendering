import Navlinks from "./navLinks";
import NavSearch from "./navSearch";
export default function Navbar() {
  console.log("Navbar rendered");

  return (
    <>
      <Navlinks />
      <NavSearch />
    </>
  );
}
