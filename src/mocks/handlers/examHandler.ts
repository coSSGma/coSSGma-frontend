import { http, HttpResponse } from "msw";

export const exampleHandler = [
  http.get(`${import.meta.env.VITE_API_URL}/info`, () => {
    return HttpResponse.json({
      // 데이터 반환 형식에 맞게 
      data: {
        id: 1,
        name: "홍길동",
        email: "honggildong@example.com",
        role: "admin",
        createdAt: "2023-01-01T00:00:00Z",
      },
    })
  })
]