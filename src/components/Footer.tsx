import DevStackLogo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200">

      <div className="grid grid-cols-4 gap-8 px-6 py-10">

        <div>
          <img
            src={DevStackLogo}
            alt="Dev Stack Logo"
          />

          <p className="mt-3 max-w-xs text-sm leading-5 text-gray-500">
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>

          <div className="flex gap-4 mt-5 text-sm text-[#475569] font-semibold">
            <a href="#">GitHub</a>
            <a href="#">Twitter</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>


        <div>
          <h2 className="font-semibold uppercase text-sm text-[#0f172a]">
            Product
          </h2>

          <ul className="mt-4 space-y-2 text-sm text-gray-500">
            <li>
              <a href="#">Home</a>
            </li>

            <li>
              <a href="#">Technologies</a>
            </li>

            <li>
              <a href="#">Projects</a>
            </li>
          </ul>
        </div>


        <div>
          <h2 className="font-semibold uppercase text-sm text-[#0f172a]">
            Company
          </h2>

          <ul className="mt-4 space-y-2 text-sm text-gray-500">
            <li>
              <a href="#">About</a>
            </li>

            <li>
              <a href="#">Contact</a>
            </li>

            <li>
              <a href="#">Careers</a>
            </li>
          </ul>
        </div>


        <div>
          <h2 className="font-semibold uppercase text-sm text-[#0f172a]">
            Legal
          </h2>

          <ul className="mt-4 space-y-2 text-sm text-gray-500">
            <li>
              <a href="#">Privacy Policy</a>
            </li>

            <li>
              <a href="#">Terms of Service</a>
            </li>
          </ul>
        </div>

      </div>


      <div className="border-t border-gray-200 px-6 py-5 flex justify-between items-center">

        <p className="text-sm text-gray-400">
          ©2026 Dev Stack. All rights reserved.
        </p>

        <div className="flex gap-5 text-sm text-gray-400">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>

      </div>

    </footer>
  );
};

export default Footer;