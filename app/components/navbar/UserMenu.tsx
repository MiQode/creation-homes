'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import Avatar from '../Avatar';
import MenuItem from './MenuItem';
import useRegisterModal from '@/app/hooks/useRegisterModal';
import useLoginModal from '../../hooks/useLoginModal';
import { signOut } from 'next-auth/react';
import { SafeUser } from '@/app/types';
import useRentModal from '@/app/hooks/useRentModal';
import { useRouter } from 'next/navigation';

interface UserMenuProps {
  currentUser?: SafeUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const menuRef = useRef<HTMLDivElement>(null);

  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const rentModal = useRentModal();

  const toggleOpen = () => {
    setIsOpen((value) => !value);
  };
  const closeMenu = () => setIsOpen(false);

  const onRent = useCallback(() => {
    if (!currentUser) {
      return loginModal.onOpen();
    }

    rentModal.onOpen();
  }, [currentUser, loginModal, rentModal]);

  // ✅ Close on outside click
  useEffect(() => {
    if (!isOpen) return;

    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <div className="relative" ref={menuRef}>
      <div className="flex flex-row items-center gap-3">
        {/* <div
          className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer"
          onClick={onRent}
        >
          Airbnb your home
        </div> */}
        <div
          className="p-4 md:py-1 md:px-2  flex flex-row items-center gap-3 cursor-pointer"
          onClick={toggleOpen}
        >
          <AiOutlineMenu className="text-neutral-800" />
          <div className="hidden md:block">
            <Avatar src={currentUser?.image} />
          </div>
          {/* <div className="hidden md:block">
            <span className="text-sm font-semibold">John Doe</span>
          </div> */}
        </div>
      </div>
      {isOpen && (
        <div className="absolute rounded-lg shadow-md w-sm bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            {currentUser ? (
              <>
                <MenuItem
                  onClick={() => {
                    router.push('/trips');
                    closeMenu();
                  }}
                  label="My trips"
                />
                <MenuItem
                  onClick={() => {
                    router.push('/favorites');
                    closeMenu();
                  }}
                  label="My favorites"
                />
                {/* <MenuItem
                  onClick={() => router.push('/reservations')}
                  label="My reservations"
                /> */}
                {/* <MenuItem
                  onClick={() => router.push('/properties')}
                  label="My properties"
                /> */}
                {/* <MenuItem onClick={rentModal.onOpen} label="Airbnb my home" /> */}
                <hr />
                <MenuItem
                  onClick={() => {
                    signOut();
                    closeMenu();
                  }}
                  label="Logout"
                />
              </>
            ) : (
              <>
                <MenuItem
                  onClick={() => {
                    loginModal.onOpen();
                    closeMenu();
                  }}
                  label="Login"
                />
                <MenuItem
                  onClick={() => {
                    registerModal.onOpen();
                    closeMenu();
                  }}
                  label="Sign up"
                />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
