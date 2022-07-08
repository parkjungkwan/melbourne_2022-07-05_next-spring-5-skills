import { Article } from "modules/board/updateArticle";
import axios, {AxiosResponse} from 'axios';

const SERVER = 'http://127.0.0.1:8080'
const headers = {
    "Content-Type" : "application/json",
    Authorization: "JWT fefege...",
}

export const updateArticleApi = async (
    updateData: Article) => {
        try{
            console.log(`진행 4 : API 진입 + ${JSON.stringify(updateData)}`)
            await axios.post(`${SERVER}/articles/join`, updateData, {headers})
        } catch(error) {
            return error;
        }
    }

