import { axios } from "@src/lib/axios";

const BASE_URL = "http://localhost:3333/joke";
const RANDOM_JOKE_URL = `${BASE_URL}/random`;

export type Joke = {
    id: string;
    text: string;
};

export type GetJokesResponse = {
    jokes: Joke[] | undefined;
    totalOfItems: number;
};

export type GetJokesParams = {
    query?: string;
};

export type CreateJokeParams = {
    joke: string;
};

class JokeService {
    #baseUrl = BASE_URL;

    async createJoke(params: CreateJokeParams): Promise<Joke> {
        const { joke } = params;
        try {
            const response = await axios.post(this.#baseUrl, { text: joke });
            return response.data;
        } catch (error) {
            console.error("Erro ao criar piada:", error);
            throw new Error("Não foi possível criar a piada");
        }
    }

    async getRandomJoke(): Promise<Joke> {
        try {
            const response = await axios.get(RANDOM_JOKE_URL);
            return response.data;
        } catch (error) {
            console.error("Erro ao buscar piada aleatória:", error);
            throw new Error("Não foi possível pegar a piada aleatória");
        }
    }

    async getJokes(params: GetJokesParams): Promise<GetJokesResponse> {
        const { query } = params;
        try {
            const response = await axios.get(this.#baseUrl, { params: { query } });
            return response.data;
        } catch (error) {
            console.error("Erro ao buscar piadas:", error);
            throw new Error("Não foi possível buscar as piadas");
        }
    }
}

export default new JokeService();
