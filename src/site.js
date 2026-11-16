// Shared site layout (scene, offline bake and runtime risk model all read this).
// Our house footprint (incl. roof overhang) and the two neighbouring homes on the block.
export const HOUSE_RECT = { x0: -4.4, x1: 13.7, z0: -4.65, z1: 6.7 };
// W: downslope, upwind across from the deck (~20 ft to the deck, ~38 ft to the house wall)
// N: uphill behind the back yard (~29 ft to the back wall)
export const NEIGH = [
  { id: 'W', x0: -22.5, x1: -16, z0: 2, z1: 10, h: 3.4, storeys: 1, ridge: 'z' },
  { id: 'N', x0: 0, x1: 9.5, z0: -21.5, z1: -13.5, h: 6.0, storeys: 2, ridge: 'x' },
];
export const YARD = 2.5;   // landscaped yard margin around each neighbour (not wildland fuel)
