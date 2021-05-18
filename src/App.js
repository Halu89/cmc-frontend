import React from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import MainContent from "./Components/MainContent";
import { BrowserRouter } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        name: "",
        email: "",
        objet: "",
        message: "",
      },
      isModalOpen: false,
    };
  }

  openModal = () => {
    this.setState({ isModalOpen: true });
  };
  closeModal = () => {
    this.setState({ isModalOpen: false });
  };
  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      formData: { ...prevState.formData, [name]: value },
    }));
  };
  resetForm = () => {
    this.setState({
      formData: { name: "", email: "", objet: "", message: "" },
    });
  };

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header openModal={this.openModal} />
          <MainContent
            openModal={this.openModal}
            closeModal={this.closeModal}
            resetForm={this.resetForm}
            formData={this.state.formData}
            isModalOpen={this.state.isModalOpen}
            onChange={this.handleInputChange}
          />
          <Footer openModal={this.openModal} />

          {/* //TODO : Add Back to top button */}
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
