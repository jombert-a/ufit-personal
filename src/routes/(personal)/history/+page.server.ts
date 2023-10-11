export function load() {
  const sessions = [
    {
      id: 1,
      date: new Date('2023-09-20').toUTCString(),
    },
  ];

  return {
    sessions,
  };
}