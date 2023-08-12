import './styles/index.css';

const Card = (props) => {
  const { titleText, imageSrc, altText } = props;
  return (
    <>
      <div className={`card-container`}>
        {imageSrc && (
          <img src={imageSrc} alt={altText} className='card-image' />
        )}
        <p className='title-text'>{titleText}</p>
      </div>
    </>
  );
};

export default Card;

// This is a reusable component, coz props are parent dependent.
