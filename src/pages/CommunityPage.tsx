const CommunityPage = () => {
  return (
    <div className="flex flex-col items-center my-12 md:my-20 gap-16 text-center">
      <div className="flex flex-col items-center gap-10 text-center">
        <h1 className="text-6xl text-brown">Community</h1>
      </div>

      <div className="w-full flex justify-center">
        <div className="h-[3px] w-20 bg-orange"></div>
      </div>

      <div className="flex flex-col gap-12 w-5/6">
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          {/* EVENT */}
          <div className="flex flex-col items-center justify-center gap-4 w-full md:w-1/3 h-48 bg-gray-200/50 rounded-xl">
            <img src="icon_edit.png" alt="icon_edit" />
            <h3 className="text-xl font-bold text-brown">EVENT</h3>
          </div>
          {/* 공지사항 */}
          <div className="flex flex-col items-center justify-center gap-4 w-full md:w-1/3 h-48 bg-gray-200/50 rounded-xl">
            <img src="icon_chemical.png" alt="icon_chemical" />
            <h3 className="text-xl font-bold text-brown">공지사항</h3>
          </div>
          {/* FAQ */}
          <div className="flex flex-col items-center justify-center gap-4 w-full md:w-1/3 h-48 bg-gray-200/50 rounded-xl">
            <img src="icon_handshake.png" alt="icon_handshake" />
            <h3 className="text-xl font-bold text-brown">FAQ</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;
