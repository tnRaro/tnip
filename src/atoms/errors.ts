import { atomWithReset } from "jotai/utils";

export const errorAtom = atomWithReset<unknown | null>(null);