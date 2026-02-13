"use client";
import { Link } from "react-router-dom";
import BooqinLogo from "../assets/BooqinLogo.svg";
import {
  Heart,
  Calendar,
  Clock,
  Bell,
  User,
  Gift,
  Percent,
  Wallet,
  Headphones,
  FileText,
  LogOut,
} from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";

const menuSections = [
  {
    title: "Personal & Activity",
    items: [
      {
        name: "My Wishlist",
        icon: <Heart size={30} style={{ color: "#C07F49" }} />,
        link: "/wishlist",
      },
      {
        name: "My Bookings",
        icon: <Calendar size={30} style={{ color: "#C07F49" }} />,
        link: "/bookings",
      },
      {
        name: "Waiting List",
        icon: <Clock size={30} style={{ color: "#C07F49" }} />,
        link: "/waiting",
      },
      {
        name: "Notifications",
        icon: <Bell size={30} style={{ color: "#C07F49" }} />,
        link: "/notifications",
      },
      {
        name: "My Profile",
        icon: <User size={30} style={{ color: "#C07F49" }} />,
        link: "/profile",
      },
    ],
  },
  {
    title: "Engagement & Extras",
    items: [
      {
        name: "Refer & Earn",
        icon: <Gift size={30} style={{ color: "#C07F49" }} />,
        link: "/refer",
      },
      {
        name: "Offers",
        icon: <Percent size={30} style={{ color: "#C07F49" }} />,
        link: "/offers",
      },
      {
        name: "My Wallet",
        icon: <Wallet size={30} style={{ color: "#C07F49" }} />,
        link: "/wallet",
      },
    ],
  },
  {
    title: "Support & App Info",
    items: [
      {
        name: "Feedback & Support",
        icon: <Headphones size={30} style={{ color: "#C07F49" }} />,
        link: "/support",
      },
      {
        name: "Terms & Conditions",
        icon: <FileText size={30} style={{ color: "#C07F49" }} />,
        link: "/terms",
      },
      {
        name: "Logout",
        icon: <LogOut size={30} style={{ color: "#C07F49" }} />,
        link: "/logout",
      },
    ],
  },
];

const products = [
  {
    name: "Analytics",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Security",
    description: "Your customers’ data will be safe and secure",
    href: "#",
    icon: FingerPrintIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools",
    href: "#",
    icon: SquaresPlusIcon,
  },
  {
    name: "Automations",
    description: "Build strategic funnels that will convert",
    href: "#",
    icon: ArrowPathIcon,
  },
];
const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];

export default function Example() {
  const [active, setActive] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              alt=""
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
              className="h-8 w-auto"
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-white">
              Product
              <ChevronDownIcon
                aria-hidden="true"
                className="size-5 flex-none text-gray-500"
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 overflow-hidden rounded-3xl bg-gray-800 outline-1 -outline-offset-1 outline-white/10 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
            >
              <div className="p-4">
                {products.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-white/5"
                  >
                    <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-700/50 group-hover:bg-gray-700">
                      <item.icon
                        aria-hidden="true"
                        className="size-6 text-gray-400 group-hover:text-white"
                      />
                    </div>
                    <div className="flex-auto">
                      <a
                        href={item.href}
                        className="block font-semibold text-white"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-gray-400">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 divide-x divide-white/10 bg-gray-700/50">
                {callsToAction.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-white hover:bg-gray-700/50"
                  >
                    <item.icon
                      aria-hidden="true"
                      className="size-5 flex-none text-gray-500"
                    />
                    {item.name}
                  </a>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          <Link
            to="/service"
            className="text-sm/6 font-semibold text-white capitalize"
          >
            Service
          </Link>
          <Link
            to="/salons"
            className="text-sm/6 font-semibold text-white capitalize"
          >
            Salon
          </Link>
          <Link
            to="/shop"
            className="text-sm/6 font-semibold text-white capitalize"
          >
            shop
          </Link>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm/6 font-semibold text-white">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-bg-[#001F3D] sm:max-w-sm sm:ring-1 sm:ring-gray-100/10">
          <div className="flex items-center justify-end my-3 mx-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-400"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-5" />
            </button>
          </div>
          <div className=" flow-root">
            <div className="-my-12 divide-y divide-white/10">
              <div className="space-y-2">
                {/* <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-white hover:bg-white/5">
                    Product
                    <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...products, ...callsToAction].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-white hover:bg-white/5"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure> */}
                <aside className="w-full bg-[#001F3D] text-[#FFFFFF] min-h-screen flex flex-col justify-between px-4">
                  {/* Logo */}
                  <div>
                    <div className="flex items-center justify-center mb-6">
                      <div className=" w-full rounded px-2">
                        <img
                          src={BooqinLogo}
                          alt="Booqin Logo"
                          className=" w-[191px] h-[191px]"
                        />
                      </div>
                    </div>

                    {/* Dynamic Sections */}
                    {menuSections.map((section, index) => (
                      <div key={index} className="mb-5 text-[#FFFFFF]">
                        <h2 className="text-md font-semibold  uppercase mb-2 border-b border-gray-600 pb-1">
                          {section.title}
                        </h2>
                        <ul>
                          {section.items.map((item, i) => (
                            <li
                              key={i}
                              onClick={() => setActive(item.name)}
                              className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-[#001F3D] transition ${
                                active === item.name ? "bg-[#001F3D]" : ""
                              }`}
                            >
                              {item.icon}
                              <span className="text-sm">{item.name}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="text-center border-t border-gray-600 pt-3">
                    <p className="text-[#C07F49] text-sm font-medium cursor-pointer hover:underline">
                      Upgrade to Premium for Free!
                    </p>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
