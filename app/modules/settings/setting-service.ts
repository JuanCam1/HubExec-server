import {
  changeSettingsDao,
  changeThemeDao,
  getSettingsDao
} from "./setting-dao";

export const changeThemeService = async (id: number, theme: ThemeI) => {
  return await changeThemeDao(id, theme);
};

export const changeSettingsService = async (payload: Omit<SettingOptionsI, "theme">) => {
  return await changeSettingsDao(payload);
};

export const getSettingsService = async () => {
  return await getSettingsDao();
};
