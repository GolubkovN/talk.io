import { palette } from "../design/tokens/palette";

export const MENU_SECTIONS = [
  {
    title: "Account",
    items: [
      { icon: "person-outline", label: "Edit Profile", color: palette.coral500, type: "link" },
      { icon: "shield-checkmark-outline", label: "Privacy & Security", color: palette.mint500, type: "link" },
      { icon: "notifications-outline", label: "Notifications", value: "off", color: palette.violet500, type: "switch", option: 'notifications' },
    ],
  },
  {
    title: "Preferences",
    items: [
      { icon: "moon-outline", label: "Dark Mode", value: "On", color: palette.oceanBlue500, type: "switch", option: 'darkMode'},
      { icon: "language-outline", label: "Language", value: "English", color: palette.coral400, type: "link" },
      { icon: "cloud-outline", label: "Data & Storage", value: "1.2 GB", color: palette.mint600, type: "link" },
    ],
  },
  {
    title: "Support",
    items: [
      { icon: "help-circle-outline", label: "Help Center", color: palette.amber500, type: "link" },
      { icon: "chatbubble-outline", label: "Contact Us", color: palette.oceanBlue600, type: "link" },
      { icon: "star-outline", label: "Rate the App", color: palette.lime600, type: "link" },
    ],
  },
] as const;