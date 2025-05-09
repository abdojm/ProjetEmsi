// components/room-card.tsx
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface RoomCardProps {
  hotelName: string;
  location: string;
  rating: number;
  ratingDescription: string;
  description: string;
  roomType: string;
  bedDetails: string;
  bathroomDetails: string;
  price: number;
  imageSrc: string;
  freeCancellation: boolean;
  breakfastIncluded: boolean;
}

export function RoomCard({
  hotelName,
  location,
  rating,
  ratingDescription,
  description,
  roomType,
  bedDetails,
  bathroomDetails,
  price,
  imageSrc,
  freeCancellation,
  breakfastIncluded,
}: RoomCardProps) {
  return (
    <Card className="max-w-full flex flex-row mb-6">
      {/* Text details on the left */}
      <div className="w-2/3 p-6 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-xl font-semibold">{hotelName}</CardTitle>
              <CardDescription className="text-sm text-gray-500">{location}</CardDescription>
              <div className="text-sm text-gray-700 mt-2">
                {freeCancellation && <span>Free cancellation</span>}
                {freeCancellation && breakfastIncluded && " | "}
                {breakfastIncluded && <span>Breakfast included</span>}
              </div>
            </div>
            <div className="flex items-center">
              <span className={`text-sm font-semibold px-2 py-1 rounded ${rating >= 90 ? 'bg-green-500 text-white' : rating >= 80 ? 'bg-yellow-500 text-white' : 'bg-gray-500 text-white'}`}>
                {ratingDescription}
              </span>
              <span className="text-lg font-bold ml-2">{rating}</span>
            </div>
          </div>

          <div className="mt-4 text-gray-700 text-sm">
            <p>{roomType}</p>
            <p>{bedDetails}</p>
            <p>{bathroomDetails}</p>
          </div>
        </div>

        <div className="flex justify-between items-end mt-4">
          <div>
            <div className="text-2xl font-bold">${price}</div>
            <div className="text-sm text-gray-500">3 nights, 2 guests</div>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline">Show deal</Button>
            <Button>See booking options</Button>
          </div>
        </div>
      </div>

      {/* Image on the right */}
      <div className="w-1/3 relative align-middle">
    <Image
      src={imageSrc}
      alt={`${hotelName} room`}
     width={500}
     height={700}
      className="h-full object-cover rounded-r-lg"
    />
  </div>
    </Card>
  );
}
