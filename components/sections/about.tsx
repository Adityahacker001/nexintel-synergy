// "use client"

// import { Button } from "@/components/ui/button"
// import { ArrowRight, Building, Code, Leaf } from "lucide-react"

// export default function AboutSection() {
//   const features = [
//     {
//       icon: Building,
//       title: "Government Partnerships",
//       description: "We deliver secure, scalable systems trusted by institutions.",
//     },
//     {
//       icon: Code,
//       title: "Professional Excellence",
//       description: "Our certified experts bring enterprise-grade engineering.",
//     },
//     {
//       icon: Leaf,
//       title: "Sustainable Innovation",
//       description: "Solutions that reduce carbon footprint and improve efficiency.",
//     },
//   ]

//   return (
//     <section id="about" className="py-20 bg-[#f9f9f9]">
//       <div className="container mx-auto px-6">
//         <div className="max-w-6xl mx-auto">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//             <div className="text-white space-y-8">
//               <div>
//                 <div className="text-black text-sm font-medium tracking-wider uppercase mb-4">
//                   About Nexintel Synergy
//                 </div>
//                 <h2 className="text-4xl md:text-5xl font-light mb-6 leading-tight text-black">
//                   Leading the Future of
//                   <span className="block text-black font-bold">Intelligent Technology</span>
//                 </h2>
//                 <p className="text-md text-black leading-relaxed mb-8">
//                   NexIntel Synergy specializes in software development with a strong emphasis on sustainability and innovation. By leveraging artificial intelligence, data analytics, and crowd-sourcing mobility, we deliver transformative solutions that address global environmental challenges.
//                 </p>
//               </div>

//               <div className="space-y-6">
//                 <div className="border-l-2 border-blue-500 pl-6">
//                   <h3 className="text-xl font-medium mb-2 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-400 text-transparent bg-clip-text">Our Mission</h3>
//                   <p className="text-gray-400 leading-relaxed">
//                     To empower businesses  with intelligent technology solutions that transform operations and create
//                     sustainable competitive advantages.
//                   </p>
//                 </div>
//                 <div className="border-l-2 border-blue-400 pl-6">
//                   <h3 className="text-xl font-medium mb-2 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-400 text-transparent bg-clip-text">Our Vision</h3>
//                   <p className="text-gray-400 leading-relaxed">
//                     To be the global leader in intelligent technology consulting, recognized for innovation and
//                     exceptional client value.
//                   </p>
//                 </div>
//               </div>

//               <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
//                 Learn More About Us
//                 <ArrowRight className="ml-2 w-4 h-4" />
//               </Button>

//               {/* Features Section */}
//               <div className="space-y-6 mt-10">
//                 {features.map((item, i) => (
//                   <div key={i} className="flex items-start space-x-4">
//                     <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center">
//                       <item.icon className="text-white w-5 h-5" />
//                     </div>
//                     <div>
//                       <h4 className="text-md font-semibold text-black mb-1">{item.title}</h4>
//                       <p className="text-sm text-gray-500">{item.description}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//             <div className="relative">
//               <img
//                 src="/logo-2.png"
//                 alt="About Nexintel Synergy"
//                 className="w-full h-96 object-cover rounded-lg"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
