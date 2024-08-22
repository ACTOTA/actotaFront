import { Menu } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

type dropDownProps = {
  children: React.ReactNode[];
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export default function Dropdown({ children, className, ...rest }: dropDownProps) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          Options
          <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" />
        </Menu.Button>
      </div>

      <Menu.Items
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          {children?.map((child, index) => (
            <Menu.Item key={index}>
              <a href='#'
                className=''>
                {child?.toString()}
              </a>
            </Menu.Item>
          ))}
        </div>
      </Menu.Items>
    </Menu>
  )
}
