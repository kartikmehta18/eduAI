'use client';

import { useWallet } from '@/hooks/useWallet';
import { Wallet } from 'lucide-react';

export const WalletButton = () => {
  const { isConnected, address, connectWallet, disconnectWallet, formatAddress } = useWallet();

  return (
    <button
      onClick={isConnected ? disconnectWallet : connectWallet}
      className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
    >
      <Wallet className="w-5 h-5" />
      {isConnected ? formatAddress(address) : 'Connect Wallet'}
    </button>
  );
};