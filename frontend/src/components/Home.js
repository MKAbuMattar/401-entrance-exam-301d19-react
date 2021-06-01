import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Card from './Card';

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      loading: true,
      dataCharacters: [],
    });
  }

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    const url = `${process.env.REACT_APP_SERVER_URL}/get-characters`;
    const getCharacters = await axios.get(url);

    this.setState({
      loading: false,
      dataCharacters: getCharacters.data
    });
  }

  addTOFavorite = async (obj) => {
    const url = `${process.env.REACT_APP_SERVER_URL}/favorite`;
    await axios.post(url, obj);
  }


  render() {
    return (
      <Fragment>
        {this.state.loading ? (
          <Fragment>
            <h2>loading...</h2>
          </Fragment>
        ) : (
          <Fragment>
            {this.state.dataCharacters &&
              <Fragment>
                <Card
                  data={this.state.dataCharacters}
                  addTOFavorite={this.addTOFavorite}
                />
              </Fragment>
            }
          </Fragment>
        )}
      </Fragment>
    )
  }
}

export default Home;
