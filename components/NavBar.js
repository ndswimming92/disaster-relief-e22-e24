/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import {
  Navbar,
  Container,
  Nav,
  Button,
} from 'react-bootstrap';
import { signIn } from '../utils/auth';

export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="secondary" variant="dark">
      <Container>
        <Link passHref href="/">
          <Navbar.Brand>TN Disaster Relief</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ms-auto bg-danger w-75 d-flex justify-content-end">
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
            <Link passHref href="/giving">
              <Nav.Link>Giving</Nav.Link>
            </Link>
          </Nav>
          <div className=" d-flex justify-content-center">
            <Button className="btn-sm btn-dark" onClick={signIn}>Admin Login</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
