const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto py-10 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Information */}
          <div>
            <h1 className="text-2xl font-bold">Funiro.</h1>
            <address className="text-gray-600 mt-4">
              400 University Drive Suite 200<br />
              Coral Gables, FL 33134 USA
            </address>
          </div>

          {/* Links Section */}
          <div>
            <h2 className="font-bold text-lg">Links</h2>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Home</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Shop</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">About</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Contact</a></li>
            </ul>
          </div>

          {/* Help Section */}
          <div>
            <h2 className="font-bold text-lg">Help</h2>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Payment Options</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Returns</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Privacy Policies</a></li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h2 className="font-bold text-lg">Newsletter</h2>
            <form className="mt-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter Your Email Address"
                  className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
                <button
                  type="submit"
                  className="bg-yellow-600 text-white px-4 py-2 rounded-r-md hover:bg-yellow-700"
                >
                  SUBSCRIBE
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 text-center text-gray-500">
          <p>2023 Funiro. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
