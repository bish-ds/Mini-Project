const Navbar = () => {
  return (
    <nav className="navbar">
      <img src="icon.jpeg"></img>
      <h1>The Dojo Blog</h1>

      <div className="links">
        <a href={"/"}>Home</a>
        <a
          href={"/create"}
          style={{
            color: "white",
            backgroundColor: "#b4644d",
            borderRadius: "8px",
          }}
        >
          New Blog
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
