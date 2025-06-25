import { http, HttpResponse } from "msw";

interface LoginProp {
  email: string,
  password: string,
}

export const authHandler = [
  http.post(`/api/login`, async({ request }) => {
    const body = await request.json() as LoginProp;
    const { email, password } = body;
    console.log(body);
    
    const mockUser = {
      id: 1,
      name: "홍길동",
      email: "1234@naver.com",
      password: "1234",
    };

    if (email === mockUser.email && password === mockUser.password) {
      return HttpResponse.json({
        data: {
          id: mockUser.id,
          name: mockUser.name,
          email: mockUser.email,
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