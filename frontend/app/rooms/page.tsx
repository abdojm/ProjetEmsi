// app/rooms/page.tsx or pages/rooms.tsx
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RoomCard } from "@/components/room-card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Navbar1 } from "@/components/navbar";

export default function RoomsPage() {
  
  const rooms = [
    {
      hotelName: "Hotel Norrebro",
      location: "0.4 km from city centre",
      rating: 96,
      ratingDescription: "Excellent",
      description: "...",
      roomType: "Comfort room",
      bedDetails: "1x king size bed",
      bathroomDetails: "1x bathroom",
      price: 180,
      imageSrc: "/assets/bg.webp", // Add sample images in public/images
      freeCancellation: true,
      breakfastIncluded: true,
    },
    {
      hotelName: "Hotel Apple",
      location: "0.6 km from city centre",
      rating: 83,
      ratingDescription: "Good",
      description: "...",
      roomType: "Standard room",
      bedDetails: "1x queen size bed",
      bathroomDetails: "1x bathroom",
      price: 260,
      imageSrc: "/assets/bg.webp", // Add sample images in public/images
      freeCancellation: false,
      breakfastIncluded: true,
    },
    {
      hotelName: "Hotel Little Mermaid",
      location: "2.5 km from city centre",
      rating: 95,
      ratingDescription: "Excellent",
      description: "...",
      roomType: "Premium room",
      bedDetails: "1x king size bed",
      bathroomDetails: "1x bathroom",
      price: 420,
      imageSrc: "/assets/bg.webp", // Add sample images in public/images
      freeCancellation: true,
      breakfastIncluded: false,
    },
  ];

  return (
    <div className="container mx-auto">
        <div className="px-20 bg-black">
        <Navbar1 />
        </div>
        
      <div className="flex flex-col lg:flex-row gap-8 pt-8">
        {/* Sidebar */}
        <aside className="lg:w-1/4 w-full">
          <div className="bg-white p-6 rounded-md shadow-md">
            <h2 className="text-xl font-semibold mb-4">Your search</h2>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Check-in</label>
              <Input type="date" className="mt-1" defaultValue="2022-12-09" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Check-out date</label>
              <Input type="date" className="mt-1" defaultValue="2022-12-12" />
            </div>
             <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Guests</label>
              <Input placeholder="2 adults, 1 room" className="mt-1" /> {/* Consider using a custom component for this */}
            </div>
            <Button className="w-full mb-6">Search</Button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="lg:w-3/4 w-full">
           <div className="flex justify-between items-center mb-6">
                <h1 className="text-xl font-semibold">20 filtered results for Copenhagen, 9-12 Dec, 2 guests, 1 room</h1> {/* Make dynamic */}
                <div className="flex items-center space-x-2">
                    <label className="text-sm font-medium text-gray-700">Sort by:</label>
                    <Select>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Sort by" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="price_asc">Price (Lowest first)</SelectItem>
                            <SelectItem value="price_desc">Price (Highest first)</SelectItem>
                            <SelectItem value="rating_desc">Rating (Highest first)</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
           </div>


          {/* Room Listings */}
          <div>
            {rooms.map((room, index) => (
              <RoomCard key={index} {...room} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}