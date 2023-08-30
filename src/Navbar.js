import google from "./Assets/google.png";
import "./Navbar.css";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.min.js'; 
function Navbar() {
  return (
    <div>
      <nav>
        <img src={google} alt="google" width="100px" />
        <h1>Google</h1>
        <ul className="nav-items">
          <li><button className="primary">Profile</button></li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
      <main>
        <section id="s1">
          <p id="p1">
            Google LLC is an American multinational technology company focusing
            on artificial intelligence, online advertising, search engine
            technology, cloud computing, computer software, quantum computing,
            e-commerce, and consumer electronics.
          </p>
        </section>
      </main>
      <footer><marquee>Google offered in: हिन्दी বাংলা తెలుగు मराठी தமிழ் ગુજરાતી ಕನ್ನಡ മലയാളം ਪੰਜਾਬੀ</marquee></footer>
    </div>
  );
}

export default Navbar;
