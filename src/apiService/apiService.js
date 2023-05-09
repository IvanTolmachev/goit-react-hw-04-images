import axios from 'axios';

const apiKey = '33676547-1eff083daa4791d6cd59b7c63';

export async function getImages(search, page) {
  const url = `https://pixabay.com/api/?q=${search}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`;
  try {
    const request = await axios.get(url);
    const response = JSON.parse(request.request.response);
    const totalHits = response.totalHits;
    const images = response.hits.map(hit => {
      return {
        id: hit.id,
        src: hit.webformatURL,
        srcLarge: hit.largeImageURL,
        alt: hit.tags,
      };
    });
    return { images, totalHits };
  } catch (error) {
    console.log(error.message);
  }
}
