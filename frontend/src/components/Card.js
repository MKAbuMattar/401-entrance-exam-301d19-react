import React, { Component, Fragment } from 'react';

export class Card extends Component {
  render() {
    return (
      <Fragment>
        {this.props.data &&
          <Fragment>
            {this.props.data.map((result, idx) =>
              <Fragment>
                <div key={idx}>
                  <button onClick={(e) => this.props.addTOFavorite(result)}>save to favorite</button>
                  <h1>{result.name}</h1>
                  <p>{result.gender}</p>
                  <img src={result.image} alt="" />
                  {result.psiPowers.map((power, idx) =>
                    <Fragment>
                      <div key={idx}>
                        <img src={power.img} alt="" />
                        <p>{power.name} </p>
                      </div>
                    </Fragment>
                  )}
                </div>
              </Fragment>
            )}
          </Fragment>
        }
      </Fragment>
    )
  }
}

export default Card;
