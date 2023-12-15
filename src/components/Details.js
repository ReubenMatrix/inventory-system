import React from 'react'

function Details() {
  return (
      <main className="relative flex flex-col bg-white w-full h-[1032px] overflow-hidden text-left text-sm text-black font-inter items-start">
          <div className="relative mx-4 mt-2 mb-4 flex  items-center">
              <input
                  type="text"
                  className="w-70  sm:w-40 h-7 px-20 border-2 border-skyblue-100 rounded-full focus:outline-none focus:border-skyblue-500"
                  placeholder="Search for a drug name"
              />
          </div>

          <div className="absolute right-10 mt-3 flex items-center space-x-1">
              <div className="font-semibold text-lg">
                  Stock Level:
              </div>

              <button className="relative flex cursor-pointer items-center justify-center box-border w-10 h-5 overflow-hidden text-3xs border-[1px] border-solid border-deepskyblue bg-white outline-[2px] outline-solid outline-[#14ACC7] transition-transform duration-300 ease-in-out transform hover:scale-110">
                  <div className="font-semibold text-black">
                      All
                  </div>
              </button>

              <button className="relative flex cursor-pointer items-center justify-center box-border w-10 h-5 overflow-hidden text-3xs border-[1px] border-solid border-deepskyblue bg-white outline-[2px] outline-solid outline-[#14ACC7] transition-transform duration-300 ease-in-out transform hover:scale-110">
                  <div className="font-semibold text-black">
                      Low
                  </div>
              </button>

              <button className="relative  flex cursor-pointer items-center justify-center box-border w-10 h-5 overflow-hidden text-3xs border-[1px] border-solid border-deepskyblue bg-white outline-[2px] outline-solid outline-[#14ACC7] transition-transform duration-300 ease-in-out transform hover:scale-110">
                  <div className="font-semibold  text-black">
                      Expired
                  </div>
              </button>

              <div className="font-semibold text-lg ml-8">
                  Type:
              </div>

              <button className="relative flex cursor-pointer items-center justify-center box-border w-10 h-5 overflow-hidden text-3xs border-[1px] border-solid border-deepskyblue bg-white outline-[2px] outline-solid outline-[#14ACC7] transition-transform duration-300 ease-in-out transform hover:scale-110">
                  <div className="font-semibold text-black">
                      All
                  </div>
              </button>

              <button className="relative  flex cursor-pointer items-center justify-center box-border w-10 h-5 overflow-hidden text-3xs border-[1px] border-solid border-deepskyblue bg-white outline-[2px] outline-solid outline-[#14ACC7] transition-transform duration-300 ease-in-out transform hover:scale-110">
                  <div className="font-semibold text-black">
                      Drug
                  </div>
              </button>

              <button className="relative flex cursor-pointer items-center justify-center box-border w-12 h-5 overflow-hidden text-3xs border-[1px] border-solid border-deepskyblue bg-white outline-[2px] outline-solid outline-[#14ACC7] transition-transform duration-300 ease-in-out transform hover:scale-110">
                  <div className="font-semibold text-black">
                      Supplies
                  </div>
              </button>

              <button className="relative flex cursor-pointer items-center justify-center box-border w-13 h-5 overflow-hidden text-3xs border-[1px] border-solid border-deepskyblue bg-white outline-[2px] outline-solid outline-[#14ACC7] transition-transform duration-300 ease-in-out transform hover:scale-110">
                  <div className="font-semibold text-black">
                      Equipments
                  </div>
              </button>
          </div>

          <div className='relative mt-0 flex-col justify-center items-center flex flex-wrap '>
              <div className="absolute flex top-[0px] left-[3px] bg-skyblue-200 w-[154px] h-[38px] overflow-hidden">
                  <div className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_59px)]">
                      NAME sort A→Z
                  </div>
              </div>
              <div className="absolute flex top-[0px] left-[163px] bg-skyblue-200 w-[116px] h-[38px] overflow-hidden">
                  <div className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_38px)]">
                      ITEM CODE
                  </div>
              </div>
              <div className="absolute flex top-[0px] left-[284px] bg-skyblue-200 w-[111px] h-[38px] overflow-hidden">
                  <div className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_17.5px)]">
                      TYPE
                  </div>
              </div>
              <div className="absolute flex top-[0px] left-[400px] bg-skyblue-200 w-[158px] h-[38px] overflow-hidden">
                  <div className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_64px)]">
                      RETAIL PRICE (INR)
                  </div>
              </div>
              <div className="absolute flex top-[0px] left-[563px] bg-skyblue-200 w-[131px] h-[38px] overflow-hidden">
                  <div className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_47.5px)]">
                      TOTAL STOCK
                  </div>
              </div>
              <div className="absolute flex top-[0px] left-[699px] bg-skyblue-200 w-[148px] h-[38px] overflow-hidden">
                  <div className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_62px)]">
                      AVAILABLE STOCK
                  </div>
              </div>
              <div className="absolute flex top-[0px] left-[852px] bg-skyblue-200 w-[138px] h-[38px] overflow-hidden">
                  <div className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_54px)]">
                      EXPIRED STOCK
                  </div>
              </div>
              <div className="absolute flex top-[0px] left-[995px] bg-skyblue-200 w-[152px] h-[38px] overflow-hidden">
                  <div className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_55.5px)]">
                      REORDER LEVEL
                  </div>
              </div>
          </div>
      </main>

  )
}

export default Details
