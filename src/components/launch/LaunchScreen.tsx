import { TimeDisplay } from "./TimeDisplay";
import { JoinButton } from "./JoinButton";

export const LaunchScreen = () => {
  const handleJoin = () => {
    // Handle join action
    console.log("Joining expo...");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-6">
      <div className="bg-white shadow-[0px_3px_6px_rgba(18,15,40,0.12)] max-w-[480px] w-full overflow-hidden text-base text-[#010101] font-normal">
        <section className="bg-[rgba(18,23,122,1)] flex w-full flex-col items-center pt-[27px] pb-12 px-5">
          <TimeDisplay />

          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/b422e5738523419ea65e1f28f78299b9/36930bf50755754827e87248ee75964e4fd74de38ce2f4dec82e20910c6dfbd0?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-[100px] max-w-full mt-[219px]"
            alt="ExpoConnect Logo"
          />

          <h1 className="text-[40px] leading-[1.4] text-center mt-8 text-white">
            ExpoConnect
          </h1>

          <p className="leading-[26px] text-center mt-3 text-white">
            Welcome to ExpoConnect, where connections create opportunities.
          </p>

          <div className="w-full mt-[220px]">
            <JoinButton onClick={handleJoin} />
          </div>
        </section>
      </div>
    </div>
  );
};
