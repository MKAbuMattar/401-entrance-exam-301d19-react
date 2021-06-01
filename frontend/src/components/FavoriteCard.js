import React, { Component, Fragment } from 'react';

export class FavoriteCard extends Component {
  render() {
    return (
      <Fragment>
        {this.props.data &&
          <Fragment>
            {this.props.data.map((result, idx) =>
              <Fragment>
                <div key={idx}>
                  <button
                    onClick={(e) => this.props.deleteFavorite(result.slug)}
                  >delete</button>

                  <button
                    onClick={(e) => this.props.showFormtFun(result.slug, result.name, result.gender)}
                  >update</button>

                  <h1>{result.name}</h1>
                  <p>{result.gender}</p>
                  <ul>
                    {result.psiPowers.map((power, idx) =>
                      <Fragment>
                        <li key={idx}>{power.name}</li>
                      </Fragment>
                    )}
                  </ul>
                </div>
              </Fragment>
            )}
          </Fragment>
        }
      </Fragment>
    )
  }
}

export default FavoriteCard;
