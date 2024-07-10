import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { BookForm } from "./BookForm";
import MagicButton from "@/components/common/MagicButton";

export function BookCall() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <MagicButton 
          title="Book a call"
          otherClasses="text-white hover:bg-[#FE4433]"
        />
        {/* <Button className="bg-[#FE4433] text-white hover:bg-red-600">
          Book a call
        </Button> */}
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Book a call</DrawerTitle>
            <DrawerDescription>Set your daily activity goal.</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <BookForm />
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
