import React from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { fetchHandler } from 'Utils';

export class App extends React.Component {
  
  state = {
    query: '',
    page: 1,
    images: [],
    isLoading: false,
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      fetchHandler(this.state.query, this.state.page, this);
    }
  }

  searchHandler = query => {
    const page = 1;
    this.setState({ query, page });
  };

  buttonHandler = () => {
    const page = this.state.page + 1;
    this.setState({ page });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.searchHandler} />
        <ImageGallery images={this.state.images} />
        <Loader visible={this.state.isLoading} />
        {this.state.images.length !== 0 && (
          <Button buttonHandler={this.buttonHandler} />
        )}
      </>
    );
  }
}
