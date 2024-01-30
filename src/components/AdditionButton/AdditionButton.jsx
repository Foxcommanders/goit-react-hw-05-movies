import { StyledAdditionalButton } from './AdditionButton.Styled';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import AdditionalInfo from 'components/AdditionalInfo/AdditionalInfo';

const AdditionalButton = () => {
  const [hidden, setHidden] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (window.location.pathname.includes('reviews')) {
      setHidden(false);
      return;
    }
  }, []);

  const handlerClick = () => {
    if (window.location.pathname.includes('reviews')) {
      return;
    }
    navigate('reviews');
    setHidden(false);
  };

  return (
    <>
      <StyledAdditionalButton
        onClick={handlerClick}
        type="button"
        className={hidden === false ? 'hidden' : ''}
      >
        Additional Information
      </StyledAdditionalButton>
      {hidden === false && <AdditionalInfo />}
    </>
  );
};

export default AdditionalButton;
