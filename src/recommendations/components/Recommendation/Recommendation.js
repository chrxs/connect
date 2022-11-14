import * as React from "react";

import { Link } from "components";

export default function Recommendation({
  name
}) {
  return (
    <div>
      <h2>{name}!</h2>

      <Link to={`/${name}`}>go to {name}</Link>
    </div>
  );
};
