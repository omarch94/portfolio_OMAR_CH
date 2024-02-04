interface LogoProps {
  theme: 'dark' | 'light'; // Define the possible values for the theme prop
}
const Logo: React.FC<LogoProps> = ({ theme }) => {
  // Define the image source based on the theme
  const imageSrc = theme === 'dark' ? '/images/omarcherti-w.png' : '/images/omarcherti-b.png';

  return (
    <div className="w-auto h-8 fill-neutral-800 dark:fill-white mx-4">
      {/* OMARCH */}
      <img src={imageSrc} alt="logo" className="w-auto h-8 fill-neutral-800 dark:fill-white mx-4" />
    </div>
  );
};

export default Logo;