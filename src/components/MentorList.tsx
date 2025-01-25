// 'use client';

// import { Users, MessageSquare } from 'lucide-react';

// interface MentorListProps {
//   careerPath: string;
// }

// const MOCK_MENTORS = [
//   {
//     id: 1,
//     name: 'Sarah Johnson',
//     role: 'Senior AI Engineer',
//     company: 'Google',
//     rate: 150,
//     availability: 'Available',
//   },
//   {
//     id: 2,
//     name: 'Michael Chen',
//     role: 'Lead Developer',
//     company: 'Microsoft',
//     rate: 120,
//     availability: 'Booked',
//   },
//   {
//     id: 3,
//     name: 'Emma Davis',
//     role: 'Data Scientist',
//     company: 'Amazon',
//     rate: 100,
//     availability: 'Available',
//   },
// ];

// export const MentorList: React.FC<MentorListProps> = ({ careerPath }) => {
//   return (
//     <div className="bg-white rounded-xl shadow-lg p-6">
//       <div className="flex items-center gap-2 mb-6">
//         <Users className="w-6 h-6 text-blue-600" />
//         <h2 className="text-xl font-bold">Available Mentors</h2>
//       </div>

//       <div className="space-y-4">
//         {MOCK_MENTORS.map((mentor) => (
//           <div
//             key={mentor.id}
//             className="border rounded-lg p-4 hover:border-blue-200 transition-colors"
//           >
//             <div className="flex justify-between items-start mb-2">
//               <div>
//                 <h3 className="font-semibold">{mentor.name}</h3>
//                 <p className="text-sm text-gray-600">{mentor.role} at {mentor.company}</p>
//               </div>
//               <span className={`text-sm px-2 py-1 rounded ${
//                 mentor.availability === 'Available'
//                   ? 'bg-green-100 text-green-800'
//                   : 'bg-gray-100 text-gray-800'
//               }`}>
//                 {mentor.availability}
//               </span>
//             </div>
//             <div className="flex justify-between items-center mt-4">
//               <span className="text-sm text-gray-600">${mentor.rate}/hour</span>
//               <button
//                 disabled={mentor.availability !== 'Available'}
//                 className="flex items-center gap-1 text-sm bg-blue-600 text-white px-3 py-1.5 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 <MessageSquare className="w-4 h-4" />
//                 Book Session
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// "use client"

// import { useState, useEffect } from "react"
// import { Users, MessageSquare, Wallet, ExternalLink, Loader2 } from "lucide-react"

// // Types
// interface Mentor {
//   id: number
//   name: string
//   role: string
//   company: string
//   rate: number
//   availability: "Available" | "Booked"
//   walletAddress: string
//   image: string
// }

// interface MetaMaskError {
//   code: number
//   message: string
// }

// // Constants
// const EDUCHAIN_CHAIN_ID = "656476" // Convert decimal 656476 to hex
// const EDUCHAIN_CONFIG = {
//   chainId: EDUCHAIN_CHAIN_ID,
//   chainName: "EDU Chain Testnet",
//   nativeCurrency: {
//     name: "EduChain Ether",
//     symbol: "EDU",
//     decimals: 18,
//   },
//   rpcUrls: ["https://open-campus-codex-sepolia.drpc.org"],
//   blockExplorerUrls: ["https://opencampus-codex.blockscout.com/"],
// }

// const MOCK_MENTORS: Mentor[] = [
//   {
//     id: 1,
//     name: "Sarah Johnson",
//     role: "Senior AI Engineer",
//     company: "Google",
//     rate: 0.001,
//     availability: "Available",
//     walletAddress: "0x7C38926C4fa95E84BCf784857F7C2FF342190368",
//     image: "/placeholder.svg?height=100&width=100",
//   },
//   {
//     id: 2,
//     name: "Michael Chen",
//     role: "Lead Developer",
//     company: "Microsoft",
//     rate: 0.001,
//     availability: "Booked",
//     walletAddress: "0x7C38926C4fa95E84BCf784857F7C2FF342190368",
//     image: "/placeholder.svg?height=100&width=100",
//   },
//   {
//     id: 3,
//     name: "Emma Davis",
//     role: "Data Scientist",
//     company: "Amazon",
//     rate: 0.001,
//     availability: "Available",
//     walletAddress: "0x7C38926C4fa95E84BCf784857F7C2FF342190368",
//     image: "/placeholder.svg?height=100&width=100",
//   },
// ]

