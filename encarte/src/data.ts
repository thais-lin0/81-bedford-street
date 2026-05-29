export const TRACKS: [string, string][] = [
  ["sunday", "2:54"],
  ["in between", "3:17"],
  ["loose plans", "4:02"],
  ["coffee and gray", "2:31"],
  ["wrong number", "3:38"],
  ["may 27", "4:45"],
  ["small town", "2:52"],
  ["walking around", "3:59"],
  ["maybe later", "4:06"],
  ["no rush", "5:13"],
];

export interface SongSection {
  label: string;
  notes: string[];
  lines: string[];
}

export interface Song {
  no: string;
  title: string;
  dur: string;
  intro: string[];
  sections: SongSection[];
}

export const SONG: Song = {
  no: "02",
  title: "in between",
  dur: "3:17",
  intro: [
    "allegro · lo-fi, dry room",
    "guitar stab → silence",
    "bass alone, staccato",
    "drums crash in — no buildup",
  ],
  sections: [
    {
      label: "verse 1",
      notes: ["pianissimo", "clean guitar only", "deadpan, spoken-sung"],
      lines: [
        "Neon on the window, midnight in the room",
        "Two cups on the counter, one went cold too soon",
        'You said, "Don\u2019t call it nothing," I said, "I won\u2019t try"',
        "We were halfway to a sunrise and still staring at the sky",
      ],
    },
    {
      label: "pre-chorus",
      notes: ["bass staccato", "kick on downbeat"],
      lines: [
        "Every almost had a name",
        "Every silence felt the same",
        "Like a match held in the rain",
        "Just enough to feel the flame",
      ],
    },
    {
      label: "chorus",
      notes: ["fortissimo — full band", "raw, shouted", "no reverb added"],
      lines: [
        "We were the in-between, the never-and-the-might",
        "A ghost in the hallway, a spark in the light",
        "Not a beginning, not a goodbye",
        "Just two bad timing hearts passing in the night",
        "And I still feel it when the city goes still",
        "That something we lost before it knew how to live",
        "We were the in-between, and maybe we still are",
        "A beautiful bruise, a vanished star",
      ],
    },
    {
      label: "verse 2",
      notes: ["diminuendo → silence", "half-whispered, dry"],
      lines: [
        "Your jacket on my chair, my song on your phone",
        "Little things that linger like they never went home",
        "I learned the shape of you in the back of my mind",
        "A map with no destination, just lines that crossed in time",
      ],
    },
    {
      label: "bridge",
      notes: ["bass pedal point, legato", "spoken, flat affect"],
      lines: [
        "If I say your name, it changes in the air",
        "If I look too long, I find you everywhere",
        "So I keep on walking past the place we used to be",
        "Where the almost turns to memory",
        "And memory turns to me",
      ],
    },
    {
      label: "outro",
      notes: ["feedback squeal, tremolo", "lo-fi tape hiss", "no clean ending"],
      lines: [
        "Something that could happen",
        "Something that never did",
        "Still lives in the hush",
        "Of everything we hid",
      ],
    },
  ],
};
