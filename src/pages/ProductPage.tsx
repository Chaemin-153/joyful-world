const ProductPage = () => {
  return (
    <div className="p-10 space-y-20">
      <h1 className="text-6xl text-brown">Product</h1>
      {/* 1. 수제잼 */}
      <div className="flex flex-col gap-12">
        <h2 className="text-4xl font-medium">잼류</h2>
        <div className="flex flex-col gap-4">
          <div className="flex justify-start gap-4">
            {/* 수제잼 1 */}
            <div className="border-3 border-brown space-y-2 w-1/3">
              <h4 className="border-b-2 border-brown p-4">수제잼 1</h4>
              <div className="p-4 space-y-2">
                <li>설명</li>
              </div>
            </div>
            {/* 수제잼 2 */}
            <div className="border-3 border-brown space-y-2 w-1/3">
              <h4 className="border-b-2 border-brown p-4">수제잼 2</h4>
              <div className="p-4 space-y-2">
                <li>설명</li>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 2. 구움과자 */}
      <div className="flex flex-col gap-12">
        <h2 className="text-4xl font-medium">구움과자</h2>
        <div className="flex flex-col gap-4">
          <div className="flex justify-start gap-4">
            {/* 구움과자 1 */}
            <div className="border-3 border-brown space-y-2 w-1/3">
              <h4 className="border-b-2 border-brown p-4">마들렌</h4>
              <div className="p-4 space-y-2">
                <li>설명</li>
              </div>
            </div>
            {/* 구움과자 2 */}
            <div className="border-3 border-brown space-y-2 w-1/3">
              <h4 className="border-b-2 border-brown p-4">머핀</h4>
              <div className="p-4 space-y-2">
                <li>설명</li>
              </div>
            </div>
            {/* 구움과자 3 */}
            <div className="border-3 border-brown space-y-2 w-1/3">
              <h4 className="border-b-2 border-brown p-4">휘낭시에</h4>
              <div className="p-4 space-y-2">
                <li>설명</li>
              </div>
            </div>
            {/* 구움과자 4 */}
            <div className="border-3 border-brown space-y-2 w-1/3">
              <h4 className="border-b-2 border-brown p-4">답례품 사례</h4>
              <div className="p-4 space-y-2">
                <li>설명</li>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 3. 그래놀라 */}
      <div className="flex flex-col gap-12">
        <h2 className="text-4xl font-medium">그래놀라</h2>
        <div className="flex flex-col gap-4">
          <div className="flex justify-start gap-4">
            {/* 그래놀라 1 */}
            <div className="border-3 border-brown space-y-2 w-1/3">
              <h4 className="border-b-2 border-brown p-4">베리바나나</h4>
              <div className="p-4 space-y-2">
                <li>설명</li>
              </div>
            </div>
            {/* 그래놀라 2 */}
            <div className="border-3 border-brown space-y-2 w-1/3">
              <h4 className="border-b-2 border-brown p-4">솔티 카라멜</h4>
              <div className="p-4 space-y-2">
                <li>설명</li>
              </div>
            </div>
            {/* 그래놀라 3 */}
            <div className="border-3 border-brown space-y-2 w-1/3">
              <h4 className="border-b-2 border-brown p-4">초코베리</h4>
              <div className="p-4 space-y-2">
                <li>설명</li>
              </div>
            </div>
            {/* 그래놀라 4 */}
            <div className="border-3 border-brown space-y-2 w-1/3">
              <h4 className="border-b-2 border-brown p-4">시나몬</h4>
              <div className="p-4 space-y-2">
                <li>설명</li>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 4. 에너지바 */}
      <div className="flex flex-col gap-12">
        <h2 className="text-4xl font-medium">에너지바</h2>
        <div className="flex flex-col gap-4">
          <div className="flex justify-start gap-4">
            {/* 에너지바 1 */}
            <div className="border-3 border-brown space-y-2 w-1/3">
              <h4 className="border-b-2 border-brown p-4">녹차맛</h4>
              <div className="p-4 space-y-2">
                <li>설명</li>
              </div>
            </div>
            {/* 에너지바 2 */}
            <div className="border-3 border-brown space-y-2 w-1/3">
              <h4 className="border-b-2 border-brown p-4">초코맛</h4>
              <div className="p-4 space-y-2">
                <li>설명</li>
              </div>
            </div>
            {/* 에너지바 3 */}
            <div className="border-3 border-brown space-y-2 w-1/3">
              <h4 className="border-b-2 border-brown p-4">흑임자맛</h4>
              <div className="p-4 space-y-2">
                <li>설명</li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
