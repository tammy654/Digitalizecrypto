import Header from "./Header";

const Layout = ({ sideBarToggle, children }) => {
  return (
    <div>
      <div className="flex w-full">
        <div className="screen_height flex flex-col w-[90%] mx-auto">
          <div className="w-full">
            <Header sideBarToggle={sideBarToggle} />
          </div>
          <main className="h-full overflow-hidden">{children}</main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
