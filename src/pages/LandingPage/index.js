import { Container } from "components/Layout/Container";
import { FactBoard } from "features/FactBoard";
import { FactSearch } from "features/FactSearch";

export function LandingPage() {
  return (
    <>
      <FactSearch />
      <Container width="narrow">
        <FactBoard />
      </Container>
    </>
  );
}
