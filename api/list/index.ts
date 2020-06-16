import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import Axios from "axios";
const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const response = await Axios.get('https://api.github.com/search/repositories', {
        params: {
            q: 'language:typescript',
            sort: 'stars',
            order: 'desc',
            per_page: 10
        }
    });
    if (response.status !== 200) {
        context.res = {
            status: response.status,
            body: response.statusText
        }
    } else {
        context.res = {
            body: response.data.items
        }
    }
};

export default httpTrigger;