// export default function MentorList({ careerPath }: { careerPath: string }) {
//   // State
//   const [isConnected, setIsConnected] = useState(false)
//   const [address, setAddress] = useState("")
//   const [selectedMentor, setSelectedMentor] = useState<Mentor | null>(null)
//   const [isPaying, setIsPaying] = useState(false)
//   const [txHash, setTxHash] = useState<string | null>(null)
//   const [showToast, setShowToast] = useState(false)
//   const [toastMessage, setToastMessage] = useState({ title: "", message: "", type: "success" })

//   // Toast helper
//   const showNotification = (title: string, message: string, type: "success" | "error") => {
//     setToastMessage({ title, message, type })
//     setShowToast(true)
//     setTimeout(() => setShowToast(false), 5000)
//   }

//   // Network checking
//   const checkNetwork = async () => {
//     if (!window.ethereum) return false

//     try {
//       const chainId = await window.ethereum.request({ method: "eth_chainId" })
//       if (chainId !== EDUCHAIN_CHAIN_ID) {
//         await window.ethereum
//           .request({
//             method: "wallet_switchEthereumChain",
//             params: [{ chainId: EDUCHAIN_CHAIN_ID }],
//           })
//           .catch(async (switchError: MetaMaskError) => {
//             if (switchError.code === 4902) {
//               await window.ethereum.request({
//                 method: "wallet_addEthereumChain",
//                 params: [EDUCHAIN_CONFIG],
//               })
//             }
//           })
//       }
//       return true
//     } catch (error) {
//       console.error("Error checking/switching network:", error)
//       return false
//     }
//   }

//   // Wallet connection
//   const connectWallet = async () => {
//     if (!window.ethereum) {
//       showNotification("MetaMask Required", "Please install MetaMask to connect your wallet.", "error")
//       return
//     }

//     try {
//       const networkOk = await checkNetwork()
//       if (!networkOk) {
//         showNotification("Network Error", "Please switch to EduChain network", "error")
//         return
//       }

//       const accounts = await window.ethereum.request({
//         method: "eth_requestAccounts",
//       })

//       setAddress(accounts[0])
//       setIsConnected(true)
//     } catch (error) {
//       console.error("Error connecting wallet:", error)
//       showNotification("Connection Failed", "Failed to connect wallet. Please try again.", "error")
//     }
//   }

//   // Payment handling
//   const handlePayment = async () => {
//     if (!isConnected) {
//       await connectWallet()
//       return
//     }

//     if (!selectedMentor) return

//     setIsPaying(true)
//     setTxHash(null)

//     try {
//       const transactionParams = {
//         from: address,
//         to: selectedMentor.walletAddress,
//         value: `0x${(selectedMentor.rate * 1e18).toString(16)}`,
//         gas: "21000",
//       }

//       const hash = await window.ethereum.request({
//         method: "eth_sendTransaction",
//         params: [transactionParams],
//       })

//       setTxHash(hash)
//       showNotification("Payment Successful", "Your booking has been confirmed!", "success")
//     } catch (error) {
//       console.error("Payment error:", error)
//       showNotification("Payment Failed", "Transaction could not be completed. Please try again.", "error")
//     } finally {
//       setIsPaying(false)
//     }
//   }

//   // Wallet event listeners
//   useEffect(() => {
//     if (window.ethereum) {
//       window.ethereum.request({ method: "eth_accounts" }).then((accounts: string[]) => {
//         if (accounts.length > 0) {
//           setAddress(accounts[0])
//           setIsConnected(true)
//         }
//       })

