import { SubmenuTaskInbox } from "@/ui/features/dashboard";

export default function InboxLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <div className='flex px-2'>
      <SubmenuTaskInbox />

      <div className='flex w-full flex-col pb-5 @container'>
        {children}
      </div>
    </div>
  );
}