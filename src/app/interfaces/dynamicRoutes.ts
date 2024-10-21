import { Router } from "express";

export type TDynamicRouteInfo = {
  path: string;
  route: Router;
};
