const data = [
  {
    name: 'Michael Foster',
    email: 'michael.foster@example.com',
    role: 'Co-Founder / CTO',
    imgsrc:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    status: 'last seen 3h ago',
  },
  {
    name: 'Dries Vincent',
    email: 'dries.vincent@example.com',
    role: 'Business Relations',
    imgsrc:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    status: 'Online',
  },
];

export default function Home() {
  return (
    <section className="w-[680px] h-dvh mx-auto flex items-center justify-center">
      <ul role="list" className="w-full flex flex-col divide-y divide-gray-100">
        {data.map((item) => (
          <li className="flex flex-row gap-4 justify-between py-5" key={item.name}>
            <div className="flex flex-row min-w-0 gap-x-4">
              <img className="w-12 h-12 rounded-full" src={item.imgsrc} alt="" />
              <div className="flex flex-col gap-2">
                <p className="text-sm font-semibold text-gray-900">{item.name}</p>
                <p className="text-sm text-gray-500">{item.email}</p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-sm text-gray-900 font-medium">{item.role}</p>
              {item.status === 'Online' ? (
                <div className="flex items-center gap-x-1 self-end">
                  <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                    <div className="size-1.5 rounded-full bg-emerald-500"></div>
                  </div>
                  <p className="text-sm text-gray-500 self-end">{item.status}</p>
                </div>
              ) : (
                <p className="text-sm text-gray-500 self-end">{item.status}</p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
