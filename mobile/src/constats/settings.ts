import { palette } from "../design/tokens/palette";

export const MENU_SECTIONS = [
  {
    title: "Account",
    items: [
      { icon: "person-outline", label: "Edit Profile", color: palette.coral500 },
      { icon: "shield-checkmark-outline", label: "Privacy & Security", color: palette.mint500 },
      { icon: "notifications-outline", label: "Notifications", value: "On", color: palette.violet500 },
    ],
  },
  {
    title: "Preferences",
    items: [
      { icon: "moon-outline", label: "Dark Mode", value: "On", color: palette.oceanBlue500 },
      { icon: "language-outline", label: "Language", value: "English", color: palette.coral400 },
      { icon: "cloud-outline", label: "Data & Storage", value: "1.2 GB", color: palette.mint600 },
    ],
  },
  {
    title: "Support",
    items: [
      { icon: "help-circle-outline", label: "Help Center", color: palette.amber500 },
      { icon: "chatbubble-outline", label: "Contact Us", color: palette.oceanBlue600 },
      { icon: "star-outline", label: "Rate the App", color: palette.lime600 },
    ],
  },
];