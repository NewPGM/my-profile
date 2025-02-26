export default function Maincontent() {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-center items-center max-w-6xl mx-auto mt-24 md:mt-20 px-4 gap-8">
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-1">
          <p className="text-3xl md:text-4xl font-semibold mb-2 w-fit hover:scale-105 hover:transition-all">FrontEnd</p>
          <p className="text-hilight text-3xl md:text-4xl mb-4 md:mb-6 hover:scale-105 hover:transition-all">Developer</p>
          <div className="max-w-md text-gray-300 leading-relaxed ">
            ผมเป็นคนชอบเรียนรู้สิ่งใหม่ๆ และพัฒนาตัวเองอยู่เสมอ
            มีความมุ่งมั่นตั้งใจในการทำงาน
            ผมมีความสนใจในด้านเทคโนโลยีและการพัฒนาซอฟต์แวร์
            โดยหวังว่าจะได้นำความรู้และประสบการณ์มาใช้ให้เกิดประโยชน์กับองค์กรครับ
          </div>
        </div>
        
        <div className="flex-1 flex justify-center order-1 md:order-2 mb-6 md:mb-0">
          <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-lg flex items-center justify-center hover:scale-105 hover:transition-all">
            <img src="/images/devicon_nextjs.png" alt="Next.js Icon" className="max-w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}