import type { SVGProps } from "react";
import LinkedinIcon from "./LinkedinIcon";
import GlobeIcon from "./GlobeIcon";
import InstagramIcon from "./InstagramIcon";
import MediumIcon from "./MediumIcon";
import MailIcon from "./MailIcon";
import DownloadIcon from "./DownloadIcon";
import PhoneIcon from "./PhoneIcon";
import ZaloIcon from "./ZaloIcon";

export type IconName = "linkedin" | "globe" | "instagram" | "medium" | "mail" | "download" | "phone" | "zalo" | string;

const icons: Record<
  IconName,
  React.ComponentType<SVGProps<SVGSVGElement>>
> = {
  linkedin: LinkedinIcon,
  globe: GlobeIcon,
  instagram: InstagramIcon,
  medium: MediumIcon,
  mail: MailIcon,
  download: DownloadIcon,
  phone: PhoneIcon,
  zalo: ZaloIcon
};

type IconProps = {
  name: IconName;
} & SVGProps<SVGSVGElement>;

const Icon = ({ name, ...props }: IconProps) => {
  const Component = icons[name];

  if (!Component) return null;

  return <Component {...props} />;
};

export default Icon;
