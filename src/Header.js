import React from 'react';
import PageSelector from './PageSelector.js'


class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      header: props.header,
      page: props.page
    }
  }
  render() {
    console.log(this.state.page)
    const nav = (
      <div className='inline'>
        <h2>{this.state.header}</h2>
        <PageSelector page={this.state.page} />
      </div>
    )
    return this.state.page === 'home' ? (
      <header>
        <img className="circular--square" src="https://media-exp1.licdn.com/dms/image/C4D03AQG22mr0DtH1iw/profile-displayphoto-shrink_400_400/0/1606428164266?e=1671667200&v=beta&t=7Jc17wmWlmNPrmUDFwcMoWtpshCLYN1eQn2xb3-g_mg" />
        {nav}
      </header >
    ) :
      (
        <div className='header'>
          {nav}
        </div>

      );

  }

}

export default Header;
