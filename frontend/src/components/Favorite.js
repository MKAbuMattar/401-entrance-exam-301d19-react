import React, { Component, Fragment } from 'react';
import axios from 'axios';
import FavoriteCard from './FavoriteCard';
import UpdateForm from './UpdateForm';

export class Favorite extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      loading: true,
      favoriteData: [],
      showFormt: false,
      slug: '',
      favoriteCharacterName: '',
      favoriteCharacterGender: '',
    });
  }

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    const url = `${process.env.REACT_APP_SERVER_URL}/favorite`;
    const favoriteData = await axios.get(url);

    this.setState({
      loading: false,
      favoriteData: favoriteData.data
    });
  }

  deleteFavorite = async (slug) => {
    const url = `${process.env.REACT_APP_SERVER_URL}/favorite/${slug}`;
    await axios.delete(url);
    this.getData();
  }

  showFormtFun = async (slug, name, gender) => {
    this.setState({
      showFormt: true,
      slug: slug,
      favoriteCharacterName: name,
      favoriteCharacterGender: gender,
    });
  }

  updateFavoriteCharacterName = (e) => this.setState({ favoriteCharacterName: e.target.value });
  updateFavoriteCharacterGender = (e) => this.setState({ favoriteCharacterGender: e.target.value });

  updateData = async (e) => {
    e.preventDefault();

    const obj = {
      name: this.state.favoriteCharacterName,
      gender: this.state.favoriteCharacterGender
    }

    const url = `${process.env.REACT_APP_SERVER_URL}/favorite/${this.state.slug}`;
    await axios.put(url, obj);
    this.getData();
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
            {this.state.showFormt &&
              <Fragment>
                <UpdateForm
                  name={this.state.favoriteCharacterName}
                  gender={this.state.favoriteCharacterGender}
                  updateFavoriteCharacterName={this.updateFavoriteCharacterName}
                  updateFavoriteCharacterGender={this.updateFavoriteCharacterGender}
                  updateData={this.updateData}
                />
              </Fragment>
            }
            {this.state.favoriteData &&
              <Fragment>
                <FavoriteCard
                  data={this.state.favoriteData}
                  deleteFavorite={this.deleteFavorite}
                  showFormtFun={this.showFormtFun}
                />
              </Fragment>
            }
          </Fragment>
        )}
      </Fragment>
    )
  }
}

export default Favorite;
