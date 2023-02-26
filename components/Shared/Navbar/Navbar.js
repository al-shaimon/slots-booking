import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div className="md:navbar hidden">
      <div className="flex-1">
        <Image src="/vector.svg" width="20" height="20" alt="logo" />
        <h2 className="mx-2 text-2xl text-[#000] font-semibold">Saarte Investeering</h2>
      </div>
      <div className="flex-none text-[#000] font-semibold">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">Development</Link>
          </li>
          <li>
            <Link href="/">Conference</Link>
          </li>
          <li>
            <Link href="/">Blog</Link>
          </li>
          <li tabIndex={0}>
            <a>
              En
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul className="">
              <li>
                <a>Bengali</a>
              </li>
              <li>
                <a>Hindi</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
