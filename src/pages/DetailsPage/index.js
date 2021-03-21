import { SingleFact } from "features/SingleFact";

export function DetailsPage({ match }) {
  return <SingleFact id={match.params.id} />;
}
