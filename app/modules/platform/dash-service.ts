import { getDashboardDao } from "./dash-dao";

export const getDashboardService = async () => {
  return await getDashboardDao();
};

