import Image from 'next/image'
function Maincontent() {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-center items-center max-w-6xl mx-auto mt-24 md:mt-20 px-4 gap-8 ">
        <div className="flex flex-col items-center gap-4 md:items-start text-center w-full mt-10 md:text-left order-2 md:order-1">
          <p className="text-3xl md:text-4xl font-semibold mb-2 w-fit hover:scale-105 hover:transition-all">Welcome to my Website.</p>
          <p className="text-hilight text-3xl md:text-4xl mb-4 md:mb-6 hover:scale-105 hover:transition-all">สวัสดีครับ ผม นายจีระศักดิ์ ต๋าใจ</p>
          <div className=" text-gray-300 leading-relaxed md:w-[800px]">
          ผมสำเร็จการศึกษาจาก มหาวิทยาลัยราชภัฏเชียงใหม่ สาขาวิทยาการคอมพิวเตอร์ มีความสนใจและความชำนาญในการเขียนโปรแกรม รวมถึงการพัฒนาเว็บไซต์ โดยมีพื้นฐานที่แข็งแรงในด้านการวางแผน การคิดเชิงตรรกะ (Algorithmic Thinking) และการทำงานร่วมกับผู้อื่นอย่างมีประสิทธิภาพ

นอกจากด้านโปรแกรมมิ่ง ผมยังมีประสบการณ์ในการ ออกแบบกราฟิก ด้วยเครื่องมืออย่าง Photopea และ Figma และสามารถ ตัดต่อวิดีโอ ด้วย CapCut ได้อย่างคล่องแคล่ว

ปัจจุบันผมมีช่อง YouTube ที่เน้นเนื้อหาเกี่ยวกับ การสอนลง Mod เกม ซึ่งช่วยพัฒนาทักษะการสื่อสาร การอธิบาย และการสร้างคอนเทนต์ให้เข้าใจง่ายสำหรับผู้ชม

ผมเคยมีประสบการณ์ในการ ขับแกร็บ ซึ่งทำให้ได้ฝึกการสื่อสารกับลูกค้า การแก้ปัญหาเฉพาะหน้า และการบริการที่มีคุณภาพ รวมถึงมี ความสามารถในการถ่ายภาพ ซึ่งช่วยเสริมทักษะการมองเห็นในมุมมองเชิงสร้างสรรค์อีกด้วย
          </div>
        </div>
        
        <div className=" flex justify-center  md:order-2 mb-6 md:mb-0">
          <div className=" md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-lg flex items-center justify-center hover:scale-105 hover:transition-all">
            <div className=' max-w-full object-cover'>
            <Image src="/images/devicon_nextjs.png" className="object-cover " alt={''} width={250} height={250}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Maincontent;