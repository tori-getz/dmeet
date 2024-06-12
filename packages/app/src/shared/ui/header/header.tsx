import HeaderLogo from '~/shared/assets/header-logo.svg?react';

export const Header: React.FC = () => {
  return (
    <div className="absolute top-0 left-0 px-[40px] py-[30px]">
      <HeaderLogo />
    </div>
  );
};
