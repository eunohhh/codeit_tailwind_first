'use client';

import { Select, SelectItem } from '@nextui-org/react';

export const animals = [
  { key: 'all', label: '모든타입' },
  { key: 'legacy', label: 'Legacy' },
  { key: 'version1', label: 'Version 1' },
  { key: 'version2', label: 'Version 2' },
  { key: 'version3', label: 'Version 3' },
];

function NextuiPage() {
  return (
    <div className="w-screen h-screen p-8 flex items-start justify-center">
      <Select
        className="max-w-xs"
        label="Select an animal"
        classNames={{
          trigger:
            'bg-white data-[hover=true]:bg-white data-[hover=true]:ring-2 data-[hover=true]:ring-codeit_purple data-[hover=true]:border-codeit_purple data-[open=true]:rounded-b-none',
          popoverContent:
            'p-0 w-full bg-white data-[hover=true]:bg-white data-[open=true]:rounded-t-none',
          listboxWrapper: 'p-0 w-full',
        }}
      >
        {animals.map((animal) => (
          <SelectItem
            key={animal.key}
            className="min-h-14 h-14 bg-white hover:bg-white data-[focus=true]:bg-white data-[focus=true]:text-black data-[hover=true]:bg-white data-[hover=true]:text-black data-[hover=true]:ring-2 data-[hover=true]:ring-codeit_purple data-[hover=true]:border-codeit_purple data-[hover=true]:rounded-none data-[key=version3]:rounded-b-lg"
            classNames={{}}
          >
            {animal.label}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
}

export default NextuiPage;