//       window.ethereum.on("accountsChanged", (accounts: string[]) => {
//         if (accounts.length > 0) {
//           setAddress(accounts[0])
//           setIsConnected(true)
//         } else {
//           setAddress("")
//           setIsConnected(false)
//         }
//       })

//       window.ethereum.on("chainChanged", () => {
//         window.location.reload()
//       })
//     }
//   }, [])

//   return (
//     <div className="w-full max-w-4xl mx-auto bg-white rounded-xl shadow-lg">
//       {/* Header */}
//       <div className="flex items-center justify-between p-6 border-b">
//         <div className="flex items-center gap-2">
//           <Users className="h-6 w-6 text-blue-600" />
//           <h2 className="text-xl font-bold">Available Mentors</h2>
//         </div>
//         <button
//           onClick={connectWallet}
//           className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
//             isConnected ? "border border-gray-200 hover:bg-gray-50" : "bg-blue-600 text-white hover:bg-blue-700"
//           }`}
//         >
//           <Wallet className="h-4 w-4" />
//           {isConnected ? <span>{`${address.slice(0, 6)}...${address.slice(-4)}`}</span> : "Connect Wallet"}
//         </button>
//       </div>

//       {/* Mentor List */}
//       <div className="p-6 space-y-6">
//         {MOCK_MENTORS.map((mentor) => (
//           <div
//             key={mentor.id}
//             className="flex items-start gap-4 rounded-lg border p-4 transition-colors hover:border-blue-100"
//           >
//             <img src={mentor.image || "/placeholder.svg"} alt={mentor.name} className="h-12 w-12 rounded-full" />
//             <div className="flex-1 space-y-1">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <h3 className="font-semibold">{mentor.name}</h3>
//                   <p className="text-sm text-gray-600">
//                     {mentor.role} at {mentor.company}
//                   </p>
//                 </div>
//                 <span
//                   className={`px-2 py-1 text-sm rounded-full ${
//                     mentor.availability === "Available" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
//                   }`}
//                 >
//                   {mentor.availability}
//                 </span>
//               </div>
//               <div className="flex items-center justify-between pt-2">
//                 <span className="text-sm font-medium">{mentor.rate} EDU/hour</span>
//                 <button
//                   onClick={() => setSelectedMentor(mentor)}
//                   disabled={mentor.availability !== "Available"}
//                   className="flex items-center gap-2 px-3 py-1.5 text-sm rounded-lg bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
//                 >
//                   <MessageSquare className="h-4 w-4" />
//                   Book Session
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Payment Modal */}
//       {selectedMentor && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//           <div className="bg-white rounded-xl shadow-lg max-w-md w-full p-6">
//             <h3 className="text-xl font-bold mb-4">Confirm Booking</h3>
//             <p className="text-gray-600 mb-6">You're about to book a mentoring session</p>

//             <div className="space-y-4">
//               <div className="flex items-center gap-4 rounded-lg border p-4">
//                 <img
//                   src={selectedMentor.image || "/placeholder.svg"}
//                   alt={selectedMentor.name}
//                   className="h-12 w-12 rounded-full"
//                 />
//                 <div>
//                   <h3 className="font-semibold">{selectedMentor.name}</h3>
//                   <p className="text-sm text-gray-600">
//                     {selectedMentor.role} at {selectedMentor.company}
//                   </p>
//                 </div>
//               </div>

//               <div className="rounded-lg border p-4">
//                 <div className="flex justify-between text-sm">
//                   <span>Session Rate</span>
//                   <span className="font-medium">{selectedMentor.rate} EDU</span>
//                 </div>
//               </div>

//               {txHash && (
//                 <div className="rounded-lg bg-blue-50 p-4 text-sm">
//                   <div className="flex items-center gap-2">
//                     <span>Transaction submitted:</span>
//                     <a
//                       href={`${EDUCHAIN_CONFIG.blockExplorerUrls[0]}/tx/${txHash}`}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="flex items-center gap-1 text-blue-600 hover:underline"
//                     >
//                       View on Explorer
//                       <ExternalLink className="h-3 w-3" />
//                     </a>
//                   </div>
//                 </div>
//               )}

