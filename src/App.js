import React from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import MainContent from "./Components/MainContent";
import { BrowserRouter } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
  }

  componentDidMount = async () => {
    //Wake up the backend server
    try {
      fetch(process.env.REACT_APP_ARTICLES_API_URI + "/articles");
    } catch (e) {
      console.log(e);
    }
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };
  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header openModal={this.openModal} />
          <MainContent
            openModal={this.openModal}
            closeModal={this.closeModal}
            isModalOpen={this.state.isModalOpen}
          />
          <Footer openModal={this.openModal} />

          {/* //TODO : Add Back to top button */}
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
