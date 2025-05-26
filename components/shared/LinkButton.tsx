interface LinkButtonProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const LinkButton: React.FC<LinkButton> = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="h-[45px] px-[15px] text-white rounded transition duration-300 flex items-center gap-[10px] bg-gradient-to-r from-sky-500 to-sky-700 hover:from-sky-700 hover:to-sky-500">
    {icon}
    <span className="hover:text-gray-200">{label}</span>
  </a>
);

export default LinkButton;
