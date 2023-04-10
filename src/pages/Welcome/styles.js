import styled from 'styled-components';
import BackgroundImage from '../../assets/img/BackgroundImage.png';

export const Container = styled.div`
  width: 100%;
  height: 100svh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem;
  gap: 3.4rem;

  background-image: url(${BackgroundImage});
  background-position: bottom center;
  background-size: 70% 60%;
  background-repeat: no-repeat;

  border-radius: 1rem;
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3.4rem;

  h2 {
    width: fit-content;
    color: ${({ theme }) => theme.colors.blue['400']};
    font-weight: 400;
    letter-spacing: 4%;
    font-size: 3.2rem;
    line-height: 4rem;
  }

  p {
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 2.2rem;
    letter-spacing: 1px;
    color: ${({ theme }) => theme.colors.black['500']};
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: fit-content;

  max-width: 120rem;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 2rem;

  padding: 2rem 1.5rem;
  border: 1px solid ${({ theme }) => theme.colors.yellow['200']};
  border-right: none;
  border-radius: 0.8rem;
  overflow-x: hidden;
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: row nowrap;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  .image {
    list-style: none;
    width: 20rem;
    height: 20rem;

    max-width: 20rem;
    max-height: 20rem;

    border-radius: 0.6rem;

    overflow: hidden;

    img {
      transform: scale(1);
      transition: 0.4s ease;
      border-radius: 0.6rem;

      &:hover {
        transition: 0.4s ease-out;
        transform: scale(1.04);
      }
    }
  }
`;

export const SkipButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  background: rgba(255, 255, 255, 0.84);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  border: none;
  border-radius: 1rem;

  width: 17rem;
  height: 5rem;

  font-style: normal;
  font-weight: 500;
  font-size: 2rem;
  line-height: 2.3rem;
  letter-spacing: 1px;

  color: ${({ theme }) => theme.colors.blue['300']};

  transition: 0.4s ease-in;

  :hover {
    transition: 0.4s ease-out;
    background: white;
  }
`;
