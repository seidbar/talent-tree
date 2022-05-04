export const mockedTree = [
  {
    id: 0,
    nodes: [
      {
        name: "Talent 1",
        completed: true,
        id: "test",
        parent: undefined,
      },
    ],
  },
  {
    id: 1,
    nodes: [
      {
        name: "Talent 2",
        completed: true,
        id: "test2",
        parent: "test",
      },
    ],
  },
  {
    id: 2,
    nodes: [
      {
        name: "Talent 3",
        completed: false,
        id: "test3",
        parent: "test2",
      },
      {
        name: "Talent 4",
        completed: false,
        id: "test4",
        parent: "test2",
      },
    ],
  },
  {
    id: 3,
    nodes: [
      {
        name: "Talent 5",
        completed: false,
        id: "test5",
        parent: "test3",
      },
      {
        name: "Talent 6",
        completed: false,
        id: "test6",
        parent: "test4",
      },
    ],
  },
];
