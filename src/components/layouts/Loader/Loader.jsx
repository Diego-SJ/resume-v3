import Icon from 'src/components/common/Icon';
import './Loader.scss';

const Loader = () => {
  return (
    <div className="loader">
      <Icon icon="spinner9" className="loader-icon" />
    </div>
  );
};

export default Loader;
