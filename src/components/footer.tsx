import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="w-full text-center bottom-0 text-neutral-50 pt-32 pb-2">
        Create by &nbsp;
        <Link
          href="https://github.com/nukrobzero"
          target="_blank"
          className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-green-400 to-violet-500"
        >
          Nukrobzero
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
