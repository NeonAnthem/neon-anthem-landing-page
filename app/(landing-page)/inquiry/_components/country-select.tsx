"use client";

import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import * as Flags from "country-flag-icons/react/3x2";
import { Country } from "country-state-city";
import { CheckIcon, ChevronDownIcon, XIcon } from "lucide-react";
import { useMemo, useState } from "react";

interface CountryMultiSelectProps {
  value?: string[];
  onChange?: (value: string[]) => void;
  onBlur?: () => void;
  placeholder?: string;
}

export function CountryMultiSelect({
  value = [],
  onChange,
  onBlur,
  placeholder = "Select countries…",
}: CountryMultiSelectProps) {
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);

  const countries = useMemo(() => Country.getAllCountries(), []);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return countries;
    return countries.filter((c) => c.name.toLowerCase().includes(q));
  }, [countries, search]);

  const selectedCountries = useMemo(
    () => countries.filter((c) => value.includes(c.isoCode)),
    [countries, value],
  );

  const toggle = (isoCode: string) => {
    if (value.includes(isoCode)) {
      onChange?.(value.filter((v) => v !== isoCode));
    } else {
      onChange?.([...value, isoCode]);
    }
  };

  const removeChip = (isoCode: string, e: React.MouseEvent) => {
    e.stopPropagation();
    onChange?.(value.filter((v) => v !== isoCode));
  };

  return (
    <Popover
      open={open}
      onOpenChange={(isOpen) => {
        setOpen(isOpen);
        if (!isOpen) {
          setSearch("");
          onBlur?.();
        }
      }}
    >
      <PopoverTrigger className="flex min-h-9 w-full flex-wrap items-center gap-1 rounded-md border border-input bg-transparent px-2.5 py-1.5 text-sm shadow-xs transition-[color,box-shadow] focus-visible:border-ring focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50 dark:bg-input/30">
        {selectedCountries.length === 0 ? (
          <span className="text-muted-foreground">{placeholder}</span>
        ) : (
          selectedCountries.slice(0, 4).map((c) => {
            const Flag = Flags[c.isoCode as keyof typeof Flags] ?? null;
            return (
              <span
                key={c.isoCode}
                className="flex items-center gap-1 rounded-sm bg-accent px-1.5 py-0.5 text-xs font-medium"
              >
                {Flag && (
                  <Flag className="h-3 w-[0.9rem] shrink-0 rounded-[2px]" />
                )}
                <span className="max-w-[5rem] truncate">{c.name}</span>
                <button
                  type="button"
                  onClick={(e) => removeChip(c.isoCode, e)}
                  className="ml-0.5 rounded-full opacity-50 hover:opacity-100"
                  aria-label={`Remove ${c.name}`}
                >
                  <XIcon className="size-2.5" />
                </button>
              </span>
            );
          })
        )}
        {selectedCountries.length > 4 && (
          <span className="text-xs text-muted-foreground">
            +{selectedCountries.length - 4} more
          </span>
        )}
        <ChevronDownIcon className="ml-auto size-4 shrink-0 opacity-50" />
      </PopoverTrigger>

      <PopoverContent className="z-50 w-(--anchor-width) overflow-hidden rounded-md bg-popover text-popover-foreground shadow-md ring-1 ring-foreground/10 origin-(--transform-origin) duration-100 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95">
        <div className="border-b border-border p-2">
          <Input
            placeholder="Search countries…"
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
              const isSelected = value.includes(c.isoCode);
              return (
                <button
                  key={c.isoCode}
                  type="button"
                  className={cn(
                    "flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-sm transition-colors hover:bg-accent hover:text-accent-foreground",
                    isSelected && "bg-accent/50 text-accent-foreground",
                  )}
                  onClick={() => toggle(c.isoCode)}
                >
                  {CFlag ? (
                    <CFlag className="h-3.5 w-[1.25rem] shrink-0 rounded-sm" />
                  ) : (
                    <span className="h-3.5 w-[1.25rem] shrink-0" />
                  )}
                  <span className="flex-1 truncate text-left">{c.name}</span>
                  <CheckIcon
                    className={cn(
                      "size-3.5 shrink-0 text-primary transition-opacity",
                      isSelected ? "opacity-100" : "opacity-0",
                    )}
                  />
                </button>
              );
            })
          )}
        </div>
        {value.length > 0 && (
          <div className="border-t border-border p-1.5">
            <button
              type="button"
              className="w-full rounded-sm px-2 py-1 text-xs text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              onClick={() => onChange?.([])}
            >
              Clear all ({value.length})
            </button>
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
}
