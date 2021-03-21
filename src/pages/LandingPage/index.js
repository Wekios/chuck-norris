import { FactBoard } from "features/FactBoard";
import { FactSearch } from "features/FactSearch";

export function LandingPage() {
  return (
    <>
      <FactSearch />
      <FactBoard />
    </>
  );
}
