    "use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Product } from "../../../types/product";
import { urlFor } from "@/sanity/lib/image";
import { getCartItems } from "@/app/actions/actions";
import { client } from "@/sanity/lib/client";

export default function CheckoutPage() {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [discount, setDiscount] = useState<number>(0);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    zipCode: "",
    phone: "",
    email: "",
  });

  const [formErrors, setFormErrors] = useState({
    firstName: false,
    lastName: false,
    address: false,
    city: false,
    zipCode: false,
    phone: false,
    email: false,
  });
   useEffect(() => {
      setCartItems(getCartItems());
      const appliedDiscount = localStorage.getItem("appliedDiscount");
      if (appliedDiscount) {
        setDiscount(Number(appliedDiscount));
      }
    }, []);
  
    const subtotal = cartItems.reduce(
      (total, item) => total + item.price * item.inventery,
      0
    );
    const total = Math.max(subtotal - discount, 0);
  
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormValues({
        ...formValues,
        [e.target.id]: e.target.value,
      });
    };

  useEffect(() => {
    // Fetch products from your API
    fetch("/api/products")
      .then((response) => response.json())
      .then((data: Product[]) => setCartItems(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

 


  const validateForm = () => {
    const errors = {
      firstName: !formValues.firstName,
      lastName: !formValues.lastName,
      address: !formValues.address,
      city: !formValues.city,
      zipCode: !formValues.zipCode,
      phone: !formValues.phone,
      email: !formValues.email,
    };
    setFormErrors(errors);
    return Object.values(errors).every((error) => !error);
  };

  const handlePlaceOrder = async () => {
    const orderData = {
      _type: 'order',
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      address: formValues.address,
      city: formValues.city,
      zipCode: formValues.zipCode,
      phone: formValues.phone,
      email: formValues.email,
      items: cartItems.map(product => ({
        _type: "reference",
        _ref: product._id,
        total: product.pricePerDay,
      })),
      discount: discount,
      orderDate: new Date().toISOString(),
    };
    try {
      await client.create(orderData);
      localStorage.removeItem("appliedDiscount");
      alert("Order placed successfully!");
    } catch (error) {
      console.error("Error placing order:", error);
    }
  };
  const calculateTotal = () => {
    return cartItems.reduce(
      (total, product) => total + product.price * product.inventery,
      0
    );
  };
  
  return (
    <div className={`min-h-screen bg-gray-50`}>
      {/* Breadcrumb */}
      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Order Summary */}
          <div className="bg-white border rounded-lg p-6 space-y-4">
            <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
            {cartItems.length > 0 ? (
              cartItems.map((product) => (
                <div
                  key={product._id}
                  className="flex items-center gap-4 py-3 border-b"
                >
                  <div className="w-16 h-16 rounded overflow-hidden">
                    {product.image && (
                      <Image
                        src={urlFor(product.image).url()}
                        alt={"cxcxcx"}
                        width={700}
                        height={64}
                        className="object-cover w-full h-full"
                      />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-medium">{product.name}</h3>
                    <p className="text-xs text-gray-500">
                      Capacity: {product.seatingCapacity}
                    </p>
                  </div>
                  <p className="text-sm font-medium">
                  </p>
                  <p className="text-lg font-semibold">
                Total:{ product.pricePerDay}
              
              </p>
                </div>
                
              ))
            ) : (
              <p className="text-sm text-gray-500">Your cart is empty.</p>
            )}
            <div className="text-right pt-4">
              <p className="text-sm">
                Discount: <span className="font-medium">-${discount}</span>
              </p>
              <p className="text-sm">
                Total: <span className="font-medium">-  ${calculateTotal().toFixed(2)}</span>
              </p>
            </div>
          </div>

          {/* Billing Form */}
          <div className="bg-white border rounded-lg p-6 space-y-6">
            <h2 className="text-xl font-semibold text-center">Billing Information</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="text-[14px] font-medium text-blue-800" >First Name</label>
                <input
                  id="firstName"
                  placeholder="Enter your first name"
                  value={formValues.firstName}
                  onChange={handleInputChange}
                  className="border rounded-md h-[30px] border-gray-400 "
                />
                {formErrors.firstName && (
                  <p className="text-sm text-red-500">
                    First name is required.
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="lastName"  className="text-[14px] font-medium text-blue-800">Last Name </label>
                <input
                  id="lastName"
                  placeholder="Enter your last name"
                  value={formValues.lastName}
                  onChange={handleInputChange}
                   className="border rounded-md h-[30px] border-gray-400 "
                />
                {formErrors.lastName && (
                  <p className="text-sm text-red-500">
                    Last name is required.
                  </p>
                )}
              </div>
            </div>
            <div>
              <label htmlFor="address"  className="text-[14px] font-medium text-blue-800">Address </label>
              <input
                id="address"
                placeholder="Enter your address"
                value={formValues.address}
                onChange={handleInputChange}
                 className="border rounded-md h-[30px] w-full  border-gray-400 "
              />
              {formErrors.address && (
                <p className="text-sm text-red-500">Address is required.</p>
              )}
            </div>
            <div className="flex">
            <div>
              <label htmlFor="city"  className="text-[14px] font-medium text-blue-800">City</label>
              <input
                id="city"
                placeholder="Enter your city"
                value={formValues.city}
                onChange={handleInputChange}
                 className="border rounded-sm  h-[30px] border-gray-400  ml-1"
              />
              {formErrors.city && (
                <p className="text-sm text-red-500">City is required.</p>
              )}
            </div>
            <div>
              <label htmlFor="zipCode"  className="text-[14px] font-medium text-blue-800 ml-2">Zip Code</label>
              <input
                id="zipCode"
                placeholder="Enter your zip code"
                value={formValues.zipCode}
                onChange={handleInputChange}
                 className="border rounded-sm  h-[30px] border-gray-400  ml-1"
              />
              {formErrors.zipCode && (
                <p className="text-sm text-red-500">Zip Code is required.</p>
              )}
            </div>
            </div>
            <div>
              <label htmlFor="phone"  className="text-[14px] font-medium text-blue-800">Phone</label>
              <input
                id="phone"
                placeholder="Enter your phone number"
                value={formValues.phone}
                onChange={handleInputChange}
                 className="border rounded-sm h-[30px] border-gray-400  ml-4"
              />
              {formErrors.phone && (
                <p className="text-sm text-red-500">Phone is required.</p>
              )}
            </div>
            <div>
              <label htmlFor="email"  className="text-[14px] font-medium text-blue-800">Email</label>
              <input
                id="email"
                placeholder="Enter your email address"
                value={formValues.email}
                 className="border rounded-sm h-[30px] border-gray-400  ml-4"
                onChange={handleInputChange}
              />
              {formErrors.email && (
                <p className="text-sm text-red-500">Email is required.</p>
              )}
            </div>
            <button
              className="w-full h-12 bg-blue-500 hover:bg-blue-700 text-white"
              onClick={handlePlaceOrder}
            >
              Place Booking
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}