import MainRoute from "./MainRouter";

const MainLayout = () => {

  return (
    <div>
      <div>Header</div>
      <div>body below:</div>
      <MainRoute />
    </div>
  );
}

export default MainLayout;