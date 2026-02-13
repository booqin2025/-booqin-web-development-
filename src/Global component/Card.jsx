function Card({ image, heading, paragraph }) {
  return (
    <>
      <div className="flex justify-center items-center py-2">
        <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg relative w-[300px]">
          {/* Background Image */}
          <img
            src={image}
            alt="Hair services"
            className="w-full h-60 object-cover"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent rounded-2xl"></div>

          {/* Content */}
          <div className="absolute bottom-17 left-4 right-4 text-white flex justify-between">
            <div className="mb-2">
              <h3 className="text-lg font-semibold">{heading}</h3>
            </div>
            <div>
              <button className="bg-[#C07F49] text-white font-medium px-4 rounded-lg hover:bg-amber-600 transition w-[68px] h-[32px]">
                View
              </button>
            </div>
          </div>
          <div className="absolute bottom-2 left-4 right-4 text-white">
            <p className="text-sm mt-1 font-medium">{paragraph}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
