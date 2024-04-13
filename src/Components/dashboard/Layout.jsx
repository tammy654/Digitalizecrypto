import Header from "./Header";

const Layout = ({ sideBarToggle, children }) => {
  return (
    <div>
      <div className="flex screen_height">
        <div className="w-20 h-full border-r border-solid border-gray-shade-1"></div>
        <div className="h-full w-full">
          <div className="w-[95%]">
            <Header sideBarToggle={sideBarToggle} />
          </div>
          <main className="h-full">{children}</main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