//               <div className="flex justify-end gap-2 pt-4">
//                 <button
//                   onClick={() => setSelectedMentor(null)}
//                   disabled={isPaying}
//                   className="px-4 py-2 rounded-lg border hover:bg-gray-50 disabled:opacity-50"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   onClick={handlePayment}
//                   disabled={isPaying}
//                   className="min-w-[100px] px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 flex items-center justify-center gap-2"
//                 >
//                   {isPaying ? (
//                     <>
//                       <Loader2 className="h-4 w-4 animate-spin" />
//                       Processing
//                     </>
//                   ) : (
//                     "Confirm & Pay"
//                   )}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Toast Notification */}
//       {showToast && (
//         <div
//           className={`fixed bottom-4 right-4 max-w-md w-full rounded-lg shadow-lg p-4 transition-all transform translate-y-0 ${
//             toastMessage.type === "success" ? "bg-green-50" : "bg-red-50"
//           }`}
//         >
//           <div className="flex gap-2">
//             <div className="flex-1">
//               <h4 className={`font-medium ${toastMessage.type === "success" ? "text-green-800" : "text-red-800"}`}>
//                 {toastMessage.title}
//               </h4>
//               <p className={toastMessage.type === "success" ? "text-green-600" : "text-red-600"}>
//                 {toastMessage.message}
//               </p>
//             </div>
//             <button onClick={() => setShowToast(false)} className="text-gray-500 hover:text-gray-700">
//               ×
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }







"use client";

import { useState, useEffect } from "react";
import { ethers } from "ethers"
import { Users, MessageSquare, Wallet, ExternalLink, Loader2 } from "lucide-react";

// Types
interface Mentor {
  id: number;
  name: string;
  role: string;
  company: string;
  rate: number;
  availability: "Available" | "Booked";
  walletAddress: string;
  image: string;
}

interface MetaMaskError {
  code: number;
  message: string;
}

// Constants
const EDUCHAIN_CHAIN_ID = "656476"; // Hexadecimal format for 656476
const EDUCHAIN_CONFIG = {
  chainId: EDUCHAIN_CHAIN_ID,
  chainName: "EDU Chain Testnet",
  nativeCurrency: {
    name: "EduChain Ether",
    symbol: "EDU",
    decimals: 18,
  },
  rpcUrls: ["https://open-campus-codex-sepolia.drpc.org"],
  blockExplorerUrls: ["https://opencampus-codex.blockscout.com/"],
};

const MOCK_MENTORS: Mentor[] = [
  {
    id: 1,
    name: "Sahaj jain",
    role: "Senior AI Engineer",
    company: "Google",
    rate: 0.002,
    availability: "Available",
    walletAddress: "0x7C38926C4fa95E84BCf784857F7C2FF342190368",
    image: "https://avatars.githubusercontent.com/u/118066299?v=4",
  },
  {
    id: 2,
    name: "kartik mehta",
    role: "Lead Developer",
    company: "Microsoft",
    rate: 0.002,
    availability: "Booked",
    walletAddress: "0x7C38926C4fa95E84BCf784857F7C2FF342190368",
    image: "https://avatars.githubusercontent.com/u/125860170?s=400&u=e82f197d0a21f57223e0d867ce558b1a36c2236f&v=4",
  },
  {
    id: 3,
    name: "Emma Davis",
    role: "Data Scientist",
    company: "Amazon",
    rate: 0.002,
    availability: "Available",
    walletAddress: "0x7C38926C4fa95E84BCf784857F7C2FF342190368",
    image: "https://avatars.githubusercontent.com/u/125860170?s=400&u=e82f197d0a21f57223e0d867ce558b1a36c2236f&v=4",
  },
];

