import React from 'react';
import { Modal } from 'components/Modal/Modal';
import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

export class ImageGalleryItem extends React.Component {

  constructor(props) {
    super(props);

    this.src = props.src;
    this.alt = props.alt;

    this.state = {
      isModalOpen: false,
    };
  }

  handleClick = () => {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  };

  render() {
    return (
      <li className={css.ImageGalleryItem}>
        <img
          className={css['ImageGalleryItem-image']}
          src={this.src}
          alt={this.alt}
          onClick={this.handleClick}
        />
        {this.state.isModalOpen && (
          <Modal
            src={this.src}
            alt={this.alt}
            handleClick={this.handleClick}
          />
        )}
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}