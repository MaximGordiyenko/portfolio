import { useState } from "react";

const TextWithShowMore = ({ text, maxLength = 250 }) => {
  const [showFullText, setShowFullText] = useState(false);
  
  const truncatedText = text.slice(0, maxLength);
  const shouldShowButton = text.length > maxLength;
  
  return (
    <div>
      <p className="text-[19px] text-justify py-2 text-gray-400">
        {showFullText ? text : `${truncatedText}...`}
        {shouldShowButton && (
          <span
            onClick={() => setShowFullText(!showFullText)}
            className="text-sky-500 hover:text-sky-600 font-semibold cursor-pointer text-sm">
          {showFullText ? " Show Less" : " Show More"}
        </span>
        )}
      </p>
    </div>
  );
};

export default TextWithShowMore;
