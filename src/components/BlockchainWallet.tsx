import { Wallet, Link, CheckCircle, Copy, ExternalLink, RefreshCw, LogOut } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { useState } from "react";
import { toast } from "sonner";

export function BlockchainWallet() {
  const [copied, setCopied] = useState(false);

  const walletAddresses = [
    {
      chain: "Solana",
      address: "8KxYz...9zPmQ",
      fullAddress: "8KxYzR3vF2jL9zPmQ4aB7cD6eE5fG8hH9iJ0kL1mN2oP3qR4sT5uV6wX7yZ8",
      balance: "12.45 SOL",
      color: "purple",
      bgColor: "bg-purple-50",
      textColor: "text-purple-700",
      borderColor: "border-purple-100",
    },
    {
      chain: "VANAR",
      address: "0x7fA9...3bC2",
      fullAddress: "0x7fA9bC8dE1fG2hI3jK4lM5nO6pQ7rS8tU9vW0xY1zA2bC3dE4fG5hI6jK7lM8",
      balance: "1,250 VANRY",
      color: "blue",
      bgColor: "bg-blue-50",
      textColor: "text-blue-700",
      borderColor: "border-blue-100",
    },
    {
      chain: "Algorand",
      address: "ALGO5...K9P2",
      fullAddress: "ALGO5VX7WY8ZA9BC1DE2FG3HI4JK5LM6NO7PQ8RS9TU0VW1XY2ZA3BC4DE5FG6HI7JK8LM9NO0PQ1RS2TU3",
      balance: "350.75 ALGO",
      color: "teal",
      bgColor: "bg-teal-50",
      textColor: "text-teal-700",
      borderColor: "border-teal-100",
    },
  ];

  const recentTransactions = [
    {
      chain: "Solana",
      type: "Credential Issued",
      hash: "0x7f3a...8bc2",
      time: "2 hours ago",
      status: "Confirmed",
    },
    {
      chain: "VANAR",
      type: "Health Record Access",
      hash: "0x9a1c...4def",
      time: "5 hours ago",
      status: "Confirmed",
    },
    {
      chain: "Algorand",
      type: "Consent Grant",
      hash: "0xb2d3...6ghi",
      time: "1 day ago",
      status: "Confirmed",
    },
  ];

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="h-full overflow-auto bg-[#FAFAFA] p-6">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="mb-2">Multi-Chain Wallet</h1>
            <p className="text-[#717182]" style={{ fontSize: '14px' }}>
              Manage your blockchain identities across multiple networks
            </p>
          </div>
          <div className="flex gap-2">
            <Button 
              className="bg-gradient-to-r from-[#008080] to-[#00C897] text-white hover:opacity-90"
              onClick={() => toast.success('Syncing all chains...')}
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Sync All Chains
            </Button>
          </div>
        </div>


        {/* Wallet Overview */}
        <Card className="p-6 border-0 shadow-lg bg-gradient-to-br from-[#3B82F6] to-[#008080] text-white">
          <div className="flex items-start justify-between mb-6">
            <div>
              <p className="text-white/80 mb-1" style={{ fontSize: '12px' }}>TOTAL PORTFOLIO VALUE</p>
              <h2 className="text-white mb-2" style={{ fontSize: '36px', fontWeight: 600 }}>$4,523.80</h2>
              <div className="flex items-center gap-2">
                <Badge className="bg-white/20 text-white border-0">
                  3 Chains Connected
                </Badge>
                <div className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4" />
                  <span style={{ fontSize: '12px' }}>All Active</span>
                </div>
              </div>
            </div>
            <Wallet className="w-16 h-16 text-white/30" />
          </div>

          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/20">
            <div>
              <p className="text-white/70 mb-1" style={{ fontSize: '11px' }}>CREDENTIALS</p>
              <p style={{ fontSize: '20px', fontWeight: 600 }}>12</p>
            </div>
            <div>
              <p className="text-white/70 mb-1" style={{ fontSize: '11px' }}>TRANSACTIONS</p>
              <p style={{ fontSize: '20px', fontWeight: 600 }}>347</p>
            </div>
            <div>
              <p className="text-white/70 mb-1" style={{ fontSize: '11px' }}>GAS SAVED</p>
              <p style={{ fontSize: '20px', fontWeight: 600 }}>$142</p>
            </div>
          </div>
        </Card>

        {/* Chain Wallets */}
        <div>
          <h3 className="mb-4">Connected Chains</h3>
          <div className="space-y-3">
            {walletAddresses.map((wallet) => (
              <Card key={wallet.chain} className={`p-5 border-0 shadow-sm ${wallet.bgColor} ${wallet.borderColor} border`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-xl bg-white flex items-center justify-center`}>
                      <Link className={`w-6 h-6 ${wallet.textColor}`} />
                    </div>
                    <div>
                      <h3 style={{ fontSize: '16px', fontWeight: 600 }}>{wallet.chain}</h3>
                      <p className="text-[#717182]" style={{ fontSize: '13px' }}>Balance: {wallet.balance}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span style={{ fontSize: '12px' }} className="text-green-600">Connected</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 p-3 bg-white rounded-xl">
                  <code style={{ fontSize: '13px', fontFamily: 'monospace' }} className="flex-1 text-[#030213]">
                    {wallet.address}
                  </code>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => handleCopy(wallet.fullAddress)}
                    className="h-8"
                  >
                    {copied ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                  </Button>
                  <Button size="sm" variant="ghost" className="h-8">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Recent Transactions */}
        <div>
          <h3 className="mb-4">Recent Transactions</h3>
          <Card className="border-0 shadow-sm">
            <div className="divide-y">
              {recentTransactions.map((tx, index) => (
                <div key={index} className="p-4 hover:bg-[#FAFAFA] transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 flex-1">
                      <div className={`w-10 h-10 rounded-xl ${
                        tx.chain === 'Solana' ? 'bg-purple-50' :
                        tx.chain === 'VANAR' ? 'bg-blue-50' :
                        'bg-teal-50'
                      } flex items-center justify-center`}>
                        <Link className={`w-5 h-5 ${
                          tx.chain === 'Solana' ? 'text-purple-600' :
                          tx.chain === 'VANAR' ? 'text-blue-600' :
                          'text-teal-600'
                        }`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span style={{ fontSize: '14px', fontWeight: 500 }}>{tx.type}</span>
                          <Badge className="bg-gray-100 text-gray-700 border-0" style={{ fontSize: '10px' }}>
                            {tx.chain}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-2">
                          <code style={{ fontSize: '12px', fontFamily: 'monospace' }} className="text-[#717182]">
                            {tx.hash}
                          </code>
                          <span style={{ fontSize: '12px' }} className="text-[#717182]">• {tx.time}</span>
                        </div>
                      </div>
                    </div>
                    <Badge className="bg-green-100 text-green-700 border-0">
                      {tx.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Network Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="p-6 border-0 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center">
                <Link className="w-5 h-5 text-purple-600" />
              </div>
              <h3 style={{ fontSize: '14px' }}>Solana Network</h3>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span style={{ fontSize: '12px' }} className="text-[#717182]">TPS</span>
                <span style={{ fontSize: '12px', fontWeight: 600 }}>2,847</span>
              </div>
              <div className="flex justify-between">
                <span style={{ fontSize: '12px' }} className="text-[#717182]">Block Time</span>
                <span style={{ fontSize: '12px', fontWeight: 600 }}>0.4s</span>
              </div>
              <div className="flex justify-between">
                <span style={{ fontSize: '12px' }} className="text-[#717182]">Gas Fee</span>
                <span style={{ fontSize: '12px', fontWeight: 600 }}>$0.00025</span>
              </div>
            </div>
          </Card>

          <Card className="p-6 border-0 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                <Link className="w-5 h-5 text-blue-600" />
              </div>
              <h3 style={{ fontSize: '14px' }}>VANAR Network</h3>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span style={{ fontSize: '12px' }} className="text-[#717182]">TPS</span>
                <span style={{ fontSize: '12px', fontWeight: 600 }}>5,000</span>
              </div>
              <div className="flex justify-between">
                <span style={{ fontSize: '12px' }} className="text-[#717182]">Block Time</span>
                <span style={{ fontSize: '12px', fontWeight: 600 }}>1.2s</span>
              </div>
              <div className="flex justify-between">
                <span style={{ fontSize: '12px' }} className="text-[#717182]">Gas Fee</span>
                <span style={{ fontSize: '12px', fontWeight: 600 }}>$0.001</span>
              </div>
            </div>
          </Card>

          <Card className="p-6 border-0 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center">
                <Link className="w-5 h-5 text-teal-600" />
              </div>
              <h3 style={{ fontSize: '14px' }}>Algorand Network</h3>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span style={{ fontSize: '12px' }} className="text-[#717182]">TPS</span>
                <span style={{ fontSize: '12px', fontWeight: 600 }}>1,200</span>
              </div>
              <div className="flex justify-between">
                <span style={{ fontSize: '12px' }} className="text-[#717182]">Block Time</span>
                <span style={{ fontSize: '12px', fontWeight: 600 }}>4.5s</span>
              </div>
              <div className="flex justify-between">
                <span style={{ fontSize: '12px' }} className="text-[#717182]">Gas Fee</span>
                <span style={{ fontSize: '12px', fontWeight: 600 }}>$0.001</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
