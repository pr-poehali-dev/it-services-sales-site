import * as Icons from "lucide-react";
import { LucideProps } from "lucide-react";

interface IconProps extends LucideProps {
  name: keyof typeof Icons;
  fallback?: keyof typeof Icons;
}

const Icon = ({ name, fallback = "CircleAlert", ...props }: IconProps) => {
  const IconComponent = Icons[name] || Icons[fallback];
  return <IconComponent {...props} />;
};

export default Icon;
