import { Switch, Route, useLocation } from "react-router-dom";

import {
  publicRoutes,
  publicRoutesHospi,
  studentRoutes,
  hostRoutes,
} from "../routes";
import { IRoute } from "../routes";
import { LOGIN_ROUTE, REGISTER_ROUTE } from "../utils/constants";
import Header from "./Header";
import { useContextHospi } from "../context/ContextHospi";
import { initAmplify } from "utils/utilAmplify";
import { MainFlow } from "../components/containers";
import {SelectedRoom} from "../selectedRoom/selectedRoom";

initAmplify();

export const HospiRouter = () => {
  const { pathname: nameRoute } = useLocation();
  const { userStatus } = useContextHospi();

  return (
    <MainFlow login={[LOGIN_ROUTE, REGISTER_ROUTE].includes(nameRoute)}>
      {![LOGIN_ROUTE, REGISTER_ROUTE].includes(nameRoute) && <Header />}
      <Switch>
        {userStatus === "student" &&
          studentRoutes.map(({ path, component }: IRoute) => (
            <Route path={path} component={component} exact key={path} />
          ))}

        {userStatus === "host" &&
          hostRoutes.map(({ path, component }: IRoute) => (
            <Route path={path} component={component} exact key={path} />
          ))}

        {[...publicRoutes, ...publicRoutesHospi].map(
          ({ path, component }: IRoute) => (
            <Route path={path} component={component} exact key={path} />
          )
        )}
        {/* <Redirect to={userStatus === undefined ? LOGIN_ROUTE : HOME_ROUTE} /> */}
      </Switch>
    </MainFlow>
  );
};
