"use client"

import { RenderIf } from "@/utils/components";
import { useDynamicTableContext } from "../context";
import { Label } from "../../ui/Label";
import { Eye, EyeOff } from "lucide-react";
import { Column } from "@tanstack/react-table";

interface IOrderItemDragAndDrop {
  column: Column<any, unknown>;

}

export const OnlyChangeVisibilityColumn = ({ column }: IOrderItemDragAndDrop) => {
  const [table] = useDynamicTableContext(state => state.table);

  const columns = (table.getVisibleFlatColumns() || [])
  const filteredColumns = columns.filter(item => !((item?.columnDef?.meta as any)?.isAction || false) && (item.columns || []).length == 0);
  const currentColumnsCount = filteredColumns?.length || 0;

  const canHide = column?.getCanHide();
  const hide = column?.getIsVisible() && currentColumnsCount === 1;

  const onChangeVisibilityColumn = () => {

    return column?.getToggleVisibilityHandler()
  }

  return (
    <div className='flex w-full items-center gap-1.5 px-2.5 py-1.5'>
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
