import HomeIcon from "./icons/homeIcon";
import InboxIcon from "./icons/inboxIcon";
import SettingsIcon from "./icons/settingsIcon";
import UserIcon from "./icons/userIcon";

export default function AppLayout({ children }) {
  return (
    <div className="flex">
      <div className="w-28 h-screen bg-zinc-50 px-6 py-9 flex flex-col">
        <div>
          <AbileneXLogo />
        </div>
        <div className="flex-1 w-max mx-auto h-max text-zinc-400">
          <div className="flex flex-col gap-9 h-full">
            <div className="flex-1"></div>
            <div className="text-sky-700">
              <HomeIcon />
            </div>
            <div>
              <InboxIcon />
            </div>
            <div>
              <UserIcon />
            </div>
            <div className="flex-1"></div>
          </div>
        </div>
        <div className="w-max mx-auto">
          <span className="text-zinc-400">
            <SettingsIcon />
          </span>
        </div>
      </div>
      <div className="flex-1 grid grid-cols-7">
        <div className="col-span-5 px-16">{children}</div>
        <div className="col-span-2 h-screen bg-zinc-50 py-16 px-9">
          <div className="h-full flex flex-col">
            <div className="h-28 w-28 bg-zinc-100 rounded-full mx-auto mb-6"></div>
            <div className="mb-12 text-2xl text-zinc-500 text-center">John Doe</div>
            <div className="bg-zinc-800 text-white flex-1 rounded-xl px-8 py-8">
                <div className="h-full flex flex-col">
                    <div className="text-3xl">Create a poll in three quick steps.</div>
                    <div className="flex-1"></div>
                    <div className="bg-white px-9 py-2 text-zinc-800 text-lg w-max rounded-full">Create Poll</div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AbileneXLogo() {
  return (
    <div className="bg-sky-700 px-6 py-5 rounded-full font-bold text-white">
      aX
    </div>
  );
}
