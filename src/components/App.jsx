import React from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';

export class App extends React.Component {
  url = (query, page) =>
    `https://pixabay.com/api/?q=${query}&page=${page}&key=30908520-61e3e7767732b591b87412aca&image_type=photo&orientation=horizontal&per_page=15`;

  constructor(props) {
    super(props);
    this.state = {
      images: [],
      isLoading: false
    };
  }

  searchHandler = query => {
    this.fetchHandler(query || '', 1);
  };

  buttonHandler = () => {
    const query = this.state.query || '';
    const page = (this.state.images.length - this.state.images.length % 15) / 15 + 1;
    this.fetchHandler(query, page);
  };

  fetchHandler = (query, page) => {
    fetch(this.url(query, page))
      .then(response => {
        if (!response.ok) {
          throw new Error('bad request');
        }
        this.setState({ isLoading: true });
        return response.json();
      })
      .then(data => {
        this.state.query === query
          ? this.setState({
              images: [...this.state.images, ...data.hits],
            })
          : this.setState({
              images: data.hits,
              query,
            });
      })
      .catch(e => console.log(e))
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.searchHandler} />
        <ImageGallery images={this.state.images} />
        <Loader visible={this.state.isLoading}/>
        <Button buttonHandler={this.buttonHandler} />
      </>
    );
  }
}
