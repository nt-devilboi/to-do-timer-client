export const HttpRequest = {
  GetBooks: "/books",
  GetStatuses: "/statuses",
  StartEvent: "/event/create",
  EndWork: "/end",
  GetStats: (bookId: string) => `/statistics/${bookId}`,
  GetBookById: (id: string) => `/book/${id}`,
  GetEventsByBook: (id: string) => `/book/${id}/events`
};
