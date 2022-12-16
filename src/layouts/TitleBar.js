import useDarkMode from 'hooks/useDarkMode';
import {
  // FaRegBell,
  FaMoon,
  FaSun,
} from 'react-icons/fa';

function TitleBar() {
  return (
    <div className="top-navigation">
       <Title />
      <ThemeIcon />
      {/* <BellIcon /> */}
    </div>
  );
}

const Title = () => <h5 className="title-text">Book Shop</h5>;

// const BellIcon = () => <FaRegBell size="24" className="top-navigation-icon" data-modal-toggle="authentication-modal"/>;

const ThemeIcon = () => {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleMode = () => setDarkTheme(!darkTheme);
  return (
    <span onClick={handleMode}>
      {darkTheme ? (
        <FaSun size="24" className="top-navigation-icon" />
      ) : (
        <FaMoon size="24" className="top-navigation-icon" />
      )}
    </span>
  );
};

export default TitleBar;
