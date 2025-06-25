import { useState } from "react";
import { useNavigate } from "react-router-dom";
import brudyIcon from "../../assets/brudy.svg";
import loginBGIcon from "../../assets/loginbg.svg";
import loginBGIcon2 from "../../assets/loginbg2.svg";
import { useAuthStore } from "../../store/useAuthStore";

const Login = () => {
  const navigate = useNavigate();
  // const example = useExampleStore(state => state.example);
  const setUserId = useAuthStore((state) => state.setUserId);
  const setName = useAuthStore((state) => state.setName);
  const [formData, setFormData] = useState({
    id: "",
    password: "",
  });
  const [loginEvent, setLoginEvent] = useState(false);

  const handleLoginInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch(`/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: formData.id,
        password: formData.password,
      }),
    });

    if (res.ok) {
      const result = await res.json();
      console.log("로그인 성공", result);
      setUserId(result.data.userid);
      setName(result.data.name);
      navigate("/learning-test");
    } else {
      const error = await res.json();
      console.error("로그인 실패:", error.message);
    }
  };

  const handleStartLogin = () => {
    setLoginEvent(true);
  };

  return (
    <>
      <div className="h-full">
        <div className="absolute top-[11px] left-[-122px]">
          <img src={loginBGIcon} alt="로그인 배경" width="367" height="367" />
        </div>
        <div className="absolute top-[334px] left-[107px]">
          <img src={loginBGIcon2} alt="로그인 배경2" width="523" height="104" />
        </div>
        <div className="absolute top-[334px] left-[107px]">
          <img src={brudyIcon} alt="브루디" width="341" height="362" />
        </div>
        <div className="absolute p-30 top-200">
          <p className="text-[16px] text-[#455153] font-extrabold">
            혼자보다 함께,
            <br />
            나와 잘 맞는 사람들과 자라는 공부
          </p>
          <p className="text-[60px] text-[#1E624D] font-ohsquare">브루디</p>
        </div>
        {loginEvent && (
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-6 shadow-sm rounded-lg">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="absolute bottom-80 w-full px-30">
                  <div>
                    <label
                      htmlFor="id"
                      className="block text-sm text-[#1E624D] font-extrabold text-[18px] mb-10"
                    >
                      학번
                    </label>
                    <input
                      id="id"
                      name="id"
                      type="id"
                      autoComplete="id"
                      required
                      style={{ textIndent: "1rem" }}
                      className="appearance-none relative block w-full px-4 py-3 text-[18px] border border-gray-300 placeholder-gray-400 text-[#1E624D] h-[49px] rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#1E624D] focus:border-[#1E624D] font-extrabold tracking-widest mb-30"
                      placeholder="20123456"
                      value={formData.id}
                      onChange={handleLoginInputChange}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm text-[#1E624D] font-extrabold text-[18px] mb-2"
                    >
                      비밀번호
                    </label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      style={{ textIndent: "1rem" }}
                      className="appearance-none relative block w-full px-4 py-3 text-[18px] border border-gray-300 placeholder-gray-400 text-[#1E624D] h-[49px] rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#1E624D] focus:border-[#1E624D] font-extrabold mb-50"
                      placeholder="비밀번호를 입력하세요"
                      value={formData.password}
                      onChange={handleLoginInputChange}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={!formData.id || !formData.password}
                    className=" w-full h-[62px] px-4 py-2 text-[20px] text-white bg-[#1E624D] rounded-3xl font-bold disabled:bg-[#A8A8A8]"
                  >
                    다음
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
        <div></div>
        {!loginEvent && (
          <div className="absolute bottom-80 w-full px-30">
            <button
              onClick={handleStartLogin}
              className=" w-full h-[62px] px-4 py-2 text-[20px] text-white bg-[#1E624D] rounded-3xl font-bold"
            >
              브루디 시작하기
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Login;
