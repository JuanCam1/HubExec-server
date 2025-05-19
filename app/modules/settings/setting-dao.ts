// import { NotFoundError } from "../../error/not-found-error";
// import { capitalizeText } from "../../lib/capitalize";
// import { prisma } from "../../lib/prisma";

// export const changeThemeDao = async (id: number, theme: ThemeI): Promise<SettingOptionsI> => {
//   const setting = await prisma.configuration.update({
//     where: {
//       id: Number(id),
//     },
//     data: {
//       theme: theme,
//     },
//   });

//   return setting;
// };

// export const changeSettingsDao = async (payload: Omit<SettingOptionsI, "theme">): Promise<SettingOptionsI> => {
//   const { id, aptType, builderType, maxVehiclesPerResident } = payload;

//   const dataCapitalize = {
//     builderType: capitalizeText(builderType),
//     aptType: capitalizeText(aptType),
//     maxVehiclesPerResident
//   }

//   const setting = await prisma.configuration.update({
//     where: {
//       id: Number(id),
//     },
//     data: dataCapitalize
//   });

//   return setting;
// };

// export const getSettingsDao = async (): Promise<SettingOptionsI> => {
//   const settings = await prisma.configuration.findUnique({
//     select: {
//       id: true,
//       theme: true,
//       builderType: true,
//       aptType: true,
//       maxVehiclesPerResident: true,
//     },
//     where: {
//       id: 1
//     }
//   });

//   if (!settings) throw new NotFoundError("No se encontró la configuración");

//   return settings;
// };
