import axios from 'axios';

const SearchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID aBa-hOTU_AktLgGS5GmtW56hMEdyD43Vs54uWTl22hM',
        },
        params: {
            query: term, //hard coded for now
        },
    });

    return response.data.results;
}

export default SearchImages;