'use client';

import React, { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
} from '@nextui-org/react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: '首页', link: '/' },
    { name: '关于我们', link: '/about' },
    { name: '产品', link: '/product' },
    { name: '解决方案', link: '/solution' },
    { name: '服务', link: '/service' },
    { name: '与我合作', link: '/cooperate' },
    { name: '博客', link: '/blog' },
    { name: '加入我们', link: '/join' },
    { name: '联系我们', link: '/contact' },
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarBrand>
          <p className="font-bold text-inherit">LOGO</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        {menuItems.map(item => (
          <NavbarItem key={item.link}>
            <Link color="foreground" href={item.link}>
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent className="sm:hidden" justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        />
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link color="foreground" className="w-full" href="#" size="lg">
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
