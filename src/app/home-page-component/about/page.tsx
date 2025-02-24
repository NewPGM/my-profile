export default function about() {
          return <div><div className="w-full text-center">
              <p className="text-hilight text-4xl mb-6 text-center">About Me</p>
              </div>
              <div className="flex justify-between items-center max-w-6xl mx-auto px-4">
                <div className="flex-1">
                <p className="text-hilight text-4xl text-center">ประวัติส่วนตัว</p>
                <p className="text-4xl font-semibold mb-2">Jeerasak Tajai</p>
                <div className="max-w-md text-gray-300 leading-relaxed">
                ผมชื่อ นายจีระศักดิ์ ต๋าใจ <br/>ชื่อเล่น นิว<br/>เกิดวันที่ 19 มีนาคม 2545 <br/>เชื้อชาติ ไทย <br/>ศาสนา พุทธ <br/>ความสามารถพิเศษ <br/>เล่นกีต้าเป็น ร้องเพลงได้นิดหน่อย <br/>ความใฝ่ฝันอยากเป็นคนรวยครับ
                  </div>
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="w-96 h-96  rounded-lg flex items-center justify-center" >
                    <img src="/images/devicon_nextjs.png" alt="" />
                  </div>
                </div>
              </div></div>;
}