export default function Features() {
  const features = [
    {
      title: '전문가와 즉시 매칭',
      description: '가까운 지역 서비스 센터와 연결되어 스마트하게 매칭됩니다.',
      icon: '🚀'
    },
    {
      title: '새로 갱신 정보제공',
      description: '자동차번호판에 관한 공지와 주요한 정보들이 제공됩니다.',
      icon: '⚡'
    },
    {
      title: '각종 서식다운로드',
      description: '필요한 모든 서류양식을 간편하게 다운로드 받을 수 있습니다.',
      icon: '📝'
    }
  ]

  return (
    <section className="bg-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Auto verse P.C.S
          </h2>
        </div>
        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div key={index} className="pt-6">
                <div className="flow-root rounded-lg bg-white px-6 pb-8">
                  <div className="-mt-6">
                    <div className="inline-flex items-center justify-center rounded-md bg-blue-500 p-3 shadow-lg">
                      <span className="text-2xl">{feature.icon}</span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 