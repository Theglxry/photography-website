import "./Header.css";

const Header = () => {
  return (
    <section className="h-wrapper">
    <div className="flexCenter paddings h-container">



      <div className="flexCenter paddings h-menu-left">
        <a href=" "> Home </a>
        <a href=" "> About </a>
        <a href=" "> Services </a>
      </div>



      <div className="flexCenter h-menu-right">
        <a href=" "> Blog </a>
        <button className="button"><a href=" "> Gallery </a></button>
        <a href=" "> Contact </a>
      </div>
    </div>
  </section>
  );
};

export default Header;
