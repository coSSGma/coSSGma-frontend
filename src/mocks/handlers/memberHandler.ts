import { http, HttpResponse } from "msw";
import { members } from "../const/members";

export const memberHandler = [
  http.get(`/api/members`, () => {
    return HttpResponse.json({
      data: members,
    });
  })
]
