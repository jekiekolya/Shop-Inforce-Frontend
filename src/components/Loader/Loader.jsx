import { Circles } from 'react-loader-spinner';

const Loader = ({
  height = '100',
  width = '100',
  color = 'rgb(235, 40, 65)',
  center,
}) => {
  const style = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  };

  return center ? (
    <div style={style}>
      <Circles
        height={height}
        width={width}
        color={color}
        ariaLabel="circles-loading"
      />
    </div>
  ) : (
    <Circles
      height={height}
      width={width}
      color={color}
      ariaLabel="circles-loading"
    />
  );
};

export default Loader;
