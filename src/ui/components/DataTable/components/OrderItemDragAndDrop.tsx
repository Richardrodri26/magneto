"use client"
import { useSortable } from "@dnd-kit/sortable";
import { Column } from "@tanstack/react-table";
import { useDynamicTableContext } from "../context";
import { CSS } from '@dnd-kit/utilities';
import { Eye, EyeOff, GripVertical } from "lucide-react";
import { RenderIf } from "@/utils/components";
import { Label } from "../../ui/Label";

interface IOrderItemDragAndDrop {
  column: Column<any, unknown>;

}

export const OrderItemDragAndDrop = ({ column }: IOrderItemDragAndDrop) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: column?.id });

  const [table] = useDynamicTableContext(state => state.table);

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const columns = table.getVisibleFlatColumns() || []

  const filteredColumns = (columns).filter(item => !((item?.columnDef?.meta as any)?.isAction || false) && (item.columns || []).length == 0);
  const currentColumnsCount = filteredColumns?.length || 0;

  const canHide = column?.getCanHide();
  const hide = column?.getIsVisible() && currentColumnsCount === 1;

  const onChangeVisibilityColumn = () => {

    return column?.getToggleVisibilityHandler()
  }

  return (
    <div onClick={e => e.stopPropagation()} style={style} key={column?.id} className='flex w-full items-center gap-1.5 px-2.5 py-1.5'>
      <div className='flex-0' ref={setNodeRef} {...attributes} {...listeners}>
        <GripVertical className='fill-[#BABABA]' />
      </div>

      <p className='flex-1'>{column?.id}</p>

      <RenderIf condition={!hide}>
        <Label className='flex-0 h-[20px] w-[24px]' htmlFor={column?.id}>
          <RenderIf condition={canHide}>
            {!column?.getIsVisible() ? <EyeOff className='cursor-pointer fill-[#BABABA]' /> : <Eye className='cursor-pointer fill-[#1570EF]' />}
          </RenderIf>

          <input id={column?.id} type='checkbox' checked={column?.getIsVisible()} onChange={onChangeVisibilityColumn()} className='flex-0 h-0 w-0' />
        </Label>
      </RenderIf>
    </div>
  );
};