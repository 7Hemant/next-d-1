import Image from "next/image";
import { GrDocumentPdf } from "react-icons/gr";
import { AiOutlineMessage } from "react-icons/ai";
import { FiShare2 } from "react-icons/fi";
export default function Home() {
  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-[18px] md:text-[2.5rem] font-[800] my-5 text-[#04433B] leading-9">
          WeWork <span className="font-[700]">+</span> Salesforce
        </h1>
        <button className="font-[600] bg-[#00B686] rounded-md text-white px-4 py-2 ">
          Publish/Share
        </button>
      </div>
      <div className="relative  ">
        <div className={`h-[82px] md:h-[191px]  relative `}>
          <Image
            src="/assets/images/heroBgImage.png"
            fill
            alt="bg-image"
            className="rounded-[10px] object-full  "
          ></Image>
        </div>

        <div className="max-w-[45.64%] h-[82px] md:h-[191px] absolute top-0 right-0 pt-[1rem] md:pt-[3rem] lg:py-[2rem]  bg-white opacity-70 px-10 sm:px-24  lg:px-32 clipPath ">
          <h1 className=" text-[1.3rem] sm:text-[2rem]  lg:text-[3.055rem] font-[900]  ">
            Workspace Proposal
          </h1>
        </div>
        <div className="bg-white space-x-4 p-4 rounded-[10px] absolute flex items-center -bottom-10 md:-bottom-16 left-6">
          <div className="relative w-[44px] h-[44px] md:w-[77px] md:h-[77px]  ">
            <Image src="/assets/images/wework.png" fill alt="logo" />
          </div>
          <span className="text-[#dbdbdb] font-[500] text-[2rem] sm:text-[4rem]">
            +
          </span>
          <div className="relative w-[50px] h-[50px] md:w-[98px] md:h-[88px]">
            <Image
              src="/assets/images/salesforce-image.png"
              fill
              alt="saleforce"
            />
          </div>
        </div>
      </div>

      <div className="mt-[4rem]">
        <div>
          <h1 className="text-[25px] text-[#233735] font-[700]">
            Project Scope Recap
          </h1>
        </div>
        <div className="border-b  flex justify-between items-center mt-4">
          <div className="flex space-x-[7px] items-center text-[10px] md:text-[1rem]">
            <button className="px-[14px] py-2 text-[#657372] hover:text-[#00B686] font-[700] border border-[#BDC3C2] rounded-t-[5px] capitalize">
              Basic Info
            </button>
            <button className="px-[14px] py-2 text-[#657372] hover:text-[#00B686] font-[700] border border-[#BDC3C2] rounded-t-[5px]  capitalize">
              Files
            </button>
            <button className="px-[14px] py-2 text-[#657372] hover:text-[#00B686] font-[700] border border-[#BDC3C2] rounded-t-[5px]  capitalize">
              mutual action plan
            </button>
            <button className="px-[14px] py-2 text-[#657372] hover:text-[#00B686] font-[700] border border-[#BDC3C2] rounded-t-[5px]  capitalize">
              Contact
            </button>
          </div>
          <button className=" hidden md:block px-[14px] py-2 text-[#657372] hover:text-[#00B686] font-[700] border border-[#BDC3C2] rounded-t-[5px] capitalize">
            internal Actions
          </button>
        </div>
      </div>
      <section className="mt-[2.5rem] flex gap-5 mb-10 ">
        <div className="bg-white rounded-[10px] max-w-[20%] px-2 h-max hidden lg:block ">
          <button className=" capitalize  text-[#657372] text-[1.13rem] border-b font-[700] p-2 my-2 w-full">
            Overview
          </button>
          <button className="font-[400]  capitalize text-[#7B8786] text-[.9rem] p-2 my-2 w-full border-b">
            Welcome
          </button>
          <button className="font-[400]  capitalize text-[#7B8786] text-[.9rem] p-2 my-2 w-full border-b ">
            Product Capabilites
          </button>
          <button className="font-[400]  capitalize text-[#7B8786] text-[.9rem] p-2 my-2 w-full border-b ">
            Customer Success Stories
          </button>
          <button className="font-[400]  capitalize text-[#7B8786] text-[.9rem] p-2 my-2 w-full border-b ">
            File Sharing
          </button>
          <button className="font-[400]  capitalize text-[#7B8786] text-[.9rem] p-2 my-2 w-full border-b ">
            Our Deck
          </button>
        </div>
        <div className="w-full">
          <div className="flex justify-between items-center rounded-[5rem]">
            <h1 className="font-[700] text-[1.56rem] text-[#233735] capitalize">
              Company profile
            </h1>
            <div className="md:flex items-center space-x-2 border rounded-[5px] py-2 hidden">
              <div className="p-2 border-r ">
                <div className="relative w-[10.5px] h-[16px]  ">
                  <Image
                    src="/assets/icons/ArrowSortDown.svg"
                    fill
                    alt="downloadarrow"
                  />
                </div>
              </div>

              <div className="p-2 border-r">
                <div className="relative w-[18px] h-[18px] ">
                  <Image
                    src="/assets/icons/eyeoff.svg"
                    fill
                    alt="downloadarrow"
                  />
                </div>
              </div>
              <div className="p-2">
                <div className="relative w-[16px] h-[16px] ">
                  <Image
                    src="/assets/icons/delete.svg"
                    fill
                    alt="downloadarrow"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full relative mt-[26px] ">
            <div className="relative w-full md:h-[459px] h-[238px] rounded-[10px]">
              <Image
                src="/assets/images/company-profile-bg-image.png"
                fill
                alt="company-profile"
                className="rounded-[10px] object-cover"
              />
              <div className="absolute opacity-80 left-[50%] -translate-x-[50%] flex items-center border bg-white p-2 top-1 md:top-6 rounded-[5px]">
                <div className="flex items-center mr-8">
                  <GrDocumentPdf fill=" #657372" />
                  <p className="text-[14px] ml-2 text-[#657372]">1/15</p>
                </div>
                <div className="p-2 border-r ">
                  <div className="relative w-[18px] h-[18px]  ">
                    <Image
                      src="/assets/icons/ArrowDownload.svg"
                      fill
                      alt="downloadarrow"
                    />
                  </div>
                </div>

                <div className="p-2 border-r">
                  <div className="relative w-[18px] h-[18px] ">
                    <Image
                      src="/assets/icons/ZoomIn.svg"
                      fill
                      alt="downloadarrow"
                    />
                  </div>
                </div>
                <div className="p-2 border-r">
                  <div className="relative w-[16px] h-[16px] ">
                    <Image
                      src="/assets/icons/zoomOut.svg"
                      fill
                      alt="downloadarrow"
                    />
                  </div>
                </div>
                <div className="p-2">
                  <div className="relative w-[16px] h-[16px] ">
                    <Image
                      src="/assets/icons/openbox.svg"
                      fill
                      alt="downloadarrow"
                    />
                  </div>
                </div>
              </div>

              <div className=" bg-white opacity-70 absolute top-[50%] left-[50%]  -translate-x-[50%]  -translate-y-[50%] flex flex-col justify-center items-center p-[1.5rem]  ">
                <div className=" flex justify-center max-w-[400px] min-w-[250px] md:w-[400px] h-[50px] md:h-[64.49px] opacity-100   ">
                  <Image
                    src="/assets/images/wework-logo.png"
                    width={288.54}
                    height={64.49}
                    alt="logo"
                    className="opacity-100"
                  />
                </div>
                <h3 className="font-[700] mt-2  text-[.8rem] md:text-[1.3rem]">
                  For all the ways you work, we&apos;re here
                </h3>
              </div>
            </div>
            <div className="flex text-[1.8rem] text-[ #657372] mt-4">
              <div className="border-r px-2">
                <AiOutlineMessage className="text-[#657372]" />
              </div>
              <div className="px-2">
                <FiShare2 className="text-[#657372]" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
