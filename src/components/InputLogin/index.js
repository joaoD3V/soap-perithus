import styled from 'styled-components';

const InputLogin = styled.input`
  width: 300px;
  height: 30px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 1px solid #000;
  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #000;
    opacity: 1; /* Firefox */
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #000;
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: #000;
  }
`;

export default InputLogin;
