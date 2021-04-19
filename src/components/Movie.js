import { Link } from "react-router-dom";

// eslint-disable-next-line
export default ({ id }) => (
  <div>
    <Link to={`/${id}`}>{id}</Link>
  </div>
);
