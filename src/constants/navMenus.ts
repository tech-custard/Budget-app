import { AuthenticationIcon } from "@assets/icons/Authentication";
import { ContactIcon } from "@assets/icons/ContactIcon";
import { DashboardIcon } from "@assets/icons/DashboardIcon";
import { ProfileIcon } from "@assets/icons/ProfileIcon";
import { SettingIcon } from "@assets/icons/SettingIcon";

export const navMenuData = [
  { title: "Dashboard", path: "dashboard", icon: DashboardIcon },
  { title: "Logout", path: "auth", icon: AuthenticationIcon },
];

export const dropDownMenu = [
  { name: "My Profile", icon: ProfileIcon, path: "dashboard/profile" },
  { name: "My Contacts", icon: ContactIcon, path: "dashboard/contact" },
  {
    name: "Account Settings",
    icon: SettingIcon,
    path: "dashboard/settings",
  },
];
