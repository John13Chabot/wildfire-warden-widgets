// Upgrade stories: three short beats per weak point, played automatically (no taps).
// 0 = the weak point, 1 = what happens without the upgrade, 2 = what the upgrade does.
export const BEATS = [0, 3.2, 8.4, 13.6, 15];   // beat start times (s); story length 15 s
export const STORY = {
  attic: { up: 'vent mesh', t: ['Attic and gable vents are open doorways for wind-blown embers.', 'Without mesh: embers blow through the 1/4" screen into the attic.', 'With 1/8" or 1/16" mesh: embers are stopped at the vent.'] },
  wood: { up: 'FireFree 88', t: ['Fascia and trim sit where heat and flames reach the roof.', 'Unprotected: heat from nearby flames ignites the bare wood.', 'With FireFree 88: the coating swells into a protective char.'] },
  gutter: { up: 'gutter guards', t: ['Gutters collect dry leaves and needles right at the roof edge.', 'Without guards: embers land in the debris and ignite it.', 'With FireStorm guards: no debris, so the embers burn out.'] },
  eaves: { up: 'boxed eaves', t: ['Open eaves trap heat and embers between the rafters.', 'Open eaves: heat and embers ignite the rafter bays.', 'Boxed with fiber cement: no pockets, nothing to ignite.'] },
  deck: { up: 'DeckGuard', t: ['Decks sit low, with gaps and debris that catch embers and flame.', 'Untreated: burning brush beside the deck ignites the boards.', 'With DeckGuard: the boards resist ignition.'] },
  found: { up: 'vent mesh', t: ['Foundation vents lead straight into the crawl space.', 'Without mesh: embers drift into the crawl space.', 'With mesh: embers are kept outside.'] },
  zone: { up: 'Zone 0 + FORTIFY', t: ['The first 5 feet: mulch and plants right against the house.', 'Embers ignite the mulch, right against the wall.', 'Cleared and treated with FORTIFY: embers find nothing to burn.'] },
};
