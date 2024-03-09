import CustomH from "../components/customh.jsx";
import scheduleDetails1 from "../content/schedule.js";
import scheduleDetails2 from "../content/schedule2.js";

export default function Schedule() {
  // Separate events and workshops/talks for Day 1
  const events1 = scheduleDetails1.filter((e) => e.type === "Event");
  const workshopsTalks1 = scheduleDetails1.filter((e) => e.type === "WS/TALK");

  // Separate events and workshops/talks for Day 2
  const events2 = scheduleDetails2.filter((e) => e.type === "Event");
  const workshopsTalks2 = scheduleDetails2.filter((e) => e.type === "WS/TALK");

  return (
    <div className="grid place-items-center">
      {/* Day 1 */}
      <CustomH name="Day 1" type="1" />
      <h2 className="text-2xl text-center font-primary -mt-5">( 16 March 2024 )</h2>

      {/* Day 1 Events */}
      {events1.length > 0 && (
        <div className="max-w-4xl mx-auto">
          <CustomH name="Events" type="3" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 -mt-5">
            {events1.map((e) => (
              <div key={e.id} className="m-5 -mt-3">
                <div className="text-2xl font-bold text-center">{e.name}</div>
                <div className="text-lg">{e.des}</div>
                <div className="bg-blue-500 top-5 text-center rounded">
                  {e.time}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Day 1 Workshops/Talks */}
      {workshopsTalks1.length > 0 && (
        <div>
          <CustomH name="Workshops / Talks" type="3" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 -mt-7">
            {workshopsTalks1.map((e) => (
              <div key={e.id} className="m-5">
                <div className="text-2xl text-center font-bold -mt-8">{e.name}</div>
                <div className="text-lg">{e.des}</div>
                <div className="bg-blue-500 top-5 text-center rounded">
                  {e.time}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <hr className="my-8 w-full border-t-8 border-yellow-300" />

      {/* Day 2 */}
      <CustomH name="Day 2" type="1"  />
      <h2 className="text-2xl text-center font-primary -mt-5">( 17 March 2024 )</h2>

      {/* Day 2 Events */}
      {events2.length > 0 && (
        <div className="max-w-4xl mx-auto">
          <CustomH name="Events" type="3" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 -mt-5">
            {events2.map((e) => (
              <div key={e.id} className="m-5 -mt-3">
                <div className="text-2xl font-bold text-center">{e.name}</div>
                <div className="text-lg">{e.des}</div>
                <div className="bg-blue-500 top-5 text-center rounded">
                  {e.time}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Day 2 Workshops/Talks */}
      {workshopsTalks2.length > 0 && (
        <div>
          <CustomH name="Workshops / Talks" type="3" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 -mt-7">
            {workshopsTalks2.map((e) => (
              <div key={e.id} className="m-5">
                <div className="text-2xl text-center font-bold -mt-8">{e.name}</div>
                <div className="text-lg">{e.des}</div>
                <div className="bg-blue-500 top-5 text-center rounded">
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
