const RoomComponent = ({
  id,
  image,
  name,
  capacity,
  remainingTime,
  remainingSongs,
}) => {
  return (
    <div className="flex border p-4 rounded-md shadow-md m-2"> {/* 카드 스타일 */}
      <div className="flex-shrink-0 mr-4"> {/* 이미지 영역 */}
        <img
          src={image}
          alt={`${name} 이미지`}
          className="w-32 h-32 object-cover rounded-md" // 이미지 크기 조정 및 스타일링
        />
      </div>
      <div className="flex-grow mt-1"> {/* 정보 영역 */}
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="mb-1">수용 인원 : {capacity}</p>
        <p className="mb-1">남은 시간 : {remainingTime}</p>
        <p className="mb-1">남은 곡 : {remainingSongs}</p>
      </div>
    </div>
  );
};

export default RoomComponent;
