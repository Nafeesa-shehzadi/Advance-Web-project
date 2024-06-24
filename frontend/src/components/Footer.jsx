import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="banner">
        <div className="title">
          <h1>Glamour</h1>
          <p>The Beauty Salon</p>
        </div>
        <div className="tag">
          <label>Subscribe</label>
          <div className="justify-between">
            <a href="https://wa.me/03206253428">
              <img
                src="whatsappicon.png"
                alt="WhatsApp"
                className="w-[50px] h-[50px]"
              />
            </a>
            <a
              href="https://www.facebook.com/your_facebook_page"
              target="_blank"
            >
              <img
                src="facebook.png"
                alt="Facebook"
                className="w-[50px] h-[50px] mx-3"
              />
            </a>
            <a
              href="https://www.instagram.com/your_instagram_page"
              target="_blank"
            >
              <img
                src="instagram.png"
                alt="Instagram"
                className="w-[50px] h-[50px] mx-3"
              />
            </a>
            <a
              href="https://www.youtube.com/your_youtube_channel"
              target="_blank"
            >
              <img
                src="youtube.png"
                alt="YouTube"
                className="w-[50px] h-[50px] mx-3"
              />
            </a>
            <a href="https://twitter.com/your_twitter_handle" target="_blank">
              <img
                src="twittericon.png"
                alt="Twitter"
                className="w-[50px] h-[50px] mx-3"
              />
            </a>
          </div>
          <p>Subscribe with your accounts to receive discounts and updates!</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
