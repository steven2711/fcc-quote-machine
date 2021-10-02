import React, { Component } from "react";
import SocialButtons from "./socialButtons";
import { Container, Row, Col } from "reactstrap";

const styles = {
  card: {
    maxWidth: "600px",
    marginLeft: "auto",
    marginRight: "auto"
  }
};

class QuoteBlock extends Component {
  state = {};
  render() {
    return (
      <Container>
        <h1 className="text-center">Random Quote Generator</h1>

        <div
          className="card mt-5 shadow-lg center-block"
          id="quote-box"
          style={styles.card}
        >
          <div className="card-body">
            <blockquote className="blockquote mb-0">
              <p id="text">{this.props.quote}</p>
              <footer className="blockquote-footer">
                <cite title="Source Title" id="author">
                  {this.props.author}
                </cite>
              </footer>

              <Row>
                <Col>
                  <button
                    type="button"
                    onClick={this.props.onPress}
                    className="btn btn-outline-dark mt-3"
                    id="new-quote"
                  >
                    Next Quote
                  </button>
                </Col>
                <Col>
                  <SocialButtons
                    quote={this.props.quote}
                    author={this.props.author}
                  />
                </Col>
              </Row>
            </blockquote>
          </div>
        </div>
      </Container>
    );
  }
}

export default QuoteBlock;
