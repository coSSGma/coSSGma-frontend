import { http, HttpResponse } from "msw";

interface LoginProp {
  id: string,
  password: string,
}

export const authHandler = [
  http.post(`/api/login`, async({ request }) => {
    const body = await request.json() as LoginProp;
    const { id, password } = body;
    
    const mockUser = {
      userid: 1,
      name: "홍길동",
      id: "12345678",
      password: "1234",
    };

    if (id === mockUser.id && password === mockUser.password) {
      return HttpResponse.json({
        data: {
          userid: mockUser.userid,
          name: mockUser.name,
          id: mockUser.id,
        },
      });
    };

    return new HttpResponse(
      JSON.stringify({ message: "이메일 또는 비밀번호가 올바르지 않습니다." }),
      {
        status: 401,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  })
]