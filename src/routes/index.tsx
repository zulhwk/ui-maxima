import { Layouts } from "../components/layouts";

const routes = () => [
  {
    path: "/",
    element: <Layouts />,
    children: [
      {
        path: "",
        element: <>HOME</>,
      }
    ],
  }
];

export default routes;