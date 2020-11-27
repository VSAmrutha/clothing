import React, { Component } from "react";
import Shop_Data from "./shopdata";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
export default class Shop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: Shop_Data,
    };
  }

  render() {
    const { collections } = this.state;

    return (
      <div>
        {collections.map(({ id, ...otherCollection }) => (
          <CollectionPreview key={id} {...otherCollection} />
        ))}
      </div>
    );
  }
}
