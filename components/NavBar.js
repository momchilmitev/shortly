const NavBar = () => {
  return (
    <nav className="flex">
      <img className="" src="/images/logo.svg" alt="logo" />
      <section>
        <a className="" href="#">
          Features
        </a>
        <a href="#">Pricing</a>
        <a href="#">Resources</a>
      </section>
      <section>
        <button>Login</button>
        <button>Sign Up</button>
      </section>
      <img
        className="sm:hidden"
        src="/icons/icon-hamburger.svg"
        alt="hamburger icon"
      />
    </nav>
  );
};

export default NavBar;
