"use client";
import { useGeneral } from "@/stores";
import Image from "next/image";
import Link from "next/link";

export const TopBar = () => {
  // const userInfo = useGeneral(state => state.userInfo)
  // const logout = useGeneral(state => state.logout)
  const setModalStatus = useGeneral(state => state.setModalStatus)
  // const { t, i18n } = useTranslation()

  // const changeLanguage = (lng: string) => {
  //   i18n.changeLanguage(lng);
  // };

  // const openModal = () => {
  //   setModalStatus({ id: "1" })
  // }

  return (
    <div style={{ gridArea: "header" }} className=' w-full min-h-12 px-10 py-3 bg-zinc-800 justify-between items-center flex text-white'>
      <div className='flex items-center gap-5 min-h-[21px] divide-x'>
        {/* <p onClick={openModal} className='text-2xl font-semibold leading-snug'>MAGNETO BPM</p> */}
        <Link href={"/dashboard/inbox"} className='text-2xl font-semibold leading-snug'>MAGNETO BPM</Link>

        <div className='pl-4 text-sm font-medium leading-snug flex gap-2 items-center'>
          {' '}

          <div className='p-1 rounded-full bg-white'>
          <Image width={28} height={28} className='w-7 h-7 rounded-ful' src='/neiva_iconpng.png' alt='entidad' />
          </div>
           {/* {userInfo?.organization?.name} */}
           Usuario
        </div>
      </div>

      {/* <MenuList
        menuButton={({ open }) => {
          return (
            <button className='py-2 px-2.5 flex justify-center items-center gap-2.5 rounded-md border border-white'>
              <Icons.Swit /> <Icons.Arrow className={cn('-rotate-90 fill-white', { 'rotate-90': open })} />
            </button>
          );
        }}>
        <MenuItem onClick={() => { changeLanguage('es') }} className={'bg-zinc-800'}><Icons.SIIAFE /> español</MenuItem>
        <MenuItem onClick={() => { changeLanguage('en') }} className={'bg-zinc-800'}><Icons.SIIAFE /> english</MenuItem>
      </MenuList> */}

      {/* <div className='flex-[0.5] flex items-center justify-center'>SWIT</div> */}

      <div className='flex items-center'>
        {/* <Icons.Bell className='fill-white mr-12' />

        <MenuList
          menuButton={({ open }) => {
            return (
              <button className='flex items-center  gap-2 mr-8'>
                <div className='bg-[#BABABA] rounded-full p-2'>
                <Icons.Person className='fill-stroke-dark' />
                </div>

                <div className='mr-3'>
                  <p className='font-bold'>{userInfo?.fullName || ""}</p>
                  <p>{userInfo?.identificationType || ""} {userInfo?.identificationNumber || ""}</p>
                </div>

                <Icons.Arrow className={cn('-rotate-90 fill-white', { 'rotate-90': open })} />
              </button>
            );
          }}>
          <MenuItem>Opcion 1</MenuItem>
          <MenuItem>Opcion 2</MenuItem>
        </MenuList> */}

        {/* <p onClick={logout} className='cursor-pointer'>{t('logout')}</p> */}
        <Link href={'/login'} className='cursor-pointer'>{"Cerrar sesión"}</Link>
      </div>
    </div>
  );
};
