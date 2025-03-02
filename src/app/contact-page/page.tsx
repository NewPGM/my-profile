"use client";
import { useState, useEffect, ChangeEvent, FormEvent } from "react";

 function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // จำลองการส่งข้อมูลไปยัง API
  };

  return (
    <div className="flex justify-between items-center max-w-6xl mx-auto mt-20 px-4">
      <div className="container mx-auto px-4">
        <div
          className={`mb-12 text-center transition-all duration-700 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-3xl font-bold mb-2 mt-10">ติดต่อฉัน</h2>
          <div className="w-16 h-1 bg-orange-500 mx-auto"></div>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            หากคุณมีคำถามหรือต้องการทำงานร่วมกัน
            สามารถติดต่อฉันได้ตามช่องทางด้านล่าง หรือส่งข้อความหาฉันโดยตรง
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* ข้อมูลติดต่อ */}
          <div
            className={`w-full lg:w-1/3 transition-all duration-700 delay-300 ease-out ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-[-50px] opacity-0"
            }`}
          >
            <div className="bg-black bg-opacity-40 backdrop-blur-sm p-8 rounded-lg shadow-lg h-full">
              <h3 className="text-xl font-semibold mb-6">ข้อมูลการติดต่อ</h3>

              <div className="mb-6">
                <div className="flex items-start mb-4">
                  <div className="text-orange-500 mr-3 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-medium">อีเมล:</h4>
                    <p className="text-gray-400">newstroy1932002@email.com</p>
                  </div>
                </div>

                <div className="flex items-start mb-4">
                  <div className="text-orange-500 mr-3 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-medium">โทรศัพท์:</h4>
                    <p className="text-gray-400">081-004-3967</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-orange-500 mr-3 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-medium">ที่อยู่:</h4>
                    <p className="text-gray-400">277 ม.18 ต.บ้านแปะ อ.จอมทอง จ.เชียงใหม</p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-4">โซเชียลมีเดีย</h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/NewPGM"
                  target="_blank"
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  <svg
  className="w-6 h-6"
  fill="currentColor"
  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M7.75 2h8.5A5.76 5.76 0 0 1 22 7.75v8.5A5.76 5.76 0 0 1 16.25 22h-8.5A5.76 5.76 0 0 1 2 16.25v-8.5A5.76 5.76 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm9.5 2a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zM12 6.5A5.5 5.5 0 1 1 6.5 12 5.51 5.51 0 0 1 12 6.5zm0 1.5A4 4 0 1 0 16 12a4 4 0 0 0-4-4z" />
</svg>  
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100063983498112"
                  target="blank"
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* แบบฟอร์มติดต่อ */}
          <div
            className={`w-full lg:w-2/3 transition-all duration-700 delay-500 ease-out ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-50 opacity-0"
            }`}
          >
            <div className="bg-black bg-opacity-40 backdrop-blur-sm p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-6">ส่งข้อความถึงฉัน</h3>

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-300 mb-1"
                    >
                      ชื่อ *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-white"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300 mb-1"
                    >
                      อีเมล *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-white"
                      required
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    หัวข้อ
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-white"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    ข้อความ *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-white"
                    required
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`px-6 py-3 bg-orange-500 text-white font-medium rounded-lg transition-colors ${
                      isSubmitting
                        ? "opacity-75 cursor-not-allowed"
                        : "hover:bg-orange-600"
                    }`}
                  >
                    {isSubmitting ? "กำลังส่ง..." : "ส่งข้อความ"}
                  </button>

                  {submitStatus === "success" && (
                    <div className="mt-4 p-3 bg-green-500 bg-opacity-20 border border-green-500 text-green-500 rounded-lg">
                      ส่งข้อความสำเร็จ! ขอบคุณที่ติดต่อ
                      ฉันจะตอบกลับโดยเร็วที่สุด
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="mt-4 p-3 bg-red-500 bg-opacity-20 border border-red-500 text-red-500 rounded-lg">
                      เกิดข้อผิดพลาด! กรุณาลองใหม่อีกครั้ง
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;