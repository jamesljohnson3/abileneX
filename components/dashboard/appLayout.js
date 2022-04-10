import Link from "next/link";
import HomeIcon from "./icons/homeIcon";
import InboxIcon from "./icons/inboxIcon";
import SettingsIcon from "./icons/settingsIcon";
import UserIcon from "./icons/userIcon";
import RightSectionContextMenuImage from "../../public/cactus-in-pot.png";
import Image from "next/image";

// <a target="_blank" href="https://icons8.com/icon/101857/xbox-x">Xbox X</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>

export default function AppLayout({ children }) {
  return (
    <div className="flex">
      <div className="w-28 h-screen bg-zinc-100 px-6 py-9 flex flex-col sticky top-0">
        <Link href="/">
          <a className="w-24 -mx-4 fill-sky-700 hover:fill-sky-900 transition-all">
            <AbileneXLogoSVG />
          </a>
        </Link>
        <div className="flex-1 w-max mx-auto h-max text-zinc-400">
          <div className="flex flex-col gap-9 h-full">
            <div className="flex-1"></div>
            <div className="text-sky-700 active:text-sky-800">
              <Link href="/dash">
                <a>
                  <HomeIcon />
                </a>
              </Link>
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
          <Link href="/dash/settings">
            <a className="text-zinc-400">
              <SettingsIcon />
            </a>
          </Link>
        </div>
      </div>
      <div className="flex-1 grid grid-cols-7">
        <div className="col-span-5 px-16">{children}</div>
        <div className="col-span-2 h-screen bg-zinc-100 py-16 px-9 sticky top-0">
          <div className="h-full flex flex-col">
            <div className="h-28 w-28 bg-zinc-300 rounded-full mx-auto mb-6"></div>
            <div className="mb-12 text-2xl text-zinc-500 text-center">
              John Doe
            </div>
            <div className="bg-zinc-800 text-white flex-1 rounded-xl px-8 py-8">
              <div className="h-full flex flex-col">
                <div className="text-3xl">
                  Create a poll in three quick steps.
                </div>
                <div className="flex-1"></div>
                <Link href="/dash/create">
                  <a className="bg-white hover:bg-sky-700 active:bg-sky-800 px-9 py-2 text-zinc-800 text-lg w-max rounded-full hover:text-white transition-all">
                    Create Poll
                  </a>
                </Link>
              </div>
              <div className="w-32 absolute bottom-16 -right-0 z-0">
                <Image src={RightSectionContextMenuImage} />
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
function AbileneXLogoSVG() {
  return (
    <svg width="full" height="full" version="1.1" viewBox="0 0 700 700">
      <defs>
        <symbol id="m" overflow="visible">
          <path d="m35.391-2.1094c-1.8242 0.9375-3.7266 1.6484-5.7031 2.125-1.9805 0.48828-4.043 0.73438-6.1875 0.73438-6.418 0-11.5-1.7891-15.25-5.375-3.75-3.5938-5.625-8.457-5.625-14.594 0-6.1562 1.875-11.023 5.625-14.609 3.75-3.582 8.832-5.375 15.25-5.375 2.1445 0 4.207 0.24219 6.1875 0.71875 1.9766 0.48047 3.8789 1.1953 5.7031 2.1406v7.9688c-1.8438-1.25-3.6641-2.1641-5.4531-2.75-1.7812-0.59375-3.6641-0.89062-5.6406-0.89062-3.543 0-6.3281 1.1367-8.3594 3.4062-2.0312 2.2734-3.0469 5.4023-3.0469 9.3906 0 3.9688 1.0156 7.0898 3.0469 9.3594 2.0312 2.2734 4.8164 3.4062 8.3594 3.4062 1.9766 0 3.8594-0.28906 5.6406-0.875 1.7891-0.58203 3.6094-1.5 5.4531-2.75z" />
        </symbol>
        <symbol id="d" overflow="visible">
          <path d="m25.891-21.016c-0.80469-0.38281-1.6055-0.66406-2.4062-0.84375-0.80469-0.17578-1.6055-0.26562-2.4062-0.26562-2.375 0-4.2031 0.76172-5.4844 2.2812-1.2812 1.5234-1.9219 3.6992-1.9219 6.5312v13.312h-9.2344v-28.891h9.2344v4.75c1.1875-1.8945 2.5469-3.2734 4.0781-4.1406 1.5391-0.875 3.3906-1.3125 5.5469-1.3125 0.30078 0 0.63281 0.015625 1 0.046875 0.36328 0.023437 0.89062 0.078125 1.5781 0.17188z" />
        </symbol>
        <symbol id="a" overflow="visible">
          <path d="m33.281-14.516v2.625h-21.594c0.21875 2.168 1 3.793 2.3438 4.875 1.3438 1.0859 3.2188 1.625 5.625 1.625 1.9453 0 3.9375-0.28516 5.9688-0.85938 2.0391-0.58203 4.1328-1.457 6.2812-2.625v7.125c-2.1875 0.82422-4.375 1.4453-6.5625 1.8594-2.1797 0.42578-4.3594 0.64062-6.5469 0.64062-5.2188 0-9.2812-1.3281-12.188-3.9844-2.8984-2.6562-4.3438-6.3828-4.3438-11.188 0-4.707 1.4219-8.4102 4.2656-11.109 2.8516-2.707 6.7695-4.0625 11.75-4.0625 4.5391 0 8.1758 1.3711 10.906 4.1094 2.7266 2.7305 4.0938 6.3867 4.0938 10.969zm-9.5-3.0781c0-1.75-0.51172-3.1602-1.5312-4.2344-1.0234-1.082-2.3594-1.625-4.0156-1.625-1.793 0-3.2461 0.50781-4.3594 1.5156-1.1172 1.0117-1.8125 2.4609-2.0938 4.3438z" />
        </symbol>
        <symbol id="c" overflow="visible">
          <path d="m17.391-13c-1.9297 0-3.3828 0.32812-4.3594 0.98438-0.96875 0.64844-1.4531 1.6094-1.4531 2.8906 0 1.168 0.39062 2.0859 1.1719 2.75 0.78125 0.65625 1.8672 0.98438 3.2656 0.98438 1.7383 0 3.2031-0.61719 4.3906-1.8594 1.1875-1.25 1.7812-2.8125 1.7812-4.6875v-1.0625zm14.109-3.4844v16.484h-9.3125v-4.2812c-1.2422 1.75-2.6367 3.0273-4.1875 3.8281-1.543 0.80078-3.4219 1.2031-5.6406 1.2031-2.9922 0-5.4219-0.86719-7.2969-2.6094-1.8672-1.75-2.7969-4.0195-2.7969-6.8125 0-3.3828 1.1641-5.8672 3.5-7.4531 2.332-1.582 5.9883-2.375 10.969-2.375h5.4531v-0.71875c0-1.457-0.57812-2.5234-1.7344-3.2031-1.1484-0.6875-2.9453-1.0312-5.3906-1.0312-1.9805 0-3.8242 0.19922-5.5312 0.59375-1.6992 0.39844-3.2773 0.99219-4.7344 1.7812v-7.0312c1.9766-0.48828 3.9609-0.85938 5.9531-1.1094 2-0.25 3.9922-0.375 5.9844-0.375 5.2188 0 8.9844 1.0312 11.297 3.0938 2.3125 2.0547 3.4688 5.3906 3.4688 10.016z" />
        </symbol>
        <symbol id="b" overflow="visible">
          <path d="m14.516-37.094v8.2031h9.5312v6.6094h-9.5312v12.25c0 1.3438 0.26562 2.25 0.79688 2.7188 0.53906 0.46875 1.6016 0.70312 3.1875 0.70312h4.7344v6.6094h-7.9062c-3.6484 0-6.2344-0.75781-7.7656-2.2812-1.5234-1.5195-2.2812-4.1016-2.2812-7.75v-12.25h-4.5781v-6.6094h4.5781v-8.2031z" />
        </symbol>
        <symbol id="h" overflow="visible">
          <path d="m24.094-24.656v-15.484h9.2812v40.141h-9.2812v-4.1719c-1.2734 1.6992-2.6719 2.9453-4.2031 3.7344s-3.3047 1.1875-5.3125 1.1875c-3.5625 0-6.4922-1.4102-8.7812-4.2344-2.2812-2.832-3.4219-6.4766-3.4219-10.938 0-4.4453 1.1406-8.0859 3.4219-10.922 2.2891-2.832 5.2188-4.25 8.7812-4.25 1.9883 0 3.7539 0.40234 5.2969 1.2031 1.5391 0.80469 2.9453 2.0469 4.2188 3.7344zm-6.0938 18.703c1.9766 0 3.4883-0.72266 4.5312-2.1719 1.0391-1.4453 1.5625-3.5469 1.5625-6.2969s-0.52344-4.8438-1.5625-6.2812c-1.043-1.4453-2.5547-2.1719-4.5312-2.1719-1.9609 0-3.4609 0.72656-4.5 2.1719-1.043 1.4375-1.5625 3.5312-1.5625 6.2812s0.51953 4.8516 1.5625 6.2969c1.0391 1.4492 2.5391 2.1719 4.5 2.1719z" />
        </symbol>
        <symbol id="g" overflow="visible">
          <path d="m19.812-5.9531c1.9766 0 3.4844-0.72266 4.5156-2.1719 1.0391-1.4453 1.5625-3.5469 1.5625-6.2969s-0.52344-4.8438-1.5625-6.2812c-1.0312-1.4453-2.5391-2.1719-4.5156-2.1719-1.9805 0-3.5 0.73047-4.5625 2.1875-1.0547 1.4492-1.5781 3.5391-1.5781 6.2656 0 2.7422 0.52344 4.8398 1.5781 6.2969 1.0625 1.4492 2.582 2.1719 4.5625 2.1719zm-6.1406-18.703c1.2695-1.6875 2.6758-2.9297 4.2188-3.7344 1.5508-0.80078 3.332-1.2031 5.3438-1.2031 3.5625 0 6.4844 1.418 8.7656 4.25 2.2891 2.8359 3.4375 6.4766 3.4375 10.922 0 4.4609-1.1484 8.1055-3.4375 10.938-2.2812 2.8242-5.2031 4.2344-8.7656 4.2344-2.0117 0-3.793-0.40234-5.3438-1.2031-1.543-0.80078-2.9492-2.0391-4.2188-3.7188v4.1719h-9.2344v-40.141h9.2344z" />
        </symbol>
        <symbol id="f" overflow="visible">
          <path d="m0.64062-28.891h9.2344l7.7656 19.609 6.6094-19.609h9.2344l-12.156 31.625c-1.2188 3.2188-2.6406 5.4688-4.2656 6.75s-3.7734 1.9219-6.4375 1.9219h-5.3438v-6.0625h2.8906c1.5703 0 2.7109-0.25 3.4219-0.75 0.71875-0.5 1.2734-1.3984 1.6719-2.6875l0.25-0.79688z" />
        </symbol>
        <symbol id="e" overflow="visible">
          <path d="m0.26562-38.516h9.9688l10.219 28.438 10.188-28.438h9.9844l-14.266 38.516h-11.844z" />
        </symbol>
        <symbol id="l" overflow="visible">
          <path d="m27.781-27.984v7.5312c-1.2617-0.86328-2.5234-1.5-3.7812-1.9062-1.2617-0.41406-2.5742-0.625-3.9375-0.625-2.5742 0-4.5781 0.75781-6.0156 2.2656-1.4375 1.5-2.1562 3.6016-2.1562 6.2969 0 2.6992 0.71875 4.8047 2.1562 6.3125 1.4375 1.5 3.4414 2.25 6.0156 2.25 1.4453 0 2.8164-0.21094 4.1094-0.64062 1.3008-0.42578 2.5039-1.0625 3.6094-1.9062v7.5625c-1.4492 0.53125-2.918 0.92578-4.4062 1.1875-1.4805 0.26953-2.9688 0.40625-4.4688 0.40625-5.2109 0-9.2891-1.3359-12.234-4.0156-2.9375-2.6758-4.4062-6.3945-4.4062-11.156 0-4.7578 1.4688-8.4766 4.4062-11.156 2.9453-2.6758 7.0234-4.0156 12.234-4.0156 1.5078 0 3 0.13672 4.4688 0.40625 1.4766 0.27344 2.9453 0.67188 4.4062 1.2031z" />
        </symbol>
        <symbol id="k" overflow="visible">
          <path d="m18.188-22.984c-2.0547 0-3.6172 0.73438-4.6875 2.2031-1.0742 1.4688-1.6094 3.5898-1.6094 6.3594 0 2.7734 0.53516 4.8906 1.6094 6.3594 1.0703 1.4688 2.6328 2.2031 4.6875 2.2031 2.0078 0 3.5469-0.73438 4.6094-2.2031 1.0703-1.4688 1.6094-3.5859 1.6094-6.3594 0-2.7695-0.53906-4.8906-1.6094-6.3594-1.0625-1.4688-2.6016-2.2031-4.6094-2.2031zm0-6.6094c4.9688 0 8.8477 1.3438 11.641 4.0312 2.8008 2.6875 4.2031 6.4023 4.2031 11.141 0 4.75-1.4023 8.4688-4.2031 11.156-2.793 2.6797-6.6719 4.0156-11.641 4.0156-4.9922 0-8.8906-1.3359-11.703-4.0156-2.8125-2.6875-4.2188-6.4062-4.2188-11.156 0-4.7383 1.4062-8.4531 4.2188-11.141s6.7109-4.0312 11.703-4.0312z" />
        </symbol>
        <symbol id="j" overflow="visible">
          <path d="m27-27.984v7.0156c-1.9688-0.82031-3.875-1.4414-5.7188-1.8594-1.8438-0.41406-3.5859-0.625-5.2188-0.625-1.75 0-3.0547 0.22656-3.9062 0.67188-0.84375 0.4375-1.2656 1.1094-1.2656 2.0156 0 0.74219 0.31641 1.3086 0.95312 1.7031 0.64453 0.39844 1.8047 0.6875 3.4844 0.875l1.625 0.23438c4.7266 0.60547 7.9062 1.5938 9.5312 2.9688 1.6328 1.375 2.4531 3.5312 2.4531 6.4688 0 3.0859-1.1367 5.4023-3.4062 6.9531-2.2734 1.543-5.6562 2.3125-10.156 2.3125-1.9062 0-3.8828-0.15234-5.9219-0.45312-2.043-0.30078-4.1367-0.75391-6.2812-1.3594v-7.0156c1.8438 0.89844 3.7266 1.5703 5.6562 2.0156 1.9375 0.44922 3.9062 0.67188 5.9062 0.67188 1.8008 0 3.1562-0.25 4.0625-0.75 0.91406-0.5 1.375-1.2383 1.375-2.2188 0-0.82031-0.32031-1.4375-0.95312-1.8438-0.625-0.40625-1.8711-0.71875-3.7344-0.9375l-1.625-0.20312c-4.1172-0.51953-7-1.4727-8.6562-2.8594-1.6484-1.3945-2.4688-3.5156-2.4688-6.3594 0-3.0625 1.0469-5.332 3.1406-6.8125 2.1016-1.4766 5.3203-2.2188 9.6562-2.2188 1.6953 0 3.4844 0.13281 5.3594 0.39062 1.875 0.26172 3.9102 0.66797 6.1094 1.2188z" />
        </symbol>
        <symbol id="i" overflow="visible">
          <path d="m4.8438-38.516h9.9375v31.016h17.438v7.5h-27.375z" />
        </symbol>
      </defs>
      <g>
        <path d="m350 84.527c-107.79 0-195.47 87.688-195.47 195.47 0.003906 107.79 87.688 195.47 195.46 195.47 107.79 0 195.48-87.688 195.48-195.47s-87.684-195.47-195.47-195.47zm88.266 283.73c-1.0312 1.0352-2.3828 1.5508-3.7344 1.5508-1.3516 0-2.7031-0.51562-3.7344-1.5469l-80.801-80.801-80.797 80.797c-1.0312 1.0352-2.3867 1.5508-3.7383 1.5508-1.3516 0-2.7031-0.51562-3.7344-1.5469-2.0625-2.0625-2.0625-5.4062 0-7.4688l80.797-80.797-80.789-80.789c-2.0625-2.0625-2.0625-5.4062 0-7.4688s5.4062-2.0625 7.4688 0l80.793 80.781 80.789-80.789c2.0625-2.0625 5.4062-2.0625 7.4688 0s2.0625 5.4062 0 7.4688l-80.789 80.789 80.797 80.797c2.0664 2.0664 2.0664 5.4102 0.003906 7.4727z" />
        <path d="m350 36.98c-134.21 0-243.02 108.8-243.02 243.02 0 134.21 108.8 243.02 243.02 243.02 134.21 0 243.02-108.8 243.02-243.02s-108.8-243.02-243.02-243.02zm-0.003906 449.06c-113.61 0-206.03-92.434-206.03-206.04s92.422-206.04 206.03-206.04c113.62 0 206.05 92.434 206.05 206.04s-92.434 206.04-206.05 206.04z" />
      </g>
    </svg>
  );
}
