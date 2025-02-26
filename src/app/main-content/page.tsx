
export default function Maincontent() {
  return (
    <div>
      <div className="flex justify-between items-center max-w-6xl mx-auto mt-20 px-4">
        <div className="flex-1">
          <p className="text-4xl font-semibold mb-2">FrontEnd</p>
          <p className="text-hilight text-4xl mb-6">Developer</p>
          <div className="max-w-md text-gray-300 leading-relaxed">
            ผมเป็นคนชอบเรียนรู้สิ่งใหม่ๆ และพัฒนาตัวเองอยู่เสมอ
            มีความมุ่งมั่นตั้งใจในการทำงาน
            ผมมีความสนใจในด้านเทคโนโลยีและการพัฒนาซอฟต์แวร์
            โดยหวังว่าจะได้นำความรู้และประสบการณ์มาใช้ให้เกิดประโยชน์กับองค์กรครับ
          </div>
        </div>
        <div className=" flex justify-center">
          <div className="w-96 h-96  rounded-lg flex items-center justify-center">
            <img src="/images/devicon_nextjs.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
