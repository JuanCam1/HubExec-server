// import { NotFoundError } from "../../error/not-found-error";
// import { currentDate, currentDateAndHour } from "../../lib/current-date-hour";
// import { prisma } from "../../lib/prisma";

// export const getDashboardDao = async () => {
//   const currentDateValue = currentDate();
//   const { fecha } = currentDateAndHour(currentDateValue);

//   const setting = await prisma.configuration.findUnique({
//     where: {
//       id: 1
//     }
//   });

//   if (!setting) throw new NotFoundError("No se encontró la configuración");

//   const [
//     builderCount,
//     aptCount,
//     residentsCount,
//     visitantsCount,
//     visitsCount,
//     visitsCurrentCount
//   ] = await Promise.all([
//     prisma.builder.count(),
//     prisma.apartament.count(),
//     prisma.resident.count(),
//     prisma.visitant.count(),
//     prisma.visit.count(),
//     prisma.visit.count({
//       where: {
//         dateEntry: fecha,
//         dateExit: fecha
//       }
//     })
//   ]);

//   return {
//     [setting.builderType]: builderCount,
//     [setting.aptType]: aptCount,
//     residents: residentsCount,
//     visitants: visitantsCount,
//     visits: visitsCount,
//     visitsCurrent: visitsCurrentCount,
//   }
// };
