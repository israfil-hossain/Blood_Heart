import Link from "next/link";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export const Footer = () => (
    <footer className="w-full py-6 bg-gray-800 text-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <p className="text-sm">123 Charity Lane, City, Country</p>
            <p className="text-sm">Phone: +1 234 567 890</p>
            <p className="text-sm">Email: info@charity.org</p>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-1">
              <li><Link href="#" className="text-sm hover:underline">Home</Link></li>
              <li><Link href="#" className="text-sm hover:underline">About Us</Link></li>
              <li><Link href="#" className="text-sm hover:underline">Our Work</Link></li>
              <li><Link href="#" className="text-sm hover:underline">Get Involved</Link></li>
            </ul>
          </div>
          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              {/* Add social links here */}
            </div>
          </div>
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Newsletter</h3>
            <p className="text-sm mb-4">Stay updated with our latest news and events.</p>
            <form className="flex space-x-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="max-w-lg flex-1 bg-gray-700 text-white placeholder-gray-400"
              />
              <Button type="submit" className="bg-green-600 text-white hover:bg-green-700">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">© 2023 Charity Organization. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <Link href="#" className="text-sm text-gray-400 hover:text-white">Privacy Policy</Link>
            <Link href="#" className="text-sm text-gray-400 hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );