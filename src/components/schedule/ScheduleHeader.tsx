
export const ScheduleHeader = () => (
  <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
    <div className="flex items-center gap-3">
      <img
        src="/lovable-uploads/4f3ee650-28c5-4aaa-acd2-60805cae3fd1.png"
        alt="Global Innovation Summit Logo"
        className="h-6"
      />
      <h1 className="text-[#1A1F7C] text-lg font-medium">
        Global Innovation Summit 2025
      </h1>
    </div>
    <button className="flex items-center gap-2 text-[#1A1F7C] px-4 py-2 rounded-lg border border-[#1A1F7C]">
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
      Download PDF
    </button>
  </div>
);
