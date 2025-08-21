export const keywords = [
  "computer science",
  "git",
  "greek alphabet",
  "mathematics",
  "software engineering",
  "typography",
] as const;

export type KeyWord = typeof keywords[number];

export type WordType = "sb." | "vb." | "adj." | "adv.";

export type Lexeme = {
  word: string;
  type?: WordType;
  note?: string;
  search_terms?: string[];
  translations: string[];
  keywords: KeyWord[];
  phrases?: [string, string][];
};

export const en_dk : Lexeme[] = [
  {
    word: "abstract",
    type: "adj.",
    translations: ["abstrakt, -, -"],
    keywords: ["computer science", "software engineering"]
  },
  {
    word: "abstract",
    type: "vb.",
    translations: ["abstrahere, -r, -de, -t"],
    keywords: ["computer science", "software engineering"]
  },
  {
    word: "abstract",
    type: "sb.",
    translations: ["resumé, -et, -er, -erne"],
    keywords: []
  },
  {
    word: "accept",
    type: "vb.",
    translations: ["acceptere, -r, -de, -t"],
    keywords: ["computer science"]
  },
  {
    word: "acceptance",
    type: "sb.",
    translations: ["accept, -en, -er, -erne"],
    keywords: ["computer science"],
    phrases: [
      ["weak accept", "svag accept"],
      ["strong accept", "streng accept"]
    ]
  },
  {
    word: "accepted",
    type: "adj.",
    translations: ["accepte|ret, -ret, -rede"],
    keywords: ["computer science"],
    phrases: [
      ["weakly accepted", "svagt accepteret"],
      ["strongly accepted", "strengt accepteret"]
    ]
  },
  {
    word: "accepting state",
    type: "sb.",
    translations: ["accepttilstand, -en, -e, -ene"],
    keywords: ["computer science"]
  },
  {
    word: "acyclic",
    type: "adj.",
    translations: [
      "acyklisk, -, -e",
      "kredsfri, -t, -e"
    ],
    keywords: ["computer science"]
  },
  {
    word: "adjacency list",
    type: "sb.",
    translations: ["incidensliste, -n, -r, -rne"],
    keywords: ["computer science"]
  },
  {
    word: "affine",
    type: "adj.",
    translations: ["affin, -t, -e"],
    keywords: ["mathematics"]
  },
  {
    word: "ahead-of-time",
    type: "adj.",
    translations: [
      "... på forhånd",
      "forhånds..."
    ],
    keywords: ["computer science"],
    phrases: [
      ["ahead-of-time optimizations", "forhåndsoptimeret / optimeret på forhånd"]
    ]
  },
  {
    word: "algebra",
    type: "sb.",
    translations: ["algebra, -en, -er, -erne"],
    keywords: ["computer science", "mathematics"]
  },
  {
    word: "algebraic",
    type: "adj.",
    translations: ["algebraisk, -, -e"],
    keywords: ["computer science", "mathematics"]
  },
  {
    word: "algorithm",
    type: "sb.",
    translations: ["algoritme, -n, -r, -rne"],
    keywords: ["computer science"]
  },
  {
    word: "alpha",
    note: "Α α",
    translations: ["alfa"],
    keywords: ["greek alphabet"]
  },
  {
    word: "alphabet",
    type: "sb.",
    translations: ["alfabet, -et, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    word: "ambiguous",
    type: "adj.",
    translations: ["tvetydig, -t, -e"],
    keywords: ["computer science"]
  },
  {
    word: "amend",
    type: "vb.",
    translations: ["tilrette, -r, -de, -t"],
    keywords: ["git"]
  },
  {
    word: "amortized",
    type: "adj.",
    note: "GB: amortised",
    translations: ["amortise|ret, -ret, -rede"],
    keywords: ["computer science"]
  },
  {
    word: "analyse",
    type: "vb.",
    translations: ["analysere, -r, -de, -t"],
    keywords: ["computer science"]
  },
  {
    word: "analysis",
    type: "sb.",
    translations: ["analyse, -n, -r, -rne"],
    keywords: ["computer science"]
  },
  {
    word: "and",
    type: "adv.",
    note: "see also \"conjunction\"",
    translations: ["og", "både-og"],
    keywords: ["computer science"]
  },
  {
    word: "angle brace",
    type: "sb.",
    note: "⟨ chevron ⟩",
    search_terms: ["<", ">", "<>", "><"],
    translations: [
      "vinkelparentes, -en, -er, -erne",
      "vinkelklamme, -n, -r, -rne",
    ],
    keywords: ["typography"]
  },
  {
    word: "anonymous",
    type: "adj.",
    translations: ["anonym, -t, -e"],
    keywords: ["software engineering"]
  },
  {
    word: "apostrophe",
    type: "sb.",
    translations: ["apostrof, -fen, fer, ferne"],
    keywords: ["typography"]
  },
  {
    word: "array",
    type: "sb.",
    translations: [
      "række, -n, -er, -rne",
      "liste, -n, -r, -rne"
    ],
    keywords: ["computer science", "software engineering"]
  },
  {
    word: "artifact",
    type: "sb.",
    translations: ["artifakt, -et, -er, -erne"],
    keywords: []
  },
  {
    word: "associative",
    type: "adj.",
    translations: ["assiociativ, -t, -e"],
    keywords: ["mathematics"]
  },
  {
    word: "asymptotic",
    type: "adj.",
    translations: ["asymptotisk, -, -e"],
    keywords: ["computer science"]
  },
  {
    word: "author",
    type: "sb.",
    translations: ["forfatter, -en, -e, -ne"],
    keywords: []
  },
  {
    word: "average",
    type: "adj.",
    translations: ["gennemsnitlig, -t, -e"],
    keywords: ["computer science"]
  },
  {
    word: "automata",
    type: "sb.",
    translations: ["automat, -en, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    word: "axiom",
    type: "sb.",
    translations: ["aksiom, -et, -er, -erne"],
    keywords: ["computer science", "mathematics"],
    phrases: [
      ["axiom of choice", "udvalgsaksiomet"]
    ]
  },
  {
    word: "axiomatisation",
    type: "sb.",
    translations: ["aksiomatisering, -en, -er, -erne"],
    keywords: ["computer science", "mathematics"]
  },
  {
    word: "base case",
    type: "sb.",
    translations: [
      "basis, basen, baser, baserne",
      "basisskridt, -et, -, -ene",
      "induktionsstart, -en, -er, -erne",
      "startbetingelse, -n, -r, -rne"
    ],
    keywords: ["computer science"]
  },
  {
    word: "behaviour",
    type: "sb.",
    translations: ["adfærd, -en"],
    keywords: ["computer science"]
  },
  {
    word: "best-case",
    type: "adj.",
    translations: ["bedst tænkelig, -t, -e"],
    keywords: ["computer science"],
    phrases: [
      ["The best case running time is O(1)", "Den bedst tænkelige kørseltsid er O(1)"]
    ]
  },
  {
    word: "beta",
    note: "Β β",
    translations: ["beta"],
    keywords: ["greek alphabet"]
  },
  {
    word: "bipartite",
    type: "adj.",
    translations: ["todelt, -, -e"],
    keywords: ["computer science"]
  },
  {
    word: "binary",
    type: "adj.",
    translations: ["binær, -t, -e"],
    keywords: ["mathematics"]
  },
  {
    word: "bijection",
    type: "sb.",
    translations: ["bijektion, -en, -er, -erne"],
    keywords: ["mathematics"]
  },
  {
    word: "bijective",
    type: "adj.",
    translations: ["bijektiv, -t, -e"],
    keywords: ["mathematics"]
  },
  {
    word: "bit",
    type: "sb.",
    translations: ["bit, -ten, -s, -tene"],
    keywords: ["computer science"]
  },
  {
    word: "bitwise",
    type: "adj.",
    translations: ["bitvis, -t, -e"],
    keywords: ["computer science"]
  },
  {
    word: "blame",
    type: "vb.",
    translations: ["tilrette, -r, -de, -t"],
    keywords: ["git"]
  },
  {
    word: "blockchain",
    type: "sb.",
    translations: ["blok-kæde, -n, -r, -rne"],
    keywords: ["computer science"]
  },
  {
    word: "Boolean",
    type: "adj.",
    translations: ["boolsk, -, -e"],
    keywords: ["mathematics"]
  },
  {
    word: "Boolean",
    type: "sb.",
    translations: ["sandhedsværdi, -en, -er, -erne"],
    keywords: ["computer science", "software engineering"]
  },
  {
    word: "bottom",
    type: "sb.",
    note: "see also \"false\"",
    translations: ["bund, -en, -e, -ene"],
    keywords: ["computer science", "mathematics"]
  },
  {
    word: "bottom-up",
    type: "adj.",
    translations: ["bund-op"],
    keywords: ["computer science"],
    phrases: [
      ["bottom-up 2-4 tree", "bund-op 2-4-træ"]
    ]
  },
  {
    word: "bottleneck",
    type: "sb.",
    translations: ["flaskehals, -en, -e, -erne"],
    keywords: ["computer science"]
  },
  {
    word: "bound",
    type: "sb.",
    translations: ["grænse, -n, -r, -rne"],
    keywords: ["computer science", "mathematics"]
  },
  {
    word: "bound",
    type: "vb.",
    translations: ["begrænse, -r, -de, -t"],
    keywords: ["computer science", "mathematics"]
  },
  {
    word: "brace",
    type: "sb.",
    note: "{curly} bracket",
    translations: [
      "tuborgklamme, -n, -r, -rne",
      "kap|sel, -slen, -sler, -slerne",
      "en krøllet parentes, den krøllede parentes, de krøllede parenteser",
    ],
    keywords: ["typography"]
  },
  {
    word: "bracket",
    type: "sb.",
    note: "[square] bracket",
    translations: [
      "klamme, -n, -r, -rne",
      "en kantet parentes, den kantede parentes, de kantede parenteser",
    ],
    keywords: ["typography"]
  },
  {
    word: "branch",
    type: "sb.",
    translations: ["gren, -en, -e, -ene"],
    keywords: ["git"]
  },
  {
    word: "branch",
    type: "vb.",
    translations: ["forgrene, -r, -de, -t"],
    keywords: ["git"]
  },
  {
    word: "branching",
    type: "sb.",
    translations: ["forgrening, -en, -er, -erne"],
    keywords: ["computer science", "software engineering"]
  },
  {
    word: "breadth-first",
    type: "adj.",
    translations: ["bredde først, -, -"],
    keywords: ["computer science"]
  },
  {
    word: "breadth-first order",
    type: "sb.",
    translations: ["breddenummerering, -en, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    word: "breadth-first search",
    type: "sb.",
    translations: [
      "bredde først søgning, -en, -er, -erne",
      "breddesøgning, -en, -er, -erne"
    ],
    keywords: ["computer science"]
  },
  {
    word: "buffer",
    type: "sb.",
    translations: ["buffer, -en, -e, -ne"],
    keywords: ["computer science"]
  },
  {
    word: "bus",
    type: "sb.",
    translations: ["bus, -sen, -ser, -serne"],
    keywords: ["computer science"],
    phrases: [
      ["data bus", "databus"],
      ["adress bus", "adressebus"],
      ["control bus", "kontrolbus"]
    ]
  },
  {
    word: "byte",
    type: "sb.",
    translations: ["byte, -n, -s, -ne"],
    keywords: ["computer science"]
  },
  {
    word: "cache",
    type: "sb.",
    translations: ["cache, -n, -r, -rne"],
    keywords: ["computer science"]
  },
  {
    word: "cache memory",
    type: "sb.",
    translations: ["cachehukommelse, -n, -r, -rne"],
    keywords: ["computer science"]
  },
  {
    word: "calculus",
    type: "sb.",
    translations: ["kalkyle, -n, -r, -rne"],
    keywords: ["computer science", "mathematics"]
  },
  {
    word: "canonical",
    type: "adj.",
    translations: ["kanonisk, -, -e"],
    keywords: ["computer science", "mathematics"]
  },
  {
    word: "Cartesian product",
    type: "sb.",
    translations: ["(det) kartesiske produkt"],
    keywords: ["computer science", "mathematics"]
  },
  {
    word: "category",
    type: "adj.",
    translations: ["kategori, -en, -er, -erne"],
    keywords: ["computer science", "mathematics"]
  },
  {
    word: "chain",
    type: "sb.",
    translations: ["kæde, -n, -r, -rne"],
    keywords: ["computer science"]
  },
  {
    word: "chain",
    type: "sb.",
    note: "hash table",
    translations: ["kollisionsliste, -n, -r, -rne"],
    keywords: ["computer science"],
    phrases: [
      ["The table uses hashing with chaining", "Tabellen bruger kollisionslister"]
    ]
  },
  {
    word: "channel",
    type: "sb.",
    translations: ["kanal, -en, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    word: "character",
    type: "sb.",
    note: "see also \"symbol\"",
    translations: ["tegn, -et, -, -ene"],
    keywords: ["computer science"]
  },
  {
    word: "characteristic",
    type: "adj.",
    translations: ["karakteristisk, -, -e"],
    keywords: ["computer science", "mathematics"]
  },
  {
    word: "cherry-pick",
    type: "vb.",
    translations: ["håndplukke, -r, -de, -t"],
    keywords: ["git"],
    phrases: [
      ["We cherry-pick it from the developerbranch", "Det håndplukker vi fra udviklergrenen"]
    ]
  },
  {
    word: "chi",
    note: "Χ χ",
    translations: ["chi, chei"],
    keywords: ["greek alphabet"]
  },
  {
    word: "cite",
    type: "vb.",
    translations: ["henvis|e, -er, -te, -t"],
    keywords: ["computer science", "mathematics"]
  },
  {
    word: "citation",
    type: "sb.",
    translations: ["henvisning, -en, -er, -erne"],
    keywords: ["computer science", "mathematics"]
  },
  {
    word: "class",
    type: "sb.",
    translations: ["klasse, -n, -r, -rne"],
    keywords: ["mathematics"]
  },
  {
    word: "clipboard",
    type: "sb.",
    translations: ["udklipsholder, -en, -e, -ne"],
    keywords: []
  },
  {
    word: "closed",
    type: "adj.",
    translations: ["luk|ket, -ket, -kede"],
    keywords: ["computer science", "mathematics"]
  },
  {
    word: "closure",
    type: "sb.",
    translations: [
      "lukning, -en, -er, -erne",
      "afslutning, -en, -er, -erne"
    ],
    keywords: ["computer science", "mathematics"]
  },
  {
    word: "closure property",
    type: "sb.",
    translations: ["lukkethedsegenskab, -en, -er, -erne"],
    keywords: ["computer science", "mathematics"]
  },
  {
    word: "coalgebra",
    type: "sb.",
    translations: ["koalgebra, -en, -er, -erne"],
    keywords: ["computer science", "mathematics"]
  },
  {
    word: "co-author",
    search_terms: ["coauthor"],
    type: "sb.",
    translations: ["medforfatter, -en, -e, -ne"],
    keywords: []
  },
  {
    word: "collision",
    type: "sb.",
    translations: ["kollision, -en, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    word: "colon",
    type: "sb.",
    translations: ["kolon, -et, -er, -erne"],
    keywords: ["typography"]
  },
  {
    word: "combine",
    type: "vb.",
    translations: ["kombinere, -r, -de, -t"],
    keywords: []
  },
  {
    word: "comma",
    type: "sb.",
    translations: ["komma, -et, -er, -erne"],
    keywords: ["typography"]
  },
  {
    word: "commit",
    type: "sb.",
    translations: ["fastlæggelse, -n, -r, -rne"],
    keywords: ["git"]
  },
  {
    word: "commit",
    type: "vb.",
    translations: ["fast|lægge, -lægger, -lagde, -lagt"],
    keywords: ["git"]
  },
  {
    word: "commutative",
    type: "adj.",
    translations: ["kommutativ, -t, -e"],
    keywords: ["mathematics"]
  },
  {
    word: "compile",
    type: "vb.",
    translations: ["over|sætte, -sætter, -satte, -sat"],
    keywords: ["computer science"]
  },
  {
    word: "compiler",
    type: "sb.",
    translations: ["oversætter, -en, -e, -ne"],
    keywords: ["computer science"]
  },
  {
    word: "complement",
    type: "sb.",
    translations: [
      "komplement [kʌmpləˈmεnˀd], -et, -er, -erne",
      "komplementærmængde, -n, -r, -rne"
    ],
    keywords: ["computer science"]
  },
  {
    word: "complete",
    type: "adj.",
    translations: ["fuldstændig, -t, -e"],
    keywords: ["computer science"]
  },
  {
    word: "completeness",
    type: "sb.",
    translations: ["fuldstændighed, -en, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    word: "complexity",
    type: "sb.",
    translations: ["kompleksitet, -en, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    word: "component",
    type: "sb.",
    translations: ["komponent, -en, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    word: "computer",
    type: "sb.",
    translations: ["datamat, -en, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    word: "computer science",
    type: "sb.",
    translations: ["datalogi, -en"],
    keywords: ["computer science"]
  },
  {
    word: "computer scientist",
    type: "sb.",
    translations: ["datalog, -en, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    word: "computable",
    type: "adj.",
    translations: ["beregnelig, -t, -e"],
    keywords: ["computer science"]
  },
  {
    word: "computability",
    type: "sb.",
    translations: ["beregnelighed, -en, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    word: "computation",
    type: "sb.",
    translations: ["beregning, -en, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    word: "condition",
    type: "sb.",
    translations: ["betingelse, -n, -r, -rne"],
    keywords: []
  },
  {
    word: "conditional",
    type: "adj.",
    translations: ["beting|et, -et, -ede"],
    keywords: []
  },
  {
    word: "concatenate",
    type: "vb.",
    translations: ["konkatenere, -r, -de, -t"],
    keywords: ["computer science"]
  },
  {
    word: "concept",
    type: "sb.",
    translations: ["koncept, -et, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    word: "concurrent",
    type: "adj.",
    translations: ["parallel, -t, -le"],
    keywords: ["computer science"]
  },
  {
    word: "configuration",
    type: "sb.",
    translations: ["konfiguration, -en, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    word: "conjunction",
    type: "sb.",
    translations: ["konjunktion, -en, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    word: "connected component",
    type: "sb.",
    translations: ["sammenhængskomponent, -en, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    word: "constant",
    type: "sb.",
    translations: ["konstant, -en, -er, -erne"],
    keywords: ["computer science", "mathematics"]
  },
  {
    word: "construction",
    type: "sb.",
    translations: ["konstruktion, -en, -er, -erne"],
    keywords: ["computer science", "mathematics"]
  },
  {
    word: "constructor",
    type: "sb.",
    translations: ["konstruktør, -en, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    word: "context-free",
    type: "adj.",
    translations: ["kontekstfri, -t, -e"],
    keywords: ["computer science"]
  },
  {
    word: "contradiction",
    type: "sb.",
    translations: [
      "modstrid, -en",
      "kontradiktion, -en, -er, -erne"
    ],
    keywords: ["computer science", "mathematics"]
  },
  {
    word: "convex",
    type: "adj.",
    translations: ["konveks, -t, -e"],
    keywords: ["computer science", "mathematics"]
  },
  {
    word: "core",
    type: "sb.",
    translations: ["kerne, -n, -r, -rne"],
    keywords: ["computer science"]
  },
  {
    word: "correctness",
    type: "sb.",
    translations: ["korrekthed, -en"],
    keywords: ["computer science"]
  },
  {
    word: "countable",
    type: "adj.",
    translations: [
        "tællelig, -t, -e",
        "nummera|bel, -belt, -ble"
    ],
    keywords: ["computer science", "mathematics"]
  },
  {
    word: "cryptography",
    type: "sb.",
    translations: ["kryptografi, -en, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    word: "cryptographic",
    type: "adj.",
    translations: ["kryptografisk, -, -e"],
    keywords: ["computer science"]
  },
  {
    word: "cube",
    type: "sb.",
    translations: ["kube, -n, -r, -rne"],
    keywords: ["computer science", "mathematics"]
  },
  {
    word: "cubic",
    type: "adj.",
    note: "also : \"cubical\"",
    translations: ["kubisk, -, -e"],
    keywords: ["computer science", "mathematics"]
  },
  {
    word: "curried",
    type: "adj.",
    translations: ["curri|et, -et, -ede"],
    keywords: ["computer science"]
  },
  {
    word: "curry",
    type: "vb.",
    translations: ["curry, -er, -ede, -et"],
    keywords: ["computer science"]
  },
  {
    word: "cut",
    type: "sb.",
    translations: ["snit, -tet, -, -tene"],
    keywords: ["computer science"]
  },
  {
    word: "cycle",
    type: "sb.",
    translations: ["cy|kel, -klen, -kler, -klerne"],
    keywords: ["computer science"]
  },
  {
    word: "cyclic",
    type: "adj.",
    translations: [
      "cyklisk, -, -e",
      "kred|set, -set, -sede"
    ],
    keywords: ["computer science"]
  },
  {
    word: "deadline",
    type: "sb.",
    translations: ["frist, -en, -er, -erne"],
    keywords: []
  },
  {
    word: "dash",
    type: "sb.",
    translations: ["tankestreg, -en, -er, -erne"],
    keywords: ["typography"]
  },
  {
    word: "data storage",
    type: "sb.",
    note: "see also: \"disk\"",
    translations: [
      "datalag|er, -ret, -re, -rene"
    ],
    keywords: ["computer science"],
    phrases: [
      [
        "data is put on a storage device, e.g., a DVD or harddisk",
        "dataen er gemt på en lagringsenhed, såsom en dvd eller et pladelager"
      ]
    ]
  },
  {
    word: "data structure",
    type: "sb.",
    translations: ["datastruktur, -en, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    word: "debt",
    type: "sb.",
    translations: ["gæld, -en"],
    keywords: ["software engineering"],
    phrases: [
      [
        "technical debt", "teknisk gæld"
      ]
  },
  {
    word: "debugger",
    type: "sb.",
    translations: ["fejlfinder, -en, -e, -ne"],
    keywords: ["software engineering"]
  },
  {
    word: "decidable",
    type: "adj.",
    translations: ["afgørlig, -t, -e"],
    keywords: ["computer science"]
  },
  {
    word: "decide",
    type: "vb.",
    translations: [
      "beslutte, -r, -de, -t",
      "afgøre, -r, afgjorde, afgjort"
    ],
    keywords: ["computer science"]
  },
  {
    word: "decision",
    type: "sb.",
    translations: [
      "beslutning, -en, -er, -erne",
      "afgørelse, -n, -r, -rne"
    ],
    keywords: ["computer science"]
  },
  {
    word: "decision diagram",
    type: "sb.",
    translations: ["beslutningsdiagram, -met, -mer, -merne"],
    keywords: ["computer science"]
  },
  {
    word: "decision problem",
    type: "sb.",
    translations: ["beslutningsproblem, -et, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    word: "decision tree",
    type: "sb.",
    translations: ["beslutningstræ, -et, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    word: "declarative",
    type: "adj.",
    translations: ["deklarativ, -t, -e"],
    keywords: ["computer science"]
  },
  {
    word: "define",
    type: "vb.",
    translations: ["definere, -r, -de, -t"],
    keywords: ["computer science", "mathematics"]
  },
  {
    word: "delta",
    note: "Δ δ",
    translations: ["delta"],
    keywords: ["greek alphabet"]
  },
  {
    word: "depth-first",
    type: "adj.",
    translations: ["dybde først, -, -"],
    keywords: ["computer science"]
  },
  {
    word: "depth-first search",
    type: "sb.",
    translations: [
      "dybde først søgning, -en, -er, -erne",
      "dybdesøgning, -en, -er, -erne"
    ],
    keywords: ["computer science"]
  },
  {
    word: "dereference",
    type: "vb.",
    translations: ["afreferere, -r, -de, -t"],
    keywords: ["computer science", "software engineering"]
  },
  {
    word: "derivation",
    type: "sb.",
    translations: [
      "derivation, -en, -er, -erne",
      "derivationstrin, -net, -, -nene"
    ],
    keywords: ["computer science"]
  },
  {
    word: "derivation tree",
    type: "sb.",
    translations: ["derivationstræ, -et, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    word: "design pattern",
    type: "sb.",
    translations: ["designmøn|ster, -stret, -strer, -strerne"],
    keywords: ["software engineering"]
  },
  {
    word: "determinisation",
    type: "sb.",
    translations: ["determinisering, -en, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    word: "deterministic",
    type: "adj.",
    translations: ["deterministisk, -, -e"],
    keywords: ["computer science"]
  },
  {
    word: "developer",
    type: "sb.",
    translations: ["udvikler, -en, -e, -ne"],
    keywords: ["git", "software engineering"]
  },
  {
    word: "diagonalization",
    type: "sb.",
    note: "GB: diagonalisation",
    search_terms: ["diagonalisation"],
    translations: ["diagonalisering, -en, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    word: "dictionary",
    type: "sb.",
    translations: ["ord|bog, -bogen, -bøger, -bøgerne"],
    keywords: ["computer science"]
  },
  {
    word: "directed",
    type: "adj.",
    translations: [
      "oriente|ret, -ret, -rede",
      "ret|tet, -tet, -tede"
    ],
    keywords: ["computer science"]
  },
  {
    word: "difference",
    type: "sb.",
    translations: [
      "differens, -en, -er, -erne",
      "difference,  -n, -r, -rne",
      "forskel, -len, -le, -lene"
    ],
    keywords: ["mathematics"]
  },
  {
    word: "disk",
    type: "sb.",
    note: "see also: \"storage\"",
    translations: [
      "disk, -en, -e, -ene",
    ],
    keywords: ["computer science"],
    phrases: [
      ["CD", "cd"],
      ["DVD", "dvd"],
      ["harddisk", "pladelager / harddisk"],
      ["SSD", "SSD"]
    ]
  },
  {
    word: "disk space",
    type: "sb.",
    translations: ["diskplads, -en"],
    keywords: ["computer science"]
  },
  {
    word: "disjoint",
    type: "adj.",
    translations: ["disjunkt, -, -e"],
    keywords: ["computer science", "mathematics"]
  },
  {
    word: "disjunction",
    type: "sb.",
    translations: ["disjunktion, -en, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    word: "distinguish",
    type: "vb.",
    translations: ["skelne, -r, -de, -t"],
    keywords: ["computer science"]
  },
  {
    word: "distinguishability",
    type: "sb.",
    translations: ["skelnelighed, -en, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    word: "distinguishable",
    type: "adj.",
    translations: ["skelnelig, -t, -e"],
    keywords: ["computer science"]
  },
  {
    word: "distributive",
    type: "adj.",
    translations: ["distributiv, -t, -e"],
    keywords: ["mathematics"]
  },
  {
    word: "divide-and-conquer",
    translations: [
      "del-og-kombinér",
      "del-og-hersk",
    ],
    keywords: ["computer science"]
  },
  {
    word: "duplicate",
    type: "vb.",
    translations: [
      "dublere, -r, -de, -t",
      "duplikere, -r, -de, -t"
    ],
    keywords: []
  },
  {
    word: "duplication",
    type: "sb.",
    translations: [
      "dublering, -en, -er, -erne",
      "duplikation, -en, -er, -erne"],
    keywords: []
  },
  {
    word: "dynamic",
    type: "adj.",
    translations: ["dynamisk, -, -e"],
    keywords: ["computer science"]
  },
  {
    word: "execute",
    type: "vb.",
    translations: ["eksekvere, -r, -de, -t"],
    keywords: ["computer science", "software engineering"]
  },
  {
    word: "edge",
    type: "sb.",
    note: "also : \"arc\"",
    translations: ["kant, -en, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    word: "ellipsis",
    type: "sb.",
    translations: ["udeladelsesprikker"],
    keywords: ["typography"]
  },
  {
    word: "empty",
    type: "adj.",
    translations: ["tom, -t, -me"],
    keywords: ["computer science"]
  },
  {
    word: "enumerate",
    type: "vb.",
    translations: [
      "nummerere, -r, -de, -t",
      "opliste, -r, -de, -t"
    ],
    keywords: ["computer science", "mathematics"]
  },
  {
    word: "enumerable",
    type: "adj.",
    translations: [
      "nummera|bel, -belt, -ble",
      "oplistelig, -t, -e"
    ],
    keywords: ["computer science", "mathematics"]
  },
  {
    word: "epsilon",
    note: "Ε ε",
    translations: ["epsilon"],
    keywords: ["greek alphabet"]
  },
  {
    word: "equivalence",
    type: "sb.",
    translations: ["ækvivalens, -en, -er, -erne"],
    keywords: ["computer science", "mathematics"]
  },
  {
    word: "equivalence class",
    type: "sb.",
    translations: ["ækvivalensklasse, -n, -r, -rne"],
    keywords: ["computer science", "mathematics"]
  },
  {
    word: "equivalence relation",
    type: "sb.",
    translations: ["ækvivalensrelation, -en, -er, -erne"],
    keywords: ["computer science", "mathematics"]
  },
  {
    word: "error",
    type: "sb.",
    translations: ["fejl, -en, -, -ene"],
    keywords: ["computer science", "software engineering"]
  },
  {
    word: "error code",
    type: "sb.",
    translations: ["fejlkode, -n, -r, -rne"],
    keywords: ["computer science", "software engineering"]
  },
  {
    word: "eta",
    note: "Η η",
    translations: ["eta"],
    keywords: ["greek alphabet"]
  },
  {
    word: "exception",
    type: "sb.",
    translations: ["undtagelse, -n, -r, -rne"],
    keywords: ["computer science", "software engineering"],
    phrases: [
      ["an exception was thrown", "en undtagelse blev kastet"],
      ["exceptions are exceptional", "undtagelser er kun undtgelsesvis"]
    ]
  },
  {
    word: "exclamation point",
    type: "sb.",
    translations: ["udråbstegn, -et, -, -ene"],
    keywords: ["typography"]
  },
  {
    word: "expected",
    type: "adj.",
    translations: ["forven|tet, -tet, -tede"],
    keywords: ["computer science", "mathematics"],
    phrases: [
      ["The worst case expected running time is O(n lg n)", "Den værst tænkelige forventede kørselstid er O(n lg n)"],
      ["Its expected value is 0.5", "Dens forventede værdi er 0,5"]
    ]
  },
  {
    word: "expression",
    type: "sb.",
    translations: ["udtryk, -ket, -, kene"],
    keywords: ["computer science"]
  },
  {
    word: "expressiveness",
    type: "sb.",
    translations: ["udtrykskraft, -en, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    word: "external",
    type: "adj.",
    translations: ["ekstern, -t, -e"],
    keywords: ["computer science"]
  },
  {
    word: "factorial",
    type: "sb.",
    translations: ["fakultet, -et, -er, -erne"],
    keywords: ["computer science", "mathematics"]
  },
  {
    word: "false",
    type: "sb.",
    note: "see also \"bot\"",
    translations: ["falsk"],
    keywords: ["computer science", "mathematics"]
  },
  {
    word: "fetch",
    type: "vb.",
    translations: ["hente, -r, -de, -t"],
    keywords: ["git"]
  },
  {
    word: "field",
    type: "sb.",
    translations: ["legeme, -t, -r, -rne"],
    keywords: ["computer science", "mathematics"]
  },
  {
    word: "finite",
    type: "adj.",
    translations: ["endelig, -t, -e"],
    keywords: ["mathematics"]
  },
  {
    word: "fixpoint",
    type: "sb.",
    translations: ["fixpunkt, -et, -er, -erne"],
    keywords: ["computer science", "mathematics"]
  },
  {
    word: "flow",
    type: "sb.",
    translations: ["strømning, -en, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    word: "for all",
    type: "adj.",
    note: "also \"universal\"",
    translations: ["for alle", "universel"],
    keywords: ["computer science"]
  },
  {
    word: "formal",
    type: "adj.",
    translations: ["formel, -t, -le"],
    keywords: ["computer science"]
  },
  {
    word: "forest",
    type: "sb.",
    translations: ["skov, -en, -e, -ene"],
    keywords: ["computer science"]
  },
  {
    word: "free",
    type: "adj.",
    translations: ["fri, -t, -e"],
    keywords: ["computer science"]
  },
  {
    word: "function",
    type: "sb.",
    translations: ["funktion, -en, -er, -erne"],
    keywords: ["computer science", "mathematics"]
  },
  {
    word: "functional",
    type: "adj.",
    translations: ["funktionel, -t, -le"],
    keywords: ["computer science"]
  },
  {
    word: "gamma",
    note: "Γ γ",
    translations: ["gamma"],
    keywords: ["greek alphabet"]
  },
  {
    word: "global",
    type: "adj.",
    translations: ["global, -t, -e"],
    keywords: ["computer science", "software engineering"]
  },
  {
    word: "grammar",
    type: "sb.",
    translations: ["grammatik, -ken, -ker, -kerne"],
    keywords: ["computer science"]
  },
  {
    word: "graph",
    type: "sb.",
    translations: ["graf, -en, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    word: "graphic",
    type: "sb.",
    translations: ["grafik, -ken, -ker, -kerne"],
    keywords: ["computer science"]
  },
  {
    word: "graphics card",
    type: "sb.",
    translations: [
      "grafikkort, -et, -, -ene",
      "skærmkort, -et, -, -ene"
    ],
    keywords: ["computer science"]
  },
  {
    word: "greedy",
    type: "adj.",
    translations: ["grådig, -t, -e"],
    keywords: ["computer science"]
  },
  {
    word: "hash",
    type: "vb.",
    translations: ["hakke, -r, -de, -t"],
    keywords: ["computer science"]
  },
  {
    word: "hash function",
    type: "sb.",
    translations: ["hakkefunktion, -en, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    word: "hash table",
    type: "sb.",
    translations: ["hakketabel, -len, -ler, -lerne"],
    keywords: ["computer science"]
  },
  {
    word: "hash value",
    type: "sb.",
    translations: ["hakkeværdi, -en, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    word: "head",
    type: "sb.",
    note: "also \"car\"",
    translations: ["hoved, -et, -er, -erne"],
    keywords: ["computer science", "git"]
  },
  {
    word: "heap",
    type: "sb.",
    translations: ["hob, -en, -e, -erne"],
    keywords: ["computer science"]
  },
  {
    word: "hidden layer",
    type: "sb.",
    translations: ["(et) skjult lag, (det) skjulte lag, (de) skjulte lag"],
    keywords: ["computer science"]
  },
  {
    word: "homotopy",
    type: "sb.",
    translations: ["homotopi, -en, -er, -erne"],
    keywords: ["computer science", "mathematics"]
  },
  {
    word: "homotopy",
    type: "adj.",
    translations: ["homotopisk, -, -e"],
    keywords: ["computer science", "mathematics"]
  },
  {
    word: "hull",
    type: "sb.",
    translations: ["hylst|er, -eret, -re, -rerne"],
    keywords: ["computer science"]
  },
  {
    word: "human-computer interaction",
    translations: ["menneske-maskine interaktion"],
    keywords: ["computer science"]
  },
  {
    word: "hyphen",
    type: "sb.",
    translations: ["bindestreg, -en, -er, erne"],
    keywords: ["typography"]
  },
  {
    word: "iff",
    note: "abr. \"if and only if\"",
    translations: ["hviss (hvis og kun hvis)"],
    keywords: ["mathematics"]
  },
  {
    word: "imperative",
    type: "adj.",
    translations: ["imperativ, -t, -e"],
    keywords: ["computer science"]
  },
  {
    word : "implication",
    type: "sb.",
    translations: ["implikation, -en, -er, -erne"],
    keywords: ["computer science", "mathematics"]
  },
  {
    word: "imply",
    type: "vb.",
    translations: ["medfør|e, -er, -ede, -t"],
    keywords: ["computer science"]
  },
  {
    word: "impure",
    type: "adj.",
    note: "see also \"side effect\"",
    translations: ["uren, -t, -e"],
    keywords: ["computer science"]
  },
  {
    word: "immutable",
    type: "adj.",
    translations: [
      "umutérbar, -t, -e",
      "uforanderlig, -t, -e"
    ],
    keywords: ["computer science", "software engineering"]
  },
  {
    word: "incidence matrix",
    type: "sb.",
    translations: ["incidensmat|rix, -rixen, ricer, -ricerne"],
    keywords: ["computer science"]
  },
  {
    word: "incomplete",
    type: "adj.",
    translations: ["ufuldstændig, -t, -e"],
    keywords: ["computer science"]
  },
  {
    word: "indistinguishability",
    type: "sb.",
    translations: ["uskelnelighed, -en, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    word: "indistinguishable",
    type: "adj.",
    translations: ["uskelnelig, -t, -e"],
    keywords: ["computer science"]
  },
  {
    word: "induction",
    type: "sb.",
    translations: ["induktion, -en, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    word: "induction hypothesis",
    type: "sb.",
    translations: ["induktionshypotese, -n, -r, -rne"],
    keywords: ["computer science"]
  },
  {
    word: "inductive",
    type: "adj.",
    translations: ["induktiv, -t, -e"],
    keywords: ["computer science"]
  },
  {
    word: "inductive case",
    type: "sb.",
    translations: ["induktionstilfælde, -t, -r, -rne"],
    keywords: ["computer science"]
  },
  {
    word: "inductive step",
    type: "sb.",
    translations: ["induktionsskridt, -et, -, -ene"],
    keywords: ["computer science"]
  },
  {
    word: "infinite",
    type: "adj.",
    translations: ["uendelig, -t, -e"],
    keywords: ["mathematics"]
  },
  {
    word: "informal",
    type: "sb.",
    translations: ["uformel, -t, -e"],
    keywords: ["computer science"]
  },
  {
    word: "initial state",
    type: "sb.",
    translations: ["starttilstand, -en, -e, -ene"],
    keywords: ["computer science"]
  },
  {
    word: "injective",
    type: "adj.",
    translations: ["injektiv, -t, -e"],
    keywords: ["mathematics"]
  },
  {
    word: "input",
    type: "sb.",
    translations: [
      "inddata, -en, -, -ene",
      "input, -tet, -, -tene"
    ],
    keywords: ["computer science"]
  },
  {
    word: "insertion sort",
    type: "sb.",
    translations: ["indsættelsessortering, -en, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    word: "integer",
    type: "sb.",
    translations: ["heltal, -let, -, -lene"],
    keywords: ["computer science", "mathematics", "software engineering"]
  },
  {
    word: "interface",
    type: "sb.",
    translations: [
      "snitflade, -n, -r, -rne",
      "grænseflade, -n, -r, -rne"
    ],
    keywords: ["computer science", "software engineering"]
  },
  {
    word: "internal",
    type: "adj.",
    translations: ["intern, -t, -e"],
    keywords: ["computer science"]
  },
  {
    word: "interpret",
    type: "vb.",
    translations: ["fortolke, -r, -de, -t"],
    keywords: ["computer science"]
  },
  {
    word: "interpreter",
    type: "sb.",
    translations: ["fortolker, -en, -e, -ne"],
    keywords: ["computer science"]
  },
  {
    word: "intersection",
    type: "sb.",
    translations: [
      "fællesmængde, -n, -r, -rne",
      "snit, -tet, -, -tene",
      "snitmængde, -n, -r, -rne"
    ],
    keywords: ["mathematics"]
  },
  {
    word: "invariant",
    type: "sb.",
    translations: ["invariant, -en, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    word: "iota",
    note: "Ι ι",
    translations: ["jota", "iota"],
    keywords: ["greek alphabet"]
  },
  {
    word: "irregular",
    type: "adj.",
    note: "also \"non-regular\"",
    translations: [
      "irregulær, -t, -e",
      "ikke-regulær, t, -e"
    ],
    keywords: ["computer science", "mathematics"]
  },
  {
    word: "isomorphic",
    type: "adj.",
    translations: ["isomorf, -, -e"],
    keywords: ["computer science"]
  },
  {
    word: "isomorphism",
    type: "sb.",
    translations: [
      "isomorfi, -en, -er, -erne",
      "isomorfisme, -n, -r, -rne"
    ],
    keywords: ["computer science"]
  },
  {
    word: "iterate",
    type: "vb.",
    translations: ["iterere, -r, -ede, -t"],
    keywords: ["computer science", "software engineering"]
  },
  {
    word: "iterator",
    type: "sb.",
    translations: ["iterator, -en, -er, -erne"],
    keywords: ["software engineering"]
  },
  {
    word: "kappa",
    note: "Κ κ",
    translations: ["kappa"],
    keywords: ["greek alphabet"]
  },
  {
    word: "key",
    type: "sb.",
    translations: ["nøgle, -n, -r, -rne"],
    keywords: ["computer science"]
  },
  {
    word: "lambda",
    type: "sb.",
    note: "Λ λ",
    translations: ["lambda"],
    keywords: ["greek alphabet"]
  },
  {
    word: "lambda",
    type: "sb.",
    note: "anonymous function",
    translations: [
      "lambda, -en, -er, -erne",
      "en anonym funktion, den anonyme funktion, de anonyme funktioner"
    ],
    keywords: ["software engineering"]
  },
  {
    word: "language",
    type: "sb.",
    translations: ["sprog, -et, -, -ene"],
    keywords: ["computer science"]
  },
  {
    word: "language property",
    type: "sb.",
    translations: ["sprogegenskab, -en, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    word: "lexical",
    type: "adj.",
    translations: ["leksikalsk, -, -e"],
    keywords: ["computer science"]
  },
  {
    word: "lexicographic",
    type: "adj.",
    translations: ["leksikografisk, -, -e"],
    keywords: ["computer science"]
  },
  {
    word: "lazy",
    type: "adj.",
    translations: ["doven, -t, dovne"],
    keywords: ["computer science"]
  },
  {
    word: "level",
    type: "sb.",
    translations: [
      "lag, -et, -, -ene",
      "niveau, -et, -er, -erne"
    ],
    keywords: ["computer science"]
  },
  {
    word: "library",
    type: "sb.",
    translations: ["bibliotek, -et, -er, -erne"],
    keywords: ["software engineering"]
  },
  {
    word: "lift",
    type: "vb.",
    translations: ["løfte, -r, -de, -t"],
    keywords: ["computer science", "mathematics"]
  },
  {
    word: "limit",
    type: "sb.",
    translations: ["grænse, -n, -er, -erne"],
    keywords: ["computer science", "mathematics"]
  },
  {
    word: "linear",
    type: "adj.",
    translations: ["lineær, -t, -e"],
    keywords: ["mathematics"]
  },
  {
    word: "linearithmic",
    type: "adj.",
    translations: ["linearitmisk, -, -e"],
    keywords: ["computer science", "mathematics"]
  },
  {
    word: "linear probing",
    type: "sb.",
    translations: ["lineær sondering, -en, -er, -erne"],
    keywords: ["computer science", "mathematics"]
  },
  {
    word: "link",
    type: "vb.",
    translations: ["hægte"],
      keywords: ["computer science", "software engineering"]
  },
  {
    word: "linked list",
    type: "sb.",
    translations: [
      "(en) kædet liste, (den) kædede liste, (de) kædede lister",
      "(en) hægtet liste, (den) hægtede liste, (de) hægtede lister"
    ],
    keywords: ["computer science"]
  },
  {
    word: "local",
    type: "adj.",
    translations: ["local, -t, -e"],
    keywords: ["computer science", "software engineering"]
  },
  {
    word: "location",
    type: "sb.",
    translations: ["lokation, -en, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    word: "locality-sensitive",
    type: "adj.",
    translations: ["afstandsfølsom, -, -me"],
    keywords: ["computer science"]
  },
  {
    word: "logic",
    type: "sb.",
    translations: ["logik, -ken, -ker, -kerne"],
    keywords: ["computer science"]
  },
  {
    word: "lookup",
    type: "sb.",
    translations: ["opslag, -et, -, -ene"],
    keywords: ["computer science", "software engineering"]
  },
  {
    word: "loop",
    type: "sb.",
    translations: ["løkke, -n, -r, -rne"],
    keywords: ["computer science", "software engineering"]
  },
  {
    word: "lower",
    type: "adj.",
    translations: ["nedre, -, -"],
    keywords: ["computer science", "mathematics"]
  },
  {
    word: "lowercase",
    type: "sb.",
    translations: [
      "minuskel, minusklen, minuskler, minusklerne",
    ],
    keywords: ["computer science"]
  },
  {
    word: "machine learning",
    type: "sb.",
    translations: ["maskinlæring, -en"],
    keywords: ["computer science"]
  },
  {
    word: "machine code",
    type: "sb.",
    translations: ["maskinkode, -n, -, rne"],
    keywords: ["computer science"]
  },
  {
    word: "Markov chain",
    type: "sb.",
    translations: ["markovkæde, -n, -r, -rne"],
    keywords: ["computer science"]
  },
  {
    word: "material",
    type: "sb.",
    translations: ["materiale, -t, -r, -rne"],
    keywords: []
  },
  {
    word: "matrix, matrices",
    type: "sb.",
    translations: ["matrix, -er, matricer, matricerne"],
    keywords: ["mathematics"]
  },
  {
    word: "map",
    type: "sb.",
    note: "also \"mapping\"",
    translations: ["afbildning, -en, -er, -erne"],
    keywords: ["mathematics"]
  },
  {
    word: "membership",
    type: "sb.",
    translations: ["medlemsskab, -et, -er, -erne"],
    keywords: ["computer science", "mathematics"]
  },
  {
    word: "memoization",
    type: "sb.",
    note: "GB: memoisation",
    translations: ["memoisering, -en, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    word: "memory",
    type: "sb.",
    translations: ["hukommelse, -n, -r, -rne"],
    keywords: ["computer science"]
  },
  {
    word: "merge",
    type: "vb.",
    translations: ["flette, -r, -de, -t"],
    keywords: ["computer science"]
  },
  {
    word: "merge request",
    type: "sb.",
    translations: ["fletteanmodning, -en, -er, -erne"],
    keywords: ["git"]
  },
  {
    word: "merge sort",
    type: "sb.",
    translations: ["flettesortering, -en, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    word: "minimization",
    type: "sb.",
    note: "GB: minimisation",
    search_terms: ["minimisation"],
    translations: ["minimering, -en, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    word: "model",
    type: "sb.",
    translations: ["model, -len, -ler, -lerne"],
    keywords: ["computer science"]
  },
  {
    word: "model checker",
    type: "sb.",
    translations: ["modelafprøver, -en, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    word: "model checking",
    type: "sb.",
    translations: ["modelafprøvning, -en, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    word: "monad",
    type: "sb.",
    translations: ["monade, -n, -r, -rne"],
    keywords: ["computer science"]
  },
  {
    word: "monadic",
    type: "adj.",
    translations: ["monadisk, -, -e"],
    keywords: ["computer science"]
  },
  {
    word: "mu",
    note: "Μ μ",
    translations: ["my"],
    keywords: ["greek alphabet"]
  },
  {
    word: "mu-calculus",
    note: "μ-calculus",
    translations: ["my-kalkyle, -n, -r, -rne"],
    keywords: ["computer science"]
  },
  {
    word: "multi-threaded",
    type: "adj.",
    translations: ["flertråd|en, -et, -ede"],
    keywords: ["computer science", "software engineering"]
  },
  {
    word: "mutable",
    type: "adj.",
    translations: [
      "mutérbar, -t, -e",
      "foranderlig, -t, -e"
    ],
    keywords: ["computer science", "software engineering"]
  },
  {
    word: "narrow",
    type: "adj.",
    translations: ["tynd"],
    keywords: ["computer science"]
  },
  {
    word: "natural deduction",
    type: "sb.",
    translations: ["naturlig deduktion"],
    keywords: ["computer science"]
  },
  {
    word: "node",
    type: "sb.",
    translations: ["knude, -n, -r, -rne"],
    keywords: ["computer science"]
  },
  {
    word: "nondeterministic",
    type: "adj.",
    translations: [
      "nondeterministisk, -, -e",
      "ikke-deterministisk, -, -e"
    ],
    keywords: ["computer science"]
  },
  {
    word: "nonterminal",
    type: "sb.",
    translations: [
      "nonterminal, -en, -er, -erne",
      "ikke-terminal, -en, -er, -erne"
    ],
    keywords: ["computer science"]
  },
  {
    word: "non-trivial",
    type: "adj.",
    translations: ["ikke triviel, -t, -le"],
    keywords: []
  },
  {
    word: "normalisation",
    type: "sb.",
    translations: ["normalisering"],
    keywords: ["computer science"]
  },
  {
    word: "not",
    type: "adv.",
    note: "also \"negation\"",
    translations: ["ikke", "negation"],
    keywords: ["computer science"]
  },
  {
    word: "nu",
    note: "Ν ν",
    translations: ["ny"],
    keywords: ["greek alphabet"]
  },
  {
    word: "object",
    type: "sb.",
    translations: ["objekt, -et, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    word: "objective function",
    type: "sb.",
    translations: ["målfunktion, -en, -er, -erne"],
    keywords: ["computer science", "mathematics"]
  },
  {
    word: "omega",
    note: "Ω ω",
    translations: ["omega"],
    keywords: ["greek alphabet"]
  },
  {
    word: "omicron",
    note: "Ο ο",
    translations: ["omikron"],
    keywords: ["greek alphabet"]
  },
  {
    word: "open addressing",
    type: "sb.",
    translations: ["åben adressering, -en, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    word: "operational",
    type: "adj.",
    translations: ["operationel, -t, -le"],
    keywords: ["computer science"]
  },
  {
    word: "optimization",
    type: "sb.",
    note: "GB: optimisation",
    search_terms: ["optimisation"],
    translations: ["optimering, -en, -er, -erne"],
    keywords: ["computer science", "mathematics"]
  },
  {
    word: "optimize",
    type: "vb.",
    note: "GB: optimise",
    search_terms: ["optimise"],
    translations: ["optimere, -r, -de, -t"],
    keywords: ["computer science", "mathematics"]
  },
  {
    word: "or",
    type: "adv.",
    note: "see also \"disjunction\"",
    translations: ["eller", "og/eller"],
    keywords: ["computer science"]
  },
  {
    word: "order",
    type: "sb.",
    translations: ["orden", "ordning"],
    keywords: ["computer science", "mathematics"]
  },
  {
    word: "order",
    type: "vb.",
    translations: ["ordne, -r, -de, -t"],
    keywords: ["computer science", "mathematics"]
  },
  {
    word: "ordered",
    type: "adj.",
    translations: [
      "ord|net, -net, -nede",
      "sorte|ret, -ret, -rede"
    ],
    keywords: ["computer science", "mathematics"]
  },
  {
    word: "order of magnitude",
    type: "sb.",
    translations: [
      "størrelsesorden, -en, -er, -erne",
    ],
    keywords: ["computer science", "mathematics"]
  },
  {
    word: "output",
    type: "sb.",
    translations: [
      "uddata, -en, -, -ene",
      "output, -et, -, -tene"
    ],
    keywords: ["computer science"]
  },
  {
    word: "overhead",
    type: "sb.",
    translations: [
      "overhead, -et, -s, -ene ",
      "fast omkostning, faste omkostning, faste omkostninger"
    ],
    keywords: ["computer science"]
  },
  {
    word: "paper",
    type: "sb.",
    translations: ["arti|kel, -klen, -kler, -klerne"],
    keywords: []
  },
  {
    word: "paradigm",
    type: "sb.",
    translations: ["paradigme, -t, -r, -rne"],
    keywords: ["computer science"]
  },
  {
    word: "parenthesis",
    type: "sb.",
    note: "(round) bracket",
    translations: ["parentes, -en, -er, -erne"],
    keywords: ["typography"]
  },
  {
    word: "partial",
    type: "adj.",
    translations: ["partiel, -t, -le"],
    keywords: ["computer science", "mathematics"]
  },
  {
    word: "partition",
    type: "sb.",
    translations: [
      "partition, -en, -er, -erne",
      "partitionering, -en, -er, -erne"
    ],
    keywords: ["computer science", "mathematics"]
  },
  {
    word: "path",
    type: "sb.",
    translations: [
      "sti, -en, -er, -erne",
      "vej, -en, -e, -ene"
    ],
    keywords: ["computer science"]
  },
  {
    word: "path compression",
    type: "sb.",
    translations: [
      "stiforkortning, -en, -er, -erne",
      "vejforkortning, -en, -er, -erne",
    ],
    keywords: ["computer science"]
  },
  {
    word: "pattern",
    type: "sb.",
    translations: ["møns|ter, -teret, -tre, -trene"],
    keywords: ["computer science"]
  },
  {
    word: "pattern matching",
    type: "sb.",
    translations: ["mønstergenkendelse, -n, -r, -rne"],
    keywords: ["computer science"]
  },
  {
    word: "peer",
    type: "sb.",
    note: "in network",
    translations: [
      "part, -en, -er, -erne",
      "kontrahent, -en, -er, -erne"
    ],
    keywords: []
  },
  {
    word: "peer",
    type: "sb.",
    note: "fellow scientist",
    translations: ["fagfælle, -n, -r, -rne"],
    keywords: []
  },
  {
    word: "peer review",
    type: "sb.",
    translations: ["fagfællebedømmelse, -n, -r, -rne"],
    keywords: []
  },
  {
    word: "peer review",
    type: "vb.",
    translations: ["fagfællebedøm|me, -mer, -mede, -t"],
    keywords: []
  },
  {
    word: "peer reviewer",
    type: "sb.",
    translations: ["fagfællebedømmer, -en, -e, -ne"],
    keywords: []
  },
  {
    word: "performance",
    type: "sb.",
    translations: ["ydeevne, -n, -r, -rne"],
    keywords: ["computer science"]
  },
  {
    word: "period",
    type: "sb.",
    note: "GB: full stop",
    search_terms: ["full stop"],
    translations: ["punktum, -met, -mer, merne"],
    keywords: ["typography"]
  },
  {
    word: "pessimization",
    type: "sb.",
    note: "GB: pessimisation",
    search_terms: ["pessimisation"],
    translations: ["pessimering, -en, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    word: "pessimize",
    type: "vb.",
    note: "GB: pessimise",
    search_terms: ["pessimise"],
    translations: ["optimere, -r, -de, -t"],
    keywords: ["computer science"]
  },
  {
    word: "phi",
    note: "Φ φ",
    translations: ["phi", "phei"],
    keywords: ["greek alphabet"]
  },
  {
    word: "planar",
    type: "adj.",
    translations: ["planær, -t, -e"],
    keywords: ["computer science"]
  },
  {
    word: "pi",
    note: "Π π",
    translations: ["pi"],
    keywords: ["greek alphabet"]
  },
  {
    word: "precedence",
    type: "sb.",
    translations: ["præcedens"],
    keywords: ["computer science", "mathematics"]
  },
  {
    word: "pointer",
    type: "sb.",
    translations: ["peger, -en, -e, -erne"],
    keywords: ["computer science", "software engineering"]
  },
  {
    word: "polyhedron",
    type: "sb.",
    translations: ["polyede, -n, -r, -rne"],
    keywords: ["mathematics"]
  },
  {
    word: "polynomial",
    type: "sb.",
    translations: ["polynomie, -t, -r, -rne"],
    keywords: ["computer science", "mathematics"]
  },
  {
    word: "polynomial",
    type: "adj.",
    translations: ["polynomiel, -t, -le"],
    keywords: ["computer science", "mathematics"]
  },
  {
    word: "practical",
    type: "adj.",
    translations: ["praktisk, -, -e"],
    keywords: []
  },
  {
    word: "practice",
    type: "sb.",
    translations: ["praksis, -sen, -ser, -serne"],
    keywords: []
  },
  {
    word: "predicate",
    type: "sb.",
    translations: ["prædikat, -et, -er, -erne"],
    keywords: ["computer science", "mathematics"]
  },
  {
    word: "prefix",
    type: "sb.",
    translations: ["præfiks, -et, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    word: "prefix tree",
    type: "sb.",
    translations: ["præfikstræ, -et, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    word: "premise",
    type: "sb.",
    translations: ["præmis, -sen, -ser, -serne"],
    keywords: ["computer science", "mathematics"]
  },
  {
    word: "priority queue",
    type: "sb.",
    translations: ["prioritetskø, -en, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    word: "product construction",
    type: "sb.",
    translations: ["produktkonstruktion, -en, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    word: "production",
    type: "sb.",
    translations: ["produktion, -en, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    word: "program",
    type: "sb.",
    translations: ["program, -et, -er, -erne"],
      keywords: ["computer science", "software engineering"]
  },
  {
    word: "program",
    type: "vb.",
    translations: ["programmere, -r, -de, -t"],
    keywords: ["software engineering"]
  },
  {
    word: "programming",
    type: "sb.",
    translations: [
      "programmering, -en, -er, -erne",
      "programlægning, -en, -er, -erne"
    ],
    keywords: ["software engineering"]
  },
  {
    word: "programming language",
    type: "sb.",
    translations: ["programmeringssprog, -et, -, -ene"],
    keywords: ["computer science"]
  },
  {
    word: "projection",
    type: "sb.",
    translations: ["projektion, -en, -er, -erne"],
    keywords: ["computer science", "mathematics"]
  },
  {
    word: "proof",
    type: "sb.",
    translations: ["bevis, -et, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    word: "proof rule",
    type: "sb.",
    translations: ["bevis|regel, -reglen, -regler, -reglerne"],
    keywords: ["computer science"]
  },
  {
    word: "property",
    type: "sb.",
    translations: ["egenskab, -en, -er, -erne"],
    keywords: ["computer science", "mathematics"]
  },
  {
    word: "psi",
    note: "Ψ ψ",
    translations: ["psi"],
    keywords: ["greek alphabet"]
  },
  {
    word: "publication",
    type: "sb.",
    translations: ["publikation, -en, -er, -erne"],
    keywords: []
  },
  {
    word: "publish",
    type: "vb.",
    translations: ["publicere, -r, -de, -t"],
    keywords: []
  },
  {
    word: "published",
    type: "adj.",
    translations: ["publice|ret, -ret, -rede"],
    keywords: []
  },
  {
    word: "pull",
    type: "vb.",
    translations: ["hale, -r, -de, -t"],
    keywords: ["git"]
  },
  {
    word: "pull request",
    type: "sb.",
    translations: ["haleanmodning, -en, -er, -erne"],
    keywords: ["git"]
  },
  {
    word: "punched card",
    type: "sb.",
    translations: ["hulkort, -et, -, -ene"],
    keywords: []
  },
  {
    word: "pure",
    type: "adj.",
    note: "see also \"side effect\"",
    translations: ["ren, -t, -e"],
    keywords: ["computer science"]
  },
  {
    word: "push",
    type: "vb.",
    translations: ["puffe, -r, -de, -t"],
    keywords: ["git"],
    phrases: [
      ["I force pushed to the main branch", "Jeg tvangspuffede vistnok til hovedgrenen"]
    ]
  },
  {
    word: "quadratic",
    type: "adj.",
    translations: ["kvadratisk, -, -e"],
    keywords: ["computer science", "mathematics"]
  },
  {
    word: "quadratic probing",
    type: "sb.",
    translations: ["kvadratisk sondering, -en, -er, -erne"],
    keywords: ["computer science", "mathematics"]
  },
  {
    word: "quantifier",
    type: "sb.",
    translations: ["kvantor"],
    keywords: ["computer science"]
  },
  {
    word: "quantify",
    type: "vb.",
    translations: ["kvantificere, -r, -de, -t"],
    keywords: ["computer science"]
  },
  {
    word: "query",
    type: "sb.",
    translations: ["forespørgsel, forespørgslen, forespørgsler, forespørgslerne"],
    keywords: ["computer science"]
  },
  {
    word: "query",
    type: "vb.",
    translations: ["fore|spørge, -spørger, -spurgte, -spurgt"],
    keywords: ["computer science"]
  },
  {
    word: "question mark",
    type: "sb.",
    translations: ["spørgsmålstegn, -et, -, -ene"],
    keywords: ["typography"]
  },
  {
    word: "queue",
    type: "sb.",
    translations: ["kø, -en, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    word: "quick sort",
    type: "sb.",
    translations: ["kviksortering, -en, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    word: "quotation mark",
    type: "sb.",
    translations: ["citationstegn, -et, -, -ene"],
    keywords: ["typography"]
  },
  {
    word: "quotient",
    type: "sb.",
    translations: ["kvotient, -en, -er, -erne"],
    keywords: ["computer science", "mathematics"]
  },
  {
    word: "RAM",
    type: "sb.",
    translations: [
      "ram, -men, -, -mene",
      "arbejds|lager, -lageret, -lagre, -lagrene"
    ],
    keywords: ["computer science"]
  },
  {
    word: "random",
    type: "adj.",
    translations: [
      "tilfældig, -t, -e",
      "randomise|ret, -ret, -rede"
    ],
    keywords: ["computer science"]
  },
  {
    word: "randomize",
    type: "vb.",
    note: "GB: randomise",
    search_terms: ["randomise"],
    translations: ["randomisere, -r, -de, -t"],
    keywords: ["computer science"]
  },
  {
    word: "randomization",
    type: "sb.",
    note: "GB: randomisation",
    search_terms: ["randomisation"],
    translations: ["randomisering, -en, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    word: "rank",
    type: "sb.",
    translations: ["rang, -en, -, -ene"],
    keywords: ["computer science"]
  },
  {
    word: "reachable",
    type: "adj.",
    translations: ["opnåelig, -t, -e"],
    keywords: ["computer science"]
  },
  {
    word: "rebase",
    type: "vb.",
    translations: ["genbasere, -r, -de, -t"],
    keywords: ["git"]
  },
  {
    word: "rebuttal",
    type: "sb.",
    translations: ["indsigelse, -n, -r, -rne"],
    keywords: []
  },
  {
    word: "record",
    type: "sb.",
    translations: ["post,  -en, -er, -erne"],
    keywords: ["computer science", "software engineering"]
  },
  {
    word: "recursion",
    type: "sb.",
    translations: ["rekursion, -en, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    word: "recursive",
    type: "adj.",
    translations: ["rekursiv, -t, -e"],
    keywords: ["computer science"]
  },
  {
    word: "recursively enumerable",
    type: "adj.",
    translations: ["rekursiv nummera|bel, -belt, -ble"],
    keywords: ["computer science"]
  },
  {
    word: "reduction",
    type: "sb.",
    translations: ["reduktion, -en, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    word: "reference",
    type: "sb.",
    translations: ["reference, -n, -r, -rne"],
    keywords: ["computer science", "software engineering"]
  },
  {
    word: "reference",
    type: "vb.",
    translations: ["referere, -r, -de, -t"],
    keywords: ["computer science", "software engineering"]
  },
  {
    word: "reflexive",
    type: "adj.",
    translations: ["refleksiv, -t, -e"],
    keywords: ["computer science"]
  },
  {
    word: "register",
    type: "sb.",
    translations: ["regi|ster, -stret, -stre, -strene"],
    keywords: ["computer science"]
  },
  {
    word: "regular",
    type: "adj.",
    translations: ["regulær, -t, -e"],
    keywords: ["computer science"]
  },
  {
    word: "regularity",
    type: "sb.",
    translations: ["regularitet, -en, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    word: "reject",
    type: "vb.",
    translations: ["afvi|se, -ser, -ste, -st"],
    keywords: ["computer science"]
  },
  {
    word: "rejected",
    type: "adj.",
    translations: ["afvist, -, -e"],
    keywords: ["computer science"],
    phrases: [
      ["weakly rejected", "svagt afvist"],
      ["strongly rejected", "strengt afvist"]
    ]
  },
  {
    word: "rejection",
    type: "sb.",
    translations: ["afvisning, -en, -er, -erne"],
    keywords: ["computer science"],
    phrases: [
      ["weak reject", "svag afvisning"],
      ["strong reject", "streng afvisning"]
    ]
  },
  {
    word: "relation",
    type: "sb.",
    translations: ["relation, -en, -er, -erne"],
    keywords: ["computer science", "mathematics"]
  },
  {
    word: "rename",
    type: "vb.",
    translations: [
      "omdø|be, -ber, -bte, -bt",
      "omnavngive, -r, -de, -t"
    ],
    keywords: ["computer science"]
  },
  {
    word: "repository",
    type: "sb.",
    translations: ["repositorium, -et, -er, -erne"],
    keywords: ["git"]
  },
  {
    word: "rho",
    note: "Ρ ρ",
    translations: ["rho"],
    keywords: ["greek alphabet"]
  },
  {
    word: "ROM",
    type: "sb.",
    translations: ["rom, -men, -, -mene"],
    keywords: ["computer science"]
  },
  {
    word: "root",
    type: "sb.",
    translations: ["rod, -en, rødder, rødderne"],
    keywords: ["computer science"]
  },
  {
    word: "rule",
    type: "sb.",
    translations: ["regel, -reglen, -regler, -reglerne"],
    keywords: ["computer science"]
  },
  {
    word: "running time",
    type: "sb.",
    translations: [
      "kørselstid, -en, -er, -erne",
      "udførselstid, -en, -er, -erne"
    ],
    keywords: ["computer science"]
  },
  {
    word: "reason",
    type: "vb.",
    translations: ["ræsonnere, -r, -de, -t"],
    keywords: ["computer science"]
  },
  {
    word: "reasoning",
    type: "sb.",
    translations: ["ræsonnement, -et, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    word: "satisfiability",
    type: "sb.",
    translations: ["tilfredstillelse, -n, -r, -rne"],
    keywords: ["computer science"]
  },
  {
    word: "satisfiable",
    type: "adj.",
    translations: ["tilfredstillelig, -t, -e"],
    keywords: ["computer science"]
  },
  {
    word: "satisfy",
    type: "vb.",
    translations: ["tilfredstille, -r, -de, -t"],
    keywords: ["computer science"]
  },
  {
    word: "scope",
    type: "sb.",
    translations: ["virkefelt, -et, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    word: "search",
    type: "vb.",
    translations: ["søg|e, -er, -te, -t"],
    keywords: ["computer science"]
  },
  {
    word: "search tree",
    type: "sb.",
    translations: ["søgetræ, -et, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    word: "set",
    type: "sb.",
    translations: ["mængde, -n, -r, -rne"],
    keywords: ["mathematics"]
  },
  {
    word: "semantics",
    type: "sb.",
    translations: ["semantik, -ken, -ker, -kerne"],
    keywords: ["computer science"]
  },
  {
    word: "semantic entailment",
    translations: ["logisk konsekvens"],
    keywords: ["computer science"]
  },
  {
    word: "semicolon",
    type: "sb.",
    translations: ["semikolon, -et, -er, -erne"],
    keywords: ["typography"]
  },
  {
    word: "sequence",
    type: "sb.",
    translations: ["sekvens, -en, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    word: "share",
    type: "vb.",
    translations: ["dele, -r, delte, delt"],
    keywords: ["computer science"]
  },
  {
    word: "shift",
    type: "vb.",
    translations: ["forskyde, -r, -de, forskudt"],
    keywords: ["computer science"]
  },
  {
    word: "slash",
    type: "sb.",
    note: "forward slash",
    translations: ["skråstreg -en, -er, -erne"],
    keywords: ["typography"]
  },
  {
    word: "side effect",
    type: "sb.",
    translations: [
      "bivirkning, -en, -er, -erne",
      "sideeffekt, -en, -er, -erne"
    ],
    keywords: ["computer science"]
  },
  {
    word: "sigma",
    note: "Σ σ, ς",
    translations: ["sigma"],
    keywords: ["greek alphabet"]
  },
  {
    word: "simplex",
    translations: ["simpleks"],
    keywords: ["computer science"]
  },
  {
    word: "simplicial complex",
    type: "adj.",
    translations: ["simplicielt kompleks, -t, -e"],
    keywords: ["computer science"]
  },
  {
    word: "sink",
    type: "sb.",
    translations: [
      "dræn, -et, -, -ene",
      "afløb, -et, -, -ene"
    ],
    keywords: ["computer science"]
  },
  {
    word: "sound",
    type: "adj.",
    translations: ["sund, -t, -e"],
    keywords: ["computer science"]
  },
  {
    word: "source",
    type: "sb.",
    translations: ["kilde, -n, -r, -rne"],
    keywords: ["computer science"]
  },
  {
    word: "source code",
    type: "sb.",
    translations: ["kildekode, -n, -r, -rne"],
    keywords: ["computer science"],
    phrases: [
      ["open-source", "åben kildekode"]
    ]
  },
  {
    word: "space",
    type: "sb.",
    note: "memory",
    translations: ["plads, -en, -er, -erne"],
    keywords: ["computer science"],
    phrases: [
      ["the algorithm's uses linear space", "algoritmens pladsforbrug er lineær"]
    ]
  },
  {
    word: "space",
    type: "sb.",
    note: "typography",
    translations: ["mellemrum, -met, -, -mene"],
    keywords: ["typography"],
  },
  {
    word: "space complexity",
    type: "sb.",
    translations: ["pladskompleksitet, -en, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    word: "square",
    type: "sb.",
    note: "on a tape",
    translations: ["felt, -et, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    word: "squash",
    type: "vb.",
    translations: ["kvase, -r, kvaste / -de, kvast / -t"],
    keywords: ["git"]
  },
  {
    word: "stack",
    type: "sb.",
    translations: ["stak, -ken, -ke, -kene"],
    keywords: ["computer science"]
  },
  {
    word: "stash",
    type: "vb.",
    translations: ["gemme, -r, gemte, gemt"],
    keywords: ["git"]
  },
  {
    word: "state",
    type: "sb.",
    translations: ["tilstand, -en, -e, -ene"],
    keywords: ["computer science"]
  },
  {
    word: "state space",
    type: "sb.",
    translations: ["tilstandsrum, -met, -, -mene"],
    keywords: ["computer science"]
  },
  {
    word: "static",
    type: "adj.",
    translations: ["statisk, -, -e"],
    keywords: ["computer science"]
  },
  {
    word: "string",
    type: "sb.",
    translations: [
      "streng, -en, -e, -ene",
      "ord, -et, -, -ene"
    ],
    keywords: ["computer science", "software engineering"]
  },
  {
    word: "subset",
    type: "sb.",
    translations: ["delmængde, -n, -r, -rne"],
    keywords: ["mathematics"]
  },
  {
    word: "subset construction",
    type: "sb.",
    translations: ["delmængdekonstruktion, -en, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    word: "suffix",
    type: "sb.",
    translations: ["suffiks, -et, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    word: "supervised learning",
    type: "sb.",
    translations: ["overvåget læring"],
    keywords: ["computer science"]
  },
  {
    word: "supplementary",
    type: "adj.",
    translations: ["supplerende, -, -"],
    keywords: []
  },
  {
    word: "surjective",
    type: "adj.",
    translations: ["surjektiv, -t, -e"],
    keywords: ["mathematics"]
  },
  {
    word: "switch",
    type: "vb.",
    translations: ["skifte, -r, -de, -t"],
    keywords: ["git"]
  },
  {
    word: "symbol",
    type: "sb.",
    translations: [
      "symbol, -et, -er, -erne",
      "tegn, -et, -, -ene"
    ],
    keywords: ["computer science"]
  },
  {
    word: "symmetric",
    type: "adj.",
    translations: ["symmetrisk, -t, -e"],
    keywords: ["computer science", "mathematics"]
  },
  {
    word: "syntax",
    type: "sb.",
    translations: ["syntaks, -en, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    word: "table",
    type: "sb.",
    translations: ["tabel, -len, -ler, -lerne"],
    keywords: ["computer science"]
  },
  {
    word: "tacit knowledge",
    type: "sb.",
    translations: ["tavs viden"],
    keywords: ["computer science"]
  },
  {
    word: "tag",
    type: "sb.",
    translations: ["mærke, -t, -r, -rne"],
    keywords: ["git"]
  },
  {
    word: "tag",
    type: "vb.",
    translations: ["opmærke"],
    keywords: ["git"]
  },
  {
    word: "tail",
    note: "also \"cdr\"",
    type: "sb.",
    translations: ["hale, -n, -r, -rne"],
    keywords: ["computer science"]
  },
  {
    word: "tape",
    type: "sb.",
    translations: ["bånd, -et, -, -ene"],
    keywords: ["computer science"]
  },
  {
    word: "tau",
    note: "Τ τ",
    translations: ["tau"],
    keywords: ["greek alphabet"]
  },
  {
    word: "tautology",
    type: "sb.",
    translations: ["tautologi, -en, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    word: "ternary",
    type: "sb.",
    translations: ["trinær"],
    keywords: ["computer science"]
  },
  {
    word: "terminal",
    type: "sb.",
    translations: ["terminal, -en, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    word: "termination",
    type: "sb.",
    note: "also \"halt\"",
    translations: ["terminering, -en, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    word: "test",
    type: "sb.",
    translations: ["test, -en, -, -ene"],
    keywords: ["computer science", "software engineering"],
    phrases: [
      ["unit test", "modultest / deltest"],
      ["integration test", "integrationstest"],
      ["system test", "systemtest"]
    ]
  },
  {
    word: "theory",
    type: "sb.",
    translations: ["teori, -en, -er, -erne"],
    keywords: []
  },
  {
    word: "theoretical",
    type: "adj.",
    translations: ["teoritisk, -, -e"],
    keywords: []
  },
  {
    word: "theta",
    note: "Θ θ",
    translations: ["theta"],
    keywords: ["greek alphabet"]
  },
  {
    word: "thread",
    type: "sb.",
    translations: ["tråd, -en, -e, -ene"],
    keywords: ["computer science"]
  },
  {
    word: "throw",
    type: "vb.",
    translations: ["kaste, -r, -ede"],
    keywords: ["computer science", "software engineering"]
  },
  {
    word: "time complexity",
    type: "sb.",
    translations: ["tidskompleksitet, -en, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    word: "tool",
    type: "sb.",
    translations: ["værktøj, -et, -er, -erne"],
    keywords: []
  },
  {
    word: "top",
    type: "sb.",
    note: "see also \"true\"",
    translations: ["top, -pen, -pe, -pene"],
    keywords: ["computer science"]
  },
  {
    word: "top-down",
    type: "adj.",
    translations: ["top-ned"],
    keywords: ["computer science"],
    phrases: [
      ["top-down 2-4 tree", "top-ned 2-4-træ"]
    ]
  },
  {
    word: "topologic, topological",
    type: "adj.",
    translations: ["topologisk, -, -e"],
    keywords: ["computer science"]
  },
  {
    word: "total",
    type: "adj.",
    translations: [
      "(automata) fuldstændig, -t, -e",
      "(correctness) total, -t, -e"
    ],
    keywords: ["computer science", "mathematics"],
  },
  {
    word: "transition",
    type: "sb.",
    translations: ["transition, -en, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    word: "transition function",
    type: "sb.",
    translations: ["transitionsfunktion, -en, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    word: "transition system",
    type: "sb.",
    translations: ["transitionssystem, -met, -mer, -merne"],
    keywords: ["computer science"]
  },
  {
    word: "transitive",
    type: "adj.",
    translations: ["transitiv, -t, -e"],
    keywords: ["computer science", "mathematics"]
  },
  {
    word: "trie",
    type: "sb.",
    translations: ["trie, -n, -r, -rne"],
    keywords: ["computer science"]
  },
  {
    word: "trivial",
    type: "adj.",
    translations: ["triviel, -t, -le"],
    keywords: []
  },
  {
    word: "true",
    type: "sb.",
    note: "see also \"top\"",
    translations: ["sand"],
    keywords: ["computer science", "mathematics"]
  },
  {
    word: "truncate",
    type: "vb.",
    translations: ["trunkere, -r, -de, -t"],
    keywords: ["computer science"]
  },
  {
    word: "truncated",
    type: "adj.",
    translations: ["trunke|ret, -ret, -rede"],
    keywords: ["computer science"]
  },
  {
    word: "truth table",
    type: "sb.",
    translations: ["sandhedstabel, -len, -ler, -lerne"],
    keywords: ["computer science"]
  },
  {
    word: "type",
    type: "sb.",
    translations: ["type, -n, -r, -erne"],
    keywords: ["computer science"]
  },
  {
    word: "type theory",
    type: "sb.",
    translations: ["typeteori, -n, -r, -erne"],
    keywords: ["computer science"]
  },
  {
    word: "unary",
    type: "adj.",
    translations: ["unær, -t, -e"],
    keywords: ["computer science"]
  },
  {
    word: "uncountable",
    type: "adj.",
    translations: [
        "overtællelig, -t, -e",
        "ikke-nummera|bel, -belt, -ble",
    ],
    keywords: ["computer science", "mathematics"]
  },
  {
    word: "undecidable",
    type: "adj.",
    note: "also \"non-decidable\"",
    translations: ["uafgørlig, -t, -e"],
    keywords: ["computer science"]
  },
  {
    word: "undirected",
    type: "adj.",
    translations: [
      "uoriente|ret, -ret, -rede",
      "uret|tet, -tet, -tede"
    ],
    keywords: ["computer science"]
  },
  {
    word: "union",
    type: "sb.",
    translations: [
      "forening, -en, -er, -erne",
      "foreningsmængde, -n, -r, -rne"
    ],
    keywords: ["mathematics"]
  },
  {
    word: "union-find",
    type: "sb.",
    note: "also \"disjoint-set data structure\"",
    translations: ["forén-og-find"],
    keywords: ["computer science"],
    phrases: [
      ["union by rank", "rangeret forening"],
      ["union by size", "vægtet forening"]
    ]
  },
  {
    word: "unit",
    type: "sb.",
    translations: ["enhed, -en, -er, -erne"],
    keywords: ["computer science", "mathematics"]
  },
  {
    word: "unit type",
    type: "sb.",
    translations: ["enhedstype, -n, -r, -rne"],
    keywords: ["computer science"]
  },
  {
    word: "universal",
    type: "adj.",
    translations: ["universel, -t, -le"],
    keywords: ["computer science"]
  },
  {
    word: "unreachable",
    type: "sb.",
    translations: ["uopnåelig, -t, -e"],
    keywords: ["computer science"]
  },
  {
    word: "upsilon",
    note: "Υ υ",
    translations: ["ypsilon"],
    keywords: ["greek alphabet"]
  },
  {
    word: "upper",
    type: "adj.",
    translations: ["øvre, -, -"],
    keywords: ["computer science", "mathematics"]
  },
  {
    word: "uppercase",
    type: "sb.",
    translations: [
      "stort bogstav",
      "versal, -en, -er, -erne"
    ],
    keywords: ["computer science"]
  },
  {
    word: "valid",
    type: "adj.",
    translations: ["gyldig, -t, -t"],
    keywords: ["computer science"]
  },
  {
    word: "validation",
    type: "sb.",
    translations: ["validering, -en, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    word: "vector",
    type: "sb.",
    translations: ["vektor, -en, -er, -erne"],
    keywords: ["computer science", "mathematics", "software engineering"],
    phrases: [
      ["the element is inserted into a vector", "elementet indsættes i en ubegrænset række"]
    ]
  },
  {
    word: "verification",
    type: "sb.",
    translations: ["verifikation, -en, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    word: "vertex, vertice",
    type: "sb.",
    note: "see also \"node\"",
    translations: [
      "hjørne, -t, -r, -rne",
      "punkt, -et, -er, -erne"
    ],
    keywords: ["computer science"]
  },
  {
    word: "weight",
    type: "sb.",
    translations: ["vægt, -en, -e, -ene"],
    keywords: ["computer science"]
  },
  {
    word: "weighted",
    type: "adj.",
    translations: ["væg|tet, -tet, -tede"],
    keywords: ["computer science"]
  },
  {
    word: "wide",
    type: "adj.",
    translations: ["bred, -t, -e"],
    keywords: ["computer science"]
  },
  {
    word: "width",
    type: "sb.",
    translations: ["bredde, -n, -r, -rne"],
    keywords: ["computer science"]
  },
  {
    word: "word",
    type: "sb.",
    translations: ["ord, -et, -, -ene"],
    keywords: ["computer science"],
    phrases: [
      ["a machine word is often 1 byte", "et maskinord er ofte 1 byte stor"]
    ]
  },
  {
    word: "worst-case",
    type: "adj.",
    translations: ["værst tænkelig, -t, -e"],
    keywords: ["computer science"],
    phrases: [
      ["The worst case running time is O(n²)", "Den værst tænkelige kørseltsid er O(n²)"]
    ]
  },
  {
    word: "xor",
    type: "adv.",
    note: "also \"exclusive or\"",
    translations: ["enten-eller", "eksklusivt eller"],
    keywords: ["computer science"]
  },
  {
    word: "xi",
    note: "Ξ ξ",
    translations: ["xi"],
    keywords: ["greek alphabet"]
  },
  {
    word: "zeta",
    note: "Ζ ζ",
    translations: ["zeta"],
    keywords: ["greek alphabet"]
  },
];
