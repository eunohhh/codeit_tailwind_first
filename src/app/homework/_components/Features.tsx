'use client';

import dynamic from 'next/dynamic';

/* eslint-disable @next/next/no-img-element */
const data = [
  {
    type: 'Invite',
    title: 'Invite friends for better returns',
    description:
      'For every friend you invite to Pocket, you get insider notifications 5 seconds sooner. And it’s 10 seconds if you invite an insider.',
  },
  {
    type: 'Notification',
    title: 'Notifications on stock dips',
    description:
      'Get a push notification every time we find out something that’s going to lower the share price on your holdings so you can sell before the information hits the public markets.',
  },
  {
    type: 'Invest',
    title: 'Invest what you want',
    description:
      'We hide your stock purchases behind thousands of anonymous trading accounts, so suspicious activity can never be traced back to you.',
  },
];

const SvgComponent: Record<string, React.ComponentType> = {
  Invite: dynamic(() => import('./Invite'), { ssr: false }),
  Notification: dynamic(() => import('./Notification'), { ssr: false }),
  Invest: dynamic(() => import('./Invest'), { ssr: false }),
};

function Features() {
  return (
    <section id="features" className="bg-gray-900 py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-3xl">
          <h2 className="text-3xl font-medium tracking-tight text-white">
            Every feature you need to win. Try it for yourself.
          </h2>
          <p className="mt-2 text-lg text-gray-400">
            Pocket was built for investors like you who play by their own rules and aren’t going to
            let SEC regulations get in the way of their dreams. If other investing tools are afraid
            to build it, Pocket has it.
          </p>
        </div>
        <div className="mt-16 md:hidden"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 hidden md:mt-20 md:block">
          <div className="grid grid-cols-12 items-center gap-8 lg:gap-16 xl:gap-24">
            <div className="relative z-10 order-last col-span-6 space-y-6">
              {data.map((feature) => {
                const Svg = SvgComponent[feature.type];
                return (
                  <div
                    key={feature.type}
                    className="relative rounded-2xl transition-colors hover:bg-gray-800/30"
                  >
                    <div className="absolute inset-0 bg-gray-800"></div>
                    <div className="relative z-10 p-8">
                      <Svg />
                      <h3 className="mt-6 text-lg font-semibold text-white">
                        <button className="text-left ui-not-focus-visible:outline-none">
                          <span className="absolute inset-0 rounded-2xl"></span>
                          {feature.title}
                        </button>
                      </h3>
                      <p className="mt-2 text-sm text-gray-400">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="relative col-span-6">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <svg
                  viewBox="0 0 558 558"
                  width="558"
                  height="558"
                  fill="none"
                  aria-hidden="true"
                  className="animate-spin-slow"
                >
                  <defs>
                    <linearGradient
                      id=":R1ll7qfja:"
                      x1="79"
                      y1="16"
                      x2="105"
                      y2="237"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#13B5C8"></stop>
                      <stop offset="1" stopColor="#13B5C8" stopOpacity="0"></stop>
                    </linearGradient>
                  </defs>
                  <path
                    d="M1 279C1 125.465 125.465 1 279 1s278 124.465 278 278-124.465 278-278 278S1 432.535 1 279Z"
                    stroke="#13B5C8"
                    opacity="0.2"
                  ></path>
                  <path
                    d="M1 279C1 125.465 125.465 1 279 1"
                    stroke="url(#:R1ll7qfja:)"
                    strokeLinecap="round"
                  ></path>
                </svg>
              </div>
              <div className="relative aspect-[366/729] z-10 mx-auto w-full max-w-[366px]">
                <div className="absolute inset-y-[calc(1/729*100%)] left-[calc(7/729*100%)] right-[calc(5/729*100%)] rounded-[calc(58/366*100%)/calc(58/729*100%)] shadow-2xl"></div>
                <div className="absolute left-[calc(23/366*100%)] top-[calc(23/729*100%)] grid h-[calc(686/729*100%)] w-[calc(318/366*100%)] transform grid-cols-1 overflow-hidden bg-gray-900 pt-[calc(23/318*100%)]">
                  <div className="col-start-1 row-start-1 flex focus:outline-offset-[32px] ui-not-focus-visible:outline-none">
                    <div className="flex flex-col w-full">
                      <div className="flex justify-between px-4 pt-4">
                        <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 flex-none">
                          <path
                            d="M5 6h14M5 18h14M5 12h14"
                            stroke="#fff"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                        <svg viewBox="0 0 79 24" fill="none" className="h-6 flex-none">
                          <path
                            d="M12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12ZM2.4 12a9.004 9.004 0 0 0 6.055 8.507c1.565.542 2.945-.85 2.945-2.507V6c0-1.657-1.38-3.049-2.945-2.507A9.004 9.004 0 0 0 2.4 12Z"
                            fill="#06B6D4"
                          ></path>
                          <path
                            d="M33.004 17V6.818h3.818c.783 0 1.439.146 1.97.438.533.291.935.692 1.207 1.203.275.507.413 1.084.413 1.73 0 .653-.138 1.233-.413 1.74a2.948 2.948 0 0 1-1.218 1.198c-.537.288-1.198.433-1.983.433h-2.531v-1.517h2.282c.457 0 .832-.08 1.124-.238.291-.16.507-.378.646-.657.142-.278.214-.598.214-.96 0-.36-.072-.679-.214-.954a1.452 1.452 0 0 0-.651-.641c-.292-.156-.668-.234-1.129-.234h-1.69V17h-1.845Zm12.152.15c-.746 0-1.392-.165-1.939-.493a3.343 3.343 0 0 1-1.273-1.377c-.298-.59-.447-1.28-.447-2.068 0-.79.15-1.48.447-2.073a3.335 3.335 0 0 1 1.273-1.383c.547-.328 1.193-.492 1.94-.492.745 0 1.391.164 1.938.492.547.329.97.79 1.268 1.383.301.593.452 1.284.452 2.073 0 .789-.15 1.478-.452 2.068a3.309 3.309 0 0 1-1.268 1.377c-.547.328-1.193.492-1.939.492Zm.01-1.443c.404 0 .742-.11 1.014-.333.272-.225.474-.527.607-.905.136-.377.204-.798.204-1.262 0-.468-.068-.89-.204-1.268a2.007 2.007 0 0 0-.607-.91c-.272-.225-.61-.338-1.014-.338-.414 0-.759.113-1.034.338a2.041 2.041 0 0 0-.612.91 3.81 3.81 0 0 0-.198 1.268c0 .464.066.885.198 1.262.136.378.34.68.612.905.275.222.62.333 1.034.333Zm8.508 1.442c-.763 0-1.417-.167-1.964-.502a3.352 3.352 0 0 1-1.258-1.387c-.292-.593-.437-1.276-.437-2.048 0-.776.149-1.46.447-2.054a3.34 3.34 0 0 1 1.263-1.392c.547-.334 1.193-.502 1.939-.502.62 0 1.168.115 1.645.343.48.226.864.546 1.149.96.285.41.447.891.487 1.441h-1.72a1.644 1.644 0 0 0-.497-.92c-.259-.248-.605-.372-1.04-.372-.367 0-.69.1-.969.298-.278.196-.495.478-.651.845-.153.368-.229.81-.229 1.323 0 .52.076.968.229 1.342.152.371.366.658.641.86.279.2.605.298.98.298.265 0 .502-.05.71-.149.213-.102.39-.25.532-.442.143-.192.24-.426.294-.701h1.72a2.999 2.999 0 0 1-.477 1.437c-.275.414-.65.739-1.124.974-.474.232-1.03.348-1.67.348Zm6.39-2.545-.006-2.173h.289l2.744-3.067h2.103l-3.376 3.758h-.372l-1.383 1.482ZM58.422 17V6.818h1.8V17h-1.8Zm4.792 0-2.485-3.475 1.213-1.268L65.368 17h-2.153Zm6.245.15c-.766 0-1.427-.16-1.984-.478a3.233 3.233 0 0 1-1.278-1.362c-.298-.59-.447-1.285-.447-2.083 0-.786.149-1.475.447-2.069a3.384 3.384 0 0 1 1.263-1.392c.54-.334 1.175-.502 1.904-.502.47 0 .915.076 1.333.229.42.149.792.381 1.113.696.325.315.58.716.766 1.203.186.484.278 1.06.278 1.73v.552h-6.259v-1.213h4.534a1.935 1.935 0 0 0-.224-.92 1.625 1.625 0 0 0-.611-.641 1.719 1.719 0 0 0-.905-.234c-.368 0-.691.09-.97.269a1.848 1.848 0 0 0-.65.696c-.153.285-.231.598-.234.94v1.058c0 .444.08.825.243 1.144.163.315.39.556.681.726.292.165.634.248 1.025.248.261 0 .498-.036.71-.11.213-.075.397-.187.552-.332.156-.146.274-.327.353-.542l1.68.189a2.62 2.62 0 0 1-.606 1.163 2.958 2.958 0 0 1-1.133.766c-.461.179-.988.268-1.581.268Zm8.731-7.786v1.392h-4.39V9.364h4.39Zm-3.306-1.83h1.8v7.17c0 .241.036.427.109.556a.59.59 0 0 0 .298.258c.123.047.259.07.408.07.113 0 .215-.008.308-.025.096-.016.17-.031.219-.045l.303 1.407c-.096.034-.233.07-.412.11-.176.04-.392.063-.647.07a2.934 2.934 0 0 1-1.218-.204 1.895 1.895 0 0 1-.86-.706c-.209-.319-.311-.716-.308-1.194V7.534Z"
                            fill="#fff"
                          ></path>
                        </svg>
                        <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 flex-none">
                          <path
                            d="M15 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.696 19h10.608c1.175 0 2.08-.935 1.532-1.897C18.028 15.69 16.187 14 12 14s-6.028 1.689-6.836 3.103C4.616 18.065 5.521 19 6.696 19Z"
                            stroke="#fff"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </div>
                      <div className="mt-6 px-4 text-white" style={{ opacity: 1 }}>
                        <div className="text-2xl text-white">Invite people</div>
                        <div className="text-sm text-gray-500">
                          Get tips <span className="text-white">5s sooner</span> for every invite.
                        </div>
                      </div>
                      <div className="mt-6 flex-auto rounded-t-2xl bg-white" style={{ opacity: 1 }}>
                        <div className="px-4 py-6">
                          <div className="space-y-6">
                            <div>
                              <div className="text-sm text-gray-500">Full name</div>
                              <div className="mt-2 border-b border-gray-200 pb-2 text-sm text-gray-900">
                                Albert H. Wiggin
                              </div>
                            </div>
                            <div>
                              <div className="text-sm text-gray-500">Email address</div>
                              <div className="mt-2 border-b border-gray-200 pb-2 text-sm text-gray-900">
                                awiggin@chase.com
                              </div>
                            </div>
                          </div>
                          <div className="mt-6 rounded-lg bg-cyan-500 px-3 py-2 text-center text-sm font-semibold text-white">
                            Invite person
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <svg
                  viewBox="0 0 366 729"
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 h-full w-full fill-gray-100"
                >
                  <path
                    fill="#F2F2F2"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M300.092 1c41.22 0 63.223 21.99 63.223 63.213V184.94c-.173.184-.329.476-.458.851.188-.282.404-.547.647-.791.844-.073 2.496.257 2.496 2.157V268.719c-.406 2.023-2.605 2.023-2.605 2.023a7.119 7.119 0 0 1-.08-.102v394.462c0 41.213-22.001 63.212-63.223 63.212h-95.074c-.881-.468-2.474-.795-4.323-.838l-33.704-.005-.049.001h-.231l-.141-.001c-2.028 0-3.798.339-4.745.843H66.751c-41.223 0-63.223-21.995-63.223-63.208V287.739c-.402-.024-2.165-.23-2.524-2.02v-.973A2.039 2.039 0 0 1 1 284.62v-47.611c0-.042.001-.084.004-.126v-.726c0-1.9 1.652-2.23 2.496-2.157l.028.028v-16.289c-.402-.024-2.165-.23-2.524-2.02v-.973A2.039 2.039 0 0 1 1 214.62v-47.611c0-.042.001-.084.004-.126v-.726c0-1.9 1.652-2.23 2.496-2.157l.028.028v-26.041a2.26 2.26 0 0 0 .093-.236l-.064-.01a3.337 3.337 0 0 1-.72-.12l-.166-.028A2 2 0 0 1 1 135.62v-24.611a2 2 0 0 1 1.671-1.973l.857-.143v-44.68C3.528 22.99 25.53 1 66.75 1h233.341ZM3.952 234.516a5.481 5.481 0 0 0-.229-.278c.082.071.159.163.228.278Zm89.99-206.304A4.213 4.213 0 0 0 89.727 24H56.864C38.714 24 24 38.708 24 56.852v618.296C24 693.292 38.714 708 56.864 708h250.272c18.15 0 32.864-14.708 32.864-32.852V56.852C340 38.708 325.286 24 307.136 24h-32.864a4.212 4.212 0 0 0-4.213 4.212v2.527c0 10.235-8.3 18.532-18.539 18.532H112.48c-10.239 0-18.539-8.297-18.539-18.532v-2.527Z"
                  ></path>
                  <rect x="154" y="29" width="56" height="5" rx="2.5" fill="#D4D4D4"></rect>
                </svg>
                <img
                  alt=""
                  loading="lazy"
                  width="366"
                  height="729"
                  decoding="async"
                  data-nimg="1"
                  className="pointer-events-none absolute inset-0 h-full w-full"
                  style={{ color: 'transparent' }}
                  src="/phone.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
