import React from 'react';
import { Link, NavLink, useParams } from 'react-router';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '../ui/sidebar';

import Icon from '../ui/icon';
import { cn, getAssetPath } from '@/lib/utils';
import { ADMIN_SIDEBAR } from '@/config/admin.config';

const AdminSidebar = () => {
  const { hotelId } = useParams();
  const { open } = useSidebar();
  console.log(getAssetPath(open ? 'bnbloom.com.svg' : 'bnbloomcom-icon-logo.svg'))

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader
        className={'flex flex-row items-center gap-2 px-2 border-b h-14'}
      >
        <Link to={'/admin'}>
          <img
            width={open ? 144 : 40}
            height={open ? 24 : 40}
            style={ open ? {backgroundColor: '#006be5', borderRadius: '5px'} : {}}
            src={
              open ? '/assets/bnbloom.com.svg' : '/assets/bnbloomcom-icon-logo.svg'
            }
          />
        </Link>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {ADMIN_SIDEBAR.map(({ id, label, to, logo }) => (
                <SidebarMenuItem key={id}>
                  <SidebarMenuButton className={'h-10'} asChild tooltip={label}>
                    <NavLink
                      to={to({ hotelId })}
                      end
                      className={cn(
                        'flex group items-center px-2 py-2 rounded-md gap-2',
                        '[.active]:bg-primary'
                      )}
                    >
                      <Icon
                        icon={logo}
                        size="20"
                        className="group-[.active]:text-white shrink-0 text-foreground"
                      />
                      <span className="text-sm group-[.active]:text-white">
                        {label}
                      </span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default AdminSidebar;