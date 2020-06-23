import styled from 'styled-components';

export const Container = styled.div`
  margin: 50px 0;

  .card {
    margin: 0 2% !important;
    margin-bottom: 4% !important;
  }
  .title {
    font-weight: bold !important;
  }
  .details {
    font-size: 12px !important;
    padding: 8px 0 !important;
  }

  .infected {
    border-bottom: 10px solid rgba(0, 0, 255, 0.5);
  }
  .recovered {
    border-bottom: 10px solid rgba(0, 255, 0, 0.5);
  }
  .deaths {
    border-bottom: 10px solid rgba(255, 0, 0, 0.5);
  }
`;
