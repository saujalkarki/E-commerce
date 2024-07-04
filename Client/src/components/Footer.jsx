import addressImg from "../assets/img/address.png";
import mailImg from "../assets/img/mail.png";
import playStoreImg from "../assets/img/playstore.png";
import apppStoreImg from "../assets/img/appstore.png";
import noBackgroundLogo from "../assets/img/noBackgroundLogo.png";

export function Footer() {
  return (
    <>
      <footer className=" bg-[#2988bb] border-t-[3px] border-neutral-950 mt-auto">
        <div className=" grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5 font-semibold pt-4">
          <div className=" pl-2">
            <img src={noBackgroundLogo} alt="logo" className="h-8" />
            <p className=" pb-3">
              We are a multi-vendor E-commerce company, so we will be providing
              platforms for both the buyer and sellers.
            </p>
            <span className="flex flex-row gap-2">
              <img src={addressImg} alt="address" />
              <p className=" text-[0.80rem]">Kathmandu, Nepal</p>
            </span>
            <span className="flex flex-row gap-2">
              <img src={mailImg} alt="mail" />
              <p className=" text-[0.80rem]">info@gmail.com</p>
            </span>
          </div>
          <div className=" pl-2">
            <h2 className="text-lg font-bold">Categories</h2>
            <p>Electronic Devices</p>
            <p>Home Appliances</p>
            <p>Sports</p>
            <p>Lifestyle</p>
            <p>Health</p>
            <p>Fashion</p>
          </div>
          <div className=" pl-2">
            <h2 className="text-lg font-bold">Links</h2>
            <p>Home</p>
            <p>Blogs</p>
            <p>Contact Us</p>
            <p>About Us</p>
          </div>
          <div className=" pl-2">
            <h2 className="text-lg font-bold">Help </h2>
            <p>Your Account</p>
            <p>Your Order</p>
            <p>Track Order</p>
            <p>Your Wishlist</p>
            <p>Search</p>
          </div>
          <div className=" pl-2">
            <h2 className="text-lg font-bold">Download </h2>
            <img
              className=" cursor-pointer"
              src={playStoreImg}
              alt="Play Store"
            />
            <img
              className=" cursor-pointer"
              src={apppStoreImg}
              alt="App Store"
            />
          </div>
        </div>
        <div className=" text-md pt-4 font-semibold text-center lg:text-xl lg:font-bold">
          <span>&copy; 2081 Saujal_Karki</span> <br className=" sm:hidden" />
          <span>All_Rights_Reserved</span>
        </div>
      </footer>
    </>
  );
}
