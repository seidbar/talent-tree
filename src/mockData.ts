import { TreeRow } from "./components/TalentTree/TalentTree";

export const mockedTree = <TreeRow[]>[
  {
    id: 0,
    nodes: [
      {
        title: "Talent 1",
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
        title: "Talent 2",
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
        title: "Talent 3",
        completed: false,
        id: "test3",
        parent: "test2",
      },
      {
        title: "Talent 4",
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
        title: "Talent 5",
        completed: false,
        id: "test5",
        parent: "test3",
      },
      {
        title: "Talent 6",
        completed: false,
        id: "test6",
        parent: "test4",
      },
    ],
  },
];
