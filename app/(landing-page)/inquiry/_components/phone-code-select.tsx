"use client";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Popover } from "@base-ui/react/popover";
import * as Flags from "country-flag-icons/react/3x2";
import { Country } from "country-state-city";
import { CheckIcon, ChevronDownIcon } from "lucide-react";
import { useMemo, useState } from "react";

interface PhoneCodeSelectProps {
  /** ISO 3166-1 alpha-2 country code, e.g. "IN" */
  value?: string;
  onChange?: (isoCode: string) => void;
  onBlur?: () => void;
}

export function PhoneCodeSelect({
  value,
  onChange,
  onBlur,
}: PhoneCodeSelectProps) {
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);

  const countries = useMemo(() => Country.getAllCountries(), []);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase().replace(/^\+/, "");
    if (!q) return countries;
    return countries.filter(
      (c) => c.name.toLowerCase().includes(q) || c.phonecode.startsWith(q),
    );
  }, [countries, search]);

  const selected = useMemo(
    () => countries.find((c) => c.isoCode === value),
    [countries, value],
  );

  const Flag = selected
    ? (Flags[selected.isoCode as keyof typeof Flags] ?? null)
    : null;

  return (
    <Popover.Root
      open={open}
      onOpenChange={(isOpen) => {
        setOpen(isOpen);
        if (!isOpen) {
          setSearch("");
          onBlur?.();
        }
      }}
    >
      <Popover.Trigger
        type="button"
        className="flex h-full items-center gap-1 border-r border-input px-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none"
      >
        {Flag ? (
          <Flag className="h-auto w-5 shrink-0 rounded-full" />
        ) : (
          <span className="text-xs">--</span>
        )}
        <span className="min-w-[2.5ch] font-medium tabular-nums">
          {selected ? `+${selected.phonecode}` : "--"}
        </span>
        <ChevronDownIcon className="size-3 opacity-60" />
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Positioner sideOffset={4} side="bottom" align="start">
          <Popover.Popup className="z-50 w-72 overflow-hidden rounded-md bg-popover text-popover-foreground shadow-md ring-1 ring-foreground/10 origin-(--transform-origin) duration-100 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95">
            <div className="border-b border-border p-2">
              <Input
                placeholder="Search country or dial code…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="h-8 text-sm"
                // eslint-disable-next-line jsx-a11y/no-autofocus
                autoFocus
              />
            </div>
            <div className="max-h-56 overflow-y-auto p-1">
              {filtered.length === 0 ? (
                <p className="py-4 text-center text-sm text-muted-foreground">
                  No countries found.
                </p>
              ) : (
                filtered.map((c) => {
                  const CFlag = Flags[c.isoCode as keyof typeof Flags] ?? null;
                  const isSelected = value === c.isoCode;
                  return (
                    <button
                      key={c.isoCode}
                      type="button"
                      className={cn(
                        "flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-sm transition-colors hover:bg-accent hover:text-accent-foreground",
                        isSelected && "bg-accent text-accent-foreground",
                      )}
                      onClick={() => {
                        onChange?.(c.isoCode);
                        setOpen(false);
                      }}
                    >
                      {CFlag ? (
                        <CFlag className="size-3.5 shrink-0 rounded-sm" />
                      ) : (
                        <span className="size-3.5 shrink-0" />
                      )}
                      <span className="flex-1 truncate text-left">
                        {c.name}
                      </span>
                      <span className="shrink-0 tabular-nums text-xs text-muted-foreground">
                        +{c.phonecode}
                      </span>
                      {isSelected && (
                        <CheckIcon className="size-3.5 shrink-0 text-primary" />
                      )}
                    </button>
                  );
                })
              )}
            </div>
          </Popover.Popup>
        </Popover.Positioner>
      </Popover.Portal>
    </Popover.Root>
  );
}
