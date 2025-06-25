import { http, HttpResponse } from "msw";
import { memberList } from "../const/members";

export const memberHandler = [
  http.get(`/api/members`, () => {
    return HttpResponse.json({
      data: memberList,
    });
  })
]
