import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


class PageSelector extends React.Component {
  constructor(props) {
    super(props)
    this.pages = [
      ['home', <Nav.Link href="/">Home</Nav.Link>],
      ['projects', <Nav.Link href="">Projects</Nav.Link>],
      ['photos', <Nav.Link href="photos">Photography</Nav.Link>]
    ]
    this.state = {
      page: props.page
    }
  }
  render() {
    var buttons = this.pages.filter(x => x[0] !== this.state.page).map(x => x[1])
    console.log(buttons)
    console.log(this.state.page)
    return (
      <Navbar>
        <Container>
          <Nav className="me-auto">
            {buttons}
          </Nav>
        </Container>
      </Navbar>
    )
  }
}


export default PageSelector