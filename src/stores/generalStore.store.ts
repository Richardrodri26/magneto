"use client"
import { User } from '@/remote/gql-generated';
import { create, StateCreator } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer'
import { shallow } from 'zustand/shallow';
import { createWithEqualityFn } from 'zustand/traditional';

export type AlertTypes = 'success' | 'info' | 'error' | 'warning' | 'custom';
interface IAlertContent {
  type: AlertTypes;
  title?: string | JSX.Element;
  description?: string | JSX.Element;
  onCancel?: () => void;
  onConfirm: () => void;
  showCancelButton?: boolean;
  showConfirmButton?: boolean;
  cancelButtonText?: string;
  confirmButtonText?: string;
}

export interface IModal {
  id: string;
  content?: any;
}

export interface IGeneral {
  isOpenMenu: boolean;
  // tabs: ITabItemProps[];

  // currentTab?: ITabItemProps;
  // prevTab?: ITabItemProps;

  showGraphics: boolean;
  expandSubMenu: boolean;

  openDiagramTask: boolean;

  userInfo?: User;

  currentAlert?: IAlertContent;

  modalStatus?: IModal;

  // firstTaskInbox?: INavRoute & { searchTag?: string };

  countErrorDashboard: number;
}

export interface IGeneralActions {
  setIsOpenMenu: (isOpen: boolean) => void;
  // setTabs: (tabs: ITabItemProps[]) => void;
  setShowGraphics: (showGraphics: boolean) => void;
  setExpandSubMenu: (expandSubMenu: boolean) => void;
  setOpenDiagramTask: (openDiagramTask: boolean) => void;
  setUserInfo: (user?: User) => void;

  // setFirstTaskInbox: (taskInbox?: INavRoute & { searchTag?: string }) => void;

  logout: () => void;

  setCurrentAlert: (currentAlert?: IAlertContent) => void;
  setModalStatus: (status?: IModal) => void;

  // setCurrentTab: (tab?: ITabItemProps) => void;
  // setPrevTab: (tab?: ITabItemProps) => void;

  // deleteTabByUrl: (url: string) => void;

  setCountErrorDashboard: (count: number) => void
  incrementCountErrorDashboard: () => void
  decrementCountErrorDashboard: () => void

}

export type IGeneralStore = IGeneral & IGeneralActions;

const storeApi: StateCreator<IGeneralStore, [['zustand/devtools', never], ['zustand/immer', never]]> = (set, get) => ({
  isOpenMenu: false,

  showGraphics: true,
  expandSubMenu: true,
  openDiagramTask: false,
  countErrorDashboard: 0,
  // modalStatus: false,

  // tabs: [
  //   // { data: {}, title: "Bandeja de Tareas", url: "/dashboard/taskInbox", icon: Icons.Home },
  //   // { data: {}, title: 'Bandeja de Tareas', url: '/dashboard/taskInbox', icon: 'Home' },
  //   // { data: {}, title: "Configuracion", url: "/dashboard/settings", order: 2},
  // ],

  setIsOpenMenu: isOpen => {
    set(state => {
      state.isOpenMenu = isOpen;
    }, false, { type: "" });
  },

  // setTabs: tabs => {
  //   set(state => {
  //     state.tabs = tabs;
  //   });
  // },
  setShowGraphics: showGraphics => {
    set(state => {
      state.showGraphics = showGraphics;
    });
  },

  setExpandSubMenu: expandSubMenu => {
    set(state => {
      state.expandSubMenu = expandSubMenu;
    });
  },

  setOpenDiagramTask: openDiagramTask => {
    set(state => {
      state.openDiagramTask = openDiagramTask;
    });
  },

  setUserInfo: user => {
    set(state => {
      state.userInfo = user;
      state.currentAlert = undefined;
      state.openDiagramTask = false;
      // state.tabs = [];
    });
  },

  logout: () => {
    set(state => {
      state.userInfo = undefined;
      // state.firstTaskInbox = undefined
      // state.currentTab = undefined;
      // state.prevTab = undefined;
      // state.modalStatus = undefined;
      // state.tabs = []
    });

    // Cookies.remove(import.meta.env.VITE_USER_TOKEN);

    // router.navigate({ to: '/auth/login' });

    // location.reload()
  },

  setCurrentAlert: currentAlert => {
    set(state => {
      state.currentAlert = currentAlert;
    });
  },

  setModalStatus: status => {
    set(state => {
      state.modalStatus = status;
    });
  },

  // setFirstTaskInbox: taskInbox => {
  //   set(state => {
  //     state.firstTaskInbox = taskInbox;
  //   });
  // },

  // setCurrentTab: tab => {
  //   set(state => {
  //     state.currentTab = tab
  //   })
  // },

  // setPrevTab: tab => {
  //   set(state => {
  //     state.prevTab = tab
  //   })
  // },

  // deleteTabByUrl: url => {
  //   const newTabs = get().tabs.filter(item => item.url !== url)

  //   set(state => {
  //     state.tabs = newTabs

  //   })

  // },

  setCountErrorDashboard: count => {
    set(state => {
      state.countErrorDashboard = 0
    })
  },

  decrementCountErrorDashboard: () => {
    set(state => {
      state.countErrorDashboard = get().countErrorDashboard === 0 ? 0 : get().countErrorDashboard - 1
    })
  },

  incrementCountErrorDashboard: () => {
    set(state => {
      state.countErrorDashboard = get().countErrorDashboard + 1
    })
  },

});

