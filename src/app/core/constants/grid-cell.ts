export type Id = number;

export interface Destination {
  up: Id | null;
  down: Id | null;
  left: Id | null;
  right: Id | null;
}

export interface GridCell {
  id: Id;
  position: string;
  destination: Destination;
}

export const GRID_CELLS: GridCell[] = [
  {
    id: 1,
    position: 'auto',
    destination: {
      up: null,
      down: 4,
      left: null,
      right: 2,
    },
  },
  {
    id: 2,
    position: 'auto / span 3',
    destination: {
      up: null,
      down: 5,
      left: null,
      right: 3,
    },
  },
  {
    id: 3,
    position: 'auto',
    destination: {
      up: null,
      down: 7,
      left: null,
      right: null,
    },
  },
  {
    id: 4,
    position: '2 / 1 / span 2',
    destination: {
      up: 1,
      down: 11,
      left: null,
      right: null,
    },
  },
  {
    id: 5,
    position: 'auto',
    destination: {
      up: 2,
      down: 8,
      left: null,
      right: null,
    },
  },
  {
    id: 6,
    position: '2 / 4',
    destination: {
      up: null,
      down: 10,
      left: null,
      right: null,
    },
  },
  {
    id: 7,
    position: '2 / 5',
    destination: {
      up: null,
      down: null,
      left: 6,
      right: null,
    },
  },
  {
    id: 8,
    position: '3 / 2',
    destination: {
      up: null,
      down: 12,
      left: null,
      right: null,
    },
  },
  {
    id: 9,
    position: '3 / 3',
    destination: {
      up: 5,
      down: 13,
      left: null,
      right: null,
    },
  },
  {
    id: 10,
    position: 'auto / 2 span',
    destination: {
      up: 6,
      down: 13,
      left: null,
      right: null,
    },
  },
  {
    id: 11,
    position: 'auto',
    destination: {
      up: 4,
      down: null,
      left: null,
      right: null,
    },
  },
  {
    id: 12,
    position: 'auto',
    destination: {
      up: null,
      down: null,
      left: 11,
      right: null,
    },
  },
  {
    id: 13,
    position: '4 / 5',
    destination: {
      up: null,
      down: null,
      left: 9,
      right: null,
    },
  },
];
