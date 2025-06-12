import Link from 'next/link'

const footerNavigation = {
  services: [
    { name: 'Precision Cuts', href: '/services/cuts' },
    { name: 'Signature Color', href: '/services/color' },
    { name: 'Hair Extensions', href: '/services/extensions' },
    { name: 'Treatments', href: '/services/treatments' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ],
  social: [
    {
      name: 'Instagram',
      href: '#',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 4.267c.956 0 1.731.775 1.731 1.732s-.775 1.731-1.731 1.731-1.732-.774-1.732-1.731.776-1.732 1.732-1.732zm7.44 1.732a1.732 1.732 0 11-3.464 0 1.732 1.732 0 013.464 0zM12.017 6.323a5.664 5.664 0 100 11.328 5.664 5.664 0 000-11.328z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Facebook',
      href: '#',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-charcoal" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="xl:col-span-1">
            <Link href="/" className="text-3xl font-playfair font-bold text-white">
              NYC Ayen
            </Link>
            <p className="mt-4 text-gray-300 max-w-md">
              Manhattan&apos;s premier destination for bespoke hair artistry. 
              Where your hair meets the art of styling.
            </p>
            <div className="mt-6">
              <h3 className="text-white font-semibold mb-2">Contact</h3>
              <p className="text-gray-300">123 Madison Avenue</p>
              <p className="text-gray-300">New York, NY 10016</p>
              <p className="text-gray-300 mt-2">(212) 555-0123</p>
              <p className="text-gray-300">hello@nycayen.com</p>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
                  Services
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {footerNavigation.services.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-base text-gray-300 hover:text-white transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
                  Company
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {footerNavigation.company.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-base text-gray-300 hover:text-white transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1">
              <div>
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
                  Hours
                </h3>
                <div className="mt-4 text-gray-300 space-y-2">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8">
          <div className="flex items-center justify-between">
            <div className="flex space-x-6 md:order-2">
              {footerNavigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-gray-300 transition-colors"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
            <p className="text-gray-400 text-sm md:order-1">
              &copy; 2024 NYC Ayen. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}