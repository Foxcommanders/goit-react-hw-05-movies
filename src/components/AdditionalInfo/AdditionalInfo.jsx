import { StyledAdditionalInfo, StyledLink } from './AdditionalInfo.styled';
import { Outlet } from 'react-router-dom';
import { Suspense } from "react";
import Loader from 'components/Loader/Loader';

const AdditionalInfo = () => {
  return (
    <StyledAdditionalInfo>
      <ul className="info">
        <li className="info">
          <StyledLink to="reviews">
            <p>Reviews</p>
          </StyledLink>
        </li>
        <li className="info">
          <StyledLink to="cast">
            <p>Cast</p>
          </StyledLink>
        </li>
        <li className="info">
          <h2>Additional Information</h2>
        </li>
      </ul>
      <Suspense fallback={<Loader/>}>
      <Outlet />
      </Suspense>
    </StyledAdditionalInfo>
  );
};

export default AdditionalInfo;
