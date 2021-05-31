const NavBar = () => {
  return (
    <nav className="mt-7">
      <div className="flex content-center max-w-6xl mx-auto">
        <img className="mr-11" src="/images/logo.svg" alt="logo" />
        <div className="flex justify-between w-full">
          <section className="">
            <a className="font-bold text-purple-light mr-8" href="#">
              Features
            </a>
            <a className="font-bold text-purple-light mr-8" href="#">
              Pricing
            </a>
            <a className="font-bold text-purple-light" href="#">
              Resources
            </a>
          </section>
          <section className="">
            <button className="font-bold text-purple-light mr-8">Login</button>
            <button className="px-7 py-2 bg-blue rounded-3xl text-withe font-bold">
              Sign Up
            </button>
          </section>
        </div>
        <img
          className="sm:hidden"
          src="/icons/icon-hamburger.svg"
          alt="hamburger icon"
        />
      </div>
    </nav>
  );
};

export default NavBar;
