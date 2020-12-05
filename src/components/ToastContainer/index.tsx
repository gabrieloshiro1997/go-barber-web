import React from 'react';
import { FiAlertCircle, FiXCircle } from 'react-icons/fi';

import { Container, Toast } from './styles';

const ToastContainer: React.FC = () => {
  return (
    <Container>
      <Toast hasDescription>
        <FiAlertCircle size={18} />
        <div>
          <strong>Aconteceu um erro</strong>
          <p>Não foi possíver fazer login na aplicação</p>

          <button type="button">
            <FiXCircle size={18} />
          </button>
        </div>
      </Toast>
      <Toast type="success" hasDescription={false}>
        <FiAlertCircle size={18} />
        <div>
          <strong>Aconteceu um erro</strong>

          <button type="button">
            <FiXCircle size={18} />
          </button>
        </div>
      </Toast>
      <Toast type="error" hasDescription>
        <FiAlertCircle size={18} />
        <div>
          <strong>Aconteceu um erro</strong>
          <p>Não foi possíver fazer login na aplicação</p>

          <button type="button">
            <FiXCircle size={18} />
          </button>
        </div>
      </Toast>
    </Container>
  );
};

export default ToastContainer;