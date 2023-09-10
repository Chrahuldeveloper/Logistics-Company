import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import { useCallback } from "react";
const Footer = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback((container) => {
    console.log(container);
  }, []);
  return (
    <div className="relative">
      <Particles
        id="particle"
        init={particlesInit}
        loaded={particlesLoaded}
        className="h-[80rem] md:h-[50rem] lg:h-[26rem]"
        options={{
          fullScreen: {
            enable: false,
          },
          background: {
            color: {
              value: "#0a1024",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />

      <div className="absolute  justify-between top-0 w-[100%] text-[#d5d5d5] lg:ml-20">
        <div className="px-10 pt-20 lg:flex space-y-14 lg:space-y-0 ">
          {/* //first section */}
          <div className="space-y-4">
            <img
              src="https://venovet.com/assets/images/retina-logo2.png"
              alt=""
            />
            <p className="max-w-sm leading-8">
              Transporting the Goods from Source to our Warehouse, Inwarding the
              Goods, Quality Check, Storage, Dispatch, Reporting and End
              Customer Delivery Transportation.
            </p>

            {/* social icons  */}
            {/* <div className="flex pt-4 space-x-4">
              <AiFillFacebook size={30} />
              <AiOutlineTwitter size={30} />
              <AiOutlineInstagram size={30} />
              <AiFillLinkedin size={30} />
            </div> */}
          </div>
          {/* second section  */}
          <div className="space-y-8 md:flex md:justify-between md:space-y-0 md:space-x-20 md:pl-20">
            <div className="space-y-4">
              <h1 className="text-lg font-semibold text-white">ABOUT US</h1>
              <ul className="space-y-4 text-[17px] cursor-pointer">
                <li>About Us</li>
                <li>What we do</li>
                <li>Who we serve</li>
                <li>Our Blog</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h1 className="text-lg font-semibold text-white">SUPPORT</h1>
              <ul className="space-y-4 text-[17px] cursor-pointer">
                <li>Request a Quote</li>
                <li>Contac Us</li>
                <li>FAQ's</li>
                <li>Careers</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h1 className="text-lg font-semibold text-white">LINKS</h1>
              <ul className="space-y-4 text-[17px] cursor-pointer">
                <li>Shop</li>
                <li>News</li>
                <li>Gallery</li>
                <li>Case Studies</li>
              </ul>
            </div>
          </div>
          {/* third section  */}
          <div className="space-y-10 lg:px-10">
            <div>
              <p className="text-white">Call Us</p>
              <p className="text-[#ff5e15] text-2xl font-bold cursor-pointer">
                +91 9912 742 555
              </p>
            </div>
            <div>
              <p className="text-white">Mail Us</p>
              <p className="text-[#1065cd] text-2xl font-bold cursor-pointer">
                sales@venovet.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;