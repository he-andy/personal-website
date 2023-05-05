import React from 'react';
import './Home.css';


class Home extends React.Component {
  state = { time: new Date().toLocaleTimeString({ timeZone: "America/New_York", hour12: false }) };

  componentDidMount() {
    setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString({ timeZone: "America/New_York", hour12: false }) })
    }, 1000)
  }
  render() {
    return (
      <div>
        <main>
          <h1> A software engineer 💻, photographer 📷, and casual matcha enthusiast 🍵 Interested in machine learning, computer vision, and theoretical computer science.</h1>
          <h1> Currently a second-year student studying Math & CS @ Cornell University in Ithaca, NY where the time is {this.state.time}.</h1>
          <h1> Here are my <a href="https://www.instagram.com/a.ndyhe/">Instagram</a>, <a href="https://www.linkedin.com/in/ah734/">LinkedIn</a>, and <a href="https://github.com/he-andy/">GitHub</a>.</h1>
          <h1> You can contact me for inquiries and bookings through my <a href="mailto:ah734@cornell.edu">email</a>. </h1>
          <h1> Here is my resume.</h1>
        </main >




      </div>
    );

  }

}

export default Home;
