import simbolo from "../../assets/virtus-simbolo.svg";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <img src={simbolo} alt="" className="header-simbolo" />
      <span className="header-nome">VIRTUS</span>
    </header>
  );
}

export default Header;
