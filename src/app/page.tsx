import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-[2.5rem] font-[800] my-5 text-[#04433B] leading-9">
          WeWork <span className="font-[700]">+</span> Salesforce
        </h1>
        <button className="font-[600] bg-[#00B686] rounded-md text-white px-4 py-2 ">
          Publish/Share
        </button>
      </div>

      <div className="relative ">
        <div className={`h-[191px]  relative `}>
          <Image
            src="/assets/images/heroBgImage.png"
            fill
            alt="bg-image"
            className="rounded-[10px]"
          ></Image>
        </div>

        <div className="max-w-[45.64%] h-[191px] absolute top-0 right-0 py-[2rem] bg-white opacity-70 px-32 ">
          <h1 className="text-[3.055rem] font-[900]">Workspace Proposal</h1>
        </div>
        <div className="bg-white space-x-4 p-4 rounded-[10px] absolute flex items-center -bottom-16 left-6">
          <div className="relative w-[77px] h-[77px]  ">
            <Image src="/assets/images/wework.png" fill alt="logo" />
          </div>
          <span className="text-[#dbdbdb] font-[500] text-[4rem]">+</span>
          <div className="relative w-[98px] h-[88px]">
            <Image
              src="/assets/images/salesforce-image.png"
              fill
              alt="saleforce"
            />
          </div>
        </div>
      </div>
    </>
  );
}
