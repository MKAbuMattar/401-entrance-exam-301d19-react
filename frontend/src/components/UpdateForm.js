import React, { Component, Fragment } from 'react';

export class UpdateForm extends Component {
  render() {
    return (
      <Fragment>
        <form onSubmit={this.props.update}>
          <label>Character Name</label>
          <input
            name="name"
            value={this.props.name}
            onChange={(e) => this.props.updateFavoriteCharacterName(e)} />
          <label>Character Gender</label>
          <input
            name="name"
            value={this.props.gender}
            onChange={(e) => this.props.updateFavoriteCharacterGender(e)} />
          <input type="submit" value="update" />
        </form>
      </Fragment>
    )
  }
}

export default UpdateForm;
