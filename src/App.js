import "./App.css";
import "./components/styles.css";
import { Link } from "react-router-dom";
import { Links } from "./components";

function App() {
  return (
    <div>
      <Links />
      <div class="card-inset">
        <h1 style={{ textAlign: "center" }}>Welcome!</h1>
        <div style={{ margin: "auto", maxWidth: "500px" }}>
          <p style={{ lineHeight: "1.5em" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            luctus risus et metus vestibulum, in suscipit lorem venenatis.
            Quisque faucibus aliquet laoreet. Cras varius libero in faucibus
            maximus. Nullam vitae velit vel orci tincidunt bibendum non eget
            erat.
          </p>
        </div>

        <div
          style={{
            width: "100%",
            display: "flex",
            margin: "auto",
            justifyContent: "space-evenly",
          }}
        >
          <Link class="btn-secondary" to="/Register">
            Register for newsletter
          </Link>
          <Link class="btn-secondary" to="/Newsfeed">
            See the newsfeed
          </Link>
        </div>
      </div>
    </div>
  );
}

export default App;
