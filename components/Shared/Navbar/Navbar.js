import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div className="md:navbar">
      <div className="md:flex-1 flex my-5">
        <Image src="/vector.svg" width="20" height="20" alt="logo" />
        <h2 className="mx-2 text-2xl text-[#000] font-semibold">Saarte Investeering</h2>
      </div>
      <div className="flex-none text-[#000] font-semibold hidden md:flex">
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
      <div className="dropdown md:hidden">
        <label tabIndex={0} className="btn btn-ghost btn-circle ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
        >
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
            <ul className="shadow bg-base-100 rounded-box">
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
