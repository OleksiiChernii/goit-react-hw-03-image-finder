const url = (query, page) =>
  `https://pixabay.com/api/?q=${query}&page=${page}&key=30908520-61e3e7767732b591b87412aca&image_type=photo&orientation=horizontal&per_page=15`;

export function fetchHandler(query, page, app) {
  fetch(url(query, page))
    .then(response => {
      if (!response.ok) {
        throw new Error('bad request');
      }
      return response.json();
    })
    .then(data => {
      const dataImages = data.hits.map(({ id, webformatURL, tags }) => {
        return { id, webformatURL, tags };
      });
      if (page === 1) {
        app.setState({
          images: dataImages,
        });
      } else {
        app.setState({
          images: [...app.state.images, ...dataImages],
        });
      }
    })
    .catch(e => console.log(e))
    .finally(() => app.setState({ isLoading: false, isLoadMoreShowing: true }));
}
