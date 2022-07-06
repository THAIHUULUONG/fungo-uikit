import { noop } from "lodash";
import { DropdownMenuItems, DropdownMenuItemType } from "../../components/DropdownMenu/types";
import { MenuItemsType } from "../../components/MenuItems/types";
import { LinkStatus } from "./types";

export const status = {
  LIVE: <LinkStatus>{
    text: "LIVE",
    color: "failure",
  },
  SOON: <LinkStatus>{
    text: "SOON",
    color: "warning",
  },
  NEW: <LinkStatus>{
    text: "NEW",
    color: "success",
  },
};

export const links: MenuItemsType[] = [
  {
    label: 'Buy MINION',
    icon: 'clear',
    href: '/buyminion',
    showItemsOnMobile:true,
    items: [
      {
        label: 'Buy MINION',
        href: '/buyminion',
      },
    ]
  },
  {
    label: 'Buy DEMI',
    icon: 'clear',
    href: '/buydemi',
    showItemsOnMobile:true,
    items: [
      {
        label: 'Buy DEMI',
        href: '/buydemi',
      },
    ]
  },
  {
    label: 'Les Plus Beaux Paroles',
    icon: 'clear',
    href: '/message',
    showItemsOnMobile:true,
    items: [
      {
        label: 'Les Plus Beaux Paroles',
        href: '/message',
      },
    ]
  },
];

export const userMenulinks: DropdownMenuItems[] = [
  {
    label: "Wallet",
    onClick: noop,
    type: DropdownMenuItemType.BUTTON,
  },
  {
    label: "Transactions",
    type: DropdownMenuItemType.BUTTON,
  },
  {
    type: DropdownMenuItemType.DIVIDER,
  },
  {
    type: DropdownMenuItemType.BUTTON,
    disabled: true,
    label: "Dashboard",
  },
  {
    type: DropdownMenuItemType.BUTTON,
    disabled: true,
    label: "Portfolio",
  },
  {
    label: "Profile",
    href: "/profile",
  },
  {
    type: DropdownMenuItemType.EXTERNAL_LINK,
    href: "https://pancakeswap.finance",
    label: "Link",
  },
  {
    type: DropdownMenuItemType.DIVIDER,
  },
  {
    type: DropdownMenuItemType.BUTTON,
    onClick: noop,
    label: "Disconnect",
  },
];
export const MoreInfo = [
  {
    label: "WhitePaper",
    href: "https://docs.hesman.net/hesman-legend/du-an-hesman-legend/ve-hesman-legend",
  },
  {
    label: "Docs",
    href: "https://hesman.net/",
  },
  {
    label: "Smart Contract",
    href: "https://hesman.net/",
  }
]

export const MENU_HEIGHT = 66;
export const MENU_ENTRY_HEIGHT = 48;
export const MOBILE_MENU_HEIGHT = 44;
export const SIDEBAR_WIDTH_FULL = 240;
export const SIDEBAR_WIDTH_REDUCED = 56;
export const TOP_BANNER_HEIGHT = 70;
export const TOP_BANNER_HEIGHT_MOBILE = 84;
