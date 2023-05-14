import Link from "./Link";


const Navbar = () => {

  return (
    <nav className="flex justify-center items-center h-full ml-12 text-darkGrey">
      <Link text="Collection"/>
      <Link text="Men"/>
      <Link text="Women"/>
      <Link text="About"/>
    </nav>
  )
}

export default Navbar