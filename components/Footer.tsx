import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex gap-4">
      <Link
        className="underline text-stone-600 pl-10"
        href="mailto:web@sume.uk"
      >
        Get in touch
      </Link>
      <Link
        className="underline text-stone-600"
        href="https://sume.co.in"
        target="_blank"
      >
        Blog
      </Link>
    </div>
  );
};

export default Footer;
