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
    isLoadMoreShowing: false,
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
    this.setState({ images: [], isLoadMoreShowing: false });
    this.setState({ query, page });
    this.setState({isLoading: true})
  };

  buttonHandler = () => {
    const page = this.state.page + 1;
    this.setState({isLoadMoreShowing: false});
    this.setState({isLoading: true})
    this.setState({ page });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.searchHandler} />
        <ImageGallery images={this.state.images} />
        <Loader visible={this.state.isLoading} />
        {this.state.isLoadMoreShowing && (
          <Button buttonHandler={this.buttonHandler} />
        )}
      </>
    );
  }
}
