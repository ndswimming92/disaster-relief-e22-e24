/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import {
  Navbar,
  Container,
  Nav,
  Button,
} from 'react-bootstrap';
import { signOut } from '../utils/auth';

export default function AuthNavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="secondary" variant="dark">
      <Container>
        <Link passHref href="/">
          <Navbar.Brand>CHANGE ME</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ms-auto w-50 d-flex justify-content-between">
            {/* CLOSE NAVBAR ON LINK SELECTION: https://stackoverflow.com/questions/72813635/collapse-on-select-react-bootstrap-navbar-with-nextjs-not-working */}
            <Link passHref href="/">
              <Nav.Link>Home</Nav.Link>
            </Link>
            <Link passHref href="/disaster">
              <Nav.Link>Disasters</Nav.Link>
            </Link>
            <Link passHref href="/about">
              <Nav.Link>About</Nav.Link>
            </Link>
            <Link passHref href="/adminConsole">
              <Nav.Link>Admin Console</Nav.Link>
            </Link>
          </Nav>
          <Button className="btn-sm btn-dark d-flex justify-content-center" onClick={signOut}>signout</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
