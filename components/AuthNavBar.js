/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import {
  Navbar,
  // Container,
  Nav,
  Button,
} from 'react-bootstrap';
import { signOut } from '../utils/auth';

export default function AuthNavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="px-5 sticky-top">
      {/* <Container> */}
      <Link passHref href="/">
        <Navbar.Brand className="fs-2">TN Disaster Relief</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto ms-auto w-75 d-flex justify-content-around">
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
        <div className=" w-25 d-flex justify-content-end">
          <Button className="btn-sm btn-secondary" onClick={signOut}>Signout</Button>
        </div>
      </Navbar.Collapse>
      {/* </Container> */}
    </Navbar>
  );
}
