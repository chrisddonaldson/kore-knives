export interface Drill {
  title: string
  rounds: Round[]
}
export interface Round {
  type: "PREPARE" | "WORK" | "REST"
  exrcise: string | null
  length: number
}

export const sampleDrill1: Drill = {
  title: "Chris Abs",
  rounds: [
    {
      type: "PREPARE",
      length: 30,
      exrcise: null,
    },

    {
      type: "WORK",
      length: 60,
      exrcise: "Russian Twist",
    },
    {
      type: "REST",
      length: 10,
      exrcise: null,
    },

    {
      type: "WORK",
      length: 60,
      exrcise: "Turkish get up - Left",
    },
    {
      type: "REST",
      length: 10,
      exrcise: null,
    },

    {
      type: "WORK",
      length: 60,
      exrcise: "Turkish get up - Right",
    },
    {
      type: "REST",
      length: 10,
      exrcise: null,
    },

    {
      type: "WORK",
      length: 60,
      exrcise: "V-Sit Hold",
    },
    {
      type: "REST",
      length: 10,
      exrcise: null,
    },

    {
      type: "WORK",
      length: 60,
      exrcise: "Leg Raises",
    },
    {
      type: "REST",
      length: 10,
      exrcise: null,
    },

    {
      type: "WORK",
      length: 60,
      exrcise: "Toe Taps",
    },
    {
      type: "REST",
      length: 10,
      exrcise: null,
    },

    {
      type: "WORK",
      length: 60,
      exrcise: "Crunches",
    },
    {
      type: "REST",
      length: 60,
      exrcise: null,
    },
    {
      type: "WORK",
      length: 60,
      exrcise: "Russian Twist",
    },
    {
      type: "REST",
      length: 10,
      exrcise: null,
    },

    {
      type: "WORK",
      length: 60,
      exrcise: "Turkish get up - Left",
    },
    {
      type: "REST",
      length: 10,
      exrcise: null,
    },

    {
      type: "WORK",
      length: 60,
      exrcise: "Turkish get up - Right",
    },
    {
      type: "REST",
      length: 10,
      exrcise: null,
    },

    {
      type: "WORK",
      length: 60,
      exrcise: "V-Sit Hold",
    },
    {
      type: "REST",
      length: 10,
      exrcise: null,
    },

    {
      type: "WORK",
      length: 60,
      exrcise: "Leg Raises",
    },
    {
      type: "REST",
      length: 10,
      exrcise: null,
    },

    {
      type: "WORK",
      length: 60,
      exrcise: "Toe Taps",
    },
    {
      type: "REST",
      length: 10,
      exrcise: null,
    },

    {
      type: "WORK",
      length: 60,
      exrcise: "Crunches",
    },
  ],
}

const sampleDrill2: Drill = {
  title: "Brie Abs",
  rounds: [
    {
      type: "PREPARE",
      length: 30,
      exrcise: null,
    },

    {
      type: "WORK",
      length: 60,
      exrcise: "Glute Bridge",
    },
    {
      type: "REST",
      length: 10,
      exrcise: null,
    },

    {
      type: "WORK",
      length: 60,
      exrcise: "Side Plank - Left",
    },
    {
      type: "REST",
      length: 10,
      exrcise: null,
    },

    {
      type: "WORK",
      length: 60,
      exrcise: "Side Plank - Right",
    },
    {
      type: "REST",
      length: 10,
      exrcise: null,
    },

    {
      type: "WORK",
      length: 60,
      exrcise: "Plank",
    },
    {
      type: "REST",
      length: 10,
      exrcise: null,
    },

    {
      type: "WORK",
      length: 60,
      exrcise: "Leg Raises",
    },
    {
      type: "REST",
      length: 10,
      exrcise: null,
    },

    {
      type: "WORK",
      length: 60,
      exrcise: "Toe Taps",
    },
    {
      type: "REST",
      length: 10,
      exrcise: null,
    },

    {
      type: "WORK",
      length: 60,
      exrcise: "Crunches",
    },
    {
      type: "REST",
      length: 60,
      exrcise: null,
    },
    {
      type: "WORK",
      length: 60,
      exrcise: "Glute Bridge",
    },
    {
      type: "REST",
      length: 10,
      exrcise: null,
    },

    {
      type: "WORK",
      length: 60,
      exrcise: "Side Plank- Left",
    },
    {
      type: "REST",
      length: 10,
      exrcise: null,
    },

    {
      type: "WORK",
      length: 60,
      exrcise: "Side Plank - Right",
    },
    {
      type: "REST",
      length: 10,
      exrcise: null,
    },

    {
      type: "WORK",
      length: 60,
      exrcise: "Plank",
    },
    {
      type: "REST",
      length: 10,
      exrcise: null,
    },

    {
      type: "WORK",
      length: 60,
      exrcise: "Leg Raises",
    },
    {
      type: "REST",
      length: 10,
      exrcise: null,
    },

    {
      type: "WORK",
      length: 60,
      exrcise: "Toe Taps",
    },
    {
      type: "REST",
      length: 10,
      exrcise: null,
    },

    {
      type: "WORK",
      length: 60,
      exrcise: "Crunches",
    },
  ],
}

export const sampleDrill3: Drill = {
  title: "Test",
  rounds: [
    {
      type: "PREPARE",
      length: 2,
      exrcise: null,
    },

    {
      type: "WORK",
      length: 2,
      exrcise: "Russian Twist",
    },
    {
      type: "REST",
      length: 2,
      exrcise: null,
    },
  ],
}
