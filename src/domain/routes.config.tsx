import { UserTypes } from "@/remote/gql-generated";
import { useGeneral } from "@/stores";

export interface INavRoute {
  title: string;
  url: string;
  // icon: JSX.Element;
  // icon: IconKeys;
  icon: string;
  children?: INavRoute[];
}

export const NavRoutes: INavRoute[] = [
  // {
  //   url: '/dashboard/taskInbox',
  //   title: 'Bandeja de Tareas',
  //   icon: 'Inbox',
  // },
  {
    url: '/dashboard/reports',
    title: 'Reportes',
    icon: 'Summarize',
  },
  {
    url: '/dashboard/processManagement',
    title: 'Gestión de Procesos',
    icon: 'AccountTree',
  },
  // {
  //     url: "/dashboard/settings",
  //     title: "Configuración",
  //     icon: <Icons.Settings />
  // },
  {
    url: '/dashboard/settings/',
    title: 'Configuración',
    icon: 'Settings',
    children: [
      {
        url: '/dashboard/settings/users',
        title: 'Usuarios',
        icon: 'Settings',
      },
      {
        url: '/dashboard/settings/processDefinitions',
        title: 'Process Definitions',
        icon: 'Settings',
      },
      {
        url: '/settings/deployments',
        title: 'Deployments',
        icon: 'Settings',
      },
      {
        url: '/dashboard/settings/processInstances',
        title: 'Process Instances',
        icon: 'Settings',
      },
      {
        url: '/dashboard/settings/inboxes',
        title: 'Bandejas',
        icon: 'Inbox',
      },
      {
        url: '/dashboard/settings/notificationProfile',
        title: 'Perfiles de Mensajeria',
        icon: 'Settings'
      }

      // {
      //   url: '/dashboard/settings/systemVariables',
      //   title: 'Variables del Sistema',
      //   icon: 'Settings',
      // },
    ],
  },
];

export const getRoutesByTypeOfUser = (): INavRoute[] => {
  const typeOfUser = useGeneral.getState().userInfo?.type;
  const noAdminType = [UserTypes.Citizen, UserTypes.Officer]
  const adminType = [UserTypes.Admin, UserTypes.SuperAdmin]

  const navRouteAdmin = NavRoutes;

  const navRoutesNoAdmin = NavRoutes.filter(route => route.title !== "Configuración")

  if(!typeOfUser) return navRoutesNoAdmin

  
  return noAdminType.includes(typeOfUser) ? navRoutesNoAdmin : navRouteAdmin
}
