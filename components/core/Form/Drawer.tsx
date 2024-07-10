"use client";
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

export function BookCall({ nav = false }: { nav?: boolean }) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        {nav ? (
          <Button className="bg-[#FE4433] text-white hover:bg-[#ff4a3a]">Book a call</Button>
        ) : (
          <MagicButton
            title="Book a call"
            otherClasses="text-white hover:bg-[#FE4433]"
          />
        )}
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
