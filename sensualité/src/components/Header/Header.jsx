import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <>
      <header>
        <h2>SENSUALITÉ</h2>
        <div className="busca">
          <FontAwesomeIcon icon={faSearch} />
          <input
            className="input_buscar"
            type="search"
            name=""
            id=""
            placeholder="Buscar"
          />
        </div>
        <div >
          <FontAwesomeIcon className="icon_header" icon={faUser} />
          <FontAwesomeIcon className="icon_header" icon={faCartShopping} />
        </div>
      </header>
      <nav >
        <ul className="navegacao">
          <li className="lista">cropped</li>
          <li className="lista"> Blusa</li>
          <li className="lista">Body</li>
          <li className="lista">Saia</li>
          <li className="lista">Bermuda</li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
