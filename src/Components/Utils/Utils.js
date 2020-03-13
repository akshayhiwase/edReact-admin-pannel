import Axios from 'axios';

export const getApiRequest = () => {
    Axios.get("https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json")
        .then((responce) => {
            return [...responce.data]
            // this.setState({ apiResponse: responce.data.dasbhoardPage.orders })
        })
        .catch(err => console.log(err))
}