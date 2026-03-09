/*
import * as React from "react"
import {
  PanelGroup,
  Panel,
  ResizeHandle,
} from "react-resizable-panels"
import { GripVertical } from "lucide-react"

import { cn } from "@/lib/utils"

const ResizablePanelGroup = ({
  className,
  ...props
}: React.ComponentProps<typeof PanelGroup>) => (
  <PanelGroup
    className={cn(
      "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
      className
    )}
    {...props}
  />
)

const ResizablePanel = Panel

const ResizableHandle = ({
  withHandle,
  className,
  ...props
}: React.ComponentProps<typeof ResizeHandle> & {
  withHandle?: boolean
}) => (
  <ResizeHandle
    className={cn(
      "relative flex w-px items-center justify-center bg-border",
      className
    )}
    {...props}
  >
    {withHandle && (
      <div className="z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border">
        <GripVertical className="h-2.5 w-2.5" />
      </div>
    )}
  </ResizeHandle>
)

export { ResizablePanelGroup, ResizablePanel, ResizableHandle
*/