export const useGeneral = createWithEqualityFn<IGeneralStore>()(
  devtools(
    persist(immer(storeApi), {
      name: 'generalStore',
      // { anonymousActionType: 'general' }

      partialize: (state) => (Object.fromEntries(
        Object.entries(state).filter(([key]) => !['modalStatus', 'currentAlert',].includes(key))
      )

      ),
    },),
    { name: "general-store", anonymousActionType: 'general', }
  ),

)

// basic store functions
export const setter = useGeneral.setState;
export const getter = useGeneral.getState;

// export function getNextTab(tabs: ITabItemProps[]): ITabItemProps | undefined {
//   const existing = new Set(tabs);
//   return getter().tabs.find(tab => !existing.has(tab));
// }

// export const useNavigationTabs = () => {
//   const navigate = useNavigate();
//   const currentTabs = getter().tabs;
//   const firstTaskInbox = getter().firstTaskInbox;
//   const setTabs = getter().setTabs;
//   const setCurrentTab = getter().setCurrentTab;
//   const currentTab = getter().currentTab;
//   const prevTab = getter().prevTab;
//   const setPrevTab = getter().setPrevTab;
//   const defaultTab = { url: "/dashboard/taskInbox", title: "Bandeja de Tareas", searchTag: undefined, data: {} }

//   const openTab = (tabToOpen: ITabItemProps) => {
//     const hasOpenedSameTab = currentTabs.find(tab => tab.url === tabToOpen.url);

//     if (!hasOpenedSameTab) {
//       setTabs([...currentTabs, { ...tabToOpen, order: (currentTabs?.at(-1)?.order || 1) + 1 }]);
//     }

//     if (currentTab) {
//       setPrevTab(currentTab)
//     }

//     navigate({ to: tabToOpen.url, search: { filterBy: tabToOpen?.searchTag } });
//     setCurrentTab(tabToOpen)


//   };

//   const closeTab = (tabToClose: ITabItemProps) => {
//     const tabsToSave = (currentTabs || []).filter(tab => (tab.url !== tabToClose.url || tab.title !== tabToClose.title));
//     const lastTab = tabsToSave.at(-1)

//     if (currentTabs.length == 1) return;

//     if (tabToClose.url.includes('/dashboard/trays')) return;

//     const hasPrevTabInCurrentTabs = currentTabs.find((tab) => tab.title === prevTab?.title && tab.url === prevTab?.url)


//     if (prevTab && hasPrevTabInCurrentTabs) {
//       const tabToNavigate = tabToClose.url === prevTab.url ? (lastTab || defaultTab) : prevTab
//       navigate({ to: tabToNavigate.url, search: { filterBy: tabToNavigate?.searchTag } });

//       setTabs(tabsToSave);
//       setPrevTab(undefined)
//       setCurrentTab(tabToNavigate)

//       return

//     };

//     if (lastTab) {


//       navigate({ to: lastTab.url, search: { filterBy: lastTab?.searchTag } });

//       setCurrentTab(lastTab)
//       setTabs(tabsToSave);

//       return

//     }



//     // console.log("Redireccion")
//     // navigate({ to: '/dashboard/taskInbox' });
//     // console.log('`${firstTaskInbox?.searchTag}`', `${firstTaskInbox?.searchTag}`)

//     navigate({ to: firstTaskInbox?.url, search: { filterBy: `${firstTaskInbox?.searchTag}` } });
//     // router.navigate({ to: "/dashboard", replace: true })
//     setTabs(tabsToSave);
//   };

//   const closeCurrentTab = () => {
//     if (currentTab) {
//       closeTab(currentTab)
//     }
//   }

//   return {
//     openTab,
//     closeTab,
//     closeCurrentTab
//   };
// };

// export const fireAlert = async (alert?: IAlertContent) => {
//     setter((state) => state.currentAlert = alert)
// }
export const fireAlert = (alert?: IAlertContent) => {
  return new Promise(resolve => {
    setter(state => {
      state.currentAlert = {
        ...alert,
        type: alert?.type || 'info',
        onConfirm: async () => {
          if (alert?.onConfirm) {
            await alert.onConfirm();
            closeAlert();
          }
          resolve(true);
        },
        onCancel: () => {
          if (alert?.onCancel) {
            alert.onCancel();
          }
          closeAlert();
          resolve(false);
        },
      };
    });

    // setter((state) => state.currentAlert = alert)
  });
};

export const closeAlert = () => {
  setter(draft => {
    draft.currentAlert = undefined;
  });
};

/**
 * return general state value and/or funtions implementing a shallow option
 * @param selector funtions selector
 * @returns
 */
export const useShallowGeneralStore = <U>(selector: (state: IGeneral & IGeneralActions) => U) => {
  return useGeneral(selector, shallow);
};

export const useModalLoadingStore = create<{
  loadingVisible: boolean;
  showLoading: (value: boolean) => void;
}>(set => ({
  loadingVisible: false,
  showLoading: (value: boolean) => set(() => ({ loadingVisible: value })),
}));

export const modalLoadingGetter = useModalLoadingStore.getState;
export const modalLoadingSetter = useModalLoadingStore.setState;
