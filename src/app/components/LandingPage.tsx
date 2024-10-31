import React from "react";
import { ArrowRight, Check } from "lucide-react";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section
        className="relative py-24 px-4 text-center bg-cover bg-center"
        style={{
          backgroundImage: `url('https://thumbs.dreamstime.com/b/men-drinking-beer-portrait-handsome-young-men-drinking-beer-man-looking-away-32524727.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <button className="text-white bg-transparent border-2 border-white rounded-full px-8 py-3 font-semibold text-sm mb-8 hover:bg-white hover:text-black transition">
            <span className="flex items-center gap-2">
              Welcome to EnjoyCorp
            </span>
          </button>
          <h1 className="text-5xl font-extrabold mb-6 text-white">
            Life Tastes Better with Us
          </h1>
          <p className="text-white mb-8 text-lg">
            At EnjoyCorp, we believe life’s best moments are even better with
            the perfect drink. That’s why we bring together a collection of
            beverage brands to suit every taste and occasion.
          </p>
          <button className="border-2 border-white text-white px-8 py-3 font-semibold text-sm  hover:bg-white hover:text-gray-800 transition">
            <span className="flex items-center gap-2">
              Check out our brands
              <ArrowRight size={20} />
            </span>
          </button>
        </div>
      </section>

      {/* World of Flavours Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-500 to-green-600 text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_center,w_730,h_913/k%2Farchive%2Feb86b19ba1e73af8c6910c8f5b6b6edbf43a2205"
            alt="Diverse beverage collection"
            className="rounded-lg shadow-lg w-full h-full object-cover"
          />
          <div>
            <h2 className="text-4xl font-extrabold mb-6">
              A World of Flavours for Every Occasion
            </h2>
            <p className="text-lg mb-8">
              Our portfolio isn’t just a collection of beverages; it’s an
              invitation to explore. Whether marking a milestone, hosting
              friends, or simply relaxing, we’ve got the perfect drink for every
              moment.
            </p>
            <button className="border-2 border-white text-white px-8 py-3  font-semibold hover:bg-white hover:text-gray-800 transition">
              <span className="flex flex-row gap-2">
                Check out our brands
                <ArrowRight size={20} />
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <button className="border-2 border-black text-black px-6 py-2 rounded-full font-semibold text-sm mb-4">
              Our Mission
            </button>
            <h3 className="text-5xl font-bold mb-4">
              Bringing People Together
            </h3>
            <p className="text-sm mb-8">
              We aim to make every moment memorable with the right beverage.
              Each brand in our portfolio reflects our values of great taste,
              quality, and sustainable practices.
            </p>
            <ul className="space-y-4">
              {[
                "Something for Everyone",
                "Top-Quality Selections",
                "Kind to the Planet",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <Check size={20} className="text-black" />
                  <span className="text-sm font-semibold">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <img
            src="https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_center,w_730,h_913/k%2Farchive%2Feb86b19ba1e73af8c6910c8f5b6b6edbf43a2205"
            alt="People enjoying drinks"
            className="rounded-lg shadow-lg w-full h-full object-cover"
          />
        </div>
      </section>

      {/* What Drives Us Section */}
      <section
        className="relative py-20 px-4 bg-cover bg-center text-white"
        style={{
          backgroundImage: `url('https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_center,w_730,h_913/k%2Farchive%2Feb86b19ba1e73af8c6910c8f5b6b6edbf43a2205')`,
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-6xl mx-auto grid gap-12 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-left md:text-center">
              <button className="border-2 border-white text-white px-6 py-2 rounded-full mb-5 font-medium text-base">
                What Drives Us
              </button>
              <h3 className="text-3xl font-bold mb-4">
                Quality, Creativity, and Care
              </h3>
              <p className="text-sm mb-8">
                We don’t just offer beverages; we offer experiences driven by
                our core values:
              </p>
            </div>
            <div className="flex flex-col gap-6 md:gap-8">
              {[
                {
                  icon: (
                    <Check className="text-green-500 flex-shrink-0" size={32} />
                  ),
                  title: "Creativity",
                  description:
                    "We partner with brands that introduce fresh flavors and new ideas.",
                },
                {
                  icon: (
                    <Check className="text-blue-500 flex-shrink-0" size={32} />
                  ),
                  title: "Excellence",
                  description:
                    "Every product in our portfolio reflects high standard in taste and quality",
                },
                {
                  icon: (
                    <Check
                      className="text-purple-500 flex-shrink-0"
                      size={32}
                    />
                  ),
                  title: "Responsibilty",
                  description:
                    "We encourage thoughtful enjoyment, especially for our alcohol brands.",
                },
                {
                  icon: (
                    <Check
                      className="text-orange-500 flex-shrink-0"
                      size={32}
                    />
                  ),
                  title: "Sustainablity",
                  description:
                    "we support brands that care for the enviroment and their communities, creating a better future for all.",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="pl-2 flex flex-col justify-start items-start gap-1">
                    <h4 className="text-xl font-semibold">{item.title}</h4>
                    <p className="text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-black text-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Text Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-bold mb-6">
              Let's Raise a Glass Together
            </h2>
            <p className="text-sm mb-6">
              Our goal is to become the top choice for beverage lovers in the
              South-South region and beyond. As we grow, we stay committed to
              offering drinks that bring joy and make a positive impact on the
              world.
            </p>
            <p className="text-sm font-semibold mb-8">
              We'd love to connect with you!
            </p>
            <ul className="list-disc space-y-2 text-sm mb-3 pl-5">
              <li>Need help finding the right drink?</li>
              <li>Curious about our portfolio or partnerships?</li>
              <li>
                Want to collaborate or learn more about our sustainability
                efforts?
              </li>
            </ul>
            <p className="text-sm">
              Follow us to stay updated on our latest brands and events:
            </p>
            <div className="flex gap-4 mt-6 justify-center md:justify-start">
              {/* Facebook Icon */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <svg
                  className="w-6 h-6 fill-current text-white"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.675 0H1.325C.594 0 0 .593 0 1.326v21.348C0 23.406.594 24 1.325 24H12.82v-9.294H9.692v-3.622h3.127V8.413c0-3.1 1.893-4.788 4.657-4.788 1.325 0 2.464.098 2.794.143v3.24h-1.918c-1.504 0-1.795.715-1.795 1.764v2.313h3.588l-.467 3.622h-3.121V24h6.116c.73 0 1.325-.594 1.325-1.326V1.326C24 .593 23.406 0 22.675 0z" />
                </svg>
              </a>

              {/* Twitter Icon */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <svg
                  className="w-6 h-6 fill-current text-white"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.643 4.937c-.835.37-1.73.62-2.675.732a4.715 4.715 0 0 0 2.048-2.596 9.299 9.299 0 0 1-2.963 1.135 4.669 4.669 0 0 0-7.958 4.26 13.28 13.28 0 0 1-9.63-4.885 4.662 4.662 0 0 0 1.444 6.222 4.66 4.66 0 0 1-2.114-.584v.06c0 2.275 1.617 4.18 3.765 4.609a4.646 4.646 0 0 1-2.109.08c.59 1.834 2.293 3.17 4.311 3.208a9.374 9.374 0 0 1-5.805 2.002c-.376 0-.747-.022-1.114-.066a13.239 13.239 0 0 0 7.175 2.1c8.612 0 13.324-7.134 13.324-13.324 0-.203-.004-.406-.014-.608A9.543 9.543 0 0 0 24 4.557a9.177 9.177 0 0 1-2.357.645z" />
                </svg>
              </a>

              {/* Instagram Icon */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <svg
                  className="w-6 h-6 fill-current text-white"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.2 0 3.584.012 4.849.07 1.366.062 2.633.31 3.608 1.285.975.976 1.223 2.243 1.285 3.608.058 1.265.07 1.65.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.31 2.633-1.285 3.608-.976.975-2.243 1.223-3.608 1.285-1.265.058-1.65.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.31-3.608-1.285-.975-.976-1.223-2.243-1.285-3.608C2.175 15.584 2.163 15.2 2.163 12s.012-3.584.07-4.849c.062-1.366.31-2.633 1.285-3.608.976-.975 2.243-1.223 3.608-1.285 1.265-.058 1.65-.07 4.849-.07zm0-2.163C8.755 0 8.329.014 7.052.072 5.775.13 4.524.36 3.393 1.49 2.263 2.621 2.033 3.872 1.975 5.15.014 8.329 0 8.755 0 12c0 3.245.014 3.671.072 4.948.058 1.277.288 2.528 1.419 3.658 1.13 1.13 2.381 1.36 3.658 1.419 1.277.058 1.703.072 4.948.072s3.671-.014 4.948-.072c1.277-.058 2.528-.288 3.658-1.419 1.13-1.13 1.36-2.381 1.419-3.658.058-1.277.072-1.703.072-4.948s-.014-3.671-.072-4.948c-.058-1.277-.288-2.528-1.419-3.658-1.13-1.13-2.381-1.36-3.658-1.419-1.277-.058-1.703-.072-4.948-.072zM12 5.838c-3.403 0-6.162 2.759-6.162 6.162S8.597 18.162 12 18.162 18.162 15.403 18.162 12 15.403 5.838 12 5.838zm0 10.324c-2.295 0-4.162-1.867-4.162-4.162S9.705 7.838 12 7.838s4.162 1.867 4.162 4.162-1.867 4.162-4.162 4.162zm6.406-11.845a1.44 1.44 0 1 0 0-2.88 1.44 1.44 0 0 0 0 2.88z" />
                </svg>
              </a>
            </div>

            <p className="mt-8 text-sm font-semibold">
              We are EnjoyCorp—here to make life a little sweeter, one drink at
              a time.
            </p>
          </div>

          {/* Image */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src="https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_center,w_730,h_913/k%2Farchive%2Feb86b19ba1e73af8c6910c8f5b6b6edbf43a2205"
              alt="People enjoying drinks"
              className="rounded-lg shadow-lg w-full max-w-md object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
