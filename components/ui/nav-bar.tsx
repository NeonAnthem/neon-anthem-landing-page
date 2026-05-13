"use client";

import NAVMENUS from "@/data/static/nav.data";
import { sortByPosition } from "@/lib/positioner";
import { cn } from "@/lib/utils";
import { useNavbarStore } from "@/store/navbar-store";
import { INavbarContent, INavbarContentList } from "@/types/navbar.type";
import { useLenis } from "lenis/react";
import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useMemo, useRef } from "react";
import { NeonAnthemLogo } from "../vectors/logo";
import { Button } from "./button";
import { CTAButton } from "./cta.button";
import { Nav, NavBar, NavBrand, NavContent, NavGroup } from "./nav-items";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./navigation-menu";

export default function NavigationBar() {
  const isDark = useNavbarStore((s) => s.isDark);
  const isOpen = useNavbarStore((s) => s.isOpen);

  return (
    <Nav
      className={cn("font-heading", {
        dark: isOpen || isDark,
      })}
    >
      <NavBar className="">
        <NavBrand>
          <NeonAnthemLogo className="max-sm:h-5! h-6! fill-black dark:fill-white" />
        </NavBrand>

        <NavGroup className="hidden sm:flex gap-2">
          <Navigation />
          <NavGroup className="gap-2">
            <CTAButton className="gap-4 font-body font-medium text-base">
              Talk to Us
            </CTAButton>
          </NavGroup>
        </NavGroup>
      </NavBar>
    </Nav>
  );
}

let navCloseTimer: ReturnType<typeof setTimeout> | null = null;

function NavOpenEffect() {
  const setIsOpen = useNavbarStore((s) => s.setIsOpen);
  const lenis = useLenis();
  const lenisRef = useRef(lenis);

  useLayoutEffect(() => {
    lenisRef.current = lenis;
  });

  useLayoutEffect(() => {
    if (navCloseTimer !== null) {
      clearTimeout(navCloseTimer);
      navCloseTimer = null;
    }
    setIsOpen(true);
    lenisRef.current?.stop();
    return () => {
      const lenisInstance = lenisRef.current;
      navCloseTimer = setTimeout(() => {
        setIsOpen(false);
        lenisInstance?.start();
        navCloseTimer = null;
      }, 0);
    };
  }, [setIsOpen]);

  return null;
}

function Navigation() {
  const orderedNavMenus = useMemo(() => {
    return sortByPosition(NAVMENUS);
  }, []);

  return (
    <NavContent>
      <NavigationMenu
        className={""}
        sideOffset={0}
        positionerClassName="!left-0 !w-screen !max-w-none duration-0!"
        popupClassName="!rounded-none !shadow-none !ring-0 duration-0!"
      >
        <NavigationMenuList>
          {orderedNavMenus?.map((item) => {
            if (item?.child) {
              return (
                <NavigationMenuItem className={"font-heading"} key={item.label}>
                  <NavigationMenuTrigger
                    className={
                      "data-popup-open:hover:bg-transparent data-open:bg-transparent"
                    }
                  >
                    {item.label}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent
                    className={
                      "w-screen bg-black h-[50vh] duration-0! border-b border-b-border-foreground"
                    }
                  >
                    <NavOpenEffect />
                    <div className="grid grid-rows-3 grid-cols-1 h-full w-full sm:grid-cols-3 sm:grid-rows-1 *:w-full *:h-full border-t border-foreground py-4 px-4 *:px-2 divide-x divide-[#2d2d2d] text-background">
                      {sortByPosition(item.child)?.map((child, index) => (
                        <NavbarItemContentBlock
                          {...child}
                          key={item.id + index}
                        />
                      ))}
                    </div>
                    {/*  */}

                    {/*  */}
                  </NavigationMenuContent>
                </NavigationMenuItem>
              );
            }

            return (
              <NavigationMenuItem
                key={item.label}
                className={"text-navbar-item"}
              >
                <NavigationMenuLink
                  className={
                    "bg-transparent hover:bg-transparent hover:underline hover:underline-offset-2"
                  }
                >
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>
    </NavContent>
  );
}

function NavbarItemContentBlock({ ...item }: INavbarContent) {
  function ItemLink({
    label,
    href,
    description,
    triggerImage,
    index,
  }: INavbarContentList["children"][0] & { index: number }) {
    return (
      <Link className="flex items-start font-body group" href={href}>
        <p className="w-10 text-background/40 group-hover:text-background/90 text-xl font-medium">
          {new Intl.NumberFormat("en-In", { minimumIntegerDigits: 2 }).format(
            index,
          )}
        </p>
        <div className="">
          <h4 className="text-xl font-medium text-background/90 group-hover:text-background">
            {label}
          </h4>
          {description ? (
            <p className="text-sm font-medium text-background/40">
              {description}
            </p>
          ) : null}
        </div>
      </Link>
    );
  }

  switch (item.contentType) {
    case "list":
      return (
        <div
          className={cn("flex flex-col justify-between h-full w-full", {
            "row-span-2 sm:col-span-2": item.span === 2,
          })}
        >
          <div>
            <div>
              {/* Heading Title */}
              <div className="border-b border-foreground py-1">
                <h3 className="text-2xl font-body font-medium uppercase">
                  {item.heading}
                </h3>
              </div>
              {/* End Heading Title */}

              {/* Item List */}
              <div className="flex flex-col gap-4 py-2 h-full">
                {item?.children?.map((listItem, index) => (
                  <ItemLink {...listItem} index={index + 1} key={index} />
                ))}
              </div>
              {/* end Item List */}
            </div>
          </div>
          {/* Conversion strategy Banner */}

          <div>
            <CTABlock cta={item.cta} banner={item.banner} />
          </div>

          {/* End Conversion Strategy Banner */}
        </div>
      );

    case "image":
      return (
        <div className="h-full w-full">
          <Image
            src={item.imageSrc}
            alt={item.alt}
            width={1000}
            height={1000}
            quality={100}
            className=" w-auto object-cover h-full object-top-left"
          />
        </div>
      );
    default:
      return <></>;
  }
}

function CTABlock({
  cta,
  banner,
}: {
  cta?: INavbarContentList["cta"];
  banner?: INavbarContentList["banner"];
}) {
  if (banner) {
    return (
      <div className="w-full bg-background text-foreground px-1 py-1 mt-auto font-body">
        <div>
          <h3 className="text-foreground text-3xl font-medium">
            {banner.title}
          </h3>
          <p>{banner.subheading}</p>
        </div>
        {/*  */}
        <div className="flex gap-3 mt-4">
          <Button
            className="bg-foreground text-background px-3 py-1 rounded-none"
            nativeButton={false}
            render={<Link href={banner.cta.href}>{banner.cta.label}</Link>}
          />
          <Button
            variant={"ghost"}
            nativeButton={false}
            render={
              <Link href={banner.secondaryCta.href}>
                {banner.secondaryCta.label}
              </Link>
            }
          />
        </div>
      </div>
    );
  }
  return (
    <div className="w-full font-body">
      <Button
        variant={"secondary"}
        className={"w-full rounded-none"}
        nativeButton={false}
        render={<Link href={cta?.href ?? ""}>{cta?.label}</Link>}
      />
    </div>
  );
}
