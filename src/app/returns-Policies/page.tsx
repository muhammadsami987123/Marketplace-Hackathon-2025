import React from 'react';

const ReturnsPolicy = () => {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      <div className="container mx-auto py-12 px-5 max-w-4xl">
        <h1 className="text-5xl font-bold mb-8 text-center text-gray-900">
          Returns & Refunds Policy
        </h1>
        <p className="text-lg mb-8 text-center text-gray-600">
          **Last Updated:** [Insert Date]
        </p>
        <p className="mb-8 text-lg text-gray-600">
          At <strong>Furniro</strong>, we want you to be completely satisfied with your purchase. If for any reason you are not happy with your product, we offer a hassle-free return process. Please read the details of our Returns & Refunds Policy below.
        </p>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">1. Eligibility for Returns</h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-600">
            <li>Items must be returned within <strong>[Insert Return Window, e.g., 30 days]</strong> of receiving your order.</li>
            <li>Products must be unused, undamaged, and in their original packaging.</li>
            <li>Customized or personalized items are not eligible for returns unless they arrive damaged or defective.</li>
            <li>A proof of purchase (order confirmation or receipt) is required.</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">2. Non-Returnable Items</h2>
          <p className="mb-4 text-gray-600">
            Certain items are not eligible for returns, including but not limited to:
          </p>
          <ul className="list-disc pl-6 space-y-3 text-gray-600">
            <li>Gift cards.</li>
            <li>Clearance or final sale items.</li>
            <li>Products marked as Non-Returnable on the product page.</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">3. Return Process</h2>
          <p className="mb-4 text-gray-600">
            Follow these steps to initiate a return:
          </p>
          <ol className="list-decimal pl-6 space-y-3 text-gray-600">
            <li>
              Contact our customer support team at{' '}
              <a href="mailto:returns@furniro.com" className="text-blue-600 underline hover:text-blue-700">
                returns@furniro.com
              </a>{' '}
              or call us at <strong>+1 (123) 456-7890</strong> to request a return authorization.
            </li>
            <li>
              Pack the item securely in its original packaging and include any accessories, manuals, or free gifts.
            </li>
            <li>
              Ship the product to the return address provided by our support team. You are responsible for the return shipping cost unless the item is defective or damaged.
            </li>
          </ol>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">4. Refund Policy</h2>
          <p className="mb-4 text-gray-600">
            Once we receive and inspect the returned item, we will notify you of the approval or rejection of your refund. If approved:
          </p>
          <ul className="list-disc pl-6 space-y-3 text-gray-600">
            <li>Refunds will be processed to your original payment method within <strong>[Insert Timeframe, e.g., 5-10 business days]</strong>.</li>
            <li>If you paid using a gift card, the refund will be issued as store credit.</li>
            <li>Shipping charges are non-refundable unless the return is due to our error (e.g., wrong or defective item).</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">5. Exchanges</h2>
          <p className="mb-4 text-gray-600">
            If you need to exchange an item, follow the same return process and indicate that you want an exchange. Exchanges are subject to product availability.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">6. Damaged or Defective Items</h2>
          <p className="mb-4 text-gray-600">
            If you receive a damaged or defective item, please contact us immediately at{' '}
            <a href="mailto:support@furniro.com" className="text-blue-600 underline hover:text-blue-700">
              support@furniro.com
            </a>{' '}
            with photos of the damage. We will provide a replacement or full refund as soon as possible.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">7. Contact Us</h2>
          <p className="mb-4 text-gray-600">
            If you have any questions about our Returns & Refunds Policy, feel free to reach out:
          </p>
          <p className="text-gray-600">
            <strong>Email:</strong>{' '}
            <a href="mailto:support@furniro.com" className="text-blue-600 underline hover:text-blue-700">
              support@furniro.com
            </a>
            <br />
            <strong>Phone:</strong> +1 (123) 456-7890
            <br />
            <strong>Address:</strong> 123 Furniro Lane, Furniture City, FC 12345
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReturnsPolicy;