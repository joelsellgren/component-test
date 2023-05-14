import Link from "./Link";


const Navbar = () => {

  return (
    <nav className="flex justify-center items-center h-full ml-12 text-darkGrey">
      <Link text="Collection" link="/" />
      <Link text="Men" link="/" />
      <Link text="Women" link="/" />
      <Link text="About" link="/" />
    </nav>
  )
}

export default Navbar