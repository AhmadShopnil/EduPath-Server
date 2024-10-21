import { Router } from "express";
import { TDynamicRouteInfo } from "../interfaces/dynamicRoutes";
import { UserRoutes } from "../modules/user/user.routes";

const router = Router();

const moduleRoutes: TDynamicRouteInfo[] = [
  { path: "/user", route: UserRoutes },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
