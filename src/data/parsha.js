export const parshaCatalog = [
  {
    slug: 'shemini-5786',
    startsOn: '2026-04-11',
    endsOn: '2026-04-24',
    civilDate: 'Shabbat, April 11, 2026',
    hebrewDate: '24 Nisan 5786',
    name: 'Shemini',
    hebrewName: 'שְּׁמִינִי',
    torahReference: 'Leviticus 9:1–11:47',
    summary:
      'Shemini describes the eighth day of the inauguration of the Mishkan, the joyful moment when divine presence appears to the people, and the sobering deaths of Nadav and Avihu. The portion closes with the laws of kosher animals, bringing holiness into ordinary daily life.',
    themes: ['Holiness', 'Sacred responsibility', 'Joy and restraint', 'Everyday practice'],
    resources: [
      {
        title: 'Sefaria, Parashat Shemini',
        description: 'Read the full parsha text with translations, commentaries, and source sheets.',
        url: 'https://www.sefaria.org/topics/parashat-shemini',
        type: 'Text and commentary',
      },
      {
        title: 'My Jewish Learning, Shemini overview',
        description: 'Accessible overview of the portion and its major ideas.',
        url: 'https://www.myjewishlearning.com/torah-portion/shemini/',
        type: 'Overview article',
      },
      {
        title: 'Chabad, Parshah in a Nutshell: Shemini',
        description: 'Short summary with classic framing and practical takeaways.',
        url: 'https://www.chabad.org/parshah/article_cdo/aid/3184/jewish/Shemini-in-a-Nutshell.htm',
        type: 'Summary',
      },
      {
        title: 'Hadar resources on Shemini',
        description: 'Thoughtful essays and Torah commentary for deeper learning.',
        url: 'https://www.hadar.org/torah-tefillah/resources?combine=shemini',
        type: 'Essay and commentary',
      },
    ],
    discussionPrompts: [
      'What does it mean to balance spiritual enthusiasm with discipline and responsibility?',
      'Why do the dietary laws appear immediately after the Mishkan inauguration story?',
      'Which part of holiness in Shemini feels public, and which part feels private?',
      'How can ordinary daily habits become expressions of sacred values?',
    ],
  },
  {
    slug: 'achrei-mot-kedoshim-5786',
    startsOn: '2026-04-25',
    endsOn: '2026-05-01',
    civilDate: 'Shabbat, April 25, 2026',
    hebrewDate: '8 Iyyar 5786',
    name: 'Achrei Mot-Kedoshim',
    hebrewName: 'אַחֲרֵי מוֹת־קְדֹשִׁים',
    torahReference: 'Leviticus 16:1–20:27',
    summary:
      'Achrei Mot and Kedoshim pair intimacy with ethics. The first portion centers on Yom Kippur, boundaries, and sacred responsibility after loss. The second turns outward, calling the community to holiness through justice, honesty, compassion, and love for one another.',
    themes: ['Holiness', 'Boundaries', 'Justice', 'Love of neighbor'],
    resources: [
      {
        title: 'Hebcal, Achrei Mot-Kedoshim 5786',
        description: 'Confirms the weekly reading date and Torah references for this Shabbat.',
        url: 'https://www.hebcal.com/sedrot/achrei-mot-kedoshim-20260425',
        type: 'Calendar and reference',
      },
      {
        title: 'Sefaria, Parashat Achrei Mot-Kedoshim',
        description: 'Primary text, English translation, and classic commentaries in one place.',
        url: 'https://www.sefaria.org/topics/parashat-achrei-mot-kedoshim',
        type: 'Text and commentary',
      },
      {
        title: 'My Jewish Learning, Achrei Mot-Kedoshim overview',
        description: 'Readable summary of the combined parsha and its central ideas.',
        url: 'https://www.myjewishlearning.com/torah-portion/achrei-mot-kedoshim/',
        type: 'Overview article',
      },
      {
        title: 'Chabad, Acharei-Kedoshim in a Nutshell',
        description: 'Concise walk-through of the combined Torah portion.',
        url: 'https://www.chabad.org/parshah/article_cdo/aid/3204/jewish/Acharei-Kedoshim-in-a-Nutshell.htm',
        type: 'Summary',
      },
    ],
    discussionPrompts: [
      'What is the relationship between holiness and ethical behavior in everyday life?',
      'Why do boundaries matter in a community that also values compassion and love?',
      'How does “love your neighbor as yourself” change when read in the context of the whole parsha?',
      'Which commandment here feels most urgent or relevant right now, and why?',
    ],
  },
]

const FALLBACK_PARSHA = parshaCatalog[parshaCatalog.length - 1]

export function getCurrentParsha(date = new Date()) {
  const isoDate = date.toISOString().slice(0, 10)

  return (
    parshaCatalog.find((parsha) => isoDate >= parsha.startsOn && isoDate <= parsha.endsOn) ??
    FALLBACK_PARSHA
  )
}
