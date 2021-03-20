// import { Link } from "react-router-dom";

export function DetailsPage({ match }) {
  return (
    <>
      <div>Welcome to details page with id: {match.params.id}</div>
    </>
  );
}
