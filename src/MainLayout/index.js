import MainRoute from "./MainRouter";
import { Header, BodyContainer } from "./styles";
import logo from "../logo.png";

const MainLayout = () => {

  return (
    <div>
      <Header>
        <img src={logo} />
        <h1>MusiCollab</h1>
        <div></div>
        <button>Log in</button>
        <button>Sign up</button>
      </Header>
      <BodyContainer>
        <MainRoute />
      </BodyContainer>
    </div>
  );
}

export default MainLayout;