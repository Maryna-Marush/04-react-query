import axios from "axios";
import type { Movie } from "../types/movie";


export interface MoviesResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}


const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
  },
});

// 3. Функція запиту
export const fetchMovies = async (
  query: string,
  page: number = 1
): Promise<MoviesResponse> => {
  const response = await instance.get<MoviesResponse>("/search/movie", {
    params: {
      query,
      page,
    },
  });

  return response.data;
};
