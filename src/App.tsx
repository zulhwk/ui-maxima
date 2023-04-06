import { useRoutes } from "react-router-dom";
import routes from "./routes";

const App = () => {
  const registryAllRoutes = useRoutes(routes());
  return registryAllRoutes;
};

export default App;