export default function MentorList({ careerPath }: { careerPath: string }) {
  // State
  const [isConnected, setIsConnected] = useState(false);
  const [address, setAddress] = useState("");
  const [selectedMentor, setSelectedMentor] = useState<Mentor | null>(null);
  const [isPaying, setIsPaying] = useState(false);
  const [txHash, setTxHash] = useState<string | null>(null);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState({
    title: "",
    message: "",
    type: "success",
  });

  // Toast helper
  const showNotification = (title: string, message: string, type: "success" | "error") => {
    setToastMessage({ title, message, type });
    setShowToast(true);
    setTimeout(() => setShowToast(false), 5000);
  };

  // Network checking
  const checkNetwork = async () => {
    if (!window.ethereum) {
      showNotification("MetaMask Required", "MetaMask is not installed or accessible.", "error");
      return false;
    }

    try {
      const currentChainId = await window.ethereum.request({ method: "eth_chainId" });
      if (currentChainId !== EDUCHAIN_CHAIN_ID) {
        try {
          await window.ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: EDUCHAIN_CHAIN_ID }],
          });
        } catch (switchError: any) {
          if (switchError.code === 4902) {
            await window.ethereum.request({
              method: "wallet_addEthereumChain",
              params: [EDUCHAIN_CONFIG],
            });
          } else {
            throw switchError;
          }
        }
      }
      return true;
    } catch (error) {
      console.error("Error switching network:", error);
      showNotification("Network Error", "Failed to switch to EduChain. Please try again.", "error");
      return false;
    }
  };

  // Wallet connection
  const connectWallet = async () => {
    if (!window.ethereum) {
      showNotification("MetaMask Required", "Please install MetaMask to connect your wallet.", "error");
      return;
    }

    try {
      const networkOk = await checkNetwork();
      if (!networkOk) {
        showNotification("Network Error", "Please switch to EduChain network", "error");
        return;
      }

      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      setAddress(accounts[0]);
      setIsConnected(true);
    } catch (error) {
      console.error("Error connecting wallet:", error);
      showNotification("Connection Failed", "Failed to connect wallet. Please try again.", "error");
    }
  };

  // Payment handling
  const handlePayment = async () => {
    if (!isConnected) {
      await connectWallet();
      return;
    }

    if (!selectedMentor) return;

    setIsPaying(true);
    setTxHash(null);

    try {
      const transactionParams = {
        from: address,
        to: selectedMentor.walletAddress,
        // value: `0x${Math.floor(selectedMentor.rate * 1e18).toString(16)}`,
        value: ethers.utils.parseEther("0.0000000000000001").toHexString(),
        gas: "21000",
      };

      const hash = await window.ethereum.request({
        method: "eth_sendTransaction",
        params: [transactionParams],
      });

      setTxHash(hash);
      showNotification("Payment Successful", "Your booking has been confirmed!", "success");
    } catch (error: any) {
      console.error("Payment error:", error);

      const errorMessage = error?.message || "Transaction could not be completed. Please try again.";
      showNotification("Payment Failed", errorMessage, "error");
    } finally {
      setIsPaying(false);
    }
  };


 




  // Wallet event listeners
  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.request({ method: "eth_accounts" }).then((accounts: string[]) => {
        if (accounts.length > 0) {
          setAddress(accounts[0]);
          setIsConnected(true);
        }
      });

      window.ethereum.on("accountsChanged", (accounts: string[]) => {
        if (accounts.length > 0) {
          setAddress(accounts[0]);
          setIsConnected(true);
        } else {
          setAddress("");
          setIsConnected(false);
        }
      });

      window.ethereum.on("chainChanged", () => {
        window.location.reload();
      });
    }
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-xl shadow-lg">
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b">
        <div className="flex items-center gap-2">
          <Users className="h-6 w-6 text-blue-600" />
          <h2 className="text-xl font-bold">Available Mentors</h2>
        </div>
        <button
          onClick={connectWallet}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
            isConnected ? "border border-gray-200 hover:bg-gray-50" : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          <Wallet className="h-4 w-4" />
          {isConnected ? <span>{`${address.slice(0, 6)}...${address.slice(-4)}`}</span> : "Connect Wallet"}
        </button>
      </div>

      {/* Mentor List */}
      <div className="p-6 space-y-6">
        {MOCK_MENTORS.map((mentor) => (
          <div
            key={mentor.id}
            className="flex items-start gap-4 rounded-lg border p-4 transition-colors hover:border-blue-100"
          >
            <img src={mentor.image || "/placeholder.svg"} alt={mentor.name} className="h-12 w-12 rounded-full" />
            <div className="flex-1 space-y-1">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">{mentor.name}</h3>
                  <p className="text-sm text-gray-600">
                    {mentor.role} at {mentor.company}
                  </p>
                </div>
                <span
                  className={`px-2 py-1 text-sm rounded-full ${
                    mentor.availability === "Available" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {mentor.availability}
                </span>
              </div>
              <div className="flex items-center justify-between pt-2">
                <span className="text-sm font-medium">{mentor.rate} EDU/hour</span>
                <button
                  onClick={() => setSelectedMentor(mentor)}
                  disabled={mentor.availability !== "Available"}
                  className="flex items-center gap-2 px-3 py-1.5 text-sm rounded-lg bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <MessageSquare className="h-4 w-4" />
                  Book Session
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Payment Modal */}
      {selectedMentor && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-lg max-w-md w-full p-6">
            <h3 className="text-xl font-bold mb-4">Confirm Booking</h3>
            <p className="text-gray-600 mb-6">You're about to book a mentoring session</p>

            <div className="space-y-4">
              <div className="flex items-center gap-4 rounded-lg border p-4">
                <img
                  src={selectedMentor.image || "/placeholder.svg"}
                  alt={selectedMentor.name}
                  className="h-12 w-12 rounded-full"
                />
                <div>
                  <h3 className="font-semibold">{selectedMentor.name}</h3>
                  <p className="text-sm text-gray-600">
                    {selectedMentor.role} at {selectedMentor.company}
                  </p>
                </div>
              </div>

              <div className="rounded-lg border p-4">
                <div className="flex justify-between text-sm">
                  <span>Session Rate</span>
                  <span className="font-medium">{selectedMentor.rate} EDU</span>
                </div>
              </div>

              {txHash && (
                <div className="rounded-lg bg-blue-50 p-4 text-sm">
                  <div className="flex items-center gap-2">
                    <span>Transaction submitted:</span>
                    <a
                      href={`${EDUCHAIN_CONFIG.blockExplorerUrls[0]}/tx/${txHash}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-blue-600 hover:underline"
                    >
                      View on Explorer
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              )}

              <div className="flex justify-end gap-2 pt-4">
                <button
                  onClick={() => setSelectedMentor(null)}
                  disabled={isPaying}
                  className="px-4 py-2 rounded-lg border hover:bg-gray-50 disabled:opacity-50"
                >
                  Cancel
                </button>
                <button
                  onClick={handlePayment}
                  disabled={isPaying}
                  className="min-w-[100px] px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {isPaying ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Processing
                    </>
                  ) : (
                    "Confirm & Pay"
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Toast Notification */}
      {showToast && (
        <div
          className={`fixed bottom-4 right-4 max-w-md w-full rounded-lg shadow-lg p-4 transition-all transform translate-y-0 ${
            toastMessage.type === "success" ? "bg-green-50" : "bg-red-50"
          }`}
        >
          <div className="flex gap-2">
            <div className="flex-1">
              <h4 className={`font-medium ${toastMessage.type === "success" ? "text-green-800" : "text-red-800"}`}>
                {toastMessage.title}
              </h4>
              <p className={toastMessage.type === "success" ? "text-green-600" : "text-red-600"}>
                {toastMessage.message}
              </p>
            </div>
            <button onClick={() => setShowToast(false)} className="text-gray-500 hover:text-gray-700">
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
