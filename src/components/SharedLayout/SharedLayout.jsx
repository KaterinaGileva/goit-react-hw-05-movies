import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Container, Header, Link } from "./SharedLayout.styled";


export default function SharedLayout() {
  return (
    <Container>
    <Header>
    <nav>
    <Link to="/">
            Home
          </Link>
      <Link to="/movies">Movies</Link>
    </nav>
    </Header>
    <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
      </Container>
  );
}