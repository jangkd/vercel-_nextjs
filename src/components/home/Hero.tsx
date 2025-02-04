import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:mx-auto lg:col-span-6 lg:text-left">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">스마트폰 하나로</span>
              <span className="block text-blue-600">자동차 번호판 장착까지</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg">
              전국 기반의 NETWORK로 주변에서 쉽고 빠르게 서비스를 받으세요
            </p>
            <div className="mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <a href="#" className="flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-8 py-3 text-base font-medium text-white hover:bg-blue-700 md:py-4 md:px-10 md:text-lg">
                  신규등록신청
                </a>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a href="#" className="flex w-full items-center justify-center rounded-md border border-transparent bg-green-500 px-8 py-3 text-base font-medium text-white hover:bg-green-600 md:py-4 md:px-10 md:text-lg">
                  이용후기신청
                </a>
              </div>
            </div>
          </div>
          <div className="relative mt-12 lg:col-span-6 lg:mt-0">
            <Image
              src="/car-illustration.png"
              alt="자동차 일러스트"
              width={500}
              height={300}
              className="w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
} 