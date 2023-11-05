import styled from 'styled-components';

interface ProgressBarActiveProps {
  scrollFactor: number;
}

const ProgressBarActive: React.FC<ProgressBarActiveProps> = ({ scrollFactor }) => {
  return <StyledActiveProgressBar scrollWidth={scrollFactor} />;
};

const StyledActiveProgressBar = styled.div<{ scrollWidth: number }>`
  position: fixed;
  top: 0;
  left: 0;
  width: ${({ scrollWidth }) => scrollWidth * 100}%;
  height: 10px;
  background-color: yellow;
  z-index: 9991;
`;

export default ProgressBarActive;
