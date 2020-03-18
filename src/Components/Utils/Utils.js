import Axios from 'axios';

const getApiResponce = async () => {
    const apiData = await Axios.get(
        "https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json"
    )
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return Promise.reject({ error });
        });
    return Promise.resolve(apiData);
};
export default getApiResponce;