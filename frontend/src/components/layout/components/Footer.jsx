export const Footer = () => {
  const ABOUT = ["Contact us", "About us", "Careers", "Gift Cards"];
  const HELP = ["Payments", "Shipping", "Cancellation & Returns", "FAQs"];
  const SOCIALS = ["Linkedin", "Github", "Twitter", "Instagram"];

  return (
    <div className="bg-[#282c34]">
      <div className="container py-20 px-[200px] flex justify-between items-center">
        <div className="space-y-5 text-center">
          <p className="text-white text-4xl font-semibold mb-3">ABOUT</p>
          {ABOUT.map((item, idx) => (
            <a
              key={idx}
              className="text-[#8f8f8f] block transition-all text-xl hover:text-white"
              href="#"
            >
              {item}
            </a>
          ))}
        </div>
        <div className="space-y-5 text-center">
          <p className="text-white text-4xl font-semibold mb-3">HELP</p>
          {HELP.map((item, idx) => (
            <a
              key={idx}
              className="text-[#8f8f8f] block transition-all text-xl hover:text-white"
              href="#"
            >
              {item}
            </a>
          ))}
        </div>
        <div className="space-y-5 text-center">
          <p className="text-white text-4xl font-semibold mb-3">SOCIALS</p>
          {SOCIALS.map((item, idx) => (
            <a
              key={idx}
              className="text-[#8f8f8f] block transition-all text-xl hover:text-white"
              href="#"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
