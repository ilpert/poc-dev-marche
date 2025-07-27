import useSWR from "swr";

 const fetcher = (url: string) => fetch(url).then(res => res.json()); 


export const useEvents = () => {
  const { data, error, isLoading } = useSWR(
    "https://dev.marche.it/?rest_route=/wp/v2/posts",
    fetcher
  );

  return {
    events: data,
    eventsError: error,
    eventsLoading: isLoading,
  };
};


export const useEventMedia = () => {
    const { data } = useSWR(
        "https://dev.marche.it/wp-json/wp/v2/media",
        fetcher
      );

    return {
        media: data
    }
}