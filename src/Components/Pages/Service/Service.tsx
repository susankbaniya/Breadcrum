import { Link } from "react-router-dom";
import Camera from "./Camera";
import Mobile from "./Mobile";
function Service() {
  return (
    <div className="homaaae">
      <div className="container">
        <h2>Services</h2>
        <Link to="/products/services/camera">Camera details</Link>
        <div>
          <Link to="/products/services/mobile">Mobile details</Link>
        </div>
      </div>{" "}
    </div>
  );
}

export default Service;
