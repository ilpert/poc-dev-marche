import useSWR from "swr";

 const fetcher = (url: string) => fetch(url).then(res => res.json()); 


export const useEvents = () => {
  const { data, error, isLoading } = useSWR(
    "https://worker-dev.ilpert.workers.dev/posts",
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
        "https://worker-dev.ilpert.workers.dev/media",
        fetcher
      );

    return {
        media: data
    }
}