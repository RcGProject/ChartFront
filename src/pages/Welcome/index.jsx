import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as s from './styles';
import img1 from '../../assets/img/img1.png';
import img2 from '../../assets/img/img2.png';
import img3 from '../../assets/img/img3.png';

function Welcome() {
  const navigate = useNavigate();

  return (
    <s.Container className="container">
      <s.Header>
        <h2>Bem vindo ao ChartProject</h2>
        <p>
          O ChartProject tem a finalidade de criar gráficos personalizados de forma
          dinâmica.
        </p>
      </s.Header>

      <s.Wrapper className="wrapper">
        <s.Ul className="images-container">
          <li className="image">
            <img src={img1} alt="Fictional" />
          </li>
          <li className="image">
            <img src={img2} alt="Fictional" />
          </li>
          <li className="image">
            <img src={img3} alt="Fictional" />
          </li>
          <li className="image">
            <img src={img2} alt="Fictional" />
          </li>
          <li className="image">
            <img src={img1} alt="Fictional" />
          </li>
          <li className="image">
            <img src={img3} alt="Fictional" />
          </li>
          <li className="image">
            <img src={img2} alt="Fictional" />
          </li>
          <li className="image">
            <img src={img1} alt="Fictional" />
          </li>
          <li className="image">
            <img src={img2} alt="Fictional" />
          </li>
          <li className="image">
            <img src={img3} alt="Fictional" />
          </li>
          <li className="image">
            <img src={img2} alt="Fictional" />
          </li>
          <li className="image">
            <img src={img3} alt="Fictional" />
          </li>
        </s.Ul>
      </s.Wrapper>

      <s.SkipButton onClick={() => navigate('/')} type="button">
        Pular
      </s.SkipButton>
    </s.Container>
  );
}

export default Welcome;
