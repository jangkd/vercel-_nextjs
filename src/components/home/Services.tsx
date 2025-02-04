export default function Services() {
  const steps = [
    { id: 1, title: '등록신청', description: '기존등록 또는 신규등록서비스 신청' },
    { id: 2, title: '서류접수', description: '해당 차량의 필요 서류확인과 서류 제출 서류 등록' },
    { id: 3, title: '등록진행', description: '담당자와의 상담후 등록진행' },
    { id: 4, title: '비용결제', description: '서비스이용 비용결제 진행' },
    { id: 5, title: '자동차등록증 발급', description: '등록완료 후 자동차등록증 발급' },
    { id: 6, title: '번호판 장착', description: '번호판제작 완료후 장착' }
  ]

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Service Transaction
          </h2>
          <p className="mt-4 text-gray-500">
            서비스 및 주요업무 서비스 처리절차가 안내됩니다.
          </p>
        </div>
        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.id}
                className="relative rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                    {step.id}
                  </span>
                  <h3 className="ml-4 text-lg font-medium text-gray-900">
                    {step.title}
                  </h3>
                </div>
                <p className="mt-4 text-gray-500">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 