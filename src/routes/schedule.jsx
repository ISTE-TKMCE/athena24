import CustomH from "../components/customh.jsx";
import scheduleDetails from "../content/schedule.js";

export default function Schedule() {
  // Separate events and workshops/talks
  const events = scheduleDetails.filter((e) => e.type === "Event");
  const workshopsTalks = scheduleDetails.filter((e) => e.type === "WS/TALK");

  return (
    <div className="grid place-items-center">
      <CustomH name="Day 1" type="1" />
      <h2 className="text-2xl text-center font-primary -mt-5">( 16 March 2024 )</h2>
      {/* Render Events */}
      {events.length > 0 && (
        <div>
          <h2 className="text-3xl text-center font-primary md:text-4xl mt-16">Events</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {events.map((e) => (
              <div key={e.id} className="m-5">
                <div className="text-2xl font-bold text-center">{e.name}</div>
                <div className="text-lg">{e.des}</div>
                <div className="bg-blue-500 top-5 text-center rounded-lg">
                  {e.time}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Render Workshops/Talks */}
      {workshopsTalks.length > 0 && (
        <div>
          <h2 className="text-3xl text-center font-primary md:text-4xl mt-16">Workshops/Talks</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {workshopsTalks.map((e) => (
              <div key={e.id} className="m-5">
                <div className="text-2xl text-center font-bold">{e.name}</div>
                <div className="text-lg">{e.des}</div>
                <div className="bg-blue-500 top-5 text-center rounded-lg">
                  {e.time}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
