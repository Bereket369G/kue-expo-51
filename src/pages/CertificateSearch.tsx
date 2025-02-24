
import { useState } from "react";
import { ArrowLeft, Search, Download } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const participants = [
  { name: "Abebe Bikila", certificate: "Innovation Leadership" },
  { name: "Derartu Tulu", certificate: "Technology Excellence" },
  { name: "Haile Gebrselassie", certificate: "Digital Innovation" },
  { name: "Tirunesh Dibaba", certificate: "AI Leadership" },
  { name: "Kenenisa Bekele", certificate: "Research Excellence" },
];

const CertificateSearch = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredParticipants = participants.filter(participant =>
    participant.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="sticky top-0 bg-white border-b px-4 py-3 flex items-center gap-4 z-10">
        <button onClick={() => navigate(-1)} className="p-1.5">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div className="flex-1 relative">
          <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <Input
            type="text"
            placeholder="Search your name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 w-full bg-gray-50"
          />
        </div>
      </header>

      <div className="px-4 py-6">
        {searchQuery && (
          <p className="text-sm text-gray-500 mb-4">
            Found {filteredParticipants.length} results for "{searchQuery}"
          </p>
        )}

        <div className="space-y-4">
          {filteredParticipants.map((participant, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-4 shadow-sm flex items-center justify-between"
            >
              <div>
                <h3 className="font-medium text-gray-900">{participant.name}</h3>
              </div>
              <Button
                size="sm"
                className="bg-[#9b87f5] hover:bg-[#8b77e5] relative overflow-hidden group"
                onClick={() => {
                  console.log(`Downloading certificate for ${participant.name}`);
                }}
              >
                <span className="absolute inset-0 rounded-md overflow-hidden">
                  <span className="absolute inset-0 bg-gradient-to-r from-orange-400 to-yellow-300 opacity-0 group-hover:opacity-50 animate-pulse" />
                  <span className="absolute -inset-[100%] rotate-45 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-75 group-hover:animate-[shine_1s_ease-in-out_infinite]" />
                </span>
                <Download className="w-4 h-4 relative z-10" />
              </Button>
            </div>
          ))}

          {searchQuery && filteredParticipants.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-500">No certificates found for "{searchQuery}"</p>
              <p className="text-sm text-gray-400 mt-1">Try searching with a different name</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CertificateSearch;
