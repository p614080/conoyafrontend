import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
const SingroomComponent = ({ image, name, price, address }) => {
  return (
    <div>
      <div></div>
      <div className="border border-gray-300 rounded-lg shadow-lg p-4 max-w-sm mx-auto">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <div className="mt-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-bold">{name}</h2>
            <FontAwesomeIcon
              icon={faStar}
              className="text-gray-300 text-xl" // ml-2로 간격 추가
            />
          </div>

         

          <p className="text-gray-600">{address}</p>
        </div>
      </div>
    </div>
  );
};

export default SingroomComponent